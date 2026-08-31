import type { ReactNode } from 'react';

type TagProps = {
  tone?: 'accent' | 'neutral' | 'outline';
  className?: string;
  children: ReactNode;
};

export function Tag({ tone = 'neutral', className = '', children }: TagProps) {
  const classes = ['tag', `tag-${tone}`, className].filter(Boolean).join(' ');
  return <span className={classes}>{children}</span>;
}
