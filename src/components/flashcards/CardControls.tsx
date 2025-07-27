// src/components/flashcards/CardControls.tsx
import React from 'react';
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw } from 'lucide-react';
import { LanguageStrings } from '../../types';

interface CardControlsProps {
    t: LanguageStrings;
    onPrev: () => void;
    onNext: () => void;
    onShuffle: () => void;
    onReset: () => void;
}

export const CardControls = React.memo(({ t, onPrev, onNext, onShuffle, onReset }: CardControlsProps) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-6">
    <div className="flex gap-4">
      <button onClick={onPrev} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 sm:w-28">
        <ChevronLeft size={20} /> {t.previous}
      </button>
      <button onClick={onNext} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 sm:w-28">
        {t.next} <ChevronRight size={20} />
      </button>
    </div>
    <div className="flex gap-4">
      <button onClick={onShuffle} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-purple-500 hover:bg-purple-600 sm:w-28">
        <Shuffle size={16} /> {t.shuffle}
      </button>
      <button onClick={onReset} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-gray-500 hover:bg-gray-600 sm:w-28">
        <RotateCcw size={16} /> {t.reset}
      </button>
    </div>
  </div>
));