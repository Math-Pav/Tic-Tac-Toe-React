import { useNavigate } from "react-router";

type Props = {
  winner: string;
  onPlayAgain: () => void;
};

const WinnerModal = ({ winner, onPlayAgain }: Props) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#284551] rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fadeIn">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {winner === "D" ? "🤝 Égalité !" : "🎉 Victoire !"}
          </h2>
          
          <p className="text-2xl text-white mb-8">
            {winner === "D" 
              ? "Partie nulle, bien joué à tous !" 
              : `${winner} remporte la partie !`
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onPlayAgain}
              className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-md transition transform hover:scale-105"
            >
              Rejouer
            </button>
            
            <button
              onClick={handleGoHome}
              className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold shadow-md transition transform hover:scale-105"
            >
              Accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;