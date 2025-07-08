import { cx, cva } from 'src/components/cva.config';
import { type VariantProps } from 'cva';

const buttonVariants = cva({
  base: 'cursor-pointer flex items-center rounded-md duration-100 active:scale-97 font-bold uppercase disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none transition-colors whitespace-nowrap active:text-green-500',
  variants: {
    intent: {
      default:
        'fill-cyan-400 bg-cyan-950 hover:bg-cyan-900 text-white justify-center p-2 shadow-button border-b border-cyan-950 hover:shadow-none active:shadow-none active:border-none',
      destructive:
        'bg-red-600 text-white hover:bg-red-700 justify-center p-2 active:border-red-800',
      success:
        'bg-green-600 text-white hover:bg-green-700 justify-center p-2 active:border-green-500',
      link: 'hover:text-cyan-950 text-cyan-700',
      inline: 'hover:text-cyan-950 text-cyan-700 border active:bg-gray-100 active:border'
    },
    size: {
      default: 'h-9 px-4 py-2 has-[>svg]:px-3',
      sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
      xs: 'h-6 rounded gap-1 has-[>svg]:px-2 text-sm',
      lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
      block: 'h-12 rounded-md px-6 w-full has-[>svg]:px-4',
      icon: 'size-9'
    },
    muted: {
      false: null,
      true: ['opacity-50 hover:opacity-100']
    }
  },
  compoundVariants: [
    {
      intent: ['default'],
      size: 'lg',
      class: 'p-6 text-lg'
    },
    {
      intent: ['default'],
      size: 'block',
      class: 'p-6 text-lg'
    },
    {
      intent: 'link',
      size: 'lg',
      class: 'p-6 font-bold text-2xl'
    }
  ],
  defaultVariants: {
    intent: 'default',
    size: 'default'
  }
});

interface Props extends HTMLButtonElement, VariantProps<typeof buttonVariants> {
  children: any;
  class?: any;
}

export default function Button(props: Props) {
  const {
    type = 'button',
    class: className,
    children,
    intent = 'default',
    size,
    muted,
    ...rest
  } = props;

  return (
    <button type={type} class={cx(buttonVariants({ intent, size, muted }), className)} {...rest}>
      {children}
    </button>
  );
}
