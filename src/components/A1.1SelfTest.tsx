import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Check, X, Clock, FileText, ArrowRight, BookOpen, RotateCcw, Award } from 'lucide-react';

// =====================================================================
// 1. TYPESCRIPT DEFINITIONS for Test Data
// =====================================================================
export type TestLanguageKey = 'en' | 'de';
export type TestExerciseType = 'complete-text' | 'matching' | 'fill-in-the-blank' | 'multiple-choice' | 'sentence-scramble' | 'time-writing';

// Represents a single question within a grouped exercise
interface TestQuestion {
    context: string | string[];
    options?: string[];
    correctAnswer: string | string[];
}

// Represents a single exercise block within a test
interface TestExercise {
    id: string;
    type: TestExerciseType;
    title: string;
    instructions: Record<TestLanguageKey, string>;
    points: number;
    context?: string | string[]; // For single-context exercises like complete-text or matching
    options?: string[]; // For matching
    questions?: TestQuestion[]; // For grouped exercises
    correctAnswer: string[];
}

// Represents the entire test
export interface Test {
    id: string;
    title: string;
    level: string;
    totalPoints: number;
    timeLimit: number; // in minutes
    exercises: TestExercise[];
}

// =====================================================================
// 2. HELPER TYPES AND INTERFACES for the Component
// =====================================================================
type UserAnswers = {
    [exerciseId: string]: { [questionIndex: number]: string | string[] }
};

interface ExerciseComponentProps {
    exercise: TestExercise;
    userAnswers: UserAnswers[string];
    onAnswerChange: (exerciseId: string, questionIndex: number, value: string | string[]) => void;
    isFinished: boolean;
    language: TestLanguageKey;
}

// =====================================================================
// 3. SUB-COMPONENTS for specific exercise types
// =====================================================================

const normalizeAnswer = (answer: string): string => {
    return answer.trim().toLowerCase().replace(/[.,!?;]$/, '').trim();
};

