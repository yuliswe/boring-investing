import type { MultiSeriesData } from '../types';
import {
  CHART_COLORS,
  COLOR_GOOD,
  COLOR_BAD,
  COLOR_FLAT,
  pct,
  formatValue,
} from '../compute';

type ComputedDot = {
  h: string;
  x: string;
  value: string;
  delta: string;
  deltaColor: string;
  shareLabel: string;
  shareDelta: string;
  shareDeltaColor: string;
};

type ComputedLine = {
  label: string;
  color: string;
  width: string;
  latest: string;
  change: string;
  changeColor: string;
  points: string;
  dots: ComputedDot[];
};

type ComputedTick = {
  label: string;
  bottom: string;
};

type ComputedMulti = {
  lines: ComputedLine[];
  baseH: string;
  baseLabel: string;
  ticks: ComputedTick[];
  years: string[];
};

function computeMulti(
  series: MultiSeriesData[],
  years: string[],
  mode: 'index' | 'share',
  invertAll: boolean,
  baseLabel?: string
): ComputedMulti {
  const share = mode === 'share';
  const idx = share
    ? series.map(s => s.values.slice())
    : series.map(s => s.values.map(v => (v / s.values[0]) * 100));

  const totalSeries = series.find(s => s.total);

  const all = idx.flat();
  const min = Math.min(...all);
  const max = Math.max(...all);
  const range = max - min || 1;
  const lo = share ? 0 : min - range * 0.15;
  const hi = max + range * 0.15;
  const n = series[0].values.length;
  const baseH = pct(share ? 0 : 100, lo, hi);

  const lines: ComputedLine[] = series.map((s, si) => {
    const hs = idx[si].map(v => pct(v, lo, hi));
    const inv = !!(s.invert ?? invertAll);
    const last = share ? s.values[n - 1] - s.values[0] : idx[si][n - 1] - 100;

    const dots: ComputedDot[] = hs.map((h, i) => {
      const prev = i > 0 ? s.values[i - 1] : null;
      let delta = '';
      let deltaColor = '';
      if (prev !== null) {
        const chg = share
          ? s.values[i] - prev
          : prev
            ? ((s.values[i] - prev) / Math.abs(prev)) * 100
            : 0;
        if (Math.abs(chg) < 0.05) {
          delta = share ? '−0.0pp' : '−0.0%';
          deltaColor = COLOR_FLAT;
        } else {
          delta =
            (chg >= 0 ? '↑' : '↓') +
            Math.abs(chg).toFixed(1) +
            (share ? 'pp' : '%');
          deltaColor = (inv ? chg <= 0 : chg >= 0) ? COLOR_GOOD : COLOR_BAD;
        }
      }

      const sh =
        totalSeries && !s.total && !share
          ? (s.values[i] / totalSeries.values[i]) * 100
          : null;
      const prevSh =
        i > 0 && totalSeries && !s.total && !share
          ? (s.values[i - 1] / totalSeries.values[i - 1]) * 100
          : null;
      let shareLabel = '';
      let shareDelta = '';
      let shareDeltaColor = '';
      if (sh !== null) {
        shareLabel = sh.toFixed(1) + '%';
        if (prevSh !== null) {
          const d = sh - prevSh;
          if (Math.abs(d) < 0.05) {
            shareDelta = '−0.0pp';
            shareDeltaColor = COLOR_FLAT;
          } else {
            shareDelta = (d >= 0 ? '↑' : '↓') + Math.abs(d).toFixed(1) + 'pp';
            shareDeltaColor = (inv ? d <= 0 : d >= 0) ? COLOR_GOOD : COLOR_BAD;
          }
        }
      }

      return {
        h: h.toFixed(1) + '%',
        x: (((i + 0.5) / n) * 100).toFixed(1) + '%',
        value: formatValue(s.values[i], s.format),
        delta,
        deltaColor,
        shareLabel,
        shareDelta,
        shareDeltaColor,
      };
    });

    const totalOffset = totalSeries ? 1 : 0;
    return {
      label: s.label,
      color: s.total
        ? 'var(--color-text)'
        : CHART_COLORS[(si - totalOffset) % CHART_COLORS.length],
      width: s.total ? '1.5' : '1',
      latest: formatValue(s.values[n - 1], s.format),
      change:
        (last >= 0 ? '+' : '−') +
        Math.abs(last).toFixed(1) +
        (share ? 'pp' : '%'),
      changeColor: (inv ? last <= 0 : last >= 0) ? COLOR_GOOD : COLOR_BAD,
      points: hs
        .map(
          (h, i) =>
            (((i + 0.5) / n) * 100).toFixed(2) + ',' + (100 - h).toFixed(2)
        )
        .join(' '),
      dots,
    };
  });

  const ticks: ComputedTick[] = [];
  if (share) {
    const step = hi > 40 ? 20 : hi > 20 ? 10 : 5;
    for (let t = step; t <= hi; t += step) {
      ticks.push({
        label: t + '%',
        bottom: pct(t, lo, hi).toFixed(1) + '%',
      });
    }
  }

  return {
    lines,
    baseH: baseH.toFixed(1) + '%',
    baseLabel: baseLabel || (share ? '0%' : years[0] + ' = 100'),
    ticks,
    years,
  };
}

