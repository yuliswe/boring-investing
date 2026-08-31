import type { ReactNode } from 'react';

type FilterChipProps = {
  selected?: boolean;
  onToggle?: () => void;
  children: ReactNode;
};

export function FilterChip({
  selected = false,
  onToggle,
  children,
}: FilterChipProps) {
  return (
    <button
      type='button'
      className={selected ? 'chip is-on' : 'chip'}
      aria-pressed={selected}
      onClick={onToggle}
    >
      {selected ? <span aria-hidden='true'>&#10003;</span> : null}
      {children}
    </button>
  );
}

type RemovableTagProps = {
  onRemove?: () => void;
  children: ReactNode;
};

export function RemovableTag({ onRemove, children }: RemovableTagProps) {
  return (
    <span className='chip-removable'>
      {children}
      <button
        type='button'
        className='chip-remove'
        aria-label='Remove'
        onClick={onRemove}
      >
        &times;
      </button>
    </span>
  );
}
