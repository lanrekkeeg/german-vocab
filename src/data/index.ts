// src/data/index.ts
import { Card, GrammarTopic, LearningContent, Test } from '../types'; // Import the necessary types

import { a1_1_Data } from './levels/a1.1';
import { a1_2_Data } from './levels/a1.2';
import { a2_1_Data } from './levels/a2.1';
import { a2_2_Data } from './levels/a2.2';
import { b1_1_Data } from './levels/b1.1';
import { b1_2_Data } from './levels/b1.2';

export const availableLevels = ['A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2']; // Add new levels here

// This structure defines the shape of the data for any level
// export type LevelData = typeof a1_2_Data; 

export interface LevelData {
    vocabulary: Record<number, Card[]>;
    allSections: number[];
    listeningContent: LearningContent[];
    grammar: GrammarTopic[];
    selfTest: Test[];
    sentences?: Record<number, Card[]>;
    sentenceSections?: number[];
    sectionNames?: {
        [languageKey: string]: {
            [sectionNumber: number]: string;
        };
    };
}

const levelDataMap: { [key: string]: LevelData } = {
    'A1.1': a1_1_Data,
    'A1.2': a1_2_Data,
    'A2.1': a2_1_Data,
    'A2.2': a2_2_Data,
    'B1.1': b1_1_Data,
    'B1.2': b1_2_Data,
};

export const getLevelData = (level: string): LevelData | null => {
    return levelDataMap[level] || null;
};