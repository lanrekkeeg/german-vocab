#!/bin/bash

# generate_prompt.sh
OUTPUT_FILE="project_prompt.txt"

# Clear or create the output file
echo "Here is my project structure and code contents:" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# First, print directory structure
echo "Project Directory Structure:" >> "$OUTPUT_FILE"
tree -I "node_modules|.git|vendor" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Function to detect and print file type header
print_file_header() {
    local file="$1"
    local extension="${file##*.}"
    
    echo "" >> "$OUTPUT_FILE"
    echo "// File: $file" >> "$OUTPUT_FILE"
    case "$extension" in
        go)
            echo "// Language: Go" >> "$OUTPUT_FILE"
            ;;
        json)
            echo "// Language: JSON" >> "$OUTPUT_FILE"
            ;;

    esac
    echo "" >> "$OUTPUT_FILE"
}

# Find and process all relevant files
find . -type f \
    -not -path "*/\.*" \
    -not -path "*/vendor/*" \
    -not -name "generate_prompt.sh" \
    -not -name "project_prompt.txt" \
    -not -name "*.wav" \
    -not -name "*.mp3" \
    | while read -r file; do
    
    # Skip binary files and specific extensions
    if file "$file" | grep -q "binary"; then
        continue
    fi
    
    print_file_header "$file"
    cat "$file" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    echo "--------------------------------" >> "$OUTPUT_FILE"
done

echo "" >> "$OUTPUT_FILE"