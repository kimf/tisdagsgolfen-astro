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
  const selectedPlayerIds = state.selectedPlayers.map((s) => s.id);

  return (
    <div>
      <h2 class="flex justify-between">Spelare</h2>
      <div class="flex flex-col gap-2 pt-4">
        {players.map((player, index) => (
          <Checkbox
            label={player.name}
            onChange={() => {
              updateValue(
                'selectedPlayers',
                selectedPlayerIds.includes(player.id)
                  ? state.selectedPlayers.filter((p) => p.id !== player.id)
                  : [...state.selectedPlayers, player]
              );
            }}
            size="lg"
          >
            {selectedPlayerIds.includes(player.id) && (
              <Quantity
                value={state.selectedPlayers.find((p) => p.id === player.id)?.strokes || 0}
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
