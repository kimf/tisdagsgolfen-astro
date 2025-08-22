import type { ScoringSessionState } from 'src/db/schema/scoring_sessions';
import { cacheable } from './cacheable';
import standardCompRank from './standardCompRank';
import type { ScorecardWithPlayersAndScores } from 'src/db/queries/getEvents';
import type { Profile } from 'src/db/schema/profile';

const WINNER_POINTS = [8, 5, 3, 1];

export type FinalLeaderboardItem = {
  rank?: number;
  id: number;
  pointsWithBonus: number;
  points: number;
  strokes: number;
  bonus: number;

  rounds: {
    toPar: number;
    points: number;
    strokes: number;
    through: number;
    givenStrokes: number;
    active?: boolean;
  }[];
  player: Profile;
  toPar: number;
};

export type ScorecardWithPlayersAndScoresAndScoringSessionState = ScorecardWithPlayersAndScores & {
  state: ScoringSessionState | null;
};

function buildFinalLeaderboardItems(
  scorecards: ScorecardWithPlayersAndScoresAndScoringSessionState[],
  players: Profile[],
  seasonWinners: string[]
) {
  const leaderboardItems: FinalLeaderboardItem[] = [];

  for (const player of players) {
    const playerScorecards = scorecards.filter((s) =>
      s.players.flatMap((p) => p.player).find((p) => p.id === player.id)
    );

    if (playerScorecards.length === 0) {
      continue;
    }

    const winnerIndex = seasonWinners.findIndex((p) => p === player.id.toString());
    const bonus = winnerIndex !== -1 ? WINNER_POINTS[winnerIndex] : 0;
    const toPar = playerScorecards.reduce(
      (a, b) => a + ((b.through || 0) * 2 - (b.points || 0)),
      0
    );
    leaderboardItems.push({
      id: player.id,
      player,
      pointsWithBonus: playerScorecards.reduce((a, b) => a + (b.points || 0), 0) + bonus,
      points: playerScorecards.reduce((a, b) => a + (b.points || 0), 0),
      strokes: playerScorecards.reduce((a, b) => a + (b.strokes || 0), 0),
      rounds: playerScorecards.map((s) => ({
        toPar: s.toPar || 0,
        points: s.points || 0,
        strokes: s.strokes || 0,
        through: s.through || 0,
        givenStrokes: s.givenStrokes || 0,
        active: s.state !== 'CLOSED'
      })),
      bonus,
      toPar: toPar - bonus
    });
  }

  const sortedPlayers = standardCompRank(leaderboardItems, 'pointsWithBonus', false, null);

  return sortedPlayers;
}

const cachedBuilder = cacheable(
  (
    scorecards: ScorecardWithPlayersAndScoresAndScoringSessionState[],
    players: Profile[],
    seasonWinners: string[]
  ) => buildFinalLeaderboardItems(scorecards, players, seasonWinners)
);

export default cachedBuilder;
