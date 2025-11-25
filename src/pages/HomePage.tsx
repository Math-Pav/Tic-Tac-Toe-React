import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import type { GameMode, GameType } from "../types/GameMode";

const HomePage = () => {
  const navigate = useNavigate();

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [modeSelected, setModeSelected] = useState<"human" | "computer" | null>(null);

  const startGame = (mode: GameMode, type: GameType) => {
    if (mode === "human" && !player1.trim()) {
      alert("Veuillez entrer le nom du Joueur 1");
      return;
    }
    if (mode === "human" && type !== "normal" && !player2.trim()) {
      alert("Veuillez entrer le nom du Joueur 2");
      return;
    }

    navigate("/game", { state: { mode, type, player1, player2: mode === "human" ? player2 : "IA" } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <h1 className="text-4xl font-bold">Tic Tac Toe</h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          color="primary"
          onClick={() => setModeSelected("human")}
        >
          2 Joueurs
        </Button>
        <Button
          color="secondary"
          onClick={() => setModeSelected("computer")}
        >
          Contre l'IA
        </Button>
      </div>

      {modeSelected && (
        <div className="flex flex-col gap-4 mt-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="Nom Joueur 1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {modeSelected === "human" && (
            <input
              type="text"
              placeholder="Nom Joueur 2"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              color="primary"
              onClick={() => startGame(modeSelected, "normal")}
            >
              Mode normal
            </Button>
            <Button
              color="secondary"
              onClick={() => startGame(modeSelected, "threeMoves")}
            >
              Mode 3 coups
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
