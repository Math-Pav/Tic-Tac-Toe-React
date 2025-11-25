import { useState, useEffect } from "react";
import { INITIAL_BOARD } from "../constants/Game";
import type { BoardType, CoordinatesType } from "../types/Board";
import type { PlayerCellType } from "../types/Player";
import type { GameMode, GameType } from "../types/GameMode";
import { checkWinner } from "./CheckWinner";
import { getComputerMove } from "../types/IA";
import { saveScore } from "../utils/SaveScore";

type Move = { x: number; y: number };

export const useGame = (
  mode: GameMode = "human",
  type: GameType = "normal",
  player1Name: string = "Joueur 1",
  player2Name: string = "Joueur 2"
) => {
  const [board, setBoard] = useState<BoardType>(INITIAL_BOARD.map(r => [...r]));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  const [xMoves, setXMoves] = useState<Move[]>([]);
  const [oMoves, setOMoves] = useState<Move[]>([]);
  const [highlightMove, setHighlightMove] = useState<CoordinatesType | null>(null);

  const playAt = ({ x, y }: CoordinatesType, player: "X" | "O") => {
    const symbol: PlayerCellType = player === "X" ? "NX" : "NO";
    const newBoard = board.map(row => [...row]);

    if (type === "threeMoves") {
      const moves = player === "X" ? [...xMoves] : [...oMoves];
      if (moves.length >= 3) {
        const oldMove = moves[0];
        if (oldMove) {
          setHighlightMove({ x: oldMove.x, y: oldMove.y });
          setTimeout(() => {
            setBoard(prev => {
              const updated = prev.map(r => [...r]);
              updated[oldMove.x][oldMove.y] = "";
              return updated;
            });
          }, 50);
        }
        moves.shift();
      }
      moves.push({ x, y });
      if (player === "X") setXMoves([...moves]);
      else setOMoves([...moves]);
    }

    newBoard[x][y] = symbol;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      // 🔹 Détermine le nom du gagnant
      const winnerName = result.winner === "X"
        ? player1Name
        : result.winner === "O"
        ? mode === "computer" ? "IA" : player2Name
        : "D";

      setWinner(winnerName); // 🔹 ici winner devient le nom du joueur

      if (result.coords) {
        result.coords.forEach(c => {
          newBoard[c.x][c.y] = player === "X" ? "WX" : "WO";
        });
        setBoard(newBoard);
      }

      if (winnerName !== "D") {
        saveScore(winnerName, 10, type as "normal" | "threeShots");
      }

      return true;
    }

    return false;
  };


  useEffect(() => {
    if (highlightMove) {
      const timer = setTimeout(() => setHighlightMove(null), 3600);
      return () => clearTimeout(timer);
    }
  }, [highlightMove]);

  const handleCellClick = ({ x, y }: CoordinatesType) => {
    if (board[x][y] !== "" || winner || (mode === "computer" && isComputerTurn)) return;

    const humanWon = playAt({ x, y }, currentPlayer);
    if (humanWon) return;

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);

    if (mode === "computer" && nextPlayer === "O") setIsComputerTurn(true);
  };

  useEffect(() => {
    if (!isComputerTurn || winner) return;

    const timer = setTimeout(() => {
      const move = getComputerMove(board);
      if (!move) {
        setIsComputerTurn(false);
        return;
      }

      const aiWon = playAt(move, "O");
      if (!aiWon) setCurrentPlayer("X");
      setIsComputerTurn(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isComputerTurn, board, winner]);

  const resetGame = () => {
    setBoard(INITIAL_BOARD.map(r => [...r]));
    setCurrentPlayer("X");
    setWinner(null);
    setIsComputerTurn(false);
    setXMoves([]);
    setOMoves([]);
    setHighlightMove(null);
  };

  return {
    board,
    currentPlayer,
    winner,
    isComputerTurn,
    handleCellClick,
    resetGame,
    xMoves,
    oMoves,
    highlightMove,
  };
};
