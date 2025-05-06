// const rankingFn = (start: number, length: any) => ({
//   current: Array(length).fill(start),
//   next: start + length,
// });

import type { LeaderboardScorecard } from 'src/db/queries/getScoringSession';
import type { LeaderboardItem } from './buildLeaderboardItems';

export type RankedScorecard = LeaderboardScorecard & { rank: number };

export default function standardCompRank<T extends LeaderboardScorecard | LeaderboardItem>(
  scorecards: T[],
  attribute: keyof T,
  reverse: boolean,
  dealbreaker: keyof T | null
): (T & { rank: number })[] {
  // Sort scorecards first by attribute, then by dealbreaker if provided
  scorecards.sort((a, b) => {
    const primaryComparison = !reverse
      ? Number(b[attribute] ?? 0) - Number(a[attribute] ?? 0) // Descending order if reverse is true
      : Number(a[attribute] ?? 0) - Number(b[attribute] ?? 0); // Ascending order if reverse is false

    if (primaryComparison !== 0 || !dealbreaker) {
      return primaryComparison;
    }

    // If primaryComparison is a tie and dealbreaker is provided, compare by dealbreaker
    return !reverse
      ? Number(b[dealbreaker] ?? 0) - Number(a[dealbreaker] ?? 0) // Descending order if reverse is true
      : Number(a[dealbreaker] ?? 0) - Number(b[dealbreaker] ?? 0); // Ascending order if reverse is false
  });

  // Assign ranks with handling of ties
  const ranked: (T & { rank: number })[] = [];
  const rank = { next: 1, current: [] };

  scorecards.forEach((item, i) => {
    let currentRank: number;
    if (i > 0 && scorecards[i][attribute] === scorecards[i - 1][attribute]) {
      // Check for dealbreaker tie as well
      if (!dealbreaker || scorecards[i][dealbreaker] === scorecards[i - 1][dealbreaker]) {
        currentRank = ranked[i - 1].rank;
      } else {
        currentRank = rank.next;
      }
    } else {
      currentRank = rank.next;
    }

    ranked.push({ ...item, rank: currentRank });
    rank.next++;
  });

  return ranked;
}
