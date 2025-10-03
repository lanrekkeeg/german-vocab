// src/components/listening/AudioControlBar.tsx
import React, { Dispatch, SetStateAction } from 'react';
import { Play, Pause, CheckCircle2, Eye, BookOpen } from 'lucide-react';
import { LanguageStrings } from '../../types';
import { AudioProgressBar } from './AudioProgressBar';

interface AudioControlBarProps {
  t: LanguageStrings;
  title: string;
  isPlaying: boolean;
  togglePlayPause: () => void;
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
  checkAnswers: () => void;
  setShowAnswers: Dispatch<SetStateAction<boolean>>;
  setIsVocabVisible: Dispatch<SetStateAction<boolean>>;
}

export const AudioControlBar = React.memo(({
  t, title, isPlaying, togglePlayPause, duration, currentTime, onSeek,
  checkAnswers, setShowAnswers, setIsVocabVisible
}: AudioControlBarProps) => (
  <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm shadow-md p-4 rounded-xl mb-6">
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button onClick={togglePlayPause} className="flex-shrink-0 w-14 h-14 rounded-full text-white font-semibold flex items-center justify-center transition-colors bg-blue-500 hover:bg-blue-600 shadow-lg" aria-label={isPlaying ? t.pauseAudio : t.playAudio}>
        {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
      </button>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800 truncate" title={title}>{title}</h3>
          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={checkAnswers} className="p-2 rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors" title={t.checkAnswers}><CheckCircle2 size={20} /></button>
            <button onClick={() => setShowAnswers(prev => !prev)} className="p-2 rounded-full text-gray-600 hover:bg-yellow-100 hover:text-yellow-600 transition-colors" title={t.showAnswers}><Eye size={20} /></button>
            <button onClick={() => setIsVocabVisible(prev => !prev)} className="p-2 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors" title={t.keyVocabulary}><BookOpen size={20} /></button>
          </div>
        </div>
        <AudioProgressBar duration={duration} currentTime={currentTime} onSeek={onSeek} />
      </div>
    </div>
  </div>
));