import type { ReactNode } from 'react';

type ToggleProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  'aria-label'?: string;
};

export function Toggle({
  checked = false,
  onChange,
  disabled = false,
  'aria-label': ariaLabel,
}: ToggleProps) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      className={checked ? 'switch is-on' : 'switch'}
      onClick={() => onChange?.(!checked)}
    >
      <span className='switch-thumb' />
    </button>
  );
}

type ToggleRowProps = {
  label: ReactNode;
  hint?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
};

export function ToggleRow({
  label,
  hint,
  checked,
  onChange,
  disabled,
}: ToggleRowProps) {
  return (
    <div className={disabled ? 'toggle-row opacity-45' : 'toggle-row'}>
      <div className='toggle-row-label'>
        <div>{label}</div>
        {hint ? <div className='toggle-row-hint'>{hint}</div> : null}
      </div>
      <Toggle
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-label={typeof label === 'string' ? label : undefined}
      />
    </div>
  );
}
