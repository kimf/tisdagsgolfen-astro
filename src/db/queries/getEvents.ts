import db from 'src/db';

export async function getEvents(seasonId: number) {
  return await db.query.events.findMany({
    where: (events, { eq }) => eq(events.seasonId, seasonId),
    with: {
      course: true
    }
  });
}

export type Events = NonNullable<Awaited<ReturnType<typeof getEvents>>>;

export async function getEventWithLeaderboardData(eventId: number) {
  return await db.query.events.findFirst({
    where: (events, { eq }) => eq(events.id, eventId),
    with: {
      course: true,
      eventSessions: {
        orderBy: (eventSessions, { asc }) => [asc(eventSessions.id)],
        with: {
          session: {
            with: {
              scorecards: {
                with: { players: { with: { player: true } } }
              }
            }
          }
        }
      }
    }
  });
}

export type EventWithLeaderboard = NonNullable<
  Awaited<ReturnType<typeof getEventWithLeaderboardData>>
>;

export async function getEventsWithLeaderboardData(seasonId: number) {
  return await db.query.events.findMany({
    where: (events, { eq }) => eq(events.seasonId, seasonId),
    with: {
      course: true,
      eventSessions: {
        orderBy: (eventSessions, { asc }) => [asc(eventSessions.id)],
        with: {
          session: {
            with: {
              scorecards: {
                with: { players: { with: { player: true } } }
              }
            }
          }
        }
      }
    }
  });
}

export type EventsWithLeaderboard = NonNullable<
  Awaited<ReturnType<typeof getEventWithLeaderboardData>>
>;
