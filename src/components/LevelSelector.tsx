// src/components/LevelSelector.tsx
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

export const LevelSelector = () => {
  // Use our custom hook to get the current level, the function to set the level,
  // and the list of all available levels from the context.
  const { level, setLevel, availableLevels } = useAppContext();

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg mb-8 max-w-lg mx-auto">
      <h3 className="text-lg font-bold mb-3 text-center">Select Level</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {availableLevels.map(lvl => (
          <button
            key={lvl}
            onClick={() => setLevel(lvl)}
            className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${
              level === lvl
                ? 'bg-red-600 text-white shadow-sm' // Active level is highlighted in red
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300' // Inactive levels
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>
    </div>
  );
};