import type { PlayerLeaderboardType } from "../types/Player";

export const saveScore = (username: string, score: number, gamemode: "normal" | "threeShots") => {
  const stored = localStorage.getItem("leaderboard");
  const leaderboard: PlayerLeaderboardType[] = stored
    ? JSON.parse(stored).map((entry: any) => ({
        ...entry,
        timestamp: new Date(entry.timestamp),
      }))
    : [];

  leaderboard.push({
    rank: leaderboard.length + 1,
    username,
    score,
    timestamp: new Date(),
    gamemode,
  });

  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
};

export const loadLeaderboard = (): PlayerLeaderboardType[] => {
  const stored = localStorage.getItem("leaderboard");
  if (!stored) return [];

  return JSON.parse(stored).map((entry: any) => ({
    ...entry,
    timestamp: new Date(entry.timestamp),
  }));
};

