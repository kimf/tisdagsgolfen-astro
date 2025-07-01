import type { EventType, ScoringType } from 'src/db/schema/scoring_sessions.ts';
import Checkbox from './Checkbox.tsx';
import Radio from './Radio.tsx';
import { Show } from '@preact/signals/utils';

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
    <>
      <div class="flex gap-2 flex-wrap">
        <Checkbox
          checked={specialWeek.valueOf()}
          name="specialweek"
          label="Specialvecka"
          onChange={() => updateValue('specialWeek', !specialWeek)}
        />

        {specialWeek && (
          <div>
            <h3>Spelsätt</h3>
            <Radio
              checked={eventType === 'individual'}
              name="event_type"
              label="Individuellt"
              value="individual"
              onChange={(value) => updateValue('eventType', value as EventType)}
            />
            <Radio
              checked={eventType === 'team'}
              name="event_type"
              label="Lagtävling"
              value="team"
              onChange={(value) => updateValue('eventType', value as EventType)}
            />
            <Radio
              checked={eventType === 'team_w_individual'}
              name="event_type"
              value="team_w_individual"
              label="Lag med individuell (Bästbollsvarianter)"
              onChange={(value) => updateValue('eventType', value as EventType)}
            />
          </div>
        )}
      </div>

      <div class="flex gap-2 flex-wrap">
        {specialWeek && (
          <div>
            {eventType === 'team_w_individual' && <h3 class="mt-4">Räknesätt - Bästboll</h3>}
            {eventType !== 'team_w_individual' && <h3 class="mt-4">Räknesätt</h3>}

            <Radio
              checked={scoringType === 'strokes'}
              name="scoring_type"
              label="Slaggolf"
              value="strokes"
              onChange={(value) => updateValue('scoringType', value as ScoringType)}
            />
            <Radio
              checked={scoringType === 'stableford'}
              name="scoring_type"
              label="Poängbogey"
              value="stableford"
              onChange={(value) => updateValue('scoringType', value as ScoringType)}
            />

            <Radio
              checked={scoringType === 'modified'}
              name="scoring_type"
              label="Modifierad Poängbogey"
              description="Eagle 5p, Birdie 2p, Par 0p, Bogey -1p, DB+ -3p"
              value="modified"
              onChange={(value) => updateValue('scoringType', value as ScoringType)}
            />

            {eventType === 'team_w_individual' && (
              <div>
                <Radio
                  checked={scoringType === 'irish'}
                  name="scoring_type"
                  label="Irish Rumble"
                  description="Hål 1-9 = Vanlig bästboll, 7-18 = bästa 2 spelarnas poäng slås ihop"
                  value="irish"
                  onChange={(value) => updateValue('scoringType', value as ScoringType)}
                />

                <Radio
                  checked={scoringType === 'bolle'}
                  name="scoring_type"
                  label="Bolles Rumble"
                  description="Modifierad Poängbogey (som ovan) + spelarens poäng slås ihop"
                  value="bolle"
                  onChange={(value) => updateValue('scoringType', value as ScoringType)}
                />

                <Radio
                  checked={scoringType === 'snigel'}
                  name="scoring_type"
                  label="Niklas Bästboll"
                  description="Hål 1-8 = Vanlig bästboll, 9-11 = bådas poäng räknas, 12-14 = den med sämst resultat räknas, 15-17 = dubblar bådas poäng, 18 = triplas bådas poäng"
                  value="snigel"
                  onChange={(value) => updateValue('scoringType', value as ScoringType)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
