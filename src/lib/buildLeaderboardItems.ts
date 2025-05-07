import type { EventsWithLeaderboard } from 'src/db/queries/getEvents';
import type { Player } from 'src/db/queries/getPlayers';
import type { Profile } from 'src/db/schema/profile';
import { shortName } from 'src/lib/formatters';
import { cacheable } from './cacheable';

export type LeaderboardItem = {
  rank?: number;
  id: number;
  points: number;
  strokes: number;
  average: number;
  averageStrokes: number;
  beers: number;
  ciders: number;
  fines: number;
  averageFines: number;
  totalFines: number;
  events: number;
  strokes_array: number[];
  points_array: number[];
  special_array: number[];
  shortName: string;
  avatarUrl: string | null;
  finesSummary: string;
  beersAndCidersSummary: string;
  rankSummary: string;
  specialSummary: string;
  scratchSummary: string;
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
      .slice(0, 5);
    const playerSpecialScorecards = specialScorecards
      .filter((s) => s.players.flatMap((p) => p.player).find((p) => p.id === player.id))
      .sort((a, b) => (b.weekPoints ?? 0) - (a.weekPoints ?? 0))
      .slice(0, 2);

    const playerRegularPointsArray = playerRegularScorecards.map((s) => s.weekPoints);
    const playerSpecialPointsArray = playerSpecialScorecards.map((s) => s.weekPoints);

    const playerStrokesArray = regularScorecards
      .filter((s) => s.players.flatMap((p) => p.player).find((p) => p.id === player.id))
      .sort((a, b) => (b.strokes ?? 0) - (a.strokes ?? 0))
      .slice(0, 5)
      .map((s) => s.strokes);

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

    const finesSummary = `${fines > 0 ? '+' : ''}${fines} kr`;
    const beersString = beers === 0 ? null : beers > 1 ? `${beers}x🍺` : '🍺';
    const cidersString = ciders === 0 ? null : ciders > 1 ? `${ciders}x🥤` : '🥤';
    const beersAndCidersSummary = [
      beersString,
      beersString && cidersString ? '•' : '',
      cidersString
    ].join('');

    const strokes_array = playerRegularScorecards
      .map((s) => s.strokes)
      .filter((p): p is number => p !== null);

    const points_array = playerRegularPointsArray.filter((p): p is number => p !== null);
    const special_array = playerSpecialPointsArray.filter((p): p is number => p !== null);

    const emptyStrokes =
      strokes_array.length < 5 ? [...Array(5 - strokes_array.length)].map((_) => 0) : [];
    const scratchSummary = `${[...strokes_array, ...emptyStrokes].join(', ')}`;

    const emptyPoints =
      points_array.length < 5 ? [...Array(5 - points_array.length)].map((_) => 0) : [];
    const emptySpecialPoints =
      special_array.length < 2 ? [...Array(2 - special_array.length)].map((_) => 0) : [];
    const rankSummary = [...points_array, ...emptyPoints].join(', ');
    const specialSummary = [...special_array, ...emptySpecialPoints].join(', ');

    leaderboardItems.push({
      id: player.id,
      avatarUrl: player.avatarUrl,
      shortName: shortName(player.fullName),
      points: [...playerRegularPointsArray, ...playerSpecialPointsArray]
        .filter((p): p is number => p !== null)
        .reduce((a, b) => a + b, 0),
      average: allPlayerRegularScorecards.length
        ? allPlayerRegularScorecards.reduce((a, b) => a + (b.points ?? 0), 0) /
          allPlayerRegularScorecards.length
        : 0,
      strokes: playerStrokesArray.filter((p): p is number => p !== null).reduce((a, b) => a + b, 0),
      averageStrokes: allPlayerRegularScorecards.length
        ? allPlayerRegularScorecards.reduce((a, b) => a + (b.strokes ?? 0), 0) /
          allPlayerRegularScorecards.length
        : 0,
      beers,
      ciders,
      fines,
      totalFines,
      averageFines: playerScorecards.length ? fines / playerScorecards.length : 0,
      events: playerScorecards.length,
      strokes_array,
      points_array,
      special_array,
      finesSummary,
      rankSummary,
      scratchSummary,
      specialSummary,
      beersAndCidersSummary
    });
  }

  return leaderboardItems;
}

const cachedBuilder = cacheable((sessions: ScoringSessionItem[], players: Player[]) =>
  buildLeaderboardItems(sessions, players)
);

export default cachedBuilder;
