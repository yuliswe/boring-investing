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
    <div className='seg' style={block ? { width: '100%' } : undefined}>
      {options.map(option => (
        <label
          key={option}
          className='seg-opt'
          style={
            block
              ? { flex: 1, justifyContent: 'center', minHeight: 'var(--tap)' }
              : undefined
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
