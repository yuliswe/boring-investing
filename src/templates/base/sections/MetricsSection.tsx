import type { MetricRowData } from '../types';
import { COLOR_GOOD, COLOR_BAD } from '../compute';

export function MetricsSection({ metrics }: { metrics: MetricRowData[] }) {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(16.25rem,1fr))] gap-x-8'>
      {metrics.map((m, i) => (
        <div
          key={i}
          className='flex items-baseline gap-3.5 min-h-11 border-b border-[var(--color-divider)]'
        >
          <span className='flex-1 text-xs text-[var(--text-secondary)]'>
            {m.label}
          </span>
          {m.changePct != null && (
            <span
              className='text-xs'
              style={{
                color: m.changePct >= 0 ? COLOR_GOOD : COLOR_BAD,
              }}
            >
              {m.changePct >= 0 ? '↑' : '↓'} {Math.abs(m.changePct).toFixed(1)}%
            </span>
          )}
          {m.note && (
            <span className='text-xs text-[var(--text-muted)]'>{m.note}</span>
          )}
          <span className='text-sm ds-tnum'>{m.value}</span>
        </div>
      ))}
    </div>
  );
}