// --- Complete Text Exercise ---
const CompleteTextExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished, language }) => {
    const textParts = (exercise.context as string).split('______');
    return (
        <div className="text-lg leading-relaxed bg-gray-50 p-4 rounded-lg">
            {textParts.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {index < textParts.length - 1 && (
                        <input
                            type="text"
                            value={(userAnswers?.[index] as string) || ''}
                            onChange={(e) => onAnswerChange(exercise.id, index, e.target.value)}
                            disabled={isFinished}
                            className={`mx-1 inline-block w-32 md:w-40 bg-white rounded-md border text-base px-2 py-1 transition-all
                                ${isFinished
                                    ? normalizeAnswer((userAnswers?.[index] as string) || '') === normalizeAnswer(exercise.correctAnswer[index])
                                        ? 'border-green-500 bg-green-50'
                                        : 'border-red-500 bg-red-50'
                                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                        />
                    )}
                </React.Fragment>
            ))}
            {isFinished && (
                 <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                    <strong>Correct Answers:</strong> {exercise.correctAnswer.join(', ')}
                </div>
            )}
        </div>
    );
};

// --- Matching Exercise ---
const MatchingExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished, language }) => {
    const leftItems = exercise.context as string[];
    const [rightItems, setRightItems] = useState<string[]>([]);
    
    useEffect(() => {
        if (exercise.options) {
            setRightItems([...exercise.options].sort(() => Math.random() - 0.5));
        }
    }, [exercise.options]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leftItems.map((leftItem, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <span className="flex-1 font-medium">{leftItem}</span>
                    <select
                        value={(userAnswers?.[index] as string) || ''}
                        onChange={(e) => onAnswerChange(exercise.id, index, e.target.value)}
                        disabled={isFinished}
                        className={`w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500
                        ${isFinished 
                            ? normalizeAnswer((userAnswers?.[index] as string) || '') === normalizeAnswer(exercise.correctAnswer[index])
                                ? 'border-2 border-green-500 bg-green-50'
                                : 'border-2 border-red-500 bg-red-50'
                            : ''
                        }`}
                    >
                        <option value="">Select...</option>
                        {rightItems.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
            ))}
            {isFinished && (
                <div className="md:col-span-2 mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                    <strong>Correct Matches:</strong> {leftItems.map((item, i) => `${item} → ${exercise.correctAnswer[i]}`).join('; ')}
                </div>
            )}
        </div>
    );
};

// --- Grouped Fill In The Blank ---
const FillInTheBlankGroupExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished, language }) => {
    let answerIndex = -1;
    return (
        <div className="space-y-4">
            {exercise.questions?.map((q, qIndex) => {
                const textParts = (q.context as string).split('______');
                return (
                    <div key={qIndex} className="text-lg leading-relaxed bg-gray-50 p-4 rounded-lg">
                        {textParts.map((part, pIndex) => {
                            if (pIndex < textParts.length - 1) answerIndex++;
                            const currentAnswerIndex = answerIndex;
                            return (
                                <React.Fragment key={pIndex}>
                                    {part}
                                    {pIndex < textParts.length - 1 && (
                                        <input
                                            type="text"
                                            value={(userAnswers?.[currentAnswerIndex] as string) || ''}
                                            onChange={(e) => onAnswerChange(exercise.id, currentAnswerIndex, e.target.value)}
                                            disabled={isFinished}
                                            className={`mx-1 inline-block w-32 md:w-40 bg-white rounded-md border text-base px-2 py-1 transition-all
                                                ${isFinished
                                                    ? normalizeAnswer((userAnswers?.[currentAnswerIndex] as string) || '') === normalizeAnswer(exercise.correctAnswer[currentAnswerIndex])
                                                        ? 'border-green-500 bg-green-50'
                                                        : 'border-red-500 bg-red-50'
                                                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                                }`}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                );
            })}
             {isFinished && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                    <strong>Correct Answers:</strong> {exercise.correctAnswer.join(', ')}
                </div>
            )}
        </div>
    );
};

// --- Grouped Multiple Choice ---
const MultipleChoiceGroupExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished, language }) => (
    <div className="space-y-6">
        {exercise.questions?.map((q, qIndex) => (
            <div key={qIndex} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-3">{q.context}</p>
                <div className="space-y-2">
                    {q.options?.map((option, oIndex) => {
                         const isSelected = userAnswers?.[qIndex] === option;
                         const isCorrect = exercise.correctAnswer[qIndex] === option;
                         let labelClass = 'flex items-center gap-3 p-3 rounded-lg border-2 transition-all ';
                         if (isFinished) {
                            if (isCorrect) {
                                labelClass += 'bg-green-100 border-green-400';
                            } else if (isSelected && !isCorrect) {
                                labelClass += 'bg-red-100 border-red-400';
                            } else {
                                labelClass += 'bg-white border-gray-200';
                            }
                         } else {
                             labelClass += isSelected ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200 cursor-pointer hover:border-blue-400';
                         }
                        
                        return (
                            <label key={oIndex} className={labelClass}>
                                <input
                                    type="radio"
                                    name={`${exercise.id}-${qIndex}`}
                                    value={option}
                                    checked={isSelected}
                                    onChange={(e) => onAnswerChange(exercise.id, qIndex, e.target.value)}
                                    disabled={isFinished}
                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span>{option}</span>
                                {isFinished && isCorrect && <Check size={20} className="ml-auto text-green-600"/>}
                                {isFinished && isSelected && !isCorrect && <X size={20} className="ml-auto text-red-600"/>}
                            </label>
                        );
                    })}
                </div>
            </div>
        ))}
    </div>
);


// --- Grouped Sentence Scramble ---
const SentenceScrambleGroupExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished, language }) => {
    return (
        <div className="space-y-6">
            {exercise.questions?.map((q, qIndex) => {
                 const isCorrect = isFinished && normalizeAnswer((userAnswers?.[qIndex] as string) || '') === normalizeAnswer(q.correctAnswer as string);
                return (
                    <div key={qIndex}>
                        <div className="text-center font-mono p-3 mb-2 min-h-[50px] bg-gray-100 border-2 border-dashed rounded-lg flex items-center justify-center">
                            {(userAnswers?.[qIndex] as string) || <span className="text-gray-400 text-sm">Build the sentence here</span>}
                        </div>
                         {!isFinished && (
                            <div className="flex flex-wrap gap-2 justify-center mb-2">
                                {(q.context as string[]).map((word, wIndex) => (
                                    <button
                                        key={wIndex}
                                        onClick={() => {
                                            const current = (userAnswers?.[qIndex] as string) || '';
                                            const newAnswer = current ? `${current} ${word}` : word;
                                            onAnswerChange(exercise.id, qIndex, newAnswer);
                                        }}
                                        className="px-3 py-1 bg-white rounded-md shadow-sm border border-gray-300 hover:bg-blue-100 transition-colors"
                                    >
                                        {word}
                                    </button>
                                ))}
                            </div>
                        )}
                         <div className="text-center">
                             {!isFinished && (
                                <button
                                    onClick={() => onAnswerChange(exercise.id, qIndex, '')}
                                    className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    Clear
                                </button>
                            )}
                             {isFinished && (
                                <div className={`p-2 rounded-lg text-sm font-semibold ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {isCorrect ? 'Correct!' : `Correct answer: ${q.correctAnswer}`}
                                </div>
                            )}
                         </div>
                    </div>
                );
            })}
        </div>
    );
};

