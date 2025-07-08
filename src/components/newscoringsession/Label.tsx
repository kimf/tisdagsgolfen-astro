import { cx, cva } from 'src/components/cva.config';
import { type VariantProps } from 'cva';
import type { JSX } from 'preact';

const labelVariants = cva({
  base: 'inline-flex items-center justify-between w-full  bg-white border-2 border-gray-200 cursor-pointer rounded-xs active:scale-99 peer-checked:bg-cyan-50 peer-checked:active:scale-100 peer-checked:border-cyan-600 peer-checked:text-cyan-600',
  variants: {
    size: {
      default: 'px-4 py-2',
      lg: 'p-4'
    },
    disabled: {
      false: null,
      true: ['opacity-50 hover:opacity-100']
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

export interface LabelProps
  extends JSX.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  id: string;
  label: string;
  description?: string;
  class?: string;
  disabled?: boolean;
  children?: preact.ComponentChildren;
}

export default function Label({
  id,
  label,
  description,
  size,
  class: className,
  children,
  disabled = false,
  ...props
}: LabelProps) {
  return (
    <label htmlFor={id} class={cx(labelVariants({ size }), className)} {...props}>
      <div class="flex items-center justify-between w-full min-h-8">
        <div class="flex flex-col">
          {label}
          {description && <small>{description}</small>}
        </div>
        {children}
      </div>
    </label>
  );
}
