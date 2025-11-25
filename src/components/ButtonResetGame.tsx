type Props = {
  onReset: () => void;
};

const ButtonResetGame = ({ onReset }: Props) => {
  return (
    <button
      onClick={onReset}
      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold shadow-md transition"
    >
      Recommencer la partie
    </button>
  );
};

export default ButtonResetGame;
