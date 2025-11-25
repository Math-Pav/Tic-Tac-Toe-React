import { useEffect, useState } from "react";
import type { PlayerLeaderboardType } from "../../types/Player";
import { loadLeaderboard } from "../../utils/SaveScore";

const ScoreboardTable = () => {
  const [leaderboard, setLeaderboard] = useState<PlayerLeaderboardType[]>([]);

  useEffect(() => {
    const stored = loadLeaderboard();

    const scoresMap: Record<string, PlayerLeaderboardType> = {};

    stored.forEach(entry => {
      if (scoresMap[entry.username]) {
        scoresMap[entry.username].score += entry.score;
      } else {
        scoresMap[entry.username] = { ...entry };
      }
    });

    const sorted = Object.values(scoresMap).sort((a, b) => b.score - a.score);

    sorted.forEach((entry, index) => {
      entry.rank = index + 1;
    });

    setLeaderboard(sorted);
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Joueur</th>
            <th className="px-4 py-2 text-left">Score</th>
            <th className="px-4 py-2 text-left">Mode de jeu</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((player) => (
            <tr key={player.username} className="border-b last:border-none hover:bg-gray-50">
              <td className="px-4 py-2">{player.rank}</td>
              <td className="px-4 py-2">{player.username}</td>
              <td className="px-4 py-2">{player.score}</td>
              <td className="px-4 py-2 capitalize">{player.gamemode}</td>
              <td className="px-4 py-2">{player.timestamp.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreboardTable;
