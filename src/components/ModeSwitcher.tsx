// src/components/ModeSwitcher.tsx
import React from 'react';
import { BookOpen, BookText,Ear, BrainCircuit, CheckSquare } from 'lucide-react';
import { LanguageStrings } from '../types';

interface ModeSwitcherProps {
    mode: string;
    setMode: (mode: string) => void;
    t: LanguageStrings;
}

export const ModeSwitcher = React.memo(({ mode, setMode, t }: ModeSwitcherProps) => (
  <div className="flex justify-center mb-6">
    <div className="flex flex-wrap justify-center p-1 bg-gray-200 rounded-xl gap-1">
      <button
        onClick={() => setMode('flashcards')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'flashcards' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'}`}
      >
        <BookOpen size={20} /> {t.flashcards}
      </button>
      
       <button
        onClick={() => setMode('grammarPractice')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'grammarPractice' ? 'bg-white text-purple-600 shadow-md' : 'text-gray-600'}`}
      >
        <BrainCircuit size={20} /> {t.grammarPractice}
      </button>
      
        <button
        onClick={() => setMode('sentencePractice')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'sentencePractice' ? 'bg-white text-orange-600 shadow-md' : 'text-gray-600'}`}
      >
        <BookText size={20} /> {t.sentencePractice}
      </button>
      
      <button
        onClick={() => setMode('listeningPractice')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'listeningPractice' ? 'bg-white text-green-600 shadow-md' : 'text-gray-600'}`}
      >
        <Ear size={20} /> {t.listeningPractice}
      </button>
     
      
    
      
      
      <button
        onClick={() => setMode('selfTest')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'selfTest' ? 'bg-white text-red-600 shadow-md' : 'text-gray-600'}`}
      >
        <CheckSquare size={20} /> {t.selfTest}
      </button>
    </div>
  </div>
));