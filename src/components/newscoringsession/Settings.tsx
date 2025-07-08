import type { EventType, ScoringType } from 'src/db/schema/scoring_sessions.ts';
import Radio from './Radio.tsx';

interface Props {
  eventType: EventType;
  scoringType: ScoringType;
  specialWeek: boolean;
  updateValue: (
    key: 'eventType' | 'scoringType' | 'specialWeek',
    value: EventType | ScoringType | boolean
  ) => void;
}

export default function Settings({ eventType, scoringType, specialWeek, updateValue }: Props) {
  return (
    <div class="flex gap-2 flex-col mb-4">
      <div class="flex gap-2 flex-col">
        <h2>Spelsätt</h2>
        <Radio
          checked={eventType === 'individual'}
          label="Individuellt"
          disabled={!specialWeek}
          onChange={() => updateValue('eventType', 'individual')}
        />
        <Radio
          checked={eventType === 'team'}
          label="Lagtävling"
          disabled={!specialWeek}
          onChange={() => updateValue('eventType', 'team')}
        />
        <Radio
          checked={eventType === 'team_w_individual'}
          label="Bästbollsvariant"
          disabled={!specialWeek}
          onChange={() => updateValue('eventType', 'team_w_individual')}
        />

        {eventType === 'team_w_individual' && <h2 class="mt-4">Räknesätt - Bästboll</h2>}
        {eventType !== 'team_w_individual' && <h2 class="mt-4">Räknesätt</h2>}

        <Radio
          checked={scoringType === 'strokes'}
          label="Slaggolf"
          disabled={!specialWeek}
          onChange={() => updateValue('scoringType', 'strokes')}
        />
        <Radio
          checked={scoringType === 'stableford'}
          label="Poängbogey"
          disabled={!specialWeek}
          onChange={() => updateValue('scoringType', 'stableford')}
        />

        <Radio
          checked={scoringType === 'modified'}
          disabled={!specialWeek}
          label="Modifierad Poängbogey"
          description="Eagle 5p, Birdie 2p, Par 0p, Bogey -1p, DB+ -3p"
          onChange={() => updateValue('scoringType', 'modified')}
        />

        <Radio
          checked={scoringType === 'irish'}
          label="Irish Rumble"
          description="Hål 1-9 = Vanlig bästboll, 7-18 = allas poäng räknas"
          disabled={eventType !== 'team_w_individual'}
          onChange={() => updateValue('scoringType', 'irish')}
        />

        <Radio
          checked={scoringType === 'bolle'}
          label="Bolles Rumble"
          description="Modifierad Poängbogey (som ovan) där spelarnas poäng adderas på varje hål"
          disabled={eventType !== 'team_w_individual'}
          onChange={() => updateValue('scoringType', 'bolle')}
        />

        <Radio
          checked={scoringType === 'snigel'}
          label="Niklas Bästboll"
          description="Hål 1-8 = Vanlig bästboll, 9-11 = allas poäng räknas, 12-14 = sämstboll, 15-17 = dubbla poäng, 18 = trippla poäng"
          disabled={eventType !== 'team_w_individual'}
          onChange={() => updateValue('scoringType', 'snigel')}
        />
      </div>
    </div>
  );
}
