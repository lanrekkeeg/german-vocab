// src/components/flashcards/FlashcardMode.tsx
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Menu, BookOpen } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';
import { languages } from '../../data/languages';
import { Card } from '../../types';
import { MobileSidebar } from '../MobileSidebar';
import { SectionSelector } from './SectionSelector';
import { Flashcard } from './Flashcard';
import { CardControls } from './CardControls';
import { LanguageStrings } from '../../types'; // Make sure this import exists or add it

// These components can be defined here or imported if they are complex
const ProgressBar = React.memo(({ current, total }: { current: number, total: number }) => (
    <div className="mt-6">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full transition-all duration-300" style={{ width: total > 0 ? `${(current / total) * 100}%` : '0%' }}/>
      </div>
    </div>
));

const StudyTips = React.memo(({ t }: { t: LanguageStrings }) => (
    <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <h3 className="font-semibold text-yellow-800 mb-2">{t.studyTips}:</h3>
      <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
        <li>{t.tip1}</li> <li>{t.tip2}</li> <li>{t.tip3}</li> <li>{t.tip4}</li>
      </ul>
    </div>
));

export const FlashcardMode = () => {
  const { levelData, language } = useAppContext();
  const t = languages[language];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showGermanFirst, setShowGermanFirst] = useState(true);
  const [selectedSections, setSelectedSections] = useState([1]);
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    return () => { if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; } };
  }, []);
  
  const filteredCards = useMemo(() => {
    if (!levelData) return [];
    return selectedSections.flatMap(section => levelData.vocabulary[section] || []);
  }, [selectedSections, levelData]);

  useEffect(() => {
    setShuffledCards([...filteredCards]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [filteredCards]);
  
  const nextCard = useCallback(() => {
    if (shuffledCards.length === 0) return;
    setCurrentCardIndex(prev => (prev + 1) % shuffledCards.length);
    setIsFlipped(false);
  }, [shuffledCards.length]);

  const prevCard = useCallback(() => {
    if (shuffledCards.length === 0) return;
    setCurrentCardIndex(prev => (prev - 1 + shuffledCards.length) % shuffledCards.length);
    setIsFlipped(false);
  }, [shuffledCards.length]);

  const shuffleCards = useCallback(() => { setShuffledCards(prev => [...prev].sort(() => Math.random() - 0.5)); }, []);
  const resetCards = useCallback(() => { setShuffledCards([...filteredCards]); }, [filteredCards]);

  const toggleSection = useCallback((section: number) => {
    setSelectedSections(prev =>
      prev.includes(section) ? prev.length > 1 ? prev.filter(s => s !== section) : prev : [...prev, section].sort((a, b) => a - b)
    );
    setIsSidebarOpen(false);
  }, []);

  const selectAllSections = useCallback(() => {
    if (!levelData) return;
    setSelectedSections(levelData.allSections);
    setIsSidebarOpen(false);
  }, [levelData]);

  const currentFlashcard = shuffledCards[currentCardIndex];

  const handlePlayAudio = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    const audio = audioRef.current;
    const audioSrc = currentFlashcard?.audioSrc;
    if (!audio || !audioSrc) return;
    if (audio.src.endsWith(audioSrc)) {
      audio.currentTime = 0;
      audio.play().catch(e => console.error("Error playing audio:", e));
    } else {
      audio.src = audioSrc;
      audio.play().catch(e => console.error("Error playing audio:", e));
    }
  }, [currentFlashcard]);

  const frontText = showGermanFirst ? currentFlashcard?.german : currentFlashcard?.translations[language];
  const backText = showGermanFirst ? currentFlashcard?.translations[language] : currentFlashcard?.german;

  const sidebarContent = levelData ? (
    <SectionSelector 
        t={t} 
        selectedSections={selectedSections} 
        allSectionNumbers={levelData.allSections}
        onToggle={toggleSection} 
        onSelectAll={selectAllSections} 
    />
  ) : null;
  
  if (!levelData) return <div>Loading level data...</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-blue-600 transition-colors">
        <Menu size={24} />
      </button>
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>{sidebarContent}</MobileSidebar>
      <div className="hidden lg:block w-full lg:w-1/3">{sidebarContent}</div>
      <main className="w-full lg:w-2/3">
        {!currentFlashcard ? (
          <div className="text-center p-10 bg-white rounded-xl shadow-lg h-full flex flex-col justify-center items-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Section</h2>
            <p className="text-gray-600">Please choose a vocabulary section to start learning.</p>
            <button onClick={() => setIsSidebarOpen(true)} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold lg:hidden">
              Choose Sections
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">{t.currentCard} {currentCardIndex + 1} {t.of} {shuffledCards.length}</span>
                <button onClick={() => { setShowGermanFirst(p => !p); setIsFlipped(false); }} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-semibold">
                  {t.startWith}: {showGermanFirst ? 'Deutsch' : t.name}
                </button>
              </div>
              <Flashcard isFlipped={isFlipped} onFlip={() => setIsFlipped(p => !p)} frontText={frontText || ''} backText={backText || ''} t={t} audioSrc={showGermanFirst ? currentFlashcard?.audioSrc : undefined} onPlayAudio={handlePlayAudio} />
              <CardControls t={t} onPrev={prevCard} onNext={nextCard} onShuffle={shuffleCards} onReset={resetCards} />
              <ProgressBar current={currentCardIndex + 1} total={shuffledCards.length} />
            </div>
            <StudyTips t={t} />
          </>
        )}
      </main>
    </div>
  );
};