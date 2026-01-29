// src/components/wordsearch/WordList.tsx
import React from 'react';
import { Check, Circle } from 'lucide-react';
import { PlacedWord, LanguageStrings } from '../../types';

interface WordListProps {
  words: PlacedWord[];
  t: LanguageStrings;
  originalWords: Map<string, string>; // Map of normalized word to original German word
}

export const WordList: React.FC<WordListProps> = ({ words, t, originalWords }) => {
  // Sort words: unfound first, then alphabetically by German word
  const sortedWords = [...words].sort((a, b) => {
    if (a.found !== b.found) return a.found ? 1 : -1;
    return a.word.localeCompare(b.word);
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-full">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        {t.wordsToFind}
        <span className="text-sm font-normal text-gray-500">
          ({words.filter((w) => w.found).length}/{words.length})
        </span>
      </h3>

      <div className="space-y-2 max-h-[60vh] overflow-y-auto">
        {sortedWords.map((word, index) => {
          // Get the original German word (with proper casing and umlauts)
          const originalGerman = originalWords.get(word.word) || word.word;

          return (
            <div
              key={`${word.word}-${index}`}
              className={`
                flex items-center gap-3 p-3 rounded-lg transition-all
                ${
                  word.found
                    ? 'bg-emerald-50 border border-emerald-200'
                    : 'bg-gray-50 border border-gray-200'
                }
              `}
            >
              {/* Found indicator */}
              <div
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                  ${word.found ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-400'}
                `}
              >
                {word.found ? <Check size={14} /> : <Circle size={14} />}
              </div>

              {/* Word info */}
              <div className="flex-1 min-w-0">
                {/* German word (always shown) */}
                <p
                  className={`
                    text-sm font-bold
                    ${word.found ? 'text-emerald-700 line-through' : 'text-gray-800'}
                  `}
                >
                  {originalGerman}
                </p>

                {/* Translation (shown as small hint) */}
                <p className={`text-xs mt-0.5 ${word.found ? 'text-emerald-600' : 'text-gray-500'}`}>
                  {word.translation}
                </p>
              </div>

              {/* Found badge */}
              {word.found && (
                <span className="text-xs bg-emerald-500 text-white px-2 py-1 rounded-full">
                  {t.foundWord}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
