import type { ComponentPropsWithoutRef } from 'react';

type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  label?: string;
  error?: string;
  count?: { value: number; max: number };
};

export function Textarea({
  label,
  error,
  count,
  className = '',
  id,
  ...rest
}: TextareaProps) {
  return (
    <div className='field'>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <textarea
        id={id}
        className={['input', className].filter(Boolean).join(' ')}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
      {count ? (
        <div className='field-hint'>
          {count.value} / {count.max}
        </div>
      ) : null}
      {error ? <div className='field-error'>{error}</div> : null}
    </div>
  );
}
