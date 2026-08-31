import type { ReactNode } from 'react';

type BadgeProps = {
  tone?: 'accent' | 'neutral';
  className?: string;
  children: ReactNode;
};

export function Badge({
  tone = 'neutral',
  className = '',
  children,
}: BadgeProps) {
  const classes = ['badge', tone === 'accent' ? 'badge-accent' : '', className]
    .filter(Boolean)
    .join(' ');
  return <span className={classes}>{children}</span>;
}

type StatusBadgeProps = {
  status?: 'open' | 'closed';
  children: ReactNode;
};

export function StatusBadge({ status = 'open', children }: StatusBadgeProps) {
  const dotClass =
    status === 'open' ? 'status-dot' : 'status-dot status-dot-muted';
  return (
    <span
      className={status === 'closed' ? 'status text-ds-neutral-600' : 'status'}
    >
      <span className={dotClass} />
      {children}
    </span>
  );
}
