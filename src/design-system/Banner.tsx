import type { ReactNode } from 'react';

type BannerProps = {
  tone?: 'accent' | 'neutral';
  onDismiss?: () => void;
  children: ReactNode;
};

export function Banner({ tone = 'accent', onDismiss, children }: BannerProps) {
  const classes = ['banner', tone === 'accent' ? 'banner-accent' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      <span className='banner-text'>{children}</span>
      {onDismiss ? (
        <button
          type='button'
          className='btn btn-ghost'
          style={{ fontSize: 12 }}
          onClick={onDismiss}
        >
          Dismiss
        </button>
      ) : null}
    </div>
  );
}
