import type { ChartBar } from '../types';

export function ChartSection({
  bars,
  points,
  hasRef,
  refBottom,
  refLabel,
  chartNote,
}: {
  bars: ChartBar[];
  points: string;
  hasRef?: boolean;
  refBottom?: string;
  refLabel?: string;
  chartNote?: string;
}) {
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
        {bars.map((b, i) => (
          <div key={i} className='relative flex-1 h-full'>
            <div
              className='absolute left-1/2 w-2.25 h-2.25 -ml-1.125 -mb-1.125 rounded-full border-[1.5px] border-[var(--color-accent)] bg-[var(--color-bg)]'
              style={{ bottom: b.h }}
            />
            <div
              className='absolute left-0 right-0 text-center text-2.75 ds-tnum'
              style={{ bottom: b.labelBottom }}
            >
              {b.value}
            </div>
          </div>
        ))}
        {hasRef && refBottom && (
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
