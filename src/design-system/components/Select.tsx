import type { ComponentPropsWithoutRef } from 'react';

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  label?: string;
  options: string[];
};

export function Select({
  label,
  options,
  className = '',
  id,
  ...rest
}: SelectProps) {
  return (
    <div className='field'>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select
        id={id}
        className={['input', 'input-tap', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
