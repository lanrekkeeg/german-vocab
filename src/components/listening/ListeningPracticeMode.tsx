// src/components/listening/ListeningPracticeMode.tsx
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Menu, User, Users, CheckCircle2, XCircle, Ear } from 'lucide-react'; // <-- Add Ear here
import { useAppContext } from '../../hooks/useAppContext';
import { languages } from '../../data/languages';
import { Blank } from '../../types';
import { MobileSidebar } from '../MobileSidebar';
import { AudioControlBar } from './AudioControlBar';
import { VocabularyList } from './VocabularyList';

export const ListeningPracticeMode = () => {
    const { levelData, language } = useAppContext();
    const t = languages[language];
    
    // Check if levelData and its listeningContent exist
const listeningContentData = useMemo(() => levelData?.listeningContent || [], [levelData]);
    const [selectedContentId, setSelectedContentId] = useState<number | null>(listeningContentData.length > 0 ? listeningContentData[0].id : null);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [results, setResults] = useState<Record<number, 'correct' | 'incorrect' | null>>({});
    const [showAnswers, setShowAnswers] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVocabVisible, setIsVocabVisible] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    
    const audioRef = useRef(new Audio());
    const mainContentRef = useRef<HTMLElement>(null);
    const wasPlayingRef = useRef(false); // NEW: Ref to track if audio was playing before a change

    const selectedContent = useMemo(() => listeningContentData.find(p => p.id === selectedContentId), [selectedContentId, listeningContentData]);
    const blanks = useMemo(() => selectedContent?.parts.filter(p => typeof p === 'object' && 'answer' in p) as Blank[] || [], [selectedContent]);

    useEffect(() => {
        // Handle case where data loads after initial render
        if (!selectedContentId && listeningContentData.length > 0) {
            setSelectedContentId(listeningContentData[0].id);
        }
    }, [listeningContentData, selectedContentId]);

    useEffect(() => {
        if (!selectedContent) return;

        const audio = audioRef.current;
        wasPlayingRef.current = !audio.paused; 

        audio.pause();
        audio.src = selectedContent.audioSrc;

        const setAudioData = () => { setDuration(audio.duration); setCurrentTime(audio.currentTime); };
        const setAudioTime = () => setCurrentTime(audio.currentTime);
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => { setIsPlaying(false) };
        const handleCanPlay = () => {
            // If the audio was playing before we switched, play the new track automatically
            if (wasPlayingRef.current) {
                audio.play().catch(error => console.error("Error auto-playing audio:", error));
            }
        };
        audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('canplay', handleCanPlay); // Listen for this new event

        return () => {
        //   audio.pause();
          audio.removeEventListener('loadedmetadata', setAudioData);
          audio.removeEventListener('timeupdate', setAudioTime);
          audio.removeEventListener('play', handlePlay);
          audio.removeEventListener('pause', handlePause);
          audio.removeEventListener('ended', handleEnded);
          audio.removeEventListener('canplay', handleCanPlay); // Clean up the new event listener

        };
    }, [selectedContent]);

    const resetState = useCallback(() => {
        const initialAnswers: Record<number, string> = {};
        blanks.forEach((_, index) => { initialAnswers[index] = ''; });
        setUserAnswers(initialAnswers);
        setResults({});
        setShowAnswers(false);
        setIsVocabVisible(false);
        if (audioRef.current) {
            setCurrentTime(0);
            //audioRef.current.currentTime = 0;
            //audioRef.current.pause();
        }
        if (mainContentRef.current) mainContentRef.current.parentElement?.scrollTo(0, 0);
    }, [blanks]);
  
    useEffect(() => {
        resetState();
    }, [selectedContentId, resetState]);

    const handleAnswerChange = (index: number, value: string) => {
        setUserAnswers(prev => ({ ...prev, [index]: value }));
        if (results[index]) setResults(prev => ({ ...prev, [index]: null }));
    };
  
    const togglePlayPause = useCallback(() => {
        // This function now simply toggles the audio element's state.
        // The `isPlaying` state will update automatically via the 'play'/'pause' event listeners.
        const audio = audioRef.current;
        if (audio.paused) {
            audio.play().catch(error => console.error("Error playing audio:", error));
        } else {
            audio.pause();
        }
    }, []);

    const handleSeek = useCallback((time: number) => {
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    }, []);

    const checkAnswers = () => {
        const newResults: Record<number, 'correct' | 'incorrect' | null> = {};
        blanks.forEach((blank, index) => {
            const correctAnswer = blank.answer;
            const userAnswer = userAnswers[index] || '';
            newResults[index] = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ? 'correct' : 'incorrect';
        });
        setResults(newResults);
        setShowAnswers(false);
    };

    const handleContentSelect = (contentId: number) => {
        setSelectedContentId(contentId);
        setIsSidebarOpen(false);
    };

    let blankCounter = -1;

    const sidebarContent = (
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-6">
        <h3 className="text-xl font-bold mb-4">{t.selectPassage}</h3>
        <div className="flex flex-col gap-2">
          {listeningContentData.map(content => (
            <button
              key={content.id}
              onClick={() => handleContentSelect(content.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm flex items-center gap-3 ${
                selectedContentId === content.id ? 'bg-green-500 text-white shadow-md' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {content.type === 'dialogue' ? <Users size={16} className="opacity-70 flex-shrink-0"/> : <User size={16} className="opacity-70 flex-shrink-0"/>}
              <span className="flex-grow font-semibold">{content.title} <span className="font-normal opacity-80">({content.level})</span></span>
            </button>
          ))}
        </div>
      </div>
    );
    
    if (!selectedContent) {
        return (
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <Ear size={48} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700">No Listening Content</h2>
                <p className="text-gray-500">There is no listening content available for this level.</p>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-blue-600 transition-colors">
                <Menu size={24} />
            </button>
            <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>{sidebarContent}</MobileSidebar>
            <aside className="hidden lg:block w-full lg:w-1/3 lg:max-h-[80vh] lg:overflow-y-auto">{sidebarContent}</aside>
            <div className="w-full lg:w-2/3 lg:max-h-[80vh] overflow-y-auto rounded-xl shadow-lg bg-white">
                <main ref={mainContentRef} className="p-6 sm:p-8 relative">
                    <AudioControlBar t={t} title={selectedContent.title} isPlaying={isPlaying} togglePlayPause={togglePlayPause} duration={duration} currentTime={currentTime} onSeek={handleSeek} checkAnswers={checkAnswers} setShowAnswers={setShowAnswers} setIsVocabVisible={setIsVocabVisible} />
                    <p className="text-gray-600 mb-8 text-center">{t.passageInstructions}</p>
                    <div className="prose max-w-none text-xl leading-loose">
                        {selectedContent.parts.map((part, partIndex) => {
                            if (typeof part === 'object' && 'speaker' in part) {
                                return <div key={partIndex} className="mt-5 first:mt-0"><strong className="font-semibold text-gray-900 block mb-1">{part.speaker}:</strong></div>;
                            }
                            if (typeof part === 'object' && 'answer' in part) {
                                blankCounter++;
                                const blankIndex = blankCounter;
                                const result = results[blankIndex];
                                const isCorrect = result === 'correct';
                                const isIncorrect = result === 'incorrect';
                                const inputClassName = `mx-1.5 inline-block bg-gray-100 rounded-md border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-xl px-2 py-0.5
                                    ${isCorrect ? 'ring-2 ring-green-500 border-transparent' : ''} ${isIncorrect ? 'ring-2 ring-red-500 border-transparent' : ''} ${!result ? 'focus:ring-blue-500' : ''}`;
                                return (
                                    <span key={partIndex} className="inline-block relative align-baseline">
                                        <input type="text" value={showAnswers ? part.answer : (userAnswers[blankIndex] || '')} onChange={e => handleAnswerChange(blankIndex, e.target.value)} disabled={showAnswers} style={{ width: `${part.size * 1.1}ch`, minWidth: '5ch' }} className={inputClassName} aria-label={`Blank ${blankIndex + 1}`} />
                                        {isCorrect && <CheckCircle2 size={18} className="absolute -right-2 top-0 text-green-500 bg-white rounded-full"/>}
                                        {isIncorrect && <XCircle size={18} className="absolute -right-2 top-0 text-red-500 bg-white rounded-full"/>}
                                    </span>
                                );
                            }
                            return <span key={partIndex}>{part}</span>;
                        })}
                    </div>
                    {isVocabVisible && selectedContent.vocabulary && <div className="mt-10 pt-6 border-t"><VocabularyList vocab={selectedContent.vocabulary} currentLanguage={language} t={t} /></div>}
                </main>
            </div>
        </div>
    );
};