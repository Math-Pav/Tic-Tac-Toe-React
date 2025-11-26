import { useLocation } from "react-router";
import Board from "../components/game/board/Board";
import { useGame } from "../hooks/Game";
import type { GameMode, GameType } from "../types/GameMode";
import WinnerModal from "../components/WinnerModal";

type LocationState = {
  mode: GameMode;
  type: GameType;
  player1: string;
  player2: string;
};

const GamePage = () => {
  const location = useLocation();
  const { mode, type, player1, player2 } = location.state as LocationState;

  const { 
    board, 
    currentPlayer,
    winner, 
    handleCellClick, 
    resetGame,
    xMoves,
    oMoves,
    highlightMove,
    disappearingMove
  } = useGame(mode, type, player1, player2);

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h2 className="text-2xl font-bold text-white">Tic Tac Toe</h2>

      <Board
        mode={mode}
        type={type}
        board={board}
        handleCellClick={handleCellClick}
        winner={winner}
        resetGame={resetGame}
        xMoves={xMoves}
        oMoves={oMoves}
        currentPlayer={currentPlayer}
        highlightMove={highlightMove}
        disappearingMove={disappearingMove}
      />

      {winner && (
        <WinnerModal winner={winner} onPlayAgain={resetGame} />
      )}
    </div>
  );
};

export default GamePage;