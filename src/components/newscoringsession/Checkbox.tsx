import { desc } from 'drizzle-orm';
import Label from './Label';

export interface Props {
  label: string;
  size?: 'default' | 'lg';
  checked?: boolean;
  onChange: (e: Event) => void;
  children?: preact.ComponentChildren;
}

export default function Checkbox({ label, size = 'default', checked, onChange, children }: Props) {
  return (
    <div>
      <input type="checkbox" id={label} class="sr-only peer" checked={checked} onInput={onChange} />
      <Label id={label} label={label} size={size}>
        {children}
      </Label>
    </div>
  );
}
