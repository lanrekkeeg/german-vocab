// src/components/listening/VocabularyList.tsx
import React from 'react';
import { Card, LanguageKey, LanguageStrings } from '../../types';

interface VocabularyListProps {
  vocab: Card[];
  currentLanguage: LanguageKey;
  t: LanguageStrings;
}

export const VocabularyList = React.memo(({ vocab, currentLanguage, t }: VocabularyListProps) => (
  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <h4 className="font-bold text-blue-800 mb-3">{t.keyVocabulary}</h4>
    <ul className="space-y-2">
      {vocab.map((item, index) => (
        <li key={index} className="flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-700">{item.german}</span>
          <span className="text-blue-700 text-right">{item.translations[currentLanguage]}</span>
        </li>
      ))}
    </ul>
  </div>
));