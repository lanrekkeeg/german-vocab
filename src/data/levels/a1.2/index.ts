import { a1_2_Vocabulary } from './vocabulary';
import { a1_2_ListeningContent } from './listeningContent';
import { a1_2_Grammar } from './grammar';
import { a1_2_Tests } from './selfTest';
import { A1_2_ALL_SECTIONS } from './vocabulary';
// import { a1_2_Sentences } from './sentences'; // <-- Import the new sentence data
import { a1_2_Sentences, A1_2_SENTENCE_SECTIONS } from './sentences';

export const a1_2_Data = {
    vocabulary: a1_2_Vocabulary,
    allSections: A1_2_ALL_SECTIONS,
    listeningContent: a1_2_ListeningContent,
    grammar: a1_2_Grammar,
    selfTest: a1_2_Tests,
    sentences: a1_2_Sentences, // <-- Add the new sentences to the data structure
    sentenceSections: A1_2_SENTENCE_SECTIONS
};