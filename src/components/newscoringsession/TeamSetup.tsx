import Button from './Button';
import type { NewScoringSessionState, Player } from './NewScoringSession';

type Props = {
  players: Player[];
  state: NewScoringSessionState;
  updateValue: (
    key: keyof NewScoringSessionState,
    value: NewScoringSessionState[keyof NewScoringSessionState]
  ) => void;
};

export default function TeamSetup({ players, state, updateValue }: Props) {
  const addTeam = () => {
    const newTeam = { players: [], strokes: 10 };
    updateValue('teams', [...state.teams, newTeam]);
  };

  const removeTeam = (index: number) => {
    const updatedTeams = [...state.teams];
    updatedTeams.splice(index, 1);
    updateValue('teams', updatedTeams);
  };

  const teamsNeedStrokes = state.eventType === 'team';
  const playerNeedStrokes =
    state.eventType === 'individual' || state.eventType === 'team_w_individual';

  const playerIsInTeam = (teamIndex: number, playerId: number) => {
    return state.teams[teamIndex].players.some((p) => p.id === playerId);
  };

  const playerIsInAnotherTeam = (playerId: number, currentTeamIndex: number) => {
    const otherTeams = state.teams.filter((team, index) => index !== currentTeamIndex);
    return otherTeams.some((team) => team.players.some((p) => p.id === playerId));
  };

  const toggleTeamPlayer = (teamIndex: number, playerId: number) => {
    const team = state.teams[teamIndex];
    const playerIndex = team.players.findIndex((p) => p.id === playerId);
    const player = players.find((p) => p.id === playerId);
    if (playerIndex > -1) {
      team.players.splice(playerIndex, 1);
    } else {
      if (player) {
        team.players.push({ ...player, strokes: 10 });
      }
    }

    updateValue(
      'teams',
      state.teams.map((t, index) => (index === teamIndex ? { ...t, players: team.players } : t))
    );
  };

  const setTeamStrokes = (teamIndex: number, strokes: number) => {
    const updatedTeams = state.teams.map((team, idx) =>
      idx === teamIndex ? { ...team, strokes } : team
    );
    updateValue('teams', updatedTeams);
  };

  const setTeamPlayerStrokes = (teamIndex: number, playerId: number, strokes: number) => {
    const updatedTeams = state.teams.map((team, idx) => {
      if (idx !== teamIndex) return team;
      return {
        ...team,
        players: team.players.map((player) =>
          player.id === playerId ? { ...player, strokes } : player
        )
      };
    });
    updateValue('teams', updatedTeams);
  };

  return (
    <>
      <div class="flex items-center justify-between">
        <h2>Lag</h2>
        <Button intent="link" onClick={addTeam}>
          + Lägg till lag
        </Button>
      </div>

      {state.teams.map((team, index) => (
        <div class="flex flex-col w-full p-4 pb-4 mb-4 bg-white border border-b border-gray-200 rounded-xs">
          <div class="flex flex-row b-2 mb-2 pb-4 border-b border-dashed team-header border-gray-400">
            <div class="flex items-center gap-2">
              <h3>
                Lag <span>{index + 1}</span>
              </h3>
              {index > 0 && (
                <Button
                  intent="link"
                  size="icon"
                  onClick={() => removeTeam(index)}
                  class="text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash2-icon lucide-trash-2"
                  >
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </Button>
              )}
            </div>

            {teamsNeedStrokes && (
              <div class="flex items-center gap-2 ml-auto">
                <div class="flex items-center justify-between gap-0">
                  <Button intent="inline" onClick={() => setTeamStrokes(index, team.strokes - 1)}>
                    &minus;
                  </Button>

                  <h2 class="w-10 text-center">{team.strokes}</h2>

                  <Button intent="inline" onClick={() => setTeamStrokes(index, team.strokes + 1)}>
                    &#43;
                  </Button>
                </div>
              </div>
            )}
          </div>

          {playerNeedStrokes &&
            team.players.map((player) => (
              <div class="flex px-2 py-2 mb-2 border-b border-dashed border-gray-200 gap-3 items-center justify-between w-full">
                <span class="w-20">{player.name}</span>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center justify-between gap-0">
                    <Button
                      intent="inline"
                      onClick={() =>
                        setTeamPlayerStrokes(index, player.id, (player.strokes ?? 0) - 1)
                      }
                    >
                      &minus;
                    </Button>
                    <h2 class="w-10 text-center">{player.strokes}</h2>
                    <Button
                      intent="inline"
                      onClick={() =>
                        setTeamPlayerStrokes(index, player.id, (player.strokes ?? 0) + 1)
                      }
                    >
                      &#43;
                    </Button>
                  </div>
                </div>
                <Button
                  size="icon"
                  intent="link"
                  onClick={() => toggleTeamPlayer(index, player.id)}
                  class="text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash2-icon lucide-trash-2"
                  >
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </Button>
              </div>
            ))}

          <div class="flex-wrap flex">
            {players.map((player) => (
              <>
                {(playerNeedStrokes && playerIsInTeam(index, player.id)) ||
                  (!playerIsInAnotherTeam(player.id, index) && (
                    <span
                      class={`px-4 py-2 mb-2 mr-2 border rounded-xs active:opacity-50 ${playerIsInTeam(index, player.id) ? 'bg-cyan-100 border-cyan-600 text-cyan-600' : 'bg-white border-gray-200'}`}
                      onClick={() => toggleTeamPlayer(index, player.id)}
                    >
                      {player.name}
                    </span>
                  ))}
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
