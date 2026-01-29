// src/components/wordsearch/WordSearchMode.tsx
import React, { useState, useMemo, useCallback } from 'react';
import { Search, ArrowLeft, Menu } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';
import { languages } from '../../data/languages';
import { WordSearchDifficulty, Card } from '../../types';
import { SectionSelector } from '../flashcards/SectionSelector';
import { MobileSidebar } from '../MobileSidebar';
import { WordSearchGame } from './WordSearchGame';

type GamePhase = 'setup' | 'playing' | 'results';

interface GameResults {
  timeElapsed: number;
  wordsFound: number;
  totalWords: number;
}

const DIFFICULTY_CONFIG = {
  easy: { wordCount: 8, gridSize: 10, directions: ['horizontal', 'vertical'] as const },
  medium: { wordCount: 12, gridSize: 12, directions: ['horizontal', 'vertical', 'diagonal-down', 'diagonal-up'] as const },
  hard: { wordCount: 16, gridSize: 15, directions: ['horizontal', 'vertical', 'diagonal-down', 'diagonal-up'] as const },
};

export const WordSearchMode: React.FC = () => {
  const { levelData, language } = useAppContext();
  const t = languages[language];

  const [selectedSections, setSelectedSections] = useState<number[]>([1]);
  const [difficulty, setDifficulty] = useState<WordSearchDifficulty>('medium');
  const [phase, setPhase] = useState<GamePhase>('setup');
  const [gameResults, setGameResults] = useState<GameResults | null>(null);
  const [gameKey, setGameKey] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Get vocabulary from selected sections
  const availableCards = useMemo(() => {
    if (!levelData?.vocabulary) return [];

    const cards: Card[] = [];
    selectedSections.forEach(section => {
      if (levelData.vocabulary[section]) {
        cards.push(...levelData.vocabulary[section]);
      }
    });

    // Filter cards with valid German words (at least 3 characters, no spaces)
    return cards.filter(card =>
      card.german &&
      card.german.length >= 3 &&
      !card.german.includes(' ') &&
      /^[a-zA-ZäöüÄÖÜß]+$/.test(card.german)
    );
  }, [levelData, selectedSections]);

  const handleStartGame = useCallback(() => {
    if (availableCards.length < DIFFICULTY_CONFIG[difficulty].wordCount) {
      alert(`Not enough words available. Please select more sections or lower difficulty.`);
      return;
    }
    setGameKey(prev => prev + 1);
    setPhase('playing');
  }, [availableCards.length, difficulty]);

  const handleGameComplete = useCallback((timeElapsed: number, wordsFound: number, totalWords: number) => {
    setGameResults({ timeElapsed, wordsFound, totalWords });
    setPhase('results');
  }, []);

  const handleBackToSetup = useCallback(() => {
    setPhase('setup');
    setGameResults(null);
  }, []);

  const handlePlayAgain = useCallback(() => {
    setGameKey(prev => prev + 1);
    setPhase('playing');
  }, []);

  const toggleSection = useCallback((section: number) => {
    setSelectedSections(prev =>
      prev.includes(section)
        ? prev.length > 1
          ? prev.filter(s => s !== section)
          : prev
        : [...prev, section].sort((a, b) => a - b)
    );
  }, []);

  const selectAllSections = useCallback(() => {
    if (!levelData) return;
    setSelectedSections(levelData.allSections);
  }, [levelData]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!levelData) {
    return (
      <div className="text-center p-8 text-red-600 font-semibold bg-red-50 rounded-lg">
        No data found for the selected level. Please select another level.
      </div>
    );
  }

  // Results Screen
  if (phase === 'results' && gameResults) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-emerald-600 mb-6">{t.congratulations}</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">{t.yourTime}</p>
              <p className="text-2xl font-bold text-emerald-700">{formatTime(gameResults.timeElapsed)}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">{t.wordsFoundCount}</p>
              <p className="text-2xl font-bold text-blue-700">{gameResults.wordsFound} / {gameResults.totalWords}</p>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleBackToSetup}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              <ArrowLeft size={20} />
              {t.backToMenu}
            </button>
            <button
              onClick={handlePlayAgain}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t.playAgain}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game Screen
  if (phase === 'playing') {
    const config = DIFFICULTY_CONFIG[difficulty];
    return (
      <WordSearchGame
        key={gameKey}
        cards={availableCards}
        wordCount={config.wordCount}
        gridSize={config.gridSize}
        directions={config.directions}
        language={language}
        t={t}
        onComplete={handleGameComplete}
        onBack={handleBackToSetup}
      />
    );
  }

  const sidebarContent = (
    <SectionSelector
      t={t}
      selectedSections={selectedSections}
      allSectionNumbers={levelData.allSections}
      onToggle={toggleSection}
      onSelectAll={selectAllSections}
      sectionNames={levelData.sectionNames?.[language]}
    />
  );

  // Setup Screen
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-emerald-600 transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        {sidebarContent}
      </MobileSidebar>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        {sidebarContent}
      </div>

      {/* Setup Panel */}
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 rounded-full">
              <Search className="text-emerald-600" size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{t.wordSearch}</h2>
              <p className="text-gray-600">{t.wordSearchDesc}</p>
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-3">{t.difficulty}</h3>
            <div className="grid grid-cols-3 gap-3">
              {(['easy', 'medium', 'hard'] as const).map((level) => {
                const config = DIFFICULTY_CONFIG[level];
                const isSelected = difficulty === level;
                return (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="font-bold text-lg mb-1">{t[level]}</div>
                    <div className="text-sm text-gray-500">
                      {config.wordCount} {t.wordCount}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {config.gridSize}x{config.gridSize}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Directions Info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-2">{t.directions}:</h4>
            <p className="text-gray-600">
              {difficulty === 'easy' && t.horizontalVertical}
              {difficulty === 'medium' && `${t.horizontalVertical} ${t.withDiagonals}`}
              {difficulty === 'hard' && t.allDirections}
            </p>
          </div>

          {/* Available Words Count */}
          <div className="mb-6 text-center text-gray-600">
            {availableCards.length} {t.wordCount} available
            {availableCards.length < DIFFICULTY_CONFIG[difficulty].wordCount && (
              <span className="text-red-500 ml-2">
                (Need at least {DIFFICULTY_CONFIG[difficulty].wordCount})
              </span>
            )}
          </div>

          {/* Start Button */}
          <button
            onClick={handleStartGame}
            disabled={availableCards.length < DIFFICULTY_CONFIG[difficulty].wordCount}
            className="w-full py-4 bg-emerald-600 text-white text-xl font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {t.startGame}
          </button>
        </div>
      </div>
    </div>
  );
};
