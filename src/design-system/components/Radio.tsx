import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type RadioProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label: ReactNode;
};

export function Radio({
  label,
  disabled,
  className = '',
  ...rest
}: RadioProps) {
  return (
    <label
      className={['radio', disabled ? 'is-disabled' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <input type='radio' disabled={disabled} {...rest} />
      <span className='dot' />
      {label}
    </label>
  );
}
