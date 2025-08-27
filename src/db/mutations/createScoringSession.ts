import { scorecardPlayers, scorecards, scoringSessions } from 'src/db/schema';
import type { Database } from 'src/db';
import type { z } from 'zod';
import type { CreateScoringSessionInput } from 'src/components/newscoringsession/NewScoringSession';

export async function createScoringSession(
  userId: number,
  formData: z.input<typeof CreateScoringSessionInput>,
  db: Database
) {
  const { specialWeek, eventType, scoringType, courseId, partOfFinal } = formData;
  // Prepare all scorecards

  const scoringSesh = await db
    .insert(scoringSessions)
    .values({
      ownerId: userId,
      courseId,
      special: specialWeek,
      eventType,
      scoringType,
      partOfFinal
    })
    .returning({ id: scoringSessions.id });

  const scorecardValues: {
    courseId: number;
    scoringSessionId: number;
    givenStrokes: number;
    playerIds: number[];
    teamIndex?: number;
    individualForTeamWIndividual?: boolean;
    partOfFinal?: boolean;
  }[] = [];

  if (eventType === 'team' || eventType === 'team_w_individual') {
    const teams = formData.teams;
    if (!teams) {
      throw new Error('No teams');
    }
    teams.forEach((team, index) => {
      scorecardValues.push({
        courseId,
        scoringSessionId: scoringSesh[0].id,
        givenStrokes: Number(team.strokes) || 0,
        teamIndex: index,
        playerIds: team.players.map((p) => p.id),
        partOfFinal
      });
    });
  } else {
    const players = formData.selectedPlayers;
    if (!players) {
      throw new Error('No players posted');
    }
    players.forEach((player) => {
      scorecardValues.push({
        courseId: courseId,
        scoringSessionId: scoringSesh[0].id,
        givenStrokes: Number(player.strokes) || 0,
        playerIds: [player.id],
        partOfFinal
      });
    });
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

  if (eventType === 'team_w_individual') {
    const individualScorecards = formData.teams.flatMap((team) =>
      team.players.map((player) => ({
        courseId,
        scoringSessionId: scoringSesh[0].id,
        individualForTeamWIndividual: true,
        givenStrokes: Number(player.strokes) || 0,
        teamScorecardId:
          scorecardsInserted[
            formData.teams.findIndex((t) => t.players.some((p) => p.id === player.id))
          ].id,
        playerId: player.id
      }))
    );

    // Batch insert individual scorecards
    const individualScorecardsInserted = await db
      .insert(scorecards)
      .values(individualScorecards)
      .returning({ id: scorecards.id });

    // Create values in scorecard_players for those as well
    individualScorecards.forEach((s, idx) => {
      scorecardPlayerValues.push({
        scorecardId: individualScorecardsInserted[idx].id,
        playerId: s.playerId
      });
    });
  }

  await db.insert(scorecardPlayers).values(scorecardPlayerValues);

  return scoringSesh[0].id;
}
