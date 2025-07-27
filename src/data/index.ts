// src/data/index.ts
import { Card, GrammarTopic, LearningContent, Test } from '../types'; // Import the necessary types

import { a1_1_Data } from './levels/a1.1';
import { a1_2_Data } from './levels/a1.2';
// When you add A1.2, you'll import it here:
// import { a1_2_Data } from './levels/a1.2';

export const availableLevels = ['A1.1', 'A1.2']; // Add new levels here

// This structure defines the shape of the data for any level
// export type LevelData = typeof a1_2_Data; 

export interface LevelData {
    vocabulary: Record<number, Card[]>;
    allSections: number[];
    listeningContent: LearningContent[];
    grammar: GrammarTopic[];
    selfTest: Test[];
    sentences?: Record<number, Card[]>; // <-- Note: Changed this from Card[] to Record<number, Card[]>
    // sentenceSections?: number[];      // <-- Add this new optional property
}

const levelDataMap: { [key: string]: LevelData } = {
    'A1.1': a1_1_Data,
    'A1.2': a1_2_Data,
    // 'A1.2': a1_2_Data, // Add A1.2 data here when ready
};

export const getLevelData = (level: string): LevelData | null => {
    return levelDataMap[level] || null;
};