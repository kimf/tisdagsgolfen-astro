import Button from './Button.tsx';
interface Props {
  value: number;
  name: string;
  updateValue: (value: number) => void;
}

export default function Quantity({ value, name, updateValue }: Props) {
  const increment = () => {
    updateValue(value + 1);
  };
  const decrement = () => {
    updateValue(value - 1);
  };

  return (
    <div class="flex items-center justify-between gap-0">
      <input name={name} value={value} class="sr-only" />
      <Button intent="inline" onClick={decrement}>
        &minus;
      </Button>

      <h2 class="w-10 text-center">{value}</h2>

      <Button intent="inline" onClick={increment}>
        &#43;
      </Button>
    </div>
  );
}
