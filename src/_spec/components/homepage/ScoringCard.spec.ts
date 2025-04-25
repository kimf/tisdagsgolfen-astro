import { renderAstroComponent } from '_spec/helpers';
import ActiveSessions from 'src/components/homepage/ActiveSessions.astro';
import * as getActiveSessions from 'src/db/queries/getActiveSessions';

vi.mock('src/db/queries/getActiveSessions');

const fakeActiveSession = {
  id: 1,
  ownerId: 1,
  courseId: 1,
  createdAt: null,
  special: 1,
  strokes: 1,
  teamEvent: 0,
  state: 'STARTED',
  currentHole: 2,
  partOfFinal: 0,
  course: {
    id: 1,
    club: 'Test Club',
    name: 'Test Course',
    par: 72,
    holesCount: 18,
    eventsCount: 0,
    createdAt: '2023-10-01T00:00:00.000Z'
  }
};

describe('ActiveSessions', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  test('if no user', async () => {
    const result = await renderAstroComponent(ActiveSessions);
    expect(result).toContain('LOGGA IN');
  });

  test('if user and no activeSession', async () => {
    vi.mocked(getActiveSessions.getaActiveSessions).mockResolvedValue([]);
    const result = await renderAstroComponent(ActiveSessions, { props: { userId: 1 } });
    expect(result).toContain('NY RUNDA');
  });

  test('if user and existing activeSession', async () => {
    vi.mocked(getActiveSessions.getaActiveSessions).mockResolvedValue([fakeActiveSession]);
    const result = await renderAstroComponent(ActiveSessions, { props: { userId: 1 } });
    expect(result).toContain('FORTSÄTT');
  });

  // test('accepts a custom initial count', async () => {
  //   const result = await renderAstroComponent(Counter, { props: { initialCount: '4' } });
  //   const currentCount = result.querySelector('[data-current-count]');

  //   expect(currentCount).not.toBeNull();
  //   expect(currentCount!.textContent).toEqual('4');
  // });
});
