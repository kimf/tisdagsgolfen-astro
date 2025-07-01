import { desc } from 'drizzle-orm';
import Label from './Label';

export interface Props {
  name: string;
  label: string;
  value?: string | number;
  size?: 'default' | 'lg';
  checked?: boolean;
  onChange: (e: Event) => void;
  children?: preact.ComponentChildren;
}

export default function Checkbox({
  name,
  label,
  value,
  size = 'default',
  checked,
  onChange,
  children
}: Props) {
  const id = value && name ? `${value}_${name}` : name;

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        class="sr-only peer"
        checked={checked}
        onInput={onChange}
      />
      <Label id={id} label={label} size={size}>
        {children}
      </Label>
    </div>
  );
}
