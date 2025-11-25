import type { BoardType } from "./Board";
import type { CoordinatesType } from "./Board";

export const getComputerMove = (board: BoardType): CoordinatesType | null => {
  const emptyCells: CoordinatesType[] = [];

  board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === "") emptyCells.push({ x, y });
    });
  });

  if (emptyCells.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};
