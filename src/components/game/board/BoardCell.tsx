import { memo } from "react";
import Circle from "../../assets/game/Circle";
import Cross from "../../assets/game/Cross";
import type { PlayerCellType } from "../../../types/Player";

type Props = {
  boardCell: PlayerCellType;
  coords: { x: number; y: number };
  highlight?: boolean;
  disappearing?: boolean;
  onClick?: () => void;
};

const BoardCell = ({ 
  boardCell, 
  highlight = false, 
  disappearing = false,
  onClick 
}: Props) => {
  const shouldPulse = highlight || disappearing;

  return (
    <div
      className={`w-16 h-16 md:w-20 md:h-20 border-2 border-white
                  flex items-center justify-center text-3xl font-washa cursor-pointer
                  ${boardCell.startsWith("W") ? "bg-primary" : "bg-grey-medium"}
                  ${shouldPulse ? "animate-pulse" : ""}`}
      onClick={onClick}
    >
      {(boardCell === "X" || boardCell === "NX" || boardCell === "WX") && <Cross />}
      {(boardCell === "O" || boardCell === "NO" || boardCell === "WO") && <Circle />}
    </div>
  );
};

export default memo(BoardCell);