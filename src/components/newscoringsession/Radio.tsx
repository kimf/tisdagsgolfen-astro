export interface Props {
  name: string;
  label: string;
  value: string | number;
  checked?: boolean;
  onChange: (val: any) => void;
  description?: string;
}

import Label from './Label.tsx';

export default function Radio({ name, label, value, checked, onChange, description }: Props) {
  const id = `${label}_${name ?? ''}`;

  return (
    <div>
      <input
        onInput={(e) => onChange(value)}
        checked={checked}
        value={value}
        type="radio"
        id={id}
        name={name}
        class="peer sr-only"
        required
      />
      <Label id={id} label={label} description={description} />
    </div>
  );
}
