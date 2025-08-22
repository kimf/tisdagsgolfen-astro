import { useReducer, useState } from 'preact/hooks';
import type { EventType, ScoringSession, ScoringType } from 'src/db/schema/scoring_sessions';
import TeamSetup from './TeamSetup.tsx';
import Settings from './Settings.tsx';
import CourseSelector from './CourseSelector.tsx';
import type { Course } from 'src/db/schema/course.ts';
import Button from './Button.tsx';
import PlayerSetup from './PlayerSetup.tsx';
import Radio from './Radio.tsx';
import { ActionError, actions } from 'astro:actions';
import { navigate } from 'astro:transitions/client';
import { z } from 'astro:schema';
import type { SeasonState } from 'src/db/schema/season.ts';

export type Team = {
  players: Player[];
  strokes: number;
};

export type Player = {
  id: number;
  name: string;
  strokes?: number;
};

const playerZod = z.object({
  id: z.number(),
  name: z.string(),
  strokes: z.number().optional()
});

const teamZod = z.object({
  players: z.array(playerZod),
  strokes: z.number()
});

export const CreateScoringSessionInput = z.object({
  courseId: z.number(),
  specialWeek: z.boolean(),
  eventType: z.enum(['individual', 'team', 'team_w_individual']),
  scoringType: z.enum(['stableford', 'strokes', 'modified', 'irish', 'bolle', 'snigel']),
  teams: z.array(teamZod),
  selectedPlayers: z.array(playerZod),
  partOfFinal: z.boolean()
});

type Props = {
  players: Player[];
  joinSession: ScoringSession | null | undefined;
  courses: Course[];
  seasonState: SeasonState;
};

export type NewScoringSessionState = {
  courseId: number | undefined;
  specialWeek: boolean;
  eventType: EventType;
  scoringType: ScoringType;
  teams: Team[];
  selectedPlayers: Player[];
  readyForSetup: boolean;
  partOfFinal: boolean;
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
  selectedPlayers: [],
  readyForSetup: false,
  partOfFinal: false
};

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

      if (action.payload.key === 'eventType' && state.eventType === 'team_w_individual') {
        return {
          ...state,
          scoringType: !['stableford', 'strokes', 'modififed'].includes(state.scoringType)
            ? 'stableford'
            : state.scoringType,
          eventType: action.payload.value as EventType
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

export default function NewScoringSession({ players, joinSession, courses, seasonState }: Props) {
  const seasonIsInFinalState = seasonState === 'FINAL';
  const skipSetup = seasonIsInFinalState && courses.length === 1;
  const initialCourseId = joinSession?.courseId || skipSetup ? courses[0].id : undefined;

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    courseId: initialCourseId,
    specialWeek: joinSession?.special || false,
    eventType: joinSession?.eventType || 'individual',
    scoringType: joinSession?.scoringType || 'stableford',
    readyForSetup: skipSetup && initialCourseId !== undefined,
    partOfFinal: seasonIsInFinalState || !!joinSession?.partOfFinal
  });
  const [error, setError] = useState<undefined | ActionError<NewScoringSessionState>>(undefined);
  const { courseId, specialWeek, eventType, scoringType, teams, selectedPlayers, readyForSetup } =
    state;

  const save = async () => {
    const input = CreateScoringSessionInput.parse(state);
    const { data, error } = await actions.createScoringSession(input);

    if (error) {
      setError(error);
      return;
    } else {
      setError(undefined);
      navigate(`/scoring/${data}`);
    }
  };

  // Derived valued based on state
  const isTeamEvent = eventType === 'team' || eventType === 'team_w_individual';

  const saveDisabled =
    !courseId ||
    (isTeamEvent
      ? teams.length === 0 || !teams.some((t) => t.players.length > 0)
      : selectedPlayers.length === 0);

  const showTeamSetup = isTeamEvent && readyForSetup;
  const showPlayerSetup = !isTeamEvent && readyForSetup;
  const showSettings = !readyForSetup;

  const doneWithSettings = courseId && eventType && scoringType;
  return (
    <div>
      {error && <pre class="text-red-600 bg-cyan-950">{JSON.stringify(error, null, 2)}</pre>}
      {showSettings && (
        <>
          {!seasonIsInFinalState && (
            <>
              <h2>Veckotyp</h2>
              <div class="flex gap-2 flex-wrap mb-4">
                <Radio
                  checked={!specialWeek.valueOf()}
                  label="Normal vecka"
                  onChange={() =>
                    dispatch({
                      type: 'updateAttribute',
                      payload: { key: 'specialWeek', value: !specialWeek }
                    })
                  }
                />
                <Radio
                  checked={specialWeek.valueOf()}
                  label="Specialvecka"
                  onChange={() =>
                    dispatch({
                      type: 'updateAttribute',
                      payload: { key: 'specialWeek', value: !specialWeek }
                    })
                  }
                />
              </div>
            </>
          )}

          <CourseSelector
            courseId={courseId}
            courses={courses}
            onChange={(courseId: number) => {
              dispatch({
                type: 'updateAttribute',
                payload: { key: 'courseId', value: courseId }
              });
            }}
          />

          {!seasonIsInFinalState && (
            <Settings
              specialWeek={specialWeek}
              eventType={eventType}
              scoringType={scoringType}
              updateValue={(key, value) => {
                dispatch({ type: 'updateAttribute', payload: { key, value } });
              }}
            />
          )}
        </>
      )}

      {readyForSetup && !skipSetup && (
        <>
          <a
            href="#"
            onClick={() =>
              dispatch({
                type: 'updateAttribute',
                payload: { key: 'readyForSetup', value: false }
              })
            }
          >
            &larr; Tillbaka till inställningarna
          </a>
          <hr class="mb-12" />
        </>
      )}

      {showTeamSetup && (
        <>
          <h2>Sätt upp lagen</h2>
          <TeamSetup
            players={players}
            state={state}
            updateValue={(key, value) => {
              dispatch({ type: 'updateAttribute', payload: { key, value } });
            }}
          />
        </>
      )}

      {showPlayerSetup && (
        <PlayerSetup
          players={players}
          state={state}
          updateValue={(key, value) => {
            dispatch({ type: 'updateAttribute', payload: { key, value } });
          }}
        />
      )}

      <div class="fixed left-0 w-full p-4 backdrop-blur bottom-0 bottom-safe">
        {!readyForSetup && (
          <Button
            size="block"
            onClick={() =>
              dispatch({
                type: 'updateAttribute',
                payload: { key: 'readyForSetup', value: true }
              })
            }
            disabled={!doneWithSettings}
          >
            VÄLJ SPELARE
          </Button>
        )}

        {readyForSetup && (
          <Button size="block" disabled={saveDisabled} onClick={save}>
            SPELA GOLF
          </Button>
        )}
      </div>
    </div>
  );
}