// --- Time Writing Exercise ---
const TimeWritingExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished, language }) => (
    <div className="space-y-4">
        {exercise.questions?.map((q, qIndex) => (
            <div key={qIndex} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <span className="font-bold text-xl text-blue-600">{q.context}</span>
                <span className="text-gray-400">→</span>
                <input
                    type="text"
                    value={(userAnswers?.[qIndex] as string) || ''}
                    onChange={(e) => onAnswerChange(exercise.id, qIndex, e.target.value)}
                    disabled={isFinished}
                    placeholder="Write time in words..."
                    className={`flex-grow bg-white rounded-md border text-base px-2 py-1 transition-all
                        ${isFinished
                            ? normalizeAnswer((userAnswers?.[qIndex] as string) || '') === normalizeAnswer(q.correctAnswer as string)
                                ? 'border-green-500 bg-green-50'
                                : 'border-red-500 bg-red-50'
                            : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        }`}
                />
                 {isFinished && normalizeAnswer((userAnswers?.[qIndex] as string) || '') !== normalizeAnswer(q.correctAnswer as string) && (
                    <span className="text-red-600 text-sm font-medium">({q.correctAnswer})</span>
                )}
            </div>
        ))}
    </div>
);

// =====================================================================
// 4. EXERCISE ENGINE and UI SCREENS
// =====================================================================

const ExerciseRenderer: React.FC<ExerciseComponentProps> = (props) => {
    switch (props.exercise.type) {
        case 'complete-text': return <CompleteTextExercise {...props} />;
        case 'matching': return <MatchingExercise {...props} />;
        case 'fill-in-the-blank': return <FillInTheBlankGroupExercise {...props} />;
        case 'multiple-choice': return <MultipleChoiceGroupExercise {...props} />;
        case 'sentence-scramble': return <SentenceScrambleGroupExercise {...props} />;
        case 'time-writing': return <TimeWritingExercise {...props} />;
        default: return <p>Unsupported exercise type: {props.exercise.type}</p>;
    }
}

const FinalScoreScreen: React.FC<{ score: number; total: number; onRestart: () => void }> = ({ score, total, onRestart }) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    return (
        <div className="text-center m-auto flex flex-col items-center p-4">
            <Award size={64} className="text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Test Finished!</h2>
            <p className="text-6xl font-bold text-gray-800 mb-4">{score} / {total}</p>
            <div className="w-full max-w-xs bg-gray-200 rounded-full h-4 mb-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-xl text-gray-600 mb-6">{percentage}% Correct</p>
            <button
                onClick={onRestart}
                className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                <RotateCcw size={20} /> Take Another Test
            </button>
        </div>
    );
};

const TestSelector: React.FC<{ tests: Test[]; onSelect: (test: Test) => void }> = ({ tests, onSelect }) => (
    <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-2">A1.1 Self-Assessment Tests</h1>
        <p className="text-center text-gray-600 mb-8">Choose a test to check your knowledge.</p>
        <div className="space-y-4">
            {tests.map(test => (
                <button
                    key={test.id}
                    onClick={() => onSelect(test)}
                    className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                    <div>
                        <span className="text-sm font-semibold text-blue-600">{test.level}</span>
                        <h2 className="text-xl font-bold text-gray-800">{test.title}</h2>
                    </div>
                    <div className="text-right text-gray-500 text-sm">
                        <div className="flex items-center gap-2"><FileText size={16} />{test.totalPoints} Points</div>
                        <div className="flex items-center gap-2"><Clock size={16} />{test.timeLimit} Min</div>
                    </div>
                </button>
            ))}
        </div>
    </div>
);

