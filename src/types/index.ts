// src/types/index.ts


// src/types/index.ts

// ... (keep all existing types) ...

// =====================================================================
// SENTENCE PRACTICE TYPES (NEW)
// =====================================================================

// =====================================================================
// GENERAL & LANGUAGE-RELATED TYPES
// =====================================================================
export type Translations = {
    english: string;
    ukrainian: string;
    polish: string;
    albanian: string;
    german?: string;
    arabic?: string; // Optional for Arabic translations
    italian?: string; // Optional for Italian translations
};
export type SentenceCard = {
    german?: string;
    translations: Translations;
    audioSrc?: string;
};
// export type languages  = 'english' | 'ukrainian' | 'polish' | 'albanian' | 'german';
// This is the correct, consolidated LanguageKey type
export type LanguageKey = keyof Translations;

export type LanguageStrings = {
    name: string;
    selectSections: string;
    allSections: string;
    currentCard: string;
    of: string;
    clickToFlip: string;
    clickToFlipBack: string;
    previous: string;
    next: string;
    startWith: string;
    shuffle: string;
    reset: string;
    language: string;
    studyTips: string;
    tip1: string;
    tip2: string;
    tip3: string;
    tip4: string;
    sections: { [key: number]: string };
    flashcards: string;
    sentencePractice: string;
    listeningPractice: string;
    selectPassage: string;
    passageInstructions: string;
    playAudio: string;
    pauseAudio: string;
    checkAnswers: string;
    showAnswers: string;
    keyVocabulary: string;
    grammarPractice: string;
    selectTopic: string;
    checkAnswer: string;
    nextExercise: string;
    correct: string;
    incorrect: string;
    showCorrectAnswer: string;
    finalScore: string;
    practiceAgain: string;
    question: string;
    grammarWelcomeTitle: string;
    grammarWelcomeText: string;
    selfTest: string;
    pdfResources: string;
    arbeitsbuch: string;
    kursbuch: string;
    downloadPdf: string;
    articleRules: string;
    articleRulesDescription: string;
    practiceFlashcards: string;
    practiceMode: string;
    close: string;
    showFirst: string;
    translation: string;
};

// =====================================================================
// FLASHCARD & LISTENING CONTENT TYPES
// =====================================================================
export type Card = {
    german: string;
    translations: Translations;
    audioSrc?: string;
};

export type Blank = { answer: string; size: number };
export type SpeakerLabel = { speaker: string };
export type LearningContentPart = string | Blank | SpeakerLabel;


// A reusable type for multilingual text fields, as you defined it.
export interface MultilingualText {
  en: string;
  pl: string;
  uk: string;
  sq: string;
  de: string;
  ar?: string; // Arabic is optional, so it can be undefined
}

export type LearningContent = {
    id: number;
    title: string;
    level: string;
    type: 'passage' | 'dialogue';
    fullText: string;
    parts: LearningContentPart[];
    audioSrc: string;
    vocabulary: Card[];
};

// =====================================================================
// GRAMMAR-RELATED TYPES
// =====================================================================
export type QuestionKey = 'en' | 'pl' | 'uk' | 'sq' | 'de' | 'ar';

export type Exercise = {
    id: string;
    type: 'fill-in-the-blank' | 'multiple-choice' | 'sentence-scramble' | 'matching';
    question: MultilingualText; // Use the MultilingualText interface
    context: string | string[];
    options?: string[];
    correctAnswer: string | string[];
    hint?: string;
};

export type GrammarTopic = {
    id: string;
    moduleId: number;
    title: MultilingualText;       // Use the MultilingualText interface
    description: MultilingualText; // Use the MultilingualText interface
    exercises: Exercise[];
};

// =====================================================================
// SELF-TEST RELATED TYPES
// =====================================================================
export type TestLanguageKey = 'en' | 'de';
export type TestExerciseType = 'complete-text' | 'matching' | 'fill-in-the-blank' | 'multiple-choice' | 'sentence-scramble' | 'time-writing';

export interface TestQuestion {
    context: string | string[];
    options?: string[];
    correctAnswer: string | string[];
}

export interface TestExercise {
    id: string;
    type: TestExerciseType;
    title: string;
    instructions: Record<TestLanguageKey, string>;
    points: number;
    context?: string | string[];
    options?: string[];
    questions?: TestQuestion[];
    correctAnswer: string[];
}

export interface Test {
    id: string;
    title: string;
    level: string;
    totalPoints: number;
    timeLimit: number;
    exercises: TestExercise[];
}