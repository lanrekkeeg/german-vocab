// src/components/flashcards/SectionSelector.tsx
import React from 'react';
import { LanguageStrings } from '../../types';

interface SectionSelectorProps {
  t: LanguageStrings;
  selectedSections: number[];
  allSectionNumbers: number[];
  onToggle: (section: number) => void;
  onSelectAll: () => void;
  sectionNames?: { [key: number]: string };
}

export const SectionSelector = React.memo(({ t, selectedSections, allSectionNumbers, onToggle, onSelectAll, sectionNames }: SectionSelectorProps) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h3 className="text-xl font-bold mb-4">{t.selectSections}</h3>
    <div className="flex flex-col gap-2 mb-4">
      {allSectionNumbers.map(section => (
        <button
          key={section}
          onClick={() => onToggle(section)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
            selectedSections.includes(section) ? 'bg-green-500 text-white shadow-sm' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {section}: {sectionNames?.[section] || t.sections[section] || `Section ${section}`}
        </button>
      ))}
    </div>
    <button onClick={onSelectAll} className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold">
      {t.allSections}
    </button>
  </div>
));