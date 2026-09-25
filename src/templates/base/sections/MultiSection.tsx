import type { MultiSeriesData, ValueFormatData } from '../types';
import {
  CHART_COLORS,
  COLOR_GOOD,
  COLOR_BAD,
  COLOR_FLAT,
  pct,
  formatValue,
} from '../compute';
import { DescribedLabel } from '../LabelPopover';

type ComputedDot = {
  h: string | null;
  x: string;
  value: string;
  delta: string;
  deltaColor: string;
  shareLabel: string;
  shareDelta: string;
  shareDeltaColor: string;
  isGuidance: boolean;
};

type ComputedLine = {
  label: string;
  desc?: string;
  color: string;
  width: string;
  latest: string;
  change: string;
  changeColor: string;
  historicalPoints: string;
  guidancePoints: string;
  dots: ComputedDot[];
  total: boolean;
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
  guidanceCount: number;
};

function niceStep(range: number): number {
  const rough = range / 5;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  const frac = rough / mag;
  const nice = frac <= 1.5 ? 1 : frac <= 3 ? 2 : frac <= 7 ? 5 : 10;
  return nice * mag;
}

function computeMulti(
  series: MultiSeriesData[],
  years: string[],
  mode: 'index' | 'share' | 'absolute',
  invertAll: boolean,
  guidanceCount: number,
  baseLabel?: string
): ComputedMulti {
  const share = mode === 'share';
  const abs = mode === 'absolute';
  const plotRaw = share || abs;
  const pctDeltas = !share;

  const idx = plotRaw
    ? series.map(s => s.values.slice())
    : series.map(s => {
        const base = s.values[0];
        return s.values.map(v =>
          v !== null && base !== null ? (v / base) * 100 : null
        );
      });

  const totalSeries = series.find(s => s.total);

  const all = idx.flat().filter((v): v is number => v !== null);
  const min = Math.min(...all);
  const max = Math.max(...all);
  const range = max - min || 1;
  const lo = plotRaw ? 0 : min - range * 0.15;
  const hi = max + range * 0.15;
  const n = series[0].values.length;
  const baseH = pct(plotRaw ? 0 : 100, lo, hi);
  const historicalEnd = n - guidanceCount;

  const lines: ComputedLine[] = series.map((s, si) => {
    const hs = idx[si].map(v => (v !== null ? pct(v, lo, hi) : null));
    const inv = !!(s.invert ?? invertAll);

    const lastNonNull = [...s.values].reverse().find(v => v !== null) ?? null;
    const firstVal = s.values[0];
    const lastIdx = s.values.lastIndexOf(lastNonNull as number);
    const last =
      lastNonNull !== null && firstVal !== null
        ? share
          ? lastNonNull - firstVal
          : abs
            ? firstVal
              ? (lastNonNull / firstVal - 1) * 100
              : 0
            : (idx[si][lastIdx] as number) - 100
        : 0;

    const dots: ComputedDot[] = hs.map((h, i) => {
      const cur = s.values[i];
      const prev = i > 0 ? s.values[i - 1] : null;
      let delta = '';
      let deltaColor = '';
      if (cur !== null && prev !== null) {
        const chg = pctDeltas
          ? prev
            ? ((cur - prev) / Math.abs(prev)) * 100
            : 0
          : cur - prev;
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

      const totalVal = totalSeries?.values[i] ?? null;
      const prevTotalVal = i > 0 ? (totalSeries?.values[i - 1] ?? null) : null;
      const sh =
        totalSeries && !s.total && !share && cur !== null && totalVal !== null
          ? (cur / totalVal) * 100
          : null;
      const prevSh =
        i > 0 &&
        totalSeries &&
        !s.total &&
        !share &&
        prev !== null &&
        prevTotalVal !== null
          ? (prev / prevTotalVal) * 100
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
        h: h !== null ? h.toFixed(1) + '%' : null,
        x: (((i + 0.5) / n) * 100).toFixed(1) + '%',
        value: formatValue(cur, s.format),
        delta,
        deltaColor,
        shareLabel,
        shareDelta,
        shareDeltaColor,
        isGuidance: i >= historicalEnd,
      };
    });

    const toSvg = (h: number | null, i: number) =>
      h !== null
        ? (((i + 0.5) / n) * 100).toFixed(2) + ',' + (100 - h).toFixed(2)
        : null;

    const historicalPts = hs
      .slice(0, historicalEnd)
      .map((h, i) => toSvg(h, i))
      .filter(Boolean)
      .join(' ');

    let guidancePts = '';
    if (guidanceCount > 0) {
      const bridgeIdx = historicalEnd - 1;
      const bridgePt =
        bridgeIdx >= 0 && hs[bridgeIdx] !== null
          ? toSvg(hs[bridgeIdx], bridgeIdx)
          : null;
      const tail = hs
        .slice(historicalEnd)
        .map((h, i) => toSvg(h, historicalEnd + i))
        .filter(Boolean);
      if (bridgePt && tail.length > 0) {
        guidancePts = [bridgePt, ...tail].join(' ');
      }
    }

    const totalOffset = totalSeries ? 1 : 0;
    return {
      label: s.label,
      desc: s.desc,
      total: !!s.total,
      color: s.total
        ? 'var(--color-text)'
        : CHART_COLORS[(si - totalOffset) % CHART_COLORS.length],
      width: s.total ? '1.5' : '1',
      latest: formatValue(lastNonNull, s.format),
      change:
        (last >= 0 ? '+' : '−') +
        Math.abs(last).toFixed(1) +
        (share ? 'pp' : '%'),
      changeColor: (inv ? last <= 0 : last >= 0) ? COLOR_GOOD : COLOR_BAD,
      historicalPoints: historicalPts,
      guidancePoints: guidancePts,
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
  } else if (abs) {
    const tickFmt: ValueFormatData = {
      ...(totalSeries?.format ?? series[0].format),
      decimals: 0,
    };
    const step = niceStep(max);
    for (let t = step; t <= hi; t += step) {
      ticks.push({
        label: formatValue(t, tickFmt),
        bottom: pct(t, lo, hi).toFixed(1) + '%',
      });
    }
  }

  return {
    lines,
    baseH: baseH.toFixed(1) + '%',
    baseLabel:
      baseLabel ||
      (share
        ? '0%'
        : abs
          ? formatValue(0, {
              ...(totalSeries?.format ?? series[0].format),
              decimals: 0,
            })
          : years[0] + ' = 100'),
    ticks,
    years,
    guidanceCount,
  };
}

export function MultiSection({
  series,
  years,
  mode = 'index',
  invert = false,
  guidanceCount = 0,
  baseLabel,
  chartNote,
  guidanceDesc,
}: {
  series: MultiSeriesData[];
  years: string[];
  mode?: 'index' | 'share' | 'absolute';
  invert?: boolean;
  guidanceCount?: number;
  baseLabel?: string;
  chartNote?: string;
  guidanceDesc?: string;
}) {
  const multi = computeMulti(
    series,
    years,
    mode,
    invert,
    guidanceCount,
    baseLabel
  );

  return (
    <>
      <div className='flex flex-wrap gap-2 gap-x-6 mt-1'>
        {multi.lines.map((l, i) => (
          <div key={i} className='inline-flex items-baseline gap-2 text-xs'>
            <span
              className='inline-block w-3 h-0.75 flex-none rounded-sm'
              style={{ background: l.color }}
            />
            <DescribedLabel
              label={l.label}
              desc={l.desc}
              className='text-secondary'
            />
            <span className='font-heading font-[var(--font-heading-weight)] text-base ds-tnum'>
              {l.latest}
            </span>
            <span className='text-xs ds-tnum' style={{ color: l.changeColor }}>
              {l.change}
            </span>
          </div>
        ))}
      </div>

      <div className='overflow-x-auto'>
        <div style={{ minWidth: '48rem' }}>
          <div className='flex mt-4 border-b border-divider'>
            <div
              className='flex-none'
              style={{
                width:
                  'calc(0.5rem + var(--spacing-2) + 5.5rem + var(--spacing-2))',
              }}
            />
            <div className='relative flex-1 min-w-0 h-44 overflow-hidden'>
              {multi.ticks.map((t, i) => (
                <div
                  key={i}
                  className='absolute left-0 right-0 h-0 flex items-center gap-1 pointer-events-none'
                  style={{ bottom: t.bottom }}
                >
                  <span className='flex-1 border-t border-[color-mix(in_srgb,var(--color-text)_8%,transparent)]' />
                  <span className='flex-none text-xs ds-tnum text-muted'>
                    {t.label}
                  </span>
                </div>
              ))}

              <div
                className='absolute left-0 right-0 h-0 flex items-center gap-1'
                style={{ bottom: multi.baseH }}
              >
                <span className='flex-1 border-t border-dashed border-[color-mix(in_srgb,var(--color-text)_30%,transparent)]' />
                <span className='flex-none text-xs tracking-[0.04em] text-muted'>
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
                  <g key={li}>
                    {l.historicalPoints && (
                      <polyline
                        points={l.historicalPoints}
                        fill='none'
                        stroke={l.color}
                        strokeWidth={l.width}
                        strokeLinejoin='bevel'
                        strokeLinecap='round'
                        vectorEffect='non-scaling-stroke'
                      />
                    )}
                    {l.guidancePoints && (
                      <polyline
                        points={l.guidancePoints}
                        fill='none'
                        stroke={l.color}
                        strokeWidth={l.width}
                        strokeLinejoin='bevel'
                        strokeLinecap='round'
                        strokeDasharray='4 3'
                        vectorEffect='non-scaling-stroke'
                      />
                    )}
                  </g>
                ))}
              </svg>
              {multi.lines.map((l, li) =>
                l.dots.map(
                  (d, di) =>
                    d.h !== null && (
                      <div
                        key={`${li}-${di}`}
                        className='absolute w-1.5 h-1.5 -ml-0.75 -mb-0.75 rounded-full'
                        style={{
                          bottom: d.h,
                          left: d.x,
                          border: `1.5px ${d.isGuidance ? 'dashed' : 'solid'} ${l.color}`,
                          background: 'var(--color-bg)',
                        }}
                      />
                    )
                )
              )}
            </div>
          </div>

          <div className='flex items-center gap-2 pt-2 text-xs ds-tnum'>
            <span className='flex-none w-2' />
            <span className='flex-none w-22' />
            <div className='flex-1 flex justify-between'>
              {multi.years.map((y, i) => (
                <div key={y} className='flex-1 text-center'>
                  {i >= multi.years.length - multi.guidanceCount &&
                  guidanceDesc ? (
                    <DescribedLabel label={y} desc={guidanceDesc} />
                  ) : (
                    y
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-1 pt-2'>
            {multi.lines.map((l, li) => (
              <div key={li} className='flex items-center gap-2'>
                <span
                  className='inline-block w-2 h-0.75 flex-none rounded-sm'
                  style={{ background: l.color }}
                />
                <DescribedLabel
                  label={l.label}
                  desc={l.desc}
                  className='flex-none w-22 text-xs whitespace-nowrap overflow-hidden text-ellipsis text-secondary'
                />
                <div className='flex-1 flex justify-between text-xs ds-tnum'>
                  {l.dots.map((d, di) => (
                    <div
                      key={di}
                      className={`flex-1 text-center flex flex-col gap-1 py-1 whitespace-nowrap${d.h === null ? ' opacity-30' : ''}`}
                    >
                      {mode === 'absolute' &&
                      !l.total &&
                      multi.lines.some(x => x.total) ? (
                        <span>
                          <span className='text-secondary'>
                            {d.shareLabel || '—'}
                          </span>{' '}
                          <span style={{ color: d.shareDeltaColor }}>
                            {d.shareDelta}
                          </span>
                        </span>
                      ) : (
                        <>
                          <span>
                            <span className='text-secondary'>
                              {d.h !== null ? d.value : '—'}
                            </span>{' '}
                            <span style={{ color: d.deltaColor }}>
                              {d.delta}
                            </span>
                          </span>
                          {d.shareLabel && (
                            <span>
                              <span className='text-secondary'>
                                {d.shareLabel}
                              </span>{' '}
                              <span style={{ color: d.shareDeltaColor }}>
                                {d.shareDelta}
                              </span>
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {chartNote && <p className='mt-3 text-xs text-muted'>{chartNote}</p>}
    </>
  );
}
