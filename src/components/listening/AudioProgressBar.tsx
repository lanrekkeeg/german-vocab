// src/components/listening/AudioProgressBar.tsx
import React from 'react';

interface AudioProgressBarProps {
    duration: number;
    currentTime: number;
    onSeek: (time: number) => void;
}

export const AudioProgressBar = React.memo(({ duration, currentTime, onSeek }: AudioProgressBarProps) => {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const percentage = clickPosition / progressBar.offsetWidth;
    onSeek(duration * percentage);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const floorSeconds = Math.floor(seconds);
    const mins = Math.floor(floorSeconds / 60);
    const secs = floorSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex items-center gap-3 w-full">
      <span className="text-xs font-mono text-gray-500 w-10 text-right">{formatTime(currentTime)}</span>
      <div className="w-full bg-gray-200 rounded-full h-2 cursor-pointer group" onClick={handleSeek}>
        <div className="bg-blue-500 h-2 rounded-full relative" style={{ width: `${progress}%` }}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <span className="text-xs font-mono text-gray-500 w-10">{formatTime(duration)}</span>
    </div>
  );
});