// src/components/GrammerPracticeMode.tsx

import React, { useState, useMemo, useCallback, useEffect } from 'react';
// Make sure this import points to your actual data file
import { GrammarTopic, Exercise } from '../data/grammarExercises'; 
import { CheckCircle2, XCircle, BrainCircuit, ChevronRight, RotateCcw, Award } from 'lucide-react';

type LanguageKey = 'english' | 'ukrainian' | 'polish' | 'albanian';
type QuestionKey = 'en' | 'pl' | 'uk' | 'sq';

// Define a general props type for all exercise components
interface ExerciseComponentProps {
    exercise: Exercise;
    userAnswer: string[];
    onAnswerChange: (index: number | null, value: string | string[]) => void;
    showResult: boolean;
    languageKey: LanguageKey;
}

interface GrammarLanguageStrings {
    selectTopic: string;
    checkAnswer: string;
    nextExercise: string;
    correct: string;
    incorrect: string;
    showCorrectAnswer: string;
    finalScore: string;
    practiceAgain: string;
    of: string;
    question: string;
    grammarWelcomeTitle: string;
    grammarWelcomeText: string;
    [key: string]: any;
}

// Helper map to connect language names to data keys
const languageMap: Record<LanguageKey, QuestionKey> = {
    english: 'en',
    polish: 'pl',
    ukrainian: 'uk',
    albanian: 'sq'
};

// --- SUB-COMPONENTS for specific exercise types ---

const FillInTheBlankExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswer, onAnswerChange, showResult, languageKey }) => {
    const blanks = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer : [exercise.correctAnswer];
    const sentenceParts = typeof exercise.context === 'string' ? exercise.context.split('______') : [];
    const questionKey = languageMap[languageKey];

    return (
        <div>
            <p className="text-lg mb-4 text-gray-700">{exercise.question[questionKey]}</p>
            <div className="text-xl sm:text-2xl leading-loose bg-purple-50 p-4 rounded-lg border border-purple-100">
                {sentenceParts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < blanks.length && (
                            <input
                                type="text"
                                value={userAnswer[index] || ''}
                                onChange={(e) => onAnswerChange(index, e.target.value)}
                                className="mx-2 inline-block w-36 bg-white rounded-md border border-gray-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 text-xl sm:text-2xl px-2 py-1"
                                disabled={showResult}
                                autoFocus={index === 0}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            {exercise.hint && !showResult && <p className="text-sm text-gray-500 mt-2">Hint: {exercise.hint}</p>}
        </div>
    );
};

const MultipleChoiceExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswer, onAnswerChange, showResult, languageKey }) => {
    const questionKey = languageMap[languageKey];
    return (
        <div>
            <p className="text-lg mb-4 text-gray-700">{exercise.question[questionKey]}</p>
            {exercise.context && <p className="text-xl sm:text-2xl mb-4 bg-purple-50 p-4 rounded-lg border border-purple-100">{exercise.context}</p>}
            <div className="flex flex-col gap-3">
                {exercise.options?.map((option, index) => {
                    const isSelected = userAnswer[0] === option;
                    const isCorrect = exercise.correctAnswer === option;
                    let buttonClass = 'w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-lg border-2';

                    if (showResult) {
                        if (isCorrect) {
                            buttonClass += ' bg-green-100 border-green-500 text-green-800 font-semibold';
                        } else if (isSelected && !isCorrect) {
                            buttonClass += ' bg-red-100 border-red-500 text-red-800';
                        } else {
                            buttonClass += ' bg-white border-gray-300 text-gray-600';
                        }
                    } else {
                        buttonClass += isSelected ? ' bg-purple-100 border-purple-500' : ' bg-white border-gray-300 hover:border-purple-400';
                    }

                    return (
                        <button key={index} onClick={() => onAnswerChange(0, option)} disabled={showResult} className={buttonClass}>
                            {option}
                        </button>
                    );
                })}
            </div>
            {exercise.hint && !showResult && <p className="text-sm text-gray-500 mt-2">Hint: {exercise.hint}</p>}
        </div>
    );
};

const SentenceScrambleExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswer, onAnswerChange, showResult, languageKey }) => {
    const [scrambledWords, setScrambledWords] = useState<string[]>([]);
    const questionKey = languageMap[languageKey];
    
    useEffect(() => {
        if (Array.isArray(exercise.context)) {
            setScrambledWords([...exercise.context].sort(() => Math.random() - 0.5));
        }
    }, [exercise]);

    const handleWordClick = (word: string) => {
        const newAnswer = userAnswer[0] ? `${userAnswer[0]} ${word}` : word;
        onAnswerChange(0, newAnswer);
    };

    const clearAnswer = () => {
        onAnswerChange(0, '');
    };

    return (
        <div>
            <p className="text-lg mb-4 text-gray-700">{exercise.question[questionKey]}</p>
            <div className="mb-4 p-4 min-h-[60px] bg-gray-100 border-2 border-dashed rounded-lg text-xl sm:text-2xl text-center flex items-center justify-center">
                {userAnswer[0] || <span className="text-gray-400">Click words below to build the sentence...</span>}
            </div>
            <div className="flex flex-wrap gap-3 mb-4 justify-center">
                {scrambledWords.map((word, index) => (
                    <button key={index} onClick={() => handleWordClick(word)} disabled={showResult}
                        className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-300 hover:bg-purple-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {word}
                    </button>
                ))}
            </div>
            <button onClick={clearAnswer} disabled={showResult}
                className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Clear
            </button>
        </div>
    );
};

const MatchingExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswer, onAnswerChange, showResult, languageKey }) => {
    const leftItems = useMemo(() => Array.isArray(exercise.context) ? exercise.context : [], [exercise.context]);
    const [rightItems, setRightItems] = useState<string[]>([]);
    const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
    const questionKey = languageMap[languageKey];

    useEffect(() => {
        if (Array.isArray(exercise.options)) {
            setRightItems([...exercise.options].sort(() => Math.random() - 0.5));
        }
    }, [exercise]);

    const handleLeftClick = (index: number) => {
        if (showResult) return;
        setSelectedLeft(index);
    };

    const handleRightClick = (item: string) => {
        if (selectedLeft === null || showResult) return;
        const newAnswers = [...(userAnswer || Array(leftItems.length).fill(null))];
        newAnswers[selectedLeft] = item;
        onAnswerChange(null, newAnswers);
        setSelectedLeft(null);
    };

    return (
        <div>
            <p className="text-lg mb-4 text-gray-700">{exercise.question[questionKey]}</p>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    {leftItems.map((item, index) => (
                        <button key={index} onClick={() => handleLeftClick(index)} disabled={showResult || !!userAnswer[index]}
                            className={`p-3 rounded-lg border-2 text-left transition-all ${selectedLeft === index ? 'bg-purple-200 border-purple-500 scale-105' : 'bg-gray-100 border-gray-300'} ${userAnswer[index] ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'hover:border-purple-400'}`}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {rightItems.map((item, index) => {
                        const matchedIndex = userAnswer?.indexOf(item);
                        const isMatched = matchedIndex > -1;
                        const isCorrect = showResult && Array.isArray(exercise.correctAnswer) && exercise.correctAnswer[matchedIndex] === item;
                        
                        let buttonClass = 'p-3 rounded-lg border-2 text-left transition-colors ';
                        if (isMatched) {
                            buttonClass += `cursor-not-allowed ${showResult && isCorrect ? 'bg-green-100 !border-green-400' : ''} ${showResult && !isCorrect ? 'bg-red-100 !border-red-400' : 'bg-purple-100 border-purple-400'}`;
                        } else {
                            buttonClass += 'bg-white border-gray-300 hover:border-purple-400';
                        }
                        
                        return (
                            <button key={index} onClick={() => handleRightClick(item)} disabled={isMatched || showResult} className={buttonClass}>
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const ExerciseEngine: React.FC<ExerciseComponentProps> = (props) => {
    switch (props.exercise.type) {
        case 'fill-in-the-blank': return <FillInTheBlankExercise {...props} />;
        case 'multiple-choice': return <MultipleChoiceExercise {...props} />;
        case 'sentence-scramble': return <SentenceScrambleExercise {...props} />;
        case 'matching': return <MatchingExercise {...props} />;
        default: return <p>Exercise type not supported yet.</p>;
    }
};

interface TopicSelectorProps {
    topics: GrammarTopic[];
    selectedTopicId: string | null;
    onSelectTopic: (id: string) => void;
    t: GrammarLanguageStrings;
}

const GrammarTopicSelector: React.FC<TopicSelectorProps> = ({ topics, selectedTopicId, onSelectTopic, t }) => (
    <aside className="w-full lg:w-1/3 lg:max-h-[80vh] lg:overflow-y-auto custom-scrollbar">
        <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t.selectTopic}</h3>
            <div className="flex flex-col gap-2">
                {topics.map(topic => (
                    <button
                        key={topic.id}
                        onClick={() => onSelectTopic(topic.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-semibold flex justify-between items-center ${
                            selectedTopicId === topic.id
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                    >
                        <span>{topic.title}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${ selectedTopicId === topic.id ? 'bg-white/20' : 'bg-gray-300/80'}`}>{topic.exercises.length}</span>
                    </button>
                ))}
            </div>
        </div>
    </aside>
);

interface FinalScoreScreenProps {
    score: number;
    total: number;
    onRestart: () => void;
    t: GrammarLanguageStrings;
}

const FinalScoreScreen: React.FC<FinalScoreScreenProps> = ({ score, total, onRestart, t }) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    return (
        <div className="text-center m-auto flex flex-col items-center p-4">
            <Award size={64} className="text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-purple-800 mb-2">{t.finalScore}</h2>
            <p className="text-6xl font-bold text-gray-800 mb-4">{score} / {total}</p>
            <div className="w-full max-w-xs bg-gray-200 rounded-full h-4 mb-4">
                <div className="bg-purple-600 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-xl text-gray-600 mb-6">{percentage}% Correct</p>
            <button onClick={onRestart} className="mt-6 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <RotateCcw size={20} /> {t.practiceAgain}
            </button>
        </div>
    );
}

interface GrammarPracticeModeProps {
    t: GrammarLanguageStrings;
    topics: GrammarTopic[];
    languageKey: LanguageKey;
}

export const GrammarPracticeMode = ({ t, topics, languageKey }: GrammarPracticeModeProps) => {
    const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);

    const selectedTopic = useMemo(() => topics.find(topic => topic.id === selectedTopicId), [topics, selectedTopicId]);
    const currentExercise = useMemo(() => selectedTopic?.exercises[currentExerciseIndex], [selectedTopic, currentExerciseIndex]);
    
    const isTopicFinished = selectedTopic && currentExerciseIndex >= selectedTopic.exercises.length;

    const resetTopic = useCallback(() => {
        setCurrentExerciseIndex(0);
        setUserAnswers([]);
        setShowResult(false);
        setIsCorrect(false);
        setScore(0);
    }, []);

    const handleSelectTopic = (topicId: string) => {
        setSelectedTopicId(topicId);
        resetTopic();
    };

    const handleAnswerChange = (index: number | null, value: string | string[]) => {
        if(Array.isArray(value)) {
            setUserAnswers(value);
        } else {
            const newAnswers = [...userAnswers];
            if (index !== null) {
                newAnswers[index] = value;
            }
            setUserAnswers(newAnswers);
        }
    };

    const checkAnswer = () => {
    if (!currentExercise) return;
    
    // Helper function to normalize text for comparison
    const normalizeText = (text: string): string => {
        return text
            .trim()
            .toLowerCase()
            .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
            .replace(/\s+([?.!,;:])/g, '$1')  // Remove spaces before punctuation
            .replace(/([?.!,;:])\s*$/, ' $1');  // Ensure space before final punctuation
    };
    
    let correct = false;
    
    if (currentExercise.type === 'matching' && Array.isArray(currentExercise.correctAnswer)) {
        const answersToCheck = Array.isArray(userAnswers) ? userAnswers : [];
        correct = currentExercise.correctAnswer.every((ans, i) => 
            normalizeText(ans || '') === normalizeText(answersToCheck[i] || '')
        );
    } else if (Array.isArray(currentExercise.correctAnswer)) {
        correct = currentExercise.correctAnswer.every((ans, i) => 
            normalizeText(ans || '') === normalizeText(userAnswers[i] || '')
        );
    } else {
        correct = normalizeText(currentExercise.correctAnswer || '') === normalizeText(userAnswers[0] || '');
    }

    setIsCorrect(correct);
    if(correct) {
        setScore(s => s + 1);
    }
    setShowResult(true);
};
    
    const nextExercise = () => {
        setShowResult(false);
        setUserAnswers([]);
        setCurrentExerciseIndex(i => i + 1);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <GrammarTopicSelector topics={topics} selectedTopicId={selectedTopicId} onSelectTopic={handleSelectTopic} t={t} />

            <main className="w-full lg:w-2/3">
                <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg min-h-[500px] flex flex-col">
                    {!selectedTopic ? (
                         <div className="text-center m-auto flex flex-col items-center">
                            <BrainCircuit className="w-16 h-16 text-purple-300 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.grammarWelcomeTitle}</h2>
                            <p className="text-gray-600">{t.grammarWelcomeText}</p>
                        </div>
                    ) : isTopicFinished ? (
                        <FinalScoreScreen score={score} total={selectedTopic.exercises.length} onRestart={resetTopic} t={t} />
                    ) : (
                        <>
                            <div className="flex-grow">
                                <div className='mb-6'>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h2 className="text-2xl font-bold text-purple-800">{selectedTopic.title}</h2>
                                        <p className="text-sm font-semibold text-gray-500">{t.question} {currentExerciseIndex + 1} {t.of} {selectedTopic.exercises.length}</p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currentExerciseIndex + 1) / selectedTopic.exercises.length) * 100}%` }}></div>
                                    </div>
                                </div>
                                
                                {currentExercise && (
                                    <ExerciseEngine 
                                        exercise={currentExercise} 
                                        userAnswer={userAnswers}
                                        onAnswerChange={handleAnswerChange}
                                        showResult={showResult}
                                        languageKey={languageKey}
                                    />
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                {showResult && currentExercise && (
                                    <div className={`p-4 rounded-lg mb-4 text-lg font-bold flex items-center gap-3 animate-fade-in ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {isCorrect ? <CheckCircle2 /> : <XCircle />}
                                        <span>{isCorrect ? t.correct : t.incorrect}</span>
                                        {!isCorrect && (
                                            <span className="ml-auto text-sm font-normal bg-white/50 px-2 py-1 rounded">
                                                Correct: <strong className='font-semibold'>{Array.isArray(currentExercise.correctAnswer) ? currentExercise.correctAnswer.join(', ') : currentExercise.correctAnswer}</strong>
                                            </span>
                                        )}
                                    </div>
                                )}
                                
                                {!showResult ? (
                                    <button onClick={checkAnswer} className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:bg-gray-400 disabled:shadow-none disabled:transform-none"
                                     disabled={userAnswers.length === 0 && currentExercise?.type !== 'matching'}>
                                        {t.checkAnswer}
                                    </button>
                                ) : (
                                    <button onClick={nextExercise} className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                        {t.nextExercise} <ChevronRight size={20} />
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};