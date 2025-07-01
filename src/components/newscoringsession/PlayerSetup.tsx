import type { NewScoringSessionState, Player } from './NewScoringSession';
import Checkbox from './Checkbox.tsx';
import Quantity from './Quantity.tsx';

type Props = {
  players: Player[];
  state: NewScoringSessionState;
  updateValue: (
    key: keyof NewScoringSessionState,
    value: NewScoringSessionState[keyof NewScoringSessionState]
  ) => void;
};

export default function PlayerSetup({ players, state, updateValue }: Props) {
  const hasSelectedPlayer = (id: number) => {
    let ids = [] as number[];
    if (state.eventType !== 'individual') {
      ids = state.teams.flatMap((team) => team.players.map((p) => p.id));
    } else {
      ids = state.selectedPlayers.map((p) => p.id);
    }
    return ids.includes(id);
  };

  const isTeamEvent = state.eventType === 'team' || state.eventType === 'team_w_individual';

  return (
    <div>
      <h2 class="flex justify-between">Spelare</h2>
      <div class="flex flex-col gap-2 pt-4">
        {players.map((player, index) => (
          <Checkbox
            name={`players[${index}][id]`}
            value={player.id}
            label={player.name}
            onChange={() => {
              updateValue(
                'selectedPlayers',
                state.selectedPlayers.includes(player.id)
                  ? state.selectedPlayers.filter((p) => p.id !== player.id)
                  : [...state.selectedPlayers, player]
              );
            }}
            size="lg"
          >
            {!isTeamEvent && hasSelectedPlayer(player.id) && (
              <Quantity
                value={state.selectedPlayers.find((p) => p.id === player.id)?.strokes || 0}
                name={`players[${index}]['strokes']`}
                updateValue={(value: number) => {
                  const updatedPlayers = state.selectedPlayers.map((p) => {
                    if (p.id === player.id) {
                      return { ...p, strokes: value };
                    }
                    return p;
                  });
                  updateValue('selectedPlayers', updatedPlayers);
                }}
              />
            )}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}
