// src/components/wordsearch/WordGrid.tsx
import React, { useState, useCallback, useRef, useEffect } from 'react';

interface WordGridProps {
  grid: string[][];
  gridSize: number;
  foundCells: Set<string>;
  onSelectionComplete: (startRow: number, startCol: number, endRow: number, endCol: number) => void;
}

interface Selection {
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
}

export const WordGrid: React.FC<WordGridProps> = ({
  grid,
  gridSize,
  foundCells,
  onSelectionComplete,
}) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selection, setSelection] = useState<Selection | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Calculate cell size based on grid size
  const cellSize = gridSize <= 10 ? 'w-8 h-8 sm:w-10 sm:h-10' : gridSize <= 12 ? 'w-7 h-7 sm:w-9 sm:h-9' : 'w-6 h-6 sm:w-8 sm:h-8';
  const fontSize = gridSize <= 10 ? 'text-lg sm:text-xl' : gridSize <= 12 ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

  // Get cells in the current selection
  const getSelectedCells = useCallback((sel: Selection | null): Set<string> => {
    if (!sel) return new Set();

    const cells = new Set<string>();
    const rowDiff = sel.endRow - sel.startRow;
    const colDiff = sel.endCol - sel.startCol;

    // Only allow straight lines (horizontal, vertical, diagonal)
    if (rowDiff !== 0 && colDiff !== 0 && Math.abs(rowDiff) !== Math.abs(colDiff)) {
      return cells;
    }

    const length = Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;
    const rowStep = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;
    const colStep = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;

    for (let i = 0; i < length; i++) {
      const row = sel.startRow + i * rowStep;
      const col = sel.startCol + i * colStep;
      cells.add(`${row},${col}`);
    }

    return cells;
  }, []);

  const selectedCells = getSelectedCells(selection);

  // Handle mouse/touch start
  const handleStart = useCallback((row: number, col: number) => {
    setIsSelecting(true);
    setSelection({ startRow: row, startCol: col, endRow: row, endCol: col });
  }, []);

  // Handle mouse/touch move
  const handleMove = useCallback(
    (row: number, col: number) => {
      if (!isSelecting || !selection) return;
      setSelection((prev) => (prev ? { ...prev, endRow: row, endCol: col } : null));
    },
    [isSelecting, selection]
  );

  // Handle mouse/touch end
  const handleEnd = useCallback(() => {
    if (selection && isSelecting) {
      onSelectionComplete(selection.startRow, selection.startCol, selection.endRow, selection.endCol);
    }
    setIsSelecting(false);
    setSelection(null);
  }, [selection, isSelecting, onSelectionComplete]);

  // Get cell position from touch/mouse event
  const getCellFromEvent = useCallback(
    (clientX: number, clientY: number): { row: number; col: number } | null => {
      if (!gridRef.current) return null;

      const rect = gridRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const cellWidth = rect.width / gridSize;
      const cellHeight = rect.height / gridSize;

      const col = Math.floor(x / cellWidth);
      const row = Math.floor(y / cellHeight);

      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        return { row, col };
      }
      return null;
    },
    [gridSize]
  );

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const cell = getCellFromEvent(touch.clientX, touch.clientY);
      if (cell) handleStart(cell.row, cell.col);
    },
    [getCellFromEvent, handleStart]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const cell = getCellFromEvent(touch.clientX, touch.clientY);
      if (cell) handleMove(cell.row, cell.col);
    },
    [getCellFromEvent, handleMove]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      handleEnd();
    },
    [handleEnd]
  );

  // Mouse event handlers for individual cells
  const handleMouseDown = useCallback(
    (row: number, col: number) => {
      handleStart(row, col);
    },
    [handleStart]
  );

  const handleMouseEnter = useCallback(
    (row: number, col: number) => {
      handleMove(row, col);
    },
    [handleMove]
  );

  // Global mouse up handler
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isSelecting) {
        handleEnd();
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isSelecting, handleEnd]);

  return (
    <div
      ref={gridRef}
      className="inline-grid select-none touch-none"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        gap: '2px',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {grid.map((row, rowIndex) =>
        row.map((letter, colIndex) => {
          const cellKey = `${rowIndex},${colIndex}`;
          const isFound = foundCells.has(cellKey);
          const isSelected = selectedCells.has(cellKey);

          return (
            <div
              key={cellKey}
              onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              className={`
                ${cellSize} ${fontSize}
                flex items-center justify-center
                font-bold uppercase cursor-pointer
                rounded-md transition-all duration-150
                ${
                  isFound
                    ? 'bg-emerald-500 text-white shadow-md'
                    : isSelected
                    ? 'bg-blue-400 text-white scale-110 shadow-lg'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }
              `}
            >
              {letter}
            </div>
          );
        })
      )}
    </div>
  );
};
