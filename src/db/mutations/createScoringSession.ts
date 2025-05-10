import { scorecardPlayers, scorecards, scoringSessions } from 'src/db/schema';
import { extractPlayers, extractTeams } from 'src/lib/formDataExtractors';
import type { Database } from 'src/db';

export async function createScoringSession(userId: number, formData: FormData, db: Database) {
  const isSpecial = formData.get('specialweek') === 'on';
  const isTeamEvent = isSpecial && formData.get('teamevent') === 'on';
  const isStrokes = formData.get('strokes') === 'on';
  const courseId = Number(formData.get('course'));

  const scoringSesh = await db
    .insert(scoringSessions)
    .values({
      ownerId: userId,
      courseId,
      special: isSpecial,
      strokes: isStrokes,
      teamEvent: isTeamEvent
    })
    .returning({ id: scoringSessions.id });

  // Prepare all scorecards
  let scorecardValues: {
    courseId: number;
    scoringSessionId: number;
    givenStrokes: number;
    playerIds: string[];
    teamIndex?: number;
  }[];

  if (isTeamEvent) {
    const teams = extractTeams(formData);
    if (!teams) {
      throw new Error('No teams');
    }
    scorecardValues = teams.map((team, index) => ({
      courseId: courseId,
      scoringSessionId: scoringSesh[0].id,
      givenStrokes: Number(team.strokes) || 0,
      teamIndex: index,
      playerIds: team.players
    }));
  } else {
    const players = extractPlayers(formData);
    if (!players) {
      throw new Error('No players posted');
    }
    scorecardValues = players.map((player) => ({
      courseId: courseId,
      scoringSessionId: scoringSesh[0].id,
      givenStrokes: Number(player.strokes) || 0,
      playerIds: [player.id]
    }));
  }

  // Batch insert scorecards
  const scorecardsInserted = await db
    .insert(scorecards)
    .values(scorecardValues)
    .returning({ id: scorecards.id });

  const scorecardPlayerValues: { scorecardId: number; playerId: number }[] = [];
  scorecardValues.forEach((scorecard, idx) => {
    for (const playerId of scorecard.playerIds) {
      scorecardPlayerValues.push({
        scorecardId: scorecardsInserted[idx].id,
        playerId: Number(playerId)
      });
    }
  });

  await db.insert(scorecardPlayers).values(scorecardPlayerValues);

  return scoringSesh[0].id;
}
