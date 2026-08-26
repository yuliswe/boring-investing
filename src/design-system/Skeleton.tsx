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
  height = '14px',
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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        minHeight: 56,
        padding: '8px 4px',
        borderBottom: '1px solid var(--color-divider)',
      }}
    >
      <div
        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}
      >
        <Skeleton width='52%' />
        <Skeleton width='32%' height='9px' faint delay='.2s' />
      </div>
      <Skeleton width='64px' delay='.1s' />
    </div>
  );
}