export function MultiSection({
  series,
  years,
  mode = 'index',
  invert = false,
  baseLabel,
  chartNote,
}: {
  series: MultiSeriesData[];
  years: string[];
  mode?: 'index' | 'share';
  invert?: boolean;
  baseLabel?: string;
  chartNote?: string;
}) {
  const multi = computeMulti(series, years, mode, invert, baseLabel);

  return (
    <>
      <div className='flex flex-wrap gap-[var(--space-2)] gap-x-[var(--space-6)] mt-[var(--space-1)]'>
        {multi.lines.map((l, i) => (
          <div
            key={i}
            className='inline-flex items-baseline gap-[var(--space-2)] text-xs'
          >
            <span
              className='inline-block w-3 h-0.75 flex-none rounded-[var(--radius-sm)]'
              style={{ background: l.color }}
            />
            <span className='text-[var(--text-secondary)]'>{l.label}</span>
            <span className='font-[family-name:var(--font-heading)] font-[var(--font-heading-weight)] text-base ds-tnum'>
              {l.latest}
            </span>
            <span className='text-xs ds-tnum' style={{ color: l.changeColor }}>
              {l.change}
            </span>
          </div>
        ))}
      </div>

      <div className='flex mt-[var(--space-4)] border-b border-[var(--color-divider)]'>
        <div
          className='flex-none'
          style={{
            width: 'calc(0.5rem + var(--space-2) + 5.5rem + var(--space-2))',
          }}
        />
        <div className='relative flex-1 min-w-0 h-44 overflow-hidden'>
          {multi.ticks.map((t, i) => (
            <div
              key={i}
              className='absolute left-0 right-0 h-0 flex items-center gap-[var(--space-1)] pointer-events-none'
              style={{ bottom: t.bottom }}
            >
              <span className='flex-1 border-t border-[color-mix(in_srgb,var(--color-text)_8%,transparent)]' />
              <span className='flex-none text-xs ds-tnum text-[var(--text-muted)]'>
                {t.label}
              </span>
            </div>
          ))}

          <div
            className='absolute left-0 right-0 h-0 flex items-center gap-[var(--space-1)]'
            style={{ bottom: multi.baseH }}
          >
            <span className='flex-1 border-t border-dashed border-[color-mix(in_srgb,var(--color-text)_30%,transparent)]' />
            <span className='flex-none text-xs tracking-[0.04em] text-[var(--text-muted)]'>
              {multi.baseLabel}
            </span>
          </div>

          <svg
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
            className='absolute inset-0 w-full h-full overflow-visible pointer-events-none'
          >
            {multi.lines.map((l, li) => (
              <polyline
                key={li}
                points={l.points}
                fill='none'
                stroke={l.color}
                strokeWidth={l.width}
                strokeLinejoin='bevel'
                strokeLinecap='round'
                vectorEffect='non-scaling-stroke'
              />
            ))}
          </svg>
          {multi.lines.map((l, li) =>
            l.dots.map((d, di) => (
              <div
                key={`${li}-${di}`}
                className='absolute w-1.5 h-1.5 -ml-0.75 -mb-0.75 rounded-full'
                style={{
                  bottom: d.h,
                  left: d.x,
                  border: `1.5px solid ${l.color}`,
                  background: 'var(--color-bg)',
                }}
              />
            ))
          )}
        </div>
      </div>

      <div className='flex items-center gap-[var(--space-2)] pt-[var(--space-2)] text-xs ds-tnum'>
        <span className='flex-none w-2' />
        <span className='flex-none w-22' />
        <div className='flex-1 flex justify-between'>
          {multi.years.map(y => (
            <div key={y} className='flex-1 text-center'>
              {y}
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[var(--space-1)] pt-[var(--space-2)]'>
        {multi.lines.map((l, li) => (
          <div key={li} className='flex items-center gap-[var(--space-2)]'>
            <span
              className='inline-block w-2 h-0.75 flex-none rounded-[var(--radius-sm)]'
              style={{ background: l.color }}
            />
            <span className='flex-none w-22 text-xs whitespace-nowrap overflow-hidden text-ellipsis text-[var(--text-secondary)]'>
              {l.label}
            </span>
            <div className='flex-1 flex justify-between text-xs ds-tnum'>
              {l.dots.map((d, di) => (
                <div
                  key={di}
                  className='flex-1 text-center flex flex-col gap-[var(--space-1)] py-[var(--space-1)] whitespace-nowrap'
                >
                  <span>
                    <span className='text-[var(--text-secondary)]'>
                      {d.value}
                    </span>{' '}
                    <span style={{ color: d.deltaColor }}>{d.delta}</span>
                  </span>
                  {d.shareLabel && (
                    <span>
                      <span className='text-[var(--text-secondary)]'>
                        {d.shareLabel}
                      </span>{' '}
                      <span style={{ color: d.shareDeltaColor }}>
                        {d.shareDelta}
                      </span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {chartNote && (
        <p className='mt-[var(--space-3)] text-xs text-[var(--text-muted)]'>
          {chartNote}
        </p>
      )}
    </>
  );
}
