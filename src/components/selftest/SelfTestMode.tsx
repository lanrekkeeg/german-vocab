// src/components/selftest/SelfTestMode.tsx
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Check, X, Clock, FileText, ArrowRight, BookOpen, RotateCcw, Award, Eye, ChevronDown, ChevronUp, CheckSquare } from 'lucide-react';
import { Test, TestExercise, TestLanguageKey } from '../../types';

// =====================================================================
// HELPER TYPES AND INTERFACES for this component
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

interface ExerciseResult {
    exerciseId: string;
    exerciseTitle: string;
    totalPoints: number;
    earnedPoints: number;
    correctAnswers: number;
    totalAnswers: number;
    details: Array<{
        questionIndex: number;
        userAnswer: string;
        correctAnswer: string;
        isCorrect: boolean;
        context?: string;
    }>;
}

// =====================================================================
// UTILITY FUNCTIONS local to this component
// =====================================================================
const normalizeAnswer = (answer: string): string => {
    return answer.trim().toLowerCase().replace(/[.,!?;]$/, '').trim();
};

const calculateExerciseResults = (exercise: TestExercise, userAnswers: UserAnswers[string]): ExerciseResult => {
    const pointsPerItem = exercise.points / exercise.correctAnswer.length;
    let correctAnswersCount = 0;
    const details: ExerciseResult['details'] = [];

    exercise.correctAnswer.forEach((correct, index) => {
        const userAnswer = userAnswers?.[index] || '';
        const userAnswerStr = Array.isArray(userAnswer) ? userAnswer.join(' ') : userAnswer;
        const isCorrect = normalizeAnswer(userAnswerStr) === normalizeAnswer(correct);
        
        if (isCorrect) correctAnswersCount++;
        
        let context = '';
        if (exercise.type === 'complete-text') {
            context = exercise.context as string;
        } else if (exercise.questions) {
            const questionIndex = Math.floor(index / (exercise.correctAnswer.length / exercise.questions.length));
            context = Array.isArray(exercise.questions[questionIndex]?.context) 
                ? (exercise.questions[questionIndex].context as string[]).join(' ')
                : exercise.questions[questionIndex]?.context as string || '';
        }

        details.push({
            questionIndex: index,
            userAnswer: userAnswerStr,
            correctAnswer: correct,
            isCorrect,
            context: context.length > 100 ? context.substring(0, 100) + '...' : context
        });
    });

    return {
        exerciseId: exercise.id,
        exerciseTitle: exercise.title,
        totalPoints: exercise.points,
        earnedPoints: Math.round(correctAnswersCount * pointsPerItem),
        correctAnswers: correctAnswersCount,
        totalAnswers: exercise.correctAnswer.length,
        details
    };
};

// =====================================================================
// SUB-COMPONENTS for specific exercise types
// =====================================================================

const CompleteTextExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished }) => {
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
                            className={`mx-1 inline-block w-32 md:w-40 bg-white rounded-md border text-base px-2 py-1 transition-all ${isFinished ? normalizeAnswer((userAnswers?.[index] as string) || '') === normalizeAnswer(exercise.correctAnswer[index]) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                        />
                    )}
                </React.Fragment>
            ))}
            {isFinished && <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800"><strong>Correct Answers:</strong> {exercise.correctAnswer.join(', ')}</div>}
        </div>
    );
};

const MatchingExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished }) => {
    const leftItems = exercise.context as string[];
    const [rightItems, setRightItems] = useState<string[]>([]);
    
    useEffect(() => {
        if (exercise.options) setRightItems([...exercise.options].sort(() => Math.random() - 0.5));
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
                        className={`w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${isFinished ? normalizeAnswer((userAnswers?.[index] as string) || '') === normalizeAnswer(exercise.correctAnswer[index]) ? 'border-2 border-green-500 bg-green-50' : 'border-2 border-red-500 bg-red-50' : ''}`}
                    >
                        <option value="">Select...</option>
                        {rightItems.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
            ))}
            {isFinished && <div className="md:col-span-2 mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800"><strong>Correct Matches:</strong> {leftItems.map((item, i) => `${item} → ${exercise.correctAnswer[i]}`).join('; ')}</div>}
        </div>
    );
};

const FillInTheBlankGroupExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished }) => {
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
                                    {pIndex < textParts.length - 1 && <input type="text" value={(userAnswers?.[currentAnswerIndex] as string) || ''} onChange={(e) => onAnswerChange(exercise.id, currentAnswerIndex, e.target.value)} disabled={isFinished} className={`mx-1 inline-block w-32 md:w-40 bg-white rounded-md border text-base px-2 py-1 transition-all ${isFinished ? normalizeAnswer((userAnswers?.[currentAnswerIndex] as string) || '') === normalizeAnswer(exercise.correctAnswer[currentAnswerIndex]) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`} />}
                                </React.Fragment>
                            );
                        })}
                    </div>
                );
            })}
            {isFinished && <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800"><strong>Correct Answers:</strong> {exercise.correctAnswer.join(', ')}</div>}
        </div>
    );
};

const MultipleChoiceGroupExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished }) => (
    <div className="space-y-6">
        {exercise.questions?.map((q, qIndex) => (
            <div key={qIndex} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-3">{q.context}</p>
                <div className="space-y-2">
                    {q.options?.map((option, oIndex) => {
                         const isSelected = userAnswers?.[qIndex] === option;
                         const isCorrect = exercise.correctAnswer[qIndex] === option;
                         let labelClass = `flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${isFinished ? (isCorrect ? 'bg-green-100 border-green-400' : (isSelected ? 'bg-red-100 border-red-400' : 'bg-white border-gray-200')) : (isSelected ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200 cursor-pointer hover:border-blue-400')}`;
                        return (
                            <label key={oIndex} className={labelClass}>
                                <input type="radio" name={`${exercise.id}-${qIndex}`} value={option} checked={isSelected} onChange={(e) => onAnswerChange(exercise.id, qIndex, e.target.value)} disabled={isFinished} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
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

const SentenceScrambleGroupExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished }) => {
    return (
        <div className="space-y-6">
            {exercise.questions?.map((q, qIndex) => {
                 const isCorrect = isFinished && normalizeAnswer((userAnswers?.[qIndex] as string) || '') === normalizeAnswer(q.correctAnswer as string);
                return (
                    <div key={qIndex}>
                        <div className="text-center font-mono p-3 mb-2 min-h-[50px] bg-gray-100 border-2 border-dashed rounded-lg flex items-center justify-center">{(userAnswers?.[qIndex] as string) || <span className="text-gray-400 text-sm">Build the sentence here</span>}</div>
                         {!isFinished && <div className="flex flex-wrap gap-2 justify-center mb-2">{(q.context as string[]).map((word, wIndex) => <button key={wIndex} onClick={() => onAnswerChange(exercise.id, qIndex, `${(userAnswers?.[qIndex] as string) || ''}${userAnswers?.[qIndex] ? ' ' : ''}${word}`)} className="px-3 py-1 bg-white rounded-md shadow-sm border border-gray-300 hover:bg-blue-100 transition-colors">{word}</button>)}</div>}
                         <div className="text-center">
                             {!isFinished && <button onClick={() => onAnswerChange(exercise.id, qIndex, '')} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">Clear</button>}
                             {isFinished && <div className={`p-2 rounded-lg text-sm font-semibold ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{isCorrect ? 'Correct!' : `Correct answer: ${q.correctAnswer}`}</div>}
                         </div>
                    </div>
                );
            })}
        </div>
    );
};

const TimeWritingExercise: React.FC<ExerciseComponentProps> = ({ exercise, userAnswers, onAnswerChange, isFinished }) => (
    <div className="space-y-4">
        {exercise.questions?.map((q, qIndex) => (
            <div key={qIndex} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <span className="font-bold text-xl text-blue-600">{q.context}</span>
                <span className="text-gray-400">→</span>
                <input type="text" value={(userAnswers?.[qIndex] as string) || ''} onChange={(e) => onAnswerChange(exercise.id, qIndex, e.target.value)} disabled={isFinished} placeholder="Write time in words..." className={`flex-grow bg-white rounded-md border text-base px-2 py-1 transition-all ${isFinished ? normalizeAnswer((userAnswers?.[qIndex] as string) || '') === normalizeAnswer(q.correctAnswer as string) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`} />
                 {isFinished && normalizeAnswer((userAnswers?.[qIndex] as string) || '') !== normalizeAnswer(q.correctAnswer as string) && <span className="text-red-600 text-sm font-medium">({q.correctAnswer})</span>}
            </div>
        ))}
    </div>
);


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

// --- RESULTS SCREENS ---

// NEW: A small, readable component for rendering each result detail.
const ResultDetail = ({ detail }: { detail: ExerciseResult['details'][0] }) => {
    const isCorrect = detail.isCorrect;
    const detailBgClass = isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
    const answerColorClass = isCorrect ? 'text-green-700' : 'text-red-700';
    const icon = isCorrect 
        ? <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" /> 
        : <X size={20} className="text-red-600 mt-0.5 flex-shrink-0" />;

    return (
        <div className={`p-3 rounded-lg border ${detailBgClass}`}>
            <div className="flex items-start gap-3">
                {icon}
                <div className="flex-1">
                    {detail.context && (
                        <p className="text-sm text-gray-700 mb-2 italic">
                            Context: {detail.context}
                        </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                        <div>
                            <span className="font-medium text-gray-600">Your answer:</span>
                            <span className={`ml-2 ${answerColorClass}`}>
                                {detail.userAnswer || '(no answer)'}
                            </span>
                        </div>
                        <div className="text-green-800">
                            <span className="font-medium">Correct answer:</span>
                            <span className="ml-2 font-semibold">
                                {detail.correctAnswer}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const DetailedResultsScreen: React.FC<{ 
    results: ExerciseResult[]; 
    totalScore: number; 
    totalPoints: number; 
    onRestart: () => void;
    onBackToSummary: () => void;
}> = ({ results, totalScore, totalPoints, onRestart, onBackToSummary }) => {
    const [expandedExercises, setExpandedExercises] = useState<Set<string>>(new Set());

    const toggleExercise = (exerciseId: string) => {
        setExpandedExercises(prev => {
            const newSet = new Set(prev);
            if (newSet.has(exerciseId)) {
                newSet.delete(exerciseId);
            } else {
                newSet.add(exerciseId);
            }
            return newSet;
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Detailed Test Results</h2>
                <div className="text-6xl font-bold text-gray-800 mb-2">{totalScore} / {totalPoints}</div>
                <div className="text-xl text-gray-600 mb-6">{totalPoints > 0 ? Math.round((totalScore / totalPoints) * 100) : 0}% Correct</div>
            </div>

            <div className="space-y-4 mb-8">
                {results.map((result) => (
                    <div key={result.exerciseId} className="bg-white rounded-lg shadow-md border">
                        <button
                            onClick={() => toggleExercise(result.exerciseId)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                                    ${result.earnedPoints === result.totalPoints ? 'bg-green-500' : 
                                      result.earnedPoints > result.totalPoints * 0.5 ? 'bg-yellow-500' : 'bg-red-500'}`}>
                                    {result.earnedPoints}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{result.exerciseTitle}</h3>
                                    <p className="text-gray-600 text-sm">
                                        {result.correctAnswers} of {result.totalAnswers} correct answers
                                        • {result.earnedPoints} of {result.totalPoints} points
                                    </p>
                                </div>
                            </div>
                            {expandedExercises.has(result.exerciseId) ? 
                                <ChevronUp className="text-gray-400" /> : 
                                <ChevronDown className="text-gray-400" />
                            }
                        </button>

                        {/* THIS IS THE CORRECTED AND REFACTORED SECTION */}
                        {expandedExercises.has(result.exerciseId) && (
                            <div className="border-t bg-gray-50 p-4">
                                <div className="space-y-3">
                                    {result.details.map((detail, index) => (
                                        <ResultDetail key={index} detail={detail} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={onBackToSummary}
                    className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 justify-center"
                >
                    Back to Summary
                </button>
                <button
                    onClick={onRestart}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
                >
                    <RotateCcw size={20} /> Take Another Test
                </button>
            </div>
        </div>
    );
};

const FinalScoreScreen: React.FC<{ score: number; total: number; results: ExerciseResult[]; onRestart: () => void; onViewDetails: () => void;}> = ({ score, total, results, onRestart, onViewDetails }) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const gradeInfo = useMemo(() => {
        if (percentage >= 90) return { grade: 'Excellent', color: 'text-green-600', message: 'Outstanding work! Your German skills are very strong at this level.' };
        if (percentage >= 80) return { grade: 'Very Good', color: 'text-blue-600', message: 'Great job! You have a solid understanding.' };
        if (percentage >= 70) return { grade: 'Good', color: 'text-yellow-600', message: 'Good work! Keep practicing to strengthen your skills.' };
        if (percentage >= 60) return { grade: 'Pass', color: 'text-orange-600', message: 'You passed! Focus on reviewing the areas you missed.' };
        return { grade: 'Needs Improvement', color: 'text-red-600', message: 'Keep studying! Review the material and try again.' };
    }, [percentage]);

    return (
        <div className="text-center max-w-3xl mx-auto p-8">
            <Award size={64} className="text-yellow-500 mb-4 mx-auto" />
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Test Completed!</h2>
            <p className="text-6xl font-bold text-gray-800 mb-2">{score} / {total}</p>
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-6 mb-4"><div className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div></div>
            <p className="text-2xl text-gray-600 mb-2">{percentage}% Correct</p>
            <p className={`text-xl font-semibold mb-2 ${gradeInfo.color}`}>{gradeInfo.grade}</p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">{gradeInfo.message}</p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8"><h3 className="text-lg font-semibold mb-4">Exercise Summary</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-3">{results.map((result, index) => <div key={result.exerciseId} className="flex items-center justify-between p-2 bg-white rounded"><span className="text-sm font-medium">Exercise {index + 1}</span><div className="flex items-center gap-2"><span className="text-sm">{result.correctAnswers}/{result.totalAnswers}</span><div className={`w-3 h-3 rounded-full ${result.earnedPoints === result.totalPoints ? 'bg-green-500' : result.earnedPoints > result.totalPoints * 0.5 ? 'bg-yellow-500' : 'bg-red-500'}`}></div></div></div>)}</div></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={onViewDetails} className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 justify-center"><Eye size={20} /> View Detailed Results</button>
                <button onClick={onRestart} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"><RotateCcw size={20} /> Take Another Test</button>
            </div>
        </div>
    );
};

// --- TEST SELECTION and PRE-TEST SCREEN ---

const TestSelector: React.FC<{ tests: Test[]; onSelect: (test: Test) => void }> = ({ tests, onSelect }) => (
    <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-2">{tests[0]?.level || ''} German Self-Assessment Tests</h1>
        <p className="text-center text-gray-600 mb-8">Choose a test to evaluate your German language skills.</p>
        <div className="space-y-4">
            {tests.map(test => (
                <button key={test.id} onClick={() => onSelect(test)} className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all border-l-4 border-blue-500">
                    <div className="text-left"><span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">{test.level}</span><h2 className="text-xl font-bold text-gray-800 mt-2">{test.title}</h2><p className="text-sm text-gray-500 mt-1">Professional level assessment</p></div>
                    <div className="text-right text-gray-500 text-sm"><div className="flex items-center gap-2 justify-end mb-1"><FileText size={16} />{test.totalPoints} Points</div><div className="flex items-center gap-2 justify-end"><Clock size={16} />{test.timeLimit} Min</div></div>
                </button>
            ))}
        </div>
    </div>
);

// =====================================================================
// MAIN SELF-TEST COMPONENT
// =====================================================================

interface SelfTestModeProps {
    tests: Test[];
    language: TestLanguageKey;
}

export const SelfTestMode = ({ tests, language }: SelfTestModeProps) => {
    const [selectedTest, setSelectedTest] = useState<Test | null>(null);
    const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [isTestFinished, setIsTestFinished] = useState(false);
    const [showDetailedResults, setShowDetailedResults] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [finalScore, setFinalScore] = useState(0);
    const [exerciseResults, setExerciseResults] = useState<ExerciseResult[]>([]);

    const handleAnswerChange = (exerciseId: string, questionIndex: number, value: string | string[]) => {
        setUserAnswers(prev => ({...prev, [exerciseId]: {...prev[exerciseId], [questionIndex]: value }}));
    };

    const handleSubmit = useCallback(() => {
        if (!selectedTest) return;
        let totalScore = 0;
        const results: ExerciseResult[] = selectedTest.exercises.map(exercise => {
            const result = calculateExerciseResults(exercise, userAnswers[exercise.id] || {});
            totalScore += result.earnedPoints;
            return result;
        });
        setFinalScore(totalScore);
        setExerciseResults(results);
        setIsTestFinished(true);
        setIsTestStarted(false);
    }, [selectedTest, userAnswers]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isTestStarted && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (isTestStarted && timeLeft <= 0) {
            handleSubmit();
        }
        return () => clearInterval(timer);
    }, [isTestStarted, timeLeft, handleSubmit]);

    const handleSelectTest = (test: Test) => { setSelectedTest(test); setTimeLeft(test.timeLimit * 60); };
    const handleStartTest = () => setIsTestStarted(true);
    const handleRestart = () => { setSelectedTest(null); setUserAnswers({}); setIsTestStarted(false); setIsTestFinished(false); setShowDetailedResults(false); setFinalScore(0); setExerciseResults([]); };

    if (!tests || tests.length === 0) {
        return (
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <CheckSquare size={48} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700">No Self-Test Content</h2>
                <p className="text-gray-500">There is no self-test content available for this level.</p>
            </div>
        );
    }
    
    if (isTestFinished) {
        return showDetailedResults ? (
            <DetailedResultsScreen results={exerciseResults} totalScore={finalScore} totalPoints={selectedTest?.totalPoints || 0} onRestart={handleRestart} onBackToSummary={() => setShowDetailedResults(false)} />
        ) : (
            <FinalScoreScreen score={finalScore} total={selectedTest?.totalPoints || 0} results={exerciseResults} onRestart={handleRestart} onViewDetails={() => setShowDetailedResults(true)} />
        );
    }

    if (!selectedTest) return <TestSelector tests={tests} onSelect={handleSelectTest} />;

    if (!isTestStarted) {
        return (
            <div className="text-center max-w-2xl mx-auto p-8">
                <BookOpen size={48} className="mx-auto text-blue-500 mb-4" />
                <h1 className="text-3xl font-bold mb-2">{selectedTest.title}</h1>
                <p className="text-gray-600 mb-6">You are about to start the test. Good luck!</p>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="flex items-center justify-center gap-2"><FileText size={20} className="text-blue-500" /><div><div className="font-bold text-lg">{selectedTest.totalPoints}</div><div className="text-sm text-gray-600">Points</div></div></div>
                        <div className="flex items-center justify-center gap-2"><Clock size={20} className="text-blue-500" /><div><div className="font-bold text-lg">{selectedTest.timeLimit}</div><div className="text-sm text-gray-600">Minutes</div></div></div>
                        <div className="flex items-center justify-center gap-2"><FileText size={20} className="text-blue-500" /><div><div className="font-bold text-lg">{selectedTest.exercises.length}</div><div className="text-sm text-gray-600">Exercises</div></div></div>
                    </div>
                </div>
                <button onClick={handleStartTest} className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto">Start Test <ArrowRight size={22} /></button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 py-4 mb-8 border-b border-gray-200 shadow-sm">
                <div className="flex justify-between items-center">
                    <div><h1 className="text-2xl font-bold text-blue-800">{selectedTest.title}</h1><p className="text-sm text-gray-600">{selectedTest.level} • {selectedTest.totalPoints} Points Total</p></div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full font-mono font-bold text-lg"><Clock size={20} className={timeLeft <= 300 ? 'text-red-500' : 'text-gray-500'} /><span className={timeLeft <= 300 ? 'text-red-500' : ''}>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span></div>
                </div>
            </header>
            <main className="space-y-12">
                {selectedTest.exercises.map((exercise, index) => (
                    <section key={exercise.id} className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-xl font-bold mb-1">Exercise {index + 1}: {exercise.title}</h2>
                                <p className="text-gray-600 mb-2">{exercise.instructions[language]}</p>
                                <p className="text-sm font-semibold text-blue-600">{exercise.points} Points</p>
                            </div>
                        </div>
                        <ExerciseRenderer exercise={exercise} userAnswers={userAnswers[exercise.id] || {}} onAnswerChange={handleAnswerChange} isFinished={isTestFinished} language={language}/>
                    </section>
                ))}
            </main>
            <footer className="mt-12 text-center">
                <button onClick={handleSubmit} className="px-10 py-4 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700 transition-all">Submit Test & View Results</button>
            </footer>
        </div>
    );
};