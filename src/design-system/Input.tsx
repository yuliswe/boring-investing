import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  label?: string;
  error?: string;
  size?: 'default' | 'tap';
  affixStart?: ReactNode;
  affixEnd?: ReactNode;
};

export function Input({
  label,
  error,
  size = 'tap',
  affixStart,
  affixEnd,
  className = '',
  id,
  ...rest
}: InputProps) {
  const hasAffix = affixStart != null || affixEnd != null;
  const control = hasAffix ? (
    <div className='input-affix'>
      {affixStart}
      <input id={id} aria-invalid={error ? true : undefined} {...rest} />
      {affixEnd}
    </div>
  ) : (
    <input
      id={id}
      className={['input', size === 'tap' ? 'input-tap' : '', className]
        .filter(Boolean)
        .join(' ')}
      aria-invalid={error ? true : undefined}
      {...rest}
    />
  );

  return (
    <div className='field'>
      {label ? <label htmlFor={id}>{label}</label> : null}
      {control}
      {error ? (
        <div className='field-error'>
          <span aria-hidden='true'>!</span>
          {error}
        </div>
      ) : null}
    </div>
  );
}
