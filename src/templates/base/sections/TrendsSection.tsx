import type { TrendPanel } from '../types';

function Sparkline({ panel }: { panel: TrendPanel }) {
  return (
    <div className='flex flex-col gap-2 pb-3.5 border-b border-[var(--color-divider)] overflow-hidden'>
      <div className='flex items-baseline gap-2.5'>
        <span
          className='inline-block w-2 h-0.75 flex-none rounded-sm'
          style={{ background: panel.lineColor }}
        />
        <span className='flex-1 min-w-0 text-xs text-[color-mix(in_srgb,var(--color-text)_62%,transparent)]'>
          {panel.label}
        </span>
        <span className='font-[var(--font-heading)] font-[var(--font-heading-weight,500)] text-4.5 ds-tnum'>
          {panel.latest}
        </span>
      </div>

      <div className='relative h-16 py-1 px-1.25 overflow-hidden'>
        <svg
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          aria-hidden='true'
          className='absolute inset-y-0 left-1.25 right-1.25 w-auto h-full pointer-events-none'
        >
          <polyline
            points={panel.points}
            fill='none'
            stroke={panel.lineColor}
            strokeWidth='1.5'
            strokeLinejoin='round'
            strokeLinecap='round'
            vectorEffect='non-scaling-stroke'
          />
        </svg>
        <div className='absolute inset-y-0 left-1.25 right-1.25'>
          {panel.hasMedian && (
            <div
              className='absolute left-0 right-0 h-0 flex items-center gap-1.5'
              style={{ bottom: panel.medianH }}
            >
              <span className='flex-1 border-t border-dashed border-[color-mix(in_srgb,var(--color-text)_30%,transparent)]' />
              <span className='flex-none text-2 tracking-[0.04em] text-[color-mix(in_srgb,var(--color-text)_42%,transparent)] whitespace-nowrap'>
                10Y {panel.medianLabel}
              </span>
            </div>
          )}
          {panel.dots.map((d, i) => (
            <div
              key={i}
              className='absolute w-1.5 h-1.5 -ml-0.75 -mb-0.75 rounded-full pointer-events-none'
              style={{
                bottom: d.h,
                left: d.x,
                border: `1.5px solid ${panel.lineColor}`,
                background: 'var(--color-bg)',
              }}
            />
          ))}
        </div>
      </div>

      <div className='flex justify-between text-2.75 ds-tnum text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]'>
        {panel.dots.map((d, i) => (
          <div key={i} className='flex-1 text-center flex flex-col gap-0.5'>
            <span>{d.value}</span>
            {d.delta && (
              <span className='text-2.5' style={{ color: d.deltaColor }}>
                {d.delta}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrendsSection({
  panels,
  chartNote,
}: {
  panels: TrendPanel[];
  chartNote?: string;
}) {
  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(14.375rem,1fr))] gap-5.5 gap-x-8'>
        {panels.map((p, i) => (
          <Sparkline key={i} panel={p} />
        ))}
      </div>
      {chartNote && (
        <p className='mt-4 text-2.75 text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
          {chartNote}
        </p>
      )}
    </>
  );
}
