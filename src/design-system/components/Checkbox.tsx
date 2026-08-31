import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type CheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label: ReactNode;
};

export function Checkbox({
  label,
  disabled,
  className = '',
  ...rest
}: CheckboxProps) {
  return (
    <label
      className={['check', disabled ? 'is-disabled' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <input type='checkbox' disabled={disabled} {...rest} />
      <span className='box' aria-hidden='true'>
        &#10003;
      </span>
      <span>{label}</span>
    </label>
  );
}
