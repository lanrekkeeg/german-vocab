// src/App.tsx
import React, { useState } from 'react';

// 1. CONTEXT & HOOKS
import { AppProvider } from './contexts/AppContext';
import { useAppContext } from './hooks/useAppContext';

// 2. CHILD COMPONENTS (VIEWS & UI)
import { Header } from './components/Header';
import { LevelSelector } from './components/LevelSelector';
import { ModeSwitcher } from './components/ModeSwitcher';
import { FlashcardMode } from './components/flashcards/FlashcardMode';
import { ListeningPracticeMode } from './components/listening/ListeningPracticeMode';
import { GrammarPracticeMode } from './components/grammar/GrammerPracticeMode';
import { SelfTestMode } from './components/selftest/SelfTestMode';
import { SentencePracticeMode } from './components/sentences/SentencePracticeMode'; // <-- Import the new component

// 3. DATA & TYPES
import { languages } from './data/languages';
import { LanguageKey, TestLanguageKey } from './types';

// 4. STYLES
import './App.css';

// A small component to handle language selection, using the context
const LanguageSelector = () => {
    const { language, setLanguage } = useAppContext();
    const t = languages[language];
    
    return (
        <div className="p-4 bg-white rounded-xl shadow-lg mb-8 max-w-lg mx-auto">
            <h3 className="text-lg font-bold mb-3 text-center">{t.language}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {(Object.keys(languages) as LanguageKey[]).map(lang => (
                    <button key={lang} onClick={() => setLanguage(lang)}
                        className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${
                            language === lang ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}>
                        {languages[lang].name}
                    </button>
                ))}
            </div>
        </div>
    );
};

// This is the main view of the application, rendered inside the provider
const AppView = () => {
    const [mode, setMode] = useState('flashcards');
    const { levelData, language } = useAppContext();
    
    // If data for the selected level hasn't been loaded or doesn't exist, show a message.
    if (!levelData) {
        return (
            <div className="max-w-7xl mx-auto">
                <Header />
                <LevelSelector />
                <div className="text-center p-8 text-red-600 font-semibold bg-red-50 rounded-lg">
                    No data found for the selected level. Please select another level.
                </div>
            </div>
        );
    }
    
    const t = languages[language];
    // Determine the language key needed for the self-test component ('en' or 'de')
    const testLanguage: TestLanguageKey = (language === 'german' || language === 'english') ? language.substring(0, 2) as TestLanguageKey : 'en';

    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            <LevelSelector />
            <LanguageSelector />
            <ModeSwitcher mode={mode} setMode={setMode} t={t} />

            <div className="mt-8">
                {mode === 'flashcards' && <FlashcardMode />}
                {mode === 'sentencePractice' && <SentencePracticeMode />}

                {mode === 'listeningPractice' && <ListeningPracticeMode />}
                {mode === 'grammarPractice' && (
                    <GrammarPracticeMode 
                        topics={levelData.grammar} 
                        languageKey={language} 
                        t={t} 
                    />
                )}
                {mode === 'selfTest' && (
                    <SelfTestMode 
                        tests={levelData.selfTest} 
                        language={testLanguage} 
                    />
                )}
            </div>
        </div>
    );
};

// The top-level component that wraps everything in the AppProvider
const GermanLearningApp = () => {
    return (
        <AppProvider>
            <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
                <AppView />
            </div>
        </AppProvider>
    );
};

export default GermanLearningApp;