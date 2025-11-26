import BoardCell from "./BoardCell";
import type { GameMode, GameType } from "../../../types/GameMode";
import type { BoardType, CoordinatesType } from "../../../types/Board";
import ButtonResetGame from "../../ButtonResetGame";

type Props = {
  mode: GameMode;
  type: GameType;
  board: BoardType;
  handleCellClick: (coords: CoordinatesType) => void;
  winner?: string | null;
  resetGame?: () => void;
  xMoves: { x: number; y: number }[];
  oMoves: { x: number; y: number }[];
  currentPlayer: "X" | "O";
  highlightMove: CoordinatesType | null;
  disappearingMove: CoordinatesType | null;
};

const Board = ({ board, handleCellClick, winner, resetGame, highlightMove}: Props) => {
  return (
    <div className="flex flex-col gap-4 text-white">
      {resetGame && <ButtonResetGame onReset={resetGame} />}
      <div className="grid gap-2">
        {board.map((row, x) => (
          <div key={x} className="flex">
            {row.map((cell, y) => (
              <BoardCell
                key={`${x}-${y}`}
                boardCell={cell}
                highlight={highlightMove?.x === x && highlightMove?.y === y}
                coords={{ x, y }}
                onClick={() => handleCellClick({ x, y })}
              />
            ))}
          </div>
        ))}
      </div>
      {winner && <p className="text-xl font-bold">{winner} a gagné !</p>}
    </div>
  );
};

export default Board;
