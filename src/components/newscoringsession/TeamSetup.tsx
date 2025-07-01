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
        team.players.push({ ...player, strokes: 0 });
      }
    }

    updateValue(
      'teams',
      state.teams.map((t, index) => (index === teamIndex ? { ...t, players: team.players } : t))
    );
  };

  return (
    <>
      <div class="flex items-center justify-between">
        <h2>Lag</h2>
        <Button intent="link" onClick={addTeam}>
          + Nytt lag
        </Button>
      </div>

      {state.teams.map((team, index) => (
        <div class="flex flex-col w-full p-4 pb-4 mb-4 bg-white border border-b border-gray-200rounded-xs">
          <input
            type="hidden"
            value={team.players.map((p) => p.id).join(',')}
            name={`teams[${index}][players]`}
          />
          <div class="flex flex-row items-center justify-between pb-2 mb-2 border-b border-dashed team-header">
            <div class="flex items-center gap-2">
              <h3>
                Lag <span>{index + 1}</span>
              </h3>
              {index > 0 && (
                <Button intent="inline" onClick={() => removeTeam(index)}>
                  -
                </Button>
              )}

              {teamsNeedStrokes && (
                <div>
                  <input name={`teams[${index}][strokes]`} value={team.strokes} class="sr-only" />
                  <div class="flex items-center justify-between gap-0">
                    <Button intent="inline" onClick={() => setTeamStrokes(index, team.strokes - 1)}>
                      {' '}
                      &minus;{' '}
                    </Button>

                    <h2 class="w-10 text-center">{team.strokes}</h2>

                    <Button intent="inline" onClick={() => setTeamStrokes(index, team.strokes + 1)}>
                      {' '}
                      &plus;{' '}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            {players.map((player, playerIndex) => (
              <div>
                {!playerIsInAnotherTeam(player.id, index) && (
                  <span
                    class={`inline-flex items-center justify-between w-full px-4 py-1 bg-white border-2 border-gray-200 rounded-xs active:scale-9 ${playerIsInTeam(index, player.id) ? 'bg-cyan-50 border-cyan-600 text-cyan-600' : ''}`}
                    onClick={() => toggleTeamPlayer(index, player.id)}
                  >
                    {player.name}
                  </span>
                )}

                {playerNeedStrokes && team.players.map((t) => t.id).includes(player.id) && (
                  <div class="flex flex-wrap gap-2">
                    <input
                      name={`teams[${index}][players][player.id][strokes]`}
                      value={player.strokes}
                      class="sr-only"
                    />
                    <div class="flex items-center justify-between gap-0">
                      <Button
                        intent="inline"
                        onClick={() => setSelectedPlayerStrokes(index, player.id, '--')}
                      >
                        &minus;
                      </Button>

                      <h2 class="w-10 text-center">{player.strokes}</h2>

                      <Button
                        intent="inline"
                        onClick={() => setSelectedPlayerStrokes(index, player.id, '++')}
                      >
                        &plus;
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
