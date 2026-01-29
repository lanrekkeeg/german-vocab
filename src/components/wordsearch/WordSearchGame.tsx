// src/components/wordsearch/WordSearchGame.tsx
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Card, PlacedWord, WordSearchDirection, LanguageKey, LanguageStrings } from '../../types';
import { WordGrid } from './WordGrid';
import { WordList } from './WordList';

interface WordSearchGameProps {
  cards: Card[];
  wordCount: number;
  gridSize: number;
  directions: readonly WordSearchDirection[];
  language: LanguageKey;
  t: LanguageStrings;
  onComplete: (timeElapsed: number, wordsFound: number, totalWords: number) => void;
  onBack: () => void;
}

// Common German letters for filling empty spaces
const GERMAN_LETTERS = 'ENITRSAUDHGLCMOBWFKZPVJYXQ'.split('');

// Direction vectors for word placement
const DIRECTION_VECTORS: Record<WordSearchDirection, { dx: number; dy: number }> = {
  'horizontal': { dx: 1, dy: 0 },
  'vertical': { dx: 0, dy: 1 },
  'diagonal-down': { dx: 1, dy: 1 },
  'diagonal-up': { dx: 1, dy: -1 },
};

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function normalizeGermanWord(word: string): string {
  // Convert to uppercase and handle German special characters
  return word.toUpperCase()
    .replace(/ä/gi, 'AE')
    .replace(/ö/gi, 'OE')
    .replace(/ü/gi, 'UE')
    .replace(/ß/gi, 'SS');
}

function generateWordSearchGrid(
  cards: Card[],
  wordCount: number,
  gridSize: number,
  allowedDirections: readonly WordSearchDirection[],
  language: LanguageKey
): { grid: string[][]; placedWords: PlacedWord[]; originalWords: Map<string, string> } {
  // Initialize empty grid
  const grid: string[][] = Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(''));

  // Select random words and sort by length (longest first for better placement)
  const selectedCards = shuffleArray(cards).slice(0, wordCount * 2);
  const sortedCards = [...selectedCards].sort(
    (a, b) => normalizeGermanWord(b.german).length - normalizeGermanWord(a.german).length
  );

  const placedWords: PlacedWord[] = [];
  const originalWords = new Map<string, string>(); // Map normalized -> original German

  // Try to place each word
  for (const card of sortedCards) {
    if (placedWords.length >= wordCount) break;

    const normalizedWord = normalizeGermanWord(card.german);
    if (normalizedWord.length > gridSize) continue;

    // Try random positions and directions
    const directions = shuffleArray([...allowedDirections]);
    let placed = false;

    for (let attempts = 0; attempts < 100 && !placed; attempts++) {
      const dir = directions[attempts % directions.length];
      const { dx, dy } = DIRECTION_VECTORS[dir];

      // Calculate valid starting positions based on direction
      let minStartX = 0;
      let maxStartX = gridSize - 1;
      let minStartY = 0;
      let maxStartY = gridSize - 1;

      // Adjust based on direction and word length
      if (dx > 0) {
        maxStartX = gridSize - normalizedWord.length;
      } else if (dx < 0) {
        minStartX = normalizedWord.length - 1;
      }

      if (dy > 0) {
        maxStartY = gridSize - normalizedWord.length;
      } else if (dy < 0) {
        minStartY = normalizedWord.length - 1;
      }

      // Skip if no valid positions
      if (maxStartX < minStartX || maxStartY < minStartY) continue;

      const startX = Math.floor(Math.random() * (maxStartX - minStartX + 1)) + minStartX;
      const startY = Math.floor(Math.random() * (maxStartY - minStartY + 1)) + minStartY;

      // Check if word can be placed
      let canPlace = true;
      for (let i = 0; i < normalizedWord.length && canPlace; i++) {
        const x = startX + i * dx;
        const y = startY + i * dy;
        // Bounds check
        if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
          canPlace = false;
          continue;
        }
        const existing = grid[y][x];
        if (existing !== '' && existing !== normalizedWord[i]) {
          canPlace = false;
        }
      }

      // Place the word
      if (canPlace) {
        for (let i = 0; i < normalizedWord.length; i++) {
          const x = startX + i * dx;
          const y = startY + i * dy;
          grid[y][x] = normalizedWord[i];
        }

        // Get translation for the current language
        const translation = card.translations[language] || card.translations.english || '';

        // Store mapping from normalized to original German word
        originalWords.set(normalizedWord, card.german);

        placedWords.push({
          word: normalizedWord,
          translation,
          startRow: startY,
          startCol: startX,
          direction: dir,
          found: false,
          audioSrc: card.audioSrc,
        });
        placed = true;
      }
    }
  }

  // Fill remaining empty cells with random letters
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === '') {
        grid[y][x] = GERMAN_LETTERS[Math.floor(Math.random() * GERMAN_LETTERS.length)];
      }
    }
  }

  return { grid, placedWords, originalWords };
}