// =====================================================================
// 5. MAIN COMPONENT
// =====================================================================

interface A11SelfTestProps {
    tests: Test[];
    language: TestLanguageKey;
}

export const A11SelfTest = ({ tests, language }: A11SelfTestProps) => {
    const [selectedTest, setSelectedTest] = useState<Test | null>(null);
    const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [isTestFinished, setIsTestFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [finalScore, setFinalScore] = useState(0);

    const handleAnswerChange = (exerciseId: string, questionIndex: number, value: string | string[]) => {
        setUserAnswers(prev => ({
            ...prev,
            [exerciseId]: {
                ...prev[exerciseId],
                [questionIndex]: value,
            }
        }));
    };

    const handleSubmit = useCallback(() => {
        if (!selectedTest) return;

        let score = 0;
        selectedTest.exercises.forEach(ex => {
            const pointsPerItem = ex.points / ex.correctAnswer.length;
            const answersForExercise = userAnswers[ex.id] || {};
            
            ex.correctAnswer.forEach((correct, index) => {
                const userAnswer = answersForExercise[index] || '';
                if(normalizeAnswer(Array.isArray(userAnswer) ? userAnswer.join(' ') : userAnswer) === normalizeAnswer(correct)) {
                    score += pointsPerItem;
                }
            });
        });

        setFinalScore(Math.round(score));
        setIsTestFinished(true);
        setIsTestStarted(false);
    }, [selectedTest, userAnswers]);

    // Timer logic
    useEffect(() => {
        if (isTestStarted) {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        handleSubmit();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isTestStarted, handleSubmit]);

    const handleSelectTest = (test: Test) => {
        setSelectedTest(test);
        setTimeLeft(test.timeLimit * 60);
    };
    
    const handleStartTest = () => {
        setIsTestStarted(true);
    };

    const handleRestart = () => {
        setSelectedTest(null);
        setUserAnswers({});
        setIsTestStarted(false);
        setIsTestFinished(false);
        setFinalScore(0);
    };

    if (isTestFinished) {
        return <FinalScoreScreen score={finalScore} total={selectedTest?.totalPoints || 0} onRestart={handleRestart} />;
    }

    if (!selectedTest) {
        return <TestSelector tests={tests} onSelect={handleSelectTest} />;
    }

    if (!isTestStarted) {
        return (
            <div className="text-center max-w-2xl mx-auto p-8">
                <BookOpen size={48} className="mx-auto text-blue-500 mb-4" />
                <h1 className="text-3xl font-bold mb-2">{selectedTest.title}</h1>
                <p className="text-gray-600 mb-6">You are about to start the test. Good luck!</p>
                <div className="flex justify-center gap-8 mb-8 text-lg">
                    <div className="flex items-center gap-2"><FileText size={20} /> {selectedTest.totalPoints} Points</div>
                    <div className="flex items-center gap-2"><Clock size={20} /> {selectedTest.timeLimit} Minutes</div>
                </div>
                <button
                    onClick={handleStartTest}
                    className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto"
                >
                    Start Test <ArrowRight size={22} />
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 py-4 mb-8 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-800">{selectedTest.title}</h1>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full font-mono font-bold text-lg">
                        <Clock size={20} className="text-gray-500" />
                        <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
                    </div>
                </div>
            </header>

            <main className="space-y-12">
                {selectedTest.exercises.map((exercise, index) => (
                    <section key={exercise.id} className="p-6 bg-white rounded-xl shadow-md">
                        <h2 className="text-xl font-bold mb-1">
                            Exercise {index + 1}: {exercise.title}
                        </h2>
                        <p className="text-gray-600 mb-2">{exercise.instructions[language]}</p>
                        <p className="text-sm font-semibold text-blue-600 mb-6">{exercise.points} Points</p>
                        <ExerciseRenderer
                            exercise={exercise}
                            userAnswers={userAnswers[exercise.id] || {}}
                            onAnswerChange={handleAnswerChange}
                            isFinished={isTestFinished}
                            language={language}
                        />
                    </section>
                ))}
            </main>

            <footer className="mt-12 text-center">
                <button
                    onClick={handleSubmit}
                    className="px-10 py-4 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700 transition-all"
                >
                    Finish Test & See Results
                </button>
            </footer>
        </div>
    );
};