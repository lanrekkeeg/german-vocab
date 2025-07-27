import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BookText } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';
import { languages } from '../../data/languages';
import { Card, LanguageStrings } from '../../types';
import { Flashcard } from '../flashcards/Flashcard';
import { CardControls } from '../flashcards/CardControls';

// A simple, reusable SectionSelector component. You might already have this from your vocabulary feature.
// If you have a shared one, you can import it instead.
const SectionSelector = ({
    t,
    allSections,
    selectedSections,
    onToggleSection,
    onSelectAll,
}: {
    t: LanguageStrings;
    allSections: number[];
    selectedSections: number[];
    onToggleSection: (section: number) => void;
    onSelectAll: () => void;
}) => (
    <div className="p-4 bg-gray-50 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-700">{t.selectSections}</h3>
            <button
                onClick={onSelectAll}
                className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
                {t.allSections}
            </button>
        </div>
        <div className="flex flex-wrap gap-2">
            {allSections.map(section => (
                <button
                    key={section}
                    onClick={() => onToggleSection(section)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                        selectedSections.includes(section)
                            ? 'bg-indigo-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                >
                    {`${t.sections[section] || `Section ${section}`}`}
                </button>
            ))}
        </div>
    </div>
);


const ProgressBar = React.memo(({ current, total }: { current: number; total: number }) => (
    <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: total > 0 ? `${(current / total) * 100}%` : '0%' }}
            />
        </div>
    </div>
));

export const SentencePracticeMode = () => {
    const { levelData, language } = useAppContext();
    const t = languages[language];

    // --- NEW: Get data and sections from levelData ---
    const sentenceDataBySection = levelData?.sentences || {};
    const allSentenceSections = Object.keys(sentenceDataBySection).map(Number);

    // --- NEW: State for managing selected sections ---
    const [selectedSections, setSelectedSections] = useState<number[]>([]);

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showGermanFirst, setShowGermanFirst] = useState(true);
    const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio();
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // --- UPDATED: This effect now builds the card list from selected sections ---
    useEffect(() => {
        const activeCards = selectedSections.flatMap(section => sentenceDataBySection[section] || []);
        setShuffledCards([...activeCards].sort(() => Math.random() - 0.5));
        setCurrentCardIndex(0);
        setIsFlipped(false);
    }, [sentenceDataBySection, selectedSections]);

    // --- NEW: This effect resets section selection when the level (and thus allSentenceSections) changes ---
    useEffect(() => {
        setSelectedSections(allSentenceSections);
    }, [allSentenceSections.join(',')]);

    // --- NEW: Handlers for section selection ---
    const handleSelectAll = useCallback(() => {
        setSelectedSections(allSentenceSections);
    }, [allSentenceSections]);

    const toggleSection = useCallback((section: number) => {
        setSelectedSections(prev =>
            prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
        );
    }, []);

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

    const shuffleCards = useCallback(() => {
        setShuffledCards(prev => [...prev].sort(() => Math.random() - 0.5));
        setCurrentCardIndex(0);
        setIsFlipped(false);
    }, []);

    const resetCards = useCallback(() => {
        const activeCards = selectedSections.flatMap(section => sentenceDataBySection[section] || []);
        setShuffledCards([...activeCards]); // Just reset order, don't re-shuffle
        setCurrentCardIndex(0);
        setIsFlipped(false);
    }, [sentenceDataBySection, selectedSections]);

    const currentFlashcard = shuffledCards[currentCardIndex];

    const handlePlayAudio = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
        const audio = audioRef.current;
        const audioSrc = currentFlashcard?.audioSrc;
        if (!audio || !audioSrc) return;
        
        // Ensure the audio source is correct before playing
        if (!audio.src.endsWith(audioSrc)) {
            audio.src = audioSrc;
        }

        audio.currentTime = 0;
        audio.play().catch(e => console.error("Error playing audio:", e));
    }, [currentFlashcard]);

    // --- UPDATED: Check for available sections instead of a flat array ---
    if (!levelData || allSentenceSections.length === 0) {
        return (
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <BookText size={48} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700">No Sentence Content</h2>
                <p className="text-gray-500">There is no sentence practice content available for this level.</p>
            </div>
        );
    }

    const frontText = showGermanFirst ? currentFlashcard?.german : currentFlashcard?.translations[language];
    const backText = showGermanFirst ? currentFlashcard?.translations[language] : currentFlashcard?.german;

    return (
        <div className="max-w-3xl mx-auto">
            {/* --- NEW: Add the SectionSelector UI component --- */}
            <SectionSelector
                t={t}
                allSections={allSentenceSections}
                selectedSections={selectedSections}
                onToggleSection={toggleSection}
                onSelectAll={handleSelectAll}
            />

            <div className="mt-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">
                        {shuffledCards.length > 0
                            ? `${t.currentCard} ${currentCardIndex + 1} ${t.of} ${shuffledCards.length}`
                            : 'Please select a section to begin.'}
                    </span>
                    <button
                        onClick={() => {
                            setShowGermanFirst(p => !p);
                            setIsFlipped(false);
                        }}
                        className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-semibold"
                    >
                        {t.startWith}: {showGermanFirst ? 'Deutsch' : t.name}
                    </button>
                </div>

                {/* --- UPDATED: Conditionally render Flashcard or a prompt message --- */}
                {currentFlashcard ? (
                    <>
                        <Flashcard
                            isFlipped={isFlipped}
                            onFlip={() => setIsFlipped(p => !p)}
                            frontText={frontText || ''}
                            backText={backText || ''}
                            t={t}
                            audioSrc={showGermanFirst ? currentFlashcard?.audioSrc : undefined}
                            onPlayAudio={handlePlayAudio}
                        />
                        <CardControls t={t} onPrev={prevCard} onNext={nextCard} onShuffle={shuffleCards} onReset={resetCards} />
                        <ProgressBar current={currentCardIndex + 1} total={shuffledCards.length} />
                    </>
                ) : (
                    <div className="flex items-center justify-center h-64 text-gray-500 bg-gray-50 rounded-lg">
                        <p>Select one or more sections to start practicing.</p>
                    </div>
                )}
            </div>
        </div>
    );
};