import type { EventsWithLeaderboard } from 'src/db/queries/getEvents';
import type { Player } from 'src/db/queries/getPlayers';
import type { Profile } from 'src/db/schema/profile';
import standardCompRank from './standardCompRank';
import { cacheable } from './cacheable';

export type LeaderboardItem = {
  rank?: number;
  id: number;
  points: number;
  strokes: number;
  average: number;
  beers: number;
  ciders: number;
  fines: number;
  totalFines: number;
  events: number;
  strokes_array: number[];
  points_array: number[];
  special_array: number[];
  player: Player;
};

type ScoringSessionItem = EventsWithLeaderboard['eventSessions'][number]['session'];

function buildLeaderboardItems(sessions: ScoringSessionItem[], players: Profile[]) {
  const leaderboardItems: LeaderboardItem[] = [];

  const specialSessions = sessions.filter((s) => s.special);
  const regularSessions = sessions.filter((s) => !s.special);

  const scorecards = sessions.flatMap((session) => session.scorecards);
  const specialScorecards = specialSessions.flatMap((session) => session.scorecards);
  const regularScorecards = regularSessions.flatMap((session) => session.scorecards);

  for (const player of players) {
    const playerScorecards = scorecards.filter((s) =>
      s.players.flatMap((p) => p.player).find((p) => p.id === player.id)
    );

    if (playerScorecards.length === 0) {
      continue;
    }

    const allPlayerRegularScorecards = regularScorecards.filter((s) =>
      s.players.flatMap((p) => p.player).find((p) => p.id === player.id)
    );

    const playerRegularScorecards = regularScorecards
      .filter((s) => s.players.flatMap((p) => p.player).find((p) => p.id === player.id))
      .sort((a, b) => (b.weekPoints ?? 0) - (a.weekPoints ?? 0))
      .slice(0, 4);
    const playerSpecialScorecards = specialScorecards
      .filter((s) => s.players.flatMap((p) => p.player).find((p) => p.id === player.id))
      .sort((a, b) => (b.weekPoints ?? 0) - (a.weekPoints ?? 0))
      .slice(0, 2);

    const playerRegularPointsArray = playerRegularScorecards.map((s) => s.weekPoints);
    const playerSpecialPointsArray = playerSpecialScorecards.map((s) => s.weekPoints);

    const beers = playerScorecards.length
      ? playerScorecards.reduce((a, b) => a + b.players.reduce((a, b) => a + (b.beers ?? 0), 0), 0)
      : 0;

    const ciders = playerScorecards.length
      ? playerScorecards.reduce((a, b) => a + b.players.reduce((a, b) => a + (b.ciders ?? 0), 0), 0)
      : 0;

    const fines = playerScorecards.length
      ? playerScorecards.reduce((a, b) => a + b.players.reduce((a, b) => a + (b.fines ?? 0), 0), 0)
      : 0;

    const totalFines = fines - beers * 50 - ciders * 25;

    leaderboardItems.push({
      id: player.id,
      player,
      points: [...playerRegularPointsArray, ...playerSpecialPointsArray]
        .filter((p): p is number => p !== null)
        .reduce((a, b) => a + b, 0),
      average: allPlayerRegularScorecards.length
        ? allPlayerRegularScorecards.reduce((a, b) => a + (b.points ?? 0), 0) /
          allPlayerRegularScorecards.length
        : 0,
      strokes: allPlayerRegularScorecards.length
        ? allPlayerRegularScorecards.reduce((a, b) => a + (b.strokes ?? 0), 0) /
          allPlayerRegularScorecards.length
        : 0,
      beers,
      ciders,
      fines,
      totalFines,
      events: playerScorecards.length,
      strokes_array: playerRegularScorecards
        .map((s) => s.strokes)
        .filter((p): p is number => p !== null),
      points_array: playerRegularPointsArray.filter((p): p is number => p !== null),
      special_array: playerSpecialPointsArray.filter((p): p is number => p !== null)
    });
  }

  const finesPlayers = standardCompRank(leaderboardItems, 'totalFines', true, null);
  const sortedPlayers = standardCompRank(leaderboardItems, 'points', false, 'average');
  const scratchPlayers = standardCompRank(leaderboardItems, 'strokes', true, null);

  return {
    kr: finesPlayers,
    rank: sortedPlayers,
    scratch: scratchPlayers
  };
}

const cachedBuilder = cacheable((sessions: ScoringSessionItem[], players: Player[]) =>
  buildLeaderboardItems(sessions, players)
);

export default cachedBuilder;
