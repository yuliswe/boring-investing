import type { StackBar, ValueFormat } from '../types';
import { pct, formatValue } from '../compute';

export function StackSection({
  bars,
  format,
  chartNote,
}: {
  bars: StackBar[];
  format?: ValueFormat;
  chartNote?: string;
}) {
  const totals = bars.map(b => b.parts[0] + b.parts[1] + b.parts[2]);
  const maxTotal = Math.max(...totals);
  const hi = maxTotal + maxTotal * 0.15;

  return (
    <>
      <div className='relative flex items-end gap-2.5 h-47 mt-5.5 border-b border-[var(--color-divider)]'>
        {bars.map((b, i) => {
          const total = totals[i];
          const h = pct(total, 0, hi);
          const seg = (v: number) =>
            total ? ((v / total) * 100).toFixed(1) + '%' : '0%';
          return (
            <div key={i} className='relative flex-1 h-full'>
              <div
                className='absolute left-0 right-0 bottom-0 mx-auto max-w-16 flex flex-col justify-end border border-[var(--color-accent)] rounded-t-[var(--radius-sm)] overflow-hidden'
                style={{ height: h.toFixed(1) + '%' }}
              >
                <div
                  className='bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]'
                  style={{ height: seg(b.parts[2]) }}
                />
                <div
                  className='bg-[color-mix(in_srgb,var(--color-accent)_34%,transparent)]'
                  style={{ height: seg(b.parts[1]) }}
                />
                <div
                  className='bg-[color-mix(in_srgb,var(--color-accent)_62%,transparent)]'
                  style={{ height: seg(b.parts[0]) }}
                />
              </div>
              <div
                className='absolute left-0 right-0 text-center text-2.75 ds-tnum'
                style={{
                  bottom: 'calc(' + h.toFixed(1) + '% + 0.3125rem)',
                }}
              >
                {formatValue(total, format)}
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex gap-2.5 pt-2'>
        {bars.map((b, i) => (
          <div key={i} className='flex-1 text-center text-xs ds-tnum'>
            {b.label}
          </div>
        ))}
      </div>
      <div className='flex flex-wrap gap-2 gap-x-5 pt-3.5'>
        <LegendItem
          color='color-mix(in srgb, var(--color-accent) 62%, transparent)'
          label='Maintenance'
        />
        <LegendItem
          color='color-mix(in srgb, var(--color-accent) 34%, transparent)'
          label='Growth'
        />
        <LegendItem
          color='color-mix(in srgb, var(--color-accent) 12%, transparent)'
          label='Returned to owners'
        />
      </div>
      {chartNote && (
        <p className='mt-3 text-2.75 text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
          {chartNote}
        </p>
      )}
    </>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className='inline-flex items-center gap-1.75 text-2.75 text-[color-mix(in_srgb,var(--color-text)_60%,transparent)]'>
      <span
        className='w-2.5 h-2.5 border border-[var(--color-accent)]'
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
