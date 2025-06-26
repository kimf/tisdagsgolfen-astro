import type {
  EventsWithLeaderboard,
  ScorecardWithPlayersAndScores
} from 'src/db/queries/getEvents';
import type { Player } from 'src/db/queries/getPlayers';
import type { Profile } from 'src/db/schema/profile';
import { shortName } from 'src/lib/formatters';
import { cacheable } from './cacheable';

export type LeaderboardItem = {
  rank?: number;
  id: number;
  points: number;
  strokes: number;
  average: string;
  averageStrokes: string;
  beers: number;
  ciders: number;
  fines: number;
  averageFines: string;
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
  guest: boolean;
};

type ScoringSessionItem = EventsWithLeaderboard['eventSessions'][number]['session'];

function sumPlayerStat(
  scorecards: ScorecardWithPlayersAndScores[],
  stat: 'beers' | 'fines' | 'ciders'
) {
  return scorecards.reduce((a, b) => a + b.players.reduce((a, b) => a + (b[stat] ?? 0), 0), 0);
}

function buildLeaderboardItems(sessions: ScoringSessionItem[], players: Profile[]) {
  const leaderboardItems: LeaderboardItem[] = [];

  const specialSessions = sessions.filter((s) => s.special);
  const regularSessions = sessions.filter((s) => !s.special);

  const scorecards = sessions
    .flatMap((session) => session.scorecards)
    .filter((s) => !s.individualForTeamWIndividual);
  const specialScorecards = specialSessions
    .flatMap((session) => session.scorecards)
    .filter((s) => !s.individualForTeamWIndividual);
  const regularScorecards = regularSessions
    .flatMap((session) => session.scorecards)
    .filter((s) => !s.individualForTeamWIndividual);

  for (const player of players) {
    const isPlayer = (s: any) => s.players.some((p: any) => p.player.id === player.id);

    const playerScorecards = scorecards.filter(isPlayer);
    if (playerScorecards.length === 0) continue;

    const playerRegularScorecardsAll = regularScorecards.filter(isPlayer);
    const playerSpecialScorecardsAll = specialScorecards.filter(isPlayer);

    const playerRegularScorecards = [...playerRegularScorecardsAll]
      .sort((a, b) => (b.weekPoints ?? 0) - (a.weekPoints ?? 0))
      .slice(0, 5);
    const playerSpecialScorecards = [...playerSpecialScorecardsAll]
      .sort((a, b) => (b.weekPoints ?? 0) - (a.weekPoints ?? 0))
      .slice(0, 2);

    const playerRegularPointsArray = playerRegularScorecards.map((s) => s.weekPoints);
    const playerSpecialPointsArray = playerSpecialScorecards.map((s) => s.weekPoints);
    const playerStrokesArray = [...playerRegularScorecardsAll]
      .sort((a, b) => (b.strokes ?? 0) - (a.strokes ?? 0))
      .map((s) => s.strokes);

    const events = playerScorecards.length;

    const beers = sumPlayerStat(playerScorecards, 'beers');
    const ciders = sumPlayerStat(playerScorecards, 'ciders');
    const fines = sumPlayerStat(playerScorecards, 'fines');

    const totalFines = fines - beers * 50 - ciders * 25;
    const averageFines = events ? Math.abs(totalFines / events).toFixed(2) : '0.00';

    const finesSummary = `${fines > 0 ? '+' : ''}${fines} kr`;
    const beersString = beers === 0 ? null : beers > 1 ? `${beers}x🍺` : '🍺';
    const cidersString = ciders === 0 ? null : ciders > 1 ? `${ciders}x🥤` : '🥤';
    const beersAndCidersSummary = [
      beersString,
      beersString && cidersString ? '•' : '',
      cidersString
    ].join('');

    const strokes_array = playerStrokesArray.filter((p): p is number => p !== null);
    const points_array = playerRegularPointsArray.filter((p): p is number => p !== null);
    const special_array = playerSpecialPointsArray.filter((p): p is number => p !== null);

    const emptyPoints = Array(Math.max(0, 5 - points_array.length)).fill(0);
    const emptySpecialPoints = Array(Math.max(0, 2 - special_array.length)).fill(0);
    const rankSummary = [...points_array, ...emptyPoints].join(', ');
    const specialSummary = [...special_array, ...emptySpecialPoints].join(', ');
    const scratchSummary = playerStrokesArray.join(', ');

    leaderboardItems.push({
      id: player.id,
      avatarUrl: player.avatarUrl,
      shortName: shortName(player.fullName),
      guest: player.guest,
      points: [...playerRegularPointsArray, ...playerSpecialPointsArray]
        .filter((p): p is number => p !== null)
        .reduce((a, b) => a + b, 0),
      average: (playerRegularScorecardsAll.length
        ? playerRegularScorecardsAll.reduce((a, b) => a + (b.points ?? 0), 0) /
          playerRegularScorecardsAll.length
        : 0
      ).toFixed(1),
      strokes: playerStrokesArray.filter((p): p is number => p !== null).reduce((a, b) => a + b, 0),
      averageStrokes: (playerRegularScorecardsAll.length
        ? playerRegularScorecardsAll.reduce((a, b) => a + (b.strokes ?? 0), 0) /
          playerRegularScorecardsAll.length
        : 0
      ).toFixed(1),
      beers,
      ciders,
      fines,
      totalFines,
      averageFines,
      events,
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