export const WordSearchGame: React.FC<WordSearchGameProps> = ({
  cards,
  wordCount,
  gridSize,
  directions,
  language,
  t,
  onComplete,
  onBack,
}) => {
  // Generate grid and words on mount
  const { grid, initialWords, originalWords } = useMemo(() => {
    const result = generateWordSearchGrid(cards, wordCount, gridSize, directions, language);
    return { grid: result.grid, initialWords: result.placedWords, originalWords: result.originalWords };
  }, [cards, wordCount, gridSize, directions, language]);

  const [placedWords, setPlacedWords] = useState<PlacedWord[]>(initialWords);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Timer
  useEffect(() => {
    if (isComplete) return;

    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isComplete]);

  // Audio setup
  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Check if a selection matches any word
  const checkSelection = useCallback(
    (startRow: number, startCol: number, endRow: number, endCol: number) => {
      // Build selected string
      const rowDiff = endRow - startRow;
      const colDiff = endCol - startCol;
      const length = Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;
      const rowStep = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;
      const colStep = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;

      let selectedWord = '';
      for (let i = 0; i < length; i++) {
        const row = startRow + i * rowStep;
        const col = startCol + i * colStep;
        if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
          selectedWord += grid[row][col];
        }
      }

      // Check if it matches any unfound word (forwards or backwards)
      const reversedWord = selectedWord.split('').reverse().join('');

      setPlacedWords((prevWords) => {
        const newWords = prevWords.map((w) => {
          if (!w.found && (w.word === selectedWord || w.word === reversedWord)) {
            // Play audio if available
            if (w.audioSrc && audioRef.current) {
              audioRef.current.src = w.audioSrc;
              audioRef.current.play().catch(() => {});
            }
            return { ...w, found: true };
          }
          return w;
        });

        // Check if all words are found
        const allFound = newWords.every((w) => w.found);
        if (allFound && !isComplete) {
          setIsComplete(true);
          setTimeout(() => {
            onComplete(timeElapsed, newWords.length, newWords.length);
          }, 500);
        }

        return newWords;
      });
    },
    [grid, gridSize, isComplete, onComplete, timeElapsed]
  );

  // Get cells that belong to found words
  const foundCells = useMemo(() => {
    const cells: Set<string> = new Set();
    placedWords
      .filter((w) => w.found)
      .forEach((w) => {
        const { dx, dy } = DIRECTION_VECTORS[w.direction];
        for (let i = 0; i < w.word.length; i++) {
          cells.add(`${w.startRow + i * dy},${w.startCol + i * dx}`);
        }
      });
    return cells;
  }, [placedWords]);

  const wordsFound = placedWords.filter((w) => w.found).length;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Main Game Area */}
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-lg p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
              {t.backToMenu}
            </button>

            <div className="flex items-center gap-4">
              {/* Timer */}
              <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                <Clock size={18} />
                <span className="font-mono font-semibold">{formatTime(timeElapsed)}</span>
              </div>

              {/* Progress */}
              <div className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg">
                {wordsFound} / {placedWords.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${(wordsFound / placedWords.length) * 100}%` }}
            />
          </div>

          {/* Grid */}
          <WordGrid
            grid={grid}
            gridSize={gridSize}
            foundCells={foundCells}
            onSelectionComplete={checkSelection}
          />

          {/* All Found Message */}
          {isComplete && (
            <div className="mt-4 text-center p-4 bg-emerald-100 rounded-lg">
              <p className="text-xl font-bold text-emerald-700">{t.allWordsFound}</p>
            </div>
          )}
        </div>
      </div>

      {/* Word List Sidebar */}
      <div className="lg:w-72">
        <WordList words={placedWords} t={t} originalWords={originalWords} />
      </div>
    </div>
  );
};
