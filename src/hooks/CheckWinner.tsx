import type { WinnerData, WinnerType } from "../types/Player";
import { BOARD_SIZE } from "../constants/Game";
import type { BoardType } from "../types/Board";

export const checkWinner = (board: BoardType): WinnerData | null => {
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (
      board[i][0] !== "" &&
      board[i][0][board[i][0].length - 1] === board[i][1][board[i][1].length - 1] &&
      board[i][0][board[i][0].length - 1] === board[i][2][board[i][2].length - 1]
    ) {
      return {
        winner: board[i][0][board[i][0].length - 1] as WinnerType,
        coords: [
          { x: i, y: 0 },
          { x: i, y: 1 },
          { x: i, y: 2 },
        ],
      };
    }

    if (
      board[0][i] !== "" &&
      board[0][i][board[0][i].length - 1] === board[1][i][board[1][i].length - 1] &&
      board[0][i][board[0][i].length - 1] === board[2][i][board[2][i].length - 1]
    ) {
      return {
        winner: board[0][i][board[0][i].length - 1] as WinnerType,
        coords: [
          { x: 0, y: i },
          { x: 1, y: i },
          { x: 2, y: i },
        ],
      };
    }
  }

  if (
    board[0][0] !== "" &&
    board[0][0][board[0][0].length - 1] === board[1][1][board[1][1].length - 1] &&
    board[0][0][board[0][0].length - 1] === board[2][2][board[2][2].length - 1]
  ) {
    return {
      winner: board[0][0][board[0][0].length - 1] as WinnerType,
      coords: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ],
    };
  }

  if (
    board[0][2] !== "" &&
    board[0][2][board[0][2].length - 1] === board[1][1][board[1][1].length - 1] &&
    board[0][2][board[0][2].length - 1] === board[2][0][board[2][0].length - 1]
  ) {
    return {
      winner: board[0][2][board[0][2].length - 1] as WinnerType,
      coords: [
        { x: 0, y: 2 },
        { x: 1, y: 1 },
        { x: 2, y: 0 },
      ],
    };
  }

  if (board.flat().every(cell => cell !== "")) {
    return { winner: "D" };
  }

  return null;
};
