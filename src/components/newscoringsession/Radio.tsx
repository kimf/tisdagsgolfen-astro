export interface Props {
  label: string;
  checked?: boolean;
  onChange: () => void;
  description?: string;
  disabled?: boolean;
}

import Label from './Label.tsx';

export default function Radio({ label, checked, onChange, description, disabled = false }: Props) {
  return (
    <div class={disabled ? 'opacity-50' : ''}>
      {!disabled && (
        <input
          onInput={(e) => onChange()}
          checked={checked}
          type="radio"
          id={label}
          class="peer sr-only"
          required
        />
      )}
      {disabled && <input type="radio" class="peer sr-only" checked={checked} />}
      <Label id={label} label={label} description={description} disabled={disabled} />
    </div>
  );
}
