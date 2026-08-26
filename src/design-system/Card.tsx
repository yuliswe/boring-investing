import type { ReactNode } from 'react';
import { Text } from '@/design-system/Text';

type CardProps = {
  title?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

export function Card({ title, hint, className = '', children }: CardProps) {
  return (
    <section
      className={`rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-slate-200/70 ${className}`}
    >
      {title ? (
        <header className='mb-4'>
          <Text variant='subheading'>{title}</Text>
          {hint ? <Text variant='caption'>{hint}</Text> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}
