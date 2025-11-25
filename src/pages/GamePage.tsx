import { useLocation } from "react-router";
import Board from "../components/game/board/Board";
import { useGame } from "../hooks/Game";
import type { GameMode, GameType } from "../types/GameMode";

type LocationState = {
  mode: GameMode;
  type: GameType;
  player1: string;
  player2: string;
};

const GamePage = () => {
  const location = useLocation();
  const { mode, type, player1, player2 } = location.state as LocationState;

  const { board, winner, handleCellClick, resetGame } = useGame(mode, type, player1, player2);

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h2 className="text-2xl font-bold">Tic Tac Toe</h2>

      {winner && (
        <p className="text-xl font-semibold">
          {winner === "D" ? "Égalité !" : `Gagnant : ${winner}`}
        </p>
      )}

      <Board mode={mode} type={type} handleCellClick={handleCellClick} board={board} />

      <button
        onClick={resetGame}
        className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
      >
        Recommencer la partie
      </button>
    </div>
  );
};

export default GamePage;
