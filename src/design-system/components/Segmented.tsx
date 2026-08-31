type SegmentedProps = {
  name: string;
  options: string[];
  value: string;
  onChange?: (value: string) => void;
  block?: boolean;
};

export function Segmented({
  name,
  options,
  value,
  onChange,
  block = false,
}: SegmentedProps) {
  return (
    <div className={block ? 'seg w-full' : 'seg'}>
      {options.map(option => (
        <label
          key={option}
          className={
            block
              ? 'seg-opt flex-1 justify-center min-h-[var(--tap)]'
              : 'seg-opt'
          }
        >
          <input
            type='radio'
            name={name}
            checked={value === option}
            onChange={() => onChange?.(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
