import type { MetricRow } from '../types';

export function MetricsSection({ metrics }: { metrics: MetricRow[] }) {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(16.25rem,1fr))] gap-x-8'>
      {metrics.map((m, i) => (
        <div
          key={i}
          className='flex items-baseline gap-3.5 min-h-11 border-b border-[var(--color-divider)]'
        >
          <span className='flex-1 text-[0.8125rem] text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]'>
            {m.label}
          </span>
          {m.note && (
            <span className='text-[0.6875rem] text-[color-mix(in_srgb,var(--color-text)_42%,transparent)]'>
              {m.note}
            </span>
          )}
          <span className='text-sm ds-tnum'>{m.value}</span>
        </div>
      ))}
    </div>
  );
}
