import type { CSSProperties } from 'react';

type SkeletonProps = {
  width?: string;
  height?: string;
  faint?: boolean;
  delay?: string;
  className?: string;
};

export function Skeleton({
  width = '100%',
  height = '0.875rem',
  faint = false,
  delay,
  className = '',
}: SkeletonProps) {
  const style: CSSProperties = {
    width,
    height,
    animationDelay: delay,
  };
  return (
    <div
      className={['skeleton', faint ? 'skeleton-faint' : '', className]
        .filter(Boolean)
        .join(' ')}
      style={style}
    />
  );
}

export function SkeletonRow() {
  return (
    <div className='flex items-center gap-3.5 min-h-14 px-1 py-2 border-b border-ds-divider'>
      <div className='flex flex-1 flex-col gap-1.75'>
        <Skeleton width='52%' />
        <Skeleton width='32%' height='0.5625rem' faint delay='.2s' />
      </div>
      <Skeleton width='4rem' delay='.1s' />
    </div>
  );
}
