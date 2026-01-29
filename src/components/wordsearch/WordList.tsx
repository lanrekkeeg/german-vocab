// src/components/wordsearch/WordList.tsx
import React from 'react';
import { Check, Circle } from 'lucide-react';
import { PlacedWord, LanguageStrings } from '../../types';

interface WordListProps {
  words: PlacedWord[];
  t: LanguageStrings;
}

export const WordList: React.FC<WordListProps> = ({ words, t }) => {
  // Sort words: unfound first, then by translation
  const sortedWords = [...words].sort((a, b) => {
    if (a.found !== b.found) return a.found ? 1 : -1;
    return a.translation.localeCompare(b.translation);
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
        {sortedWords.map((word, index) => (
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
              {/* Translation (hint) */}
              <p
                className={`
                  text-sm font-medium
                  ${word.found ? 'text-emerald-700' : 'text-gray-700'}
                `}
              >
                {word.translation}
              </p>

              {/* German word (shown when found) */}
              {word.found && (
                <p className="text-xs text-emerald-600 font-mono mt-0.5">
                  {word.word}
                </p>
              )}
            </div>

            {/* Found badge */}
            {word.found && (
              <span className="text-xs bg-emerald-500 text-white px-2 py-1 rounded-full">
                {t.foundWord}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
