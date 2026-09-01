import type { ChartBar, ValueFormat } from '../types';
import { pct, formatValue } from '../compute';

export function ChartSection({
  bars,
  format,
  refValue,
  refLabel,
  chartNote,
}: {
  bars: ChartBar[];
  format?: ValueFormat;
  refValue?: number;
  refLabel?: string;
  chartNote?: string;
}) {
  const values = bars.map(b => b.value);
  const lo = Math.min(0, refValue ?? 0);
  const maxVal = Math.max(...values, refValue ?? -Infinity);
  const range = maxVal - lo || 1;
  const hi = maxVal + range * 0.15;

  const heights = values.map(v => pct(v, lo, hi));
  const points = heights
    .map(
      (h, i) =>
        (((i + 0.5) / bars.length) * 100).toFixed(2) +
        ',' +
        (100 - h).toFixed(2)
    )
    .join(' ');
  const hasRef = refValue != null;
  const refBottom = hasRef ? pct(refValue!, lo, hi).toFixed(1) + '%' : '0%';

  return (
    <>
      <div className='relative flex items-end h-47 mt-5.5 border-b border-[var(--color-divider)]'>
        <svg
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          aria-hidden='true'
          className='absolute inset-0 w-full h-full overflow-visible pointer-events-none'
        >
          <polyline
            points={points}
            fill='none'
            stroke='var(--color-accent)'
            strokeWidth='1.5'
            strokeLinejoin='round'
            strokeLinecap='round'
            vectorEffect='non-scaling-stroke'
          />
        </svg>
        {bars.map((b, i) => {
          const h = heights[i].toFixed(1) + '%';
          const labelBottom =
            'calc(' + heights[i].toFixed(1) + '% + 0.6875rem)';
          return (
            <div key={i} className='relative flex-1 h-full'>
              <div
                className='absolute left-1/2 w-2.25 h-2.25 -ml-1.125 -mb-1.125 rounded-full border-[1.5px] border-[var(--color-accent)] bg-[var(--color-bg)]'
                style={{ bottom: h }}
              />
              <div
                className='absolute left-0 right-0 text-center text-2.75 ds-tnum'
                style={{ bottom: labelBottom }}
              >
                {formatValue(b.value, format)}
              </div>
            </div>
          );
        })}
        {hasRef && (
          <div
            className='absolute left-0 right-0 h-0 flex items-center gap-2 pointer-events-none'
            style={{ bottom: refBottom }}
          >
            <span className='flex-1 border-t border-dashed border-[color-mix(in_srgb,var(--color-text)_40%,transparent)]' />
            <span className='flex-none text-2.5 tracking-[0.06em] uppercase text-[color-mix(in_srgb,var(--color-text)_50%,transparent)]'>
              {refLabel}
            </span>
          </div>
        )}
      </div>
      <div className='flex pt-2'>
        {bars.map((b, i) => (
          <div key={i} className='flex-1 text-center'>
            <div className='text-xs ds-tnum'>{b.label}</div>
            {b.sub && (
              <div className='text-2.75 text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
                {b.sub}
              </div>
            )}
          </div>
        ))}
      </div>
      {chartNote && (
        <p className='mt-3 text-2.75 text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
          {chartNote}
        </p>
      )}
    </>
  );
}
