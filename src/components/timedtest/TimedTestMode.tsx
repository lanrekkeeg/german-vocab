// src/components/timedtest/TimedTestMode.tsx
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Menu, BookOpen, Check, X, RotateCcw, Clock, Volume2, Eye } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';
import { languages } from '../../data/languages';
import { Card, LanguageStrings } from '../../types';
import { MobileSidebar } from '../MobileSidebar';
import { SectionSelector } from '../flashcards/SectionSelector';

// Progress Bar Component
const ProgressBar = React.memo(({ current, total, correct }: { current: number; total: number; correct: number }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  const correctPercentage = current > 0 ? (correct / current) * 100 : 0;

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{current} / {total}</span>
        <span className="text-green-600">{correct} correct ({correctPercentage.toFixed(0)}%)</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-cyan-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
});

// Delay Selector Component
const DelaySelector = React.memo(({
  delay,
  setDelay,
  t
}: {
  delay: number;
  setDelay: (d: number) => void;
  t: LanguageStrings;
}) => (
  <div className="flex items-center gap-2">
    <Clock size={18} className="text-cyan-600" />
    <span className="text-sm text-gray-600">{t.revealDelay}:</span>
    <select
      value={delay}
      onChange={(e) => setDelay(Number(e.target.value))}
      className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      <option value={1}>1 {t.seconds}</option>
      <option value={2}>2 {t.seconds}</option>
      <option value={3}>3 {t.seconds}</option>
      <option value={5}>5 {t.seconds}</option>
      <option value={10}>10 {t.seconds}</option>
    </select>
  </div>
));

// Results Screen Component
const ResultsScreen = React.memo(({
  correct,
  incorrect,
  total,
  missedCards,
  onRetryAll,
  onRetryMissed,
  t
}: {
  correct: number;
  incorrect: number;
  total: number;
  missedCards: Card[];
  onRetryAll: () => void;
  onRetryMissed: () => void;
  t: LanguageStrings;
}) => {
  const accuracy = total > 0 ? (correct / total) * 100 : 0;

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-100 flex items-center justify-center">
        <Check size={40} className="text-cyan-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.testComplete}</h2>
      <p className="text-gray-600 mb-6">{t.cardsReviewed}: {total}</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">{correct}</div>
          <div className="text-sm text-green-700">{t.gotIt}</div>
        </div>
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="text-3xl font-bold text-red-600">{incorrect}</div>
          <div className="text-sm text-red-700">{t.needsPractice}</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg text-gray-600 mb-2">{t.accuracy}</div>
        <div className="text-5xl font-bold text-cyan-600">{accuracy.toFixed(0)}%</div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onRetryAll}
          className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} /> {t.retry}
        </button>
        {missedCards.length > 0 && (
          <button
            onClick={onRetryMissed}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} /> {t.retryMissed} ({missedCards.length})
          </button>
        )}
      </div>
    </div>
  );
});

