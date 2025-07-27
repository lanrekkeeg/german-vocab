// src/components/flashcards/Flashcard.tsx
import React from 'react';
import { Ear } from 'lucide-react';
import { LanguageStrings } from '../../types';

interface FlashcardProps {
    isFlipped: boolean;
    onFlip: () => void;
    frontText: string;
    backText: string;
    t: LanguageStrings;
    audioSrc?: string;
    onPlayAudio: (e: React.MouseEvent) => void;
}

export const Flashcard = React.memo(({ isFlipped, onFlip, frontText, backText, t, audioSrc, onPlayAudio }: FlashcardProps) => (
  <div className="w-full h-64 perspective-1000">
    <div
      className="relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-3d"
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      onClick={onFlip}
    >
      <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-8 backface-hidden">
        {audioSrc && (
          <button onClick={onPlayAudio} className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors z-10" aria-label="Play audio">
            <Ear size={24} />
          </button>
        )}
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-800">{frontText}</p>
          <span className="mt-4 text-sm text-gray-500 block">{t.clickToFlip}</span>
        </div>
      </div>
      <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-8 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-700">{backText}</p>
          <span className="mt-4 text-sm text-gray-500 block">{t.clickToFlipBack}</span>
        </div>
      </div>
    </div>
  </div>
));