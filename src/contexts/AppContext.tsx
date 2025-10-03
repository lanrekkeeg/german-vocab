// src/contexts/AppContext.tsx
import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { getLevelData, availableLevels, LevelData } from '../data';
import { LanguageKey } from '../types/index';

interface AppContextType {
    level: string;
    setLevel: (level: string) => void;
    availableLevels: string[];
    levelData: LevelData | null;
    language: LanguageKey;
    setLanguage: (lang: LanguageKey) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [level, setLevel] = useState<string>('A1.2');
    const [language, setLanguage] = useState<LanguageKey>('english');

    const levelData = useMemo(() => getLevelData(level), [level]);

    const value = {
        level,
        setLevel,
        availableLevels,
        levelData,
        language,
        setLanguage,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};