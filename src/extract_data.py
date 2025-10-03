import os
import json
import re
import json5

# --- CONFIGURATION ---
PROJECT_ROOT = '.'
DATA_SOURCE_DIR = os.path.join(PROJECT_ROOT, 'data', 'levels')
OUTPUT_FILE = 'consolidated_data.json'

# --- HELPER FUNCTIONS ---

def sanitize_filename(text):
    """(FIXED) Mimics the sanitizeFilename function from your TypeScript code."""
    sanitized = re.sub(r'\s+', '_', text)
    sanitized = re.sub(r'[^a-zA-Z0-9_äöüÄÖÜß]', '', sanitized)
    return sanitized

def parse_js_object_string(js_string):
    """Safely converts a JS/TS object literal string into a Python object using json5."""
    if not js_string: return None
    
    def escape_template_literal(m):
        content = m.group(1).replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        return f'"{content}"'
    js_string = re.sub(r'`([\s\S]*?)`', escape_template_literal, js_string, flags=re.MULTILINE)

    try:
        return json5.loads(js_string)
    except Exception as e:
        print(f"Error decoding with json5: {e}")
        print(f"--- Problematic Snippet ---\n{js_string[:500]}\n---------------------------")
        return None

def extract_js_data_block(content, variable_name):
    """Reliably extracts a JS object/array by counting brackets."""
    search_str = f"export const {variable_name}"
    start_index = content.find(search_str)
    if start_index == -1:
        print(f"Warning: Could not find variable declaration for '{variable_name}'.")
        return None

    assignment_index = content.find('=', start_index)
    first_brace = content.find('{', assignment_index)
    first_bracket = content.find('[', assignment_index)

    if first_brace == -1 and first_bracket == -1: return None

    if first_brace != -1 and (first_bracket == -1 or first_brace < first_bracket):
        start_char, end_char, data_start_index = '{', '}', first_brace
    else:
        start_char, end_char, data_start_index = '[', ']', first_bracket
        
    level = 1
    for i in range(data_start_index + 1, len(content)):
        if content[i] == start_char: level += 1
        elif content[i] == end_char: level -= 1
        if level == 0:
            return content[data_start_index : i + 1]
            
    return None

def get_variable_name(file_path):
    """Constructs the expected variable name from the file path."""
    base_name = os.path.basename(file_path).replace('.ts', '')
    level_name_part = os.path.basename(os.path.dirname(file_path)).replace('.', '_')
    
    if base_name == 'selfTest':
        return f"{level_name_part}_Tests" # Special case for selfTest files
        
    capitalized_base_name = base_name[0].upper() + base_name[1:]
    return f"{level_name_part}_{capitalized_base_name}"

# --- PROCESSING FUNCTIONS ---

def process_vocabulary_or_sentences(file_path):
    """
    (FIXED) Correctly parses files using the `addAudioPaths` wrapper.
    """
    print(f"  -> Processing Vocabulary/Sentences: {os.path.basename(file_path)}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # **CRITICAL FIX**: This regex now correctly extracts ONLY the object inside the parentheses.
    match = re.search(r"addAudioPaths\s*\(([\s\S]*?)\);", content, re.DOTALL)
    if not match:
        print(f"Warning: Could not find 'addAudioPaths' call in {file_path}.")
        return {}
    
    data_str = match.group(1) # This is the object literal string we need to parse.
    data_obj = parse_js_object_string(data_str)
    if not data_obj: return {}

    # --- Audio Path Generation Logic ---
    processed_data = {}
    level_name = os.path.basename(os.path.dirname(file_path))
    is_sentences = 'sentences' in file_path

    for section_str, cards in data_obj.items():
        section = str(section_str)
        processed_cards = []
        for card in cards:
            if 'german' in card and isinstance(card['german'], str):
                base_filename = sanitize_filename(card['german']) # Fixed NameError
                audio_path = None
                
                if level_name == 'a1.1' and not is_sentences:
                    audio_path = os.path.join('audio', 'syntactic_output', f"{base_filename}.mp3")
                elif level_name == 'a1.2' and not is_sentences:
                    audio_path = os.path.join('audio', 'syntactic_output', 'a1.2', 'words', f"{base_filename}.mp3")
                elif level_name == 'a1.2' and is_sentences:
                    filename = f"section{section}_{base_filename}.mp3"
                    audio_path = os.path.join('audio', 'a1.2', 'sentences', f'section{section}', filename)

                if audio_path:
                    card['audioSrc'] = audio_path.replace('\\', '/')
            processed_cards.append(card)
        processed_data[section] = processed_cards
    return processed_data

def process_listening_content(file_path):
    """Parses listeningContent.ts, resolving audio imports."""
    print(f"  -> Processing Listening Content: {os.path.basename(file_path)}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    var_name_to_find = get_variable_name(file_path)
    data_str = extract_js_data_block(content, var_name_to_find)
    if not data_str: return []

    import_pattern = re.compile(r"import\s+(\w+)\s+from\s+'(.+?)';")
    for var_name, relative_path in import_pattern.findall(content):
        path_parts = relative_path.split('/')
        try:
            audio_index = path_parts.index('audio')
            public_path = '/'.join(path_parts[audio_index:])
            data_str = re.sub(r'\b' + re.escape(var_name) + r'\b', f'"{public_path}"', data_str)
        except ValueError:
            data_str = re.sub(r'\b' + re.escape(var_name) + r'\b', f'"{relative_path}"', data_str)
    return parse_js_object_string(data_str)

def process_generic_ts(file_path):
    """Parses generic .ts files like grammar.ts or selfTest.ts."""
    print(f"  -> Processing Generic TS: {os.path.basename(file_path)}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    var_name_to_find = get_variable_name(file_path)
    data_str = extract_js_data_block(content, var_name_to_find)
    if not data_str: return []
    return parse_js_object_string(data_str)

# --- MAIN EXECUTION ---
def main():
    all_data = {}
    print("Starting data extraction...")

    for level_name in sorted(os.listdir(DATA_SOURCE_DIR)):
        level_dir = os.path.join(DATA_SOURCE_DIR, level_name)
        if os.path.isdir(level_dir):
            print(f"\nProcessing Level: {level_name}")
            all_data[level_name] = {}
            
            for filename in sorted(os.listdir(level_dir)):
                file_path = os.path.join(level_dir, filename)
                if filename == 'vocabulary.ts':
                    all_data[level_name]['vocabulary'] = process_vocabulary_or_sentences(file_path)
                elif filename == 'sentences.ts':
                    all_data[level_name]['sentences'] = process_vocabulary_or_sentences(file_path)
                elif filename == 'listeningContent.ts':
                    all_data[level_name]['listeningContent'] = process_listening_content(file_path)
                elif filename == 'grammar.ts':
                    all_data[level_name]['grammar'] = process_generic_ts(file_path)
                elif filename == 'selfTest.ts':
                    all_data[level_name]['selfTest'] = process_generic_ts(file_path)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Data extraction complete. All data saved to '{OUTPUT_FILE}'")

if __name__ == '__main__':
    main()