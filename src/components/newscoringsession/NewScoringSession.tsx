import { useComputed } from '@preact/signals';
import { useReducer } from 'preact/hooks';
import type { EventType, ScoringSession, ScoringType } from 'src/db/schema/scoring_sessions';
import TeamSetup from './TeamSetup.tsx';
import Settings from './Settings.tsx';
import CourseSelector from './CourseSelector.tsx';
import type { Course } from 'src/db/schema/course.ts';
import Button from './Button.tsx';
import PlayerSetup from './PlayerSetup.tsx';

export type Team = {
  players: Player[];
  strokes: number;
};

export type Player = {
  id: number;
  name: string;
  strokes?: number;
};

type Props = {
  players: Player[];
  joinSession: ScoringSession | null | undefined;
  courses: Course[];
};

export type NewScoringSessionState = {
  courseId: number | undefined;
  specialWeek: boolean;
  eventType: EventType;
  scoringType: ScoringType;
  teams: Team[];
  selectedPlayers: Player[];
};

export type NewScoringSessionAction = {
  type: 'updateAttribute';
  payload: {
    key: keyof NewScoringSessionState;
    value: NewScoringSessionState[keyof NewScoringSessionState];
  };
};

const initialState = {
  courseId: undefined,
  specialWeek: false,
  eventType: 'individual' as EventType,
  scoringType: 'stableford' as ScoringType,
  teams: [
    { players: [], strokes: 10 },
    { players: [], strokes: 10 }
  ],
  selectedPlayers: []
};

// const addTeam = () => {
//   teams.push({ players: [], strokes: 10 });
// };

// const removeTeam = (index: number) => {
//   teams.splice(index, 1);
// };

const reducer = (
  state: NewScoringSessionState,
  action: NewScoringSessionAction
): NewScoringSessionState => {
  switch (action.type) {
    case 'updateAttribute':
      if (action.payload.key === 'specialWeek' && action.payload.value === false) {
        return {
          ...state,
          specialWeek: false,
          eventType: 'individual',
          scoringType: 'stableford'
        };
      }
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };

    default:
      return state;
  }
};

export default function NewScoringSession({ players, joinSession, courses }: Props) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    courseId: joinSession?.courseId,
    specialWeek: joinSession?.special || false,
    eventType: joinSession?.eventType || 'individual',
    scoringType: joinSession?.scoringType || 'stableford'
  });
  const { courseId, specialWeek, eventType, scoringType, teams, selectedPlayers } = state;

  // Derived valued based on state
  const isTeamEvent = eventType === 'team' || eventType === 'team_w_individual';

  const saveDisabled =
    !courseId ||
    (isTeamEvent
      ? teams.length === 0 || !teams.some((t) => t.players.length > 0)
      : selectedPlayers.length === 0);

  return (
    <div>
      <Settings
        specialWeek={specialWeek}
        eventType={eventType}
        scoringType={scoringType}
        updateValue={(key, value) => {
          dispatch({ type: 'updateAttribute', payload: { key, value } });
        }}
      />

      <CourseSelector
        courseId={courseId}
        courses={courses}
        onChange={(courseId: number) => {
          dispatch({ type: 'updateAttribute', payload: { key: 'courseId', value: courseId } });
        }}
      />

      {isTeamEvent && (
        <TeamSetup
          players={players}
          state={state}
          updateValue={(key, value) => {
            dispatch({ type: 'updateAttribute', payload: { key, value } });
          }}
        />
      )}

      {!isTeamEvent && (
        <PlayerSetup
          players={players}
          state={state}
          updateValue={(key, value) => {
            dispatch({ type: 'updateAttribute', payload: { key, value } });
          }}
        />
      )}

      <div class="fixed left-0 w-full p-4 backdrop-blur bottom-0 bottom-safe">
        <Button type="submit" size="block" disabled={saveDisabled}>
          SPELA GOLF
        </Button>
      </div>
    </div>
  );
}
