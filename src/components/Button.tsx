import type { ColorType } from "../types/Colors.ts";
import { memo } from "react";
import type { ReactNode } from "react";
import { COLOR_BACKGROUND, COLOR_HOVER, COLOR_SHADOW } from "../constants/Colors.ts";

type Props = {
  color: ColorType;
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  outline?: boolean;
};

const Button = memo(
  ({ color, onClick, children, type = "button", disabled = false, fullWidth = false, outline = false }: Props) => {
    let baseClasses = "font-extrabold uppercase rounded-lg px-4 py-2 transition-transform active:translate-y-1 active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    if (fullWidth) {
      baseClasses += " w-full";
    }
    
    if (disabled) {
      baseClasses += " opacity-50 cursor-not-allowed";
    } else {
      baseClasses += " cursor-pointer";
    }

    let colorClasses = "";
    if (outline) {
      colorClasses = `bg-transparent border-2 ${COLOR_BACKGROUND[color]} text-white ${COLOR_HOVER[color]}`;
    } else {
      colorClasses = `${COLOR_BACKGROUND[color]} ${COLOR_HOVER[color]} ${COLOR_SHADOW[color]} text-white`;
    }

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${colorClasses}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;