// Main Timed Test Mode Component
export const TimedTestMode = () => {
  const { levelData, language } = useAppContext();
  const t = languages[language];

  // State
  const [selectedSections, setSelectedSections] = useState([1]);
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [delay, setDelay] = useState(3);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestComplete, setIsTestComplete] = useState(false);

  // Results tracking
  const [results, setResults] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });
  const [missedCards, setMissedCards] = useState<Card[]>([]);

  // Audio ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Filter cards based on selected sections
  const filteredCards = useMemo(() => {
    if (!levelData) return [];
    return selectedSections.flatMap(section => levelData.vocabulary[section] || []);
  }, [selectedSections, levelData]);

  // Reset cards when filter changes
  useEffect(() => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setIsRevealed(false);
    setIsTestStarted(false);
    setIsTestComplete(false);
    setResults({ correct: 0, incorrect: 0 });
    setMissedCards([]);
  }, [filteredCards]);

  // Countdown timer effect
  useEffect(() => {
    if (!isTestStarted || isRevealed || isTestComplete) {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
      return;
    }

    setCountdown(delay);

    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setIsRevealed(true);
          if (countdownRef.current) {
            clearInterval(countdownRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, [isTestStarted, currentCardIndex, delay, isRevealed, isTestComplete]);

  // Section toggle handlers
  const toggleSection = useCallback((section: number) => {
    setSelectedSections(prev =>
      prev.includes(section)
        ? prev.length > 1 ? prev.filter(s => s !== section) : prev
        : [...prev, section].sort((a, b) => a - b)
    );
    setIsSidebarOpen(false);
  }, []);

  const selectAllSections = useCallback(() => {
    if (!levelData) return;
    setSelectedSections(levelData.allSections);
    setIsSidebarOpen(false);
  }, [levelData]);

  // Start test
  const startTest = useCallback(() => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setIsRevealed(false);
    setIsTestStarted(true);
    setIsTestComplete(false);
    setResults({ correct: 0, incorrect: 0 });
    setMissedCards([]);
  }, [filteredCards]);

  // Handle answer
  const handleAnswer = useCallback((gotIt: boolean) => {
    const currentCard = shuffledCards[currentCardIndex];

    setResults(prev => ({
      correct: gotIt ? prev.correct + 1 : prev.correct,
      incorrect: !gotIt ? prev.incorrect + 1 : prev.incorrect
    }));

    if (!gotIt && currentCard) {
      setMissedCards(prev => [...prev, currentCard]);
    }

    // Move to next card or complete test
    if (currentCardIndex + 1 >= shuffledCards.length) {
      setIsTestComplete(true);
    } else {
      setCurrentCardIndex(prev => prev + 1);
      setIsRevealed(false);
    }
  }, [currentCardIndex, shuffledCards]);

  // Retry handlers
  const retryAll = useCallback(() => {
    startTest();
  }, [startTest]);

  const retryMissed = useCallback(() => {
    const shuffled = [...missedCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setIsRevealed(false);
    setIsTestStarted(true);
    setIsTestComplete(false);
    setResults({ correct: 0, incorrect: 0 });
    setMissedCards([]);
  }, [missedCards]);

  // Play audio
  const handlePlayAudio = useCallback(() => {
    const audio = audioRef.current;
    const currentCard = shuffledCards[currentCardIndex];
    const audioSrc = currentCard?.audioSrc;

    if (!audio || !audioSrc) return;

    if (audio.src.endsWith(audioSrc)) {
      audio.currentTime = 0;
      audio.play().catch(e => console.error("Error playing audio:", e));
    } else {
      audio.src = audioSrc;
      audio.play().catch(e => console.error("Error playing audio:", e));
    }
  }, [shuffledCards, currentCardIndex]);

  // Force reveal
  const forceReveal = useCallback(() => {
    setIsRevealed(true);
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }
  }, []);

  const currentCard = shuffledCards[currentCardIndex];

  // Sidebar content
  const sidebarContent = levelData ? (
    <SectionSelector
      t={t}
      selectedSections={selectedSections}
      allSectionNumbers={levelData.allSections}
      onToggle={toggleSection}
      onSelectAll={selectAllSections}
      sectionNames={levelData.sectionNames?.[language]}
    />
  ) : null;

  if (!levelData) return <div>Loading level data...</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-cyan-500 text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-cyan-600 transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        {sidebarContent}
      </MobileSidebar>
      <div className="hidden lg:block w-full lg:w-1/3">{sidebarContent}</div>

      {/* Main content */}
      <main className="w-full lg:w-2/3">
        {/* No cards selected */}
        {shuffledCards.length === 0 ? (
          <div className="text-center p-10 bg-white rounded-xl shadow-lg h-full flex flex-col justify-center items-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Section</h2>
            <p className="text-gray-600">Please choose a vocabulary section to start the timed test.</p>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="mt-4 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold lg:hidden"
            >
              Choose Sections
            </button>
          </div>
        ) : isTestComplete ? (
          /* Results Screen */
          <ResultsScreen
            correct={results.correct}
            incorrect={results.incorrect}
            total={shuffledCards.length}
            missedCards={missedCards}
            onRetryAll={retryAll}
            onRetryMissed={retryMissed}
            t={t}
          />
        ) : !isTestStarted ? (
          /* Setup Screen */
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.timedTest}</h2>
            <p className="text-gray-600 mb-6">{t.timedTestDescription}</p>

            <div className="mb-6 p-4 bg-cyan-50 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-lg font-semibold text-cyan-800">
                    {shuffledCards.length} {t.flashcards}
                  </span>
                  <span className="text-cyan-600 ml-2">
                    ({selectedSections.length} {selectedSections.length === 1 ? 'section' : 'sections'})
                  </span>
                </div>
                <DelaySelector delay={delay} setDelay={setDelay} t={t} />
              </div>
            </div>

            <button
              onClick={startTest}
              className="w-full py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-bold text-lg flex items-center justify-center gap-2"
            >
              <Clock size={24} /> {t.startGame}
            </button>
          </div>
        ) : (
          /* Test Card */
          <div className="p-6 bg-white rounded-xl shadow-lg">
            {/* Header with countdown */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">
                {t.currentCard} {currentCardIndex + 1} {t.of} {shuffledCards.length}
              </span>
              {!isRevealed && (
                <div className="flex items-center gap-2">
                  <span className="text-cyan-600 font-semibold">
                    {t.revealing} {countdown}s
                  </span>
                  <button
                    onClick={forceReveal}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
                  >
                    <Eye size={16} /> {t.showAnswer}
                  </button>
                </div>
              )}
            </div>

            {/* Card Display */}
            <div className="min-h-[250px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl mb-6">
              {/* Question - User's language */}
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-2">{t.translation}</div>
                <div className="text-2xl font-bold text-gray-800">
                  {currentCard?.translations[language] || '—'}
                </div>
              </div>

              {/* Answer - German (revealed after delay) */}
              <div className={`text-center transition-all duration-300 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-sm text-cyan-600 mb-2">Deutsch</div>
                <div className="text-3xl font-bold text-cyan-700 flex items-center gap-3">
                  {currentCard?.german || '—'}
                  {isRevealed && currentCard?.audioSrc && (
                    <button
                      onClick={handlePlayAudio}
                      className="p-2 bg-cyan-100 rounded-full hover:bg-cyan-200 transition-colors"
                    >
                      <Volume2 size={24} className="text-cyan-600" />
                    </button>
                  )}
                </div>
              </div>

              {/* Countdown indicator */}
              {!isRevealed && (
                <div className="mt-6">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 transition-all duration-1000 ease-linear"
                      style={{ width: `${(countdown / delay) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Answer Buttons (only visible after reveal) */}
            {isRevealed && (
              <div className="flex gap-4">
                <button
                  onClick={() => handleAnswer(true)}
                  className="flex-1 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Check size={24} /> {t.gotIt}
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className="flex-1 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                >
                  <X size={24} /> {t.needsPractice}
                </button>
              </div>
            )}

            {/* Progress */}
            <ProgressBar
              current={currentCardIndex}
              total={shuffledCards.length}
              correct={results.correct}
            />
          </div>
        )}
      </main>
    </div>
  );
};
