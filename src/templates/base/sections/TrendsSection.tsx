import type { TrendPanelData } from '../types';
import {
  METRIC_COLORS,
  COLOR_GOOD,
  COLOR_BAD,
  COLOR_FLAT,
  pct,
  formatValue,
} from '../compute';
import { DescribedLabel } from '../LabelPopover';

type ComputedDot = {
  year: string;
  value: string;
  delta: string;
  deltaColor: string;
  h: string;
  x: string;
  isGuidance: boolean;
};

type ComputedPanel = {
  label: string;
  desc?: string;
  lineColor: string;
  latest: string;
  dots: ComputedDot[];
  historicalPoints: string;
  guidancePoints: string;
  hasMedian: boolean;
  medianH: string;
  medianLabel: string;
};

function computePanel(
  panel: TrendPanelData,
  colorIndex: number
): ComputedPanel {
  const {
    label,
    years,
    values,
    format,
    median10y,
    invertColor,
    deltaMode,
    guidanceCount = 0,
  } = panel;
  const numericVals = values.filter((v): v is number => v !== null);
  const allVals =
    median10y != null ? numericVals.concat(median10y) : numericVals;
  const min = Math.min(...allVals);
  const max = Math.max(...allVals);
  const range = max - min || Math.abs(max) || 1;
  const lo = min - range * 0.25;
  const hi = max + range * 0.25;

  const historicalEnd = values.length - guidanceCount;

  const dots = values.map((v, i) => {
    const prev = i > 0 ? values[i - 1] : null;
    let delta = '';
    let deltaColor = '';

    if (v !== null && prev !== null) {
      if (deltaMode === 'add') {
        const diff = v - prev;
        if (Math.abs(diff) < 0.05) {
          delta = '−0.0pp';
          deltaColor = COLOR_FLAT;
        } else {
          delta = (diff >= 0 ? '↑+' : '↓−') + Math.abs(diff).toFixed(1) + 'pp';
          const isGood = invertColor ? diff <= 0 : diff >= 0;
          deltaColor = isGood ? COLOR_GOOD : COLOR_BAD;
        }
      } else if (prev !== 0) {
        const chg = ((v - prev) / Math.abs(prev)) * 100;
        const absChg = Math.abs(chg);
        if (absChg < 0.05) {
          delta = '−0.0%';
          deltaColor = COLOR_FLAT;
        } else {
          delta =
            (chg >= 0 ? '↑' : '↓') +
            (absChg > 999 ? '>999%' : absChg.toFixed(1) + '%');
          const isGood = invertColor ? chg <= 0 : chg >= 0;
          deltaColor = isGood ? COLOR_GOOD : COLOR_BAD;
        }
      }
    }

    const h = v !== null ? pct(v, lo, hi) : 0;
    return {
      year: years[i],
      value: formatValue(v, format),
      delta,
      deltaColor,
      h: h.toFixed(1) + '%',
      x: (((i + 0.5) / values.length) * 100).toFixed(1) + '%',
      isGuidance: i >= historicalEnd,
    };
  });

  const hs = values.map(v => (v !== null ? pct(v, lo, hi) : null));
  const hasMedian = median10y != null;
  const medianH = hasMedian ? pct(median10y!, lo, hi).toFixed(1) + '%' : '0%';
  const medianLabel = hasMedian ? formatValue(median10y!, format) : '';
  const lineColor = METRIC_COLORS[colorIndex % METRIC_COLORS.length];

  const toSvg = (h: number | null, i: number) =>
    h !== null
      ? (((i + 0.5) / hs.length) * 100).toFixed(2) + ',' + (100 - h).toFixed(2)
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

  return {
    label,
    desc: panel.desc,
    lineColor,
    latest: formatValue(values[values.length - 1], format),
    dots,
    historicalPoints: historicalPts,
    guidancePoints: guidancePts,
    hasMedian,
    medianH,
    medianLabel,
  };
}

function Sparkline({
  panel,
  large,
}: {
  panel: ComputedPanel;
  large?: boolean;
}) {
  return (
    <div className='flex flex-col gap-[var(--space-2)] pb-[var(--space-3)] border-b border-[var(--color-divider)]'>
      <div className='flex items-baseline gap-[var(--space-2)]'>
        <span
          className='inline-block w-2 h-0.75 flex-none rounded-[var(--radius-sm)]'
          style={{ background: panel.lineColor }}
        />
        <DescribedLabel
          label={panel.label}
          desc={panel.desc}
          className='flex-1 min-w-0 text-xs text-[var(--text-secondary)]'
        />
        <span
          className={`font-[family-name:var(--font-heading)] font-[var(--font-heading-weight)] ds-tnum ${large ? 'text-2xl' : 'text-lg'}`}
        >
          {panel.latest}
        </span>
      </div>

      <div className={`relative overflow-hidden ${large ? 'h-40' : 'h-16'}`}>
        <div className='absolute inset-0 pointer-events-none'>
          <svg
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
            className='block w-full h-full overflow-visible'
          >
            {panel.historicalPoints && (
              <polyline
                points={panel.historicalPoints}
                fill='none'
                stroke={panel.lineColor}
                strokeWidth='1.5'
                strokeLinejoin='bevel'
                strokeLinecap='round'
                vectorEffect='non-scaling-stroke'
              />
            )}
            {panel.guidancePoints && (
              <polyline
                points={panel.guidancePoints}
                fill='none'
                stroke={panel.lineColor}
                strokeWidth='1.5'
                strokeLinejoin='bevel'
                strokeLinecap='round'
                strokeDasharray='4 3'
                vectorEffect='non-scaling-stroke'
              />
            )}
          </svg>
        </div>
        <div className='absolute inset-0'>
          {panel.hasMedian && (
            <div
              className='absolute left-0 right-0 h-0 flex items-center gap-[var(--space-1)]'
              style={{ bottom: panel.medianH }}
            >
              <span className='flex-1 border-t border-dashed border-[color-mix(in_srgb,var(--color-text)_30%,transparent)]' />
              <span className='flex-none text-xs tracking-[0.04em] text-[var(--text-muted)] whitespace-nowrap'>
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
                border: `1.5px ${d.isGuidance ? 'dashed' : 'solid'} ${panel.lineColor}`,
                background: 'var(--color-bg)',
              }}
            />
          ))}
        </div>
      </div>

      <div className='flex justify-between text-[0.6875rem] ds-tnum text-[var(--text-secondary)]'>
        {panel.dots.map((d, i) => (
          <div
            key={i}
            className='flex-1 min-w-0 text-center flex flex-col gap-0'
          >
            <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
              {d.value}
            </span>
            {d.delta && (
              <span
                className='text-[0.625rem] whitespace-nowrap overflow-hidden text-ellipsis'
                style={{ color: d.deltaColor }}
              >
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
  chartSize,
  chartNote,
}: {
  panels: TrendPanelData[];
  chartSize?: 'large' | 'small';
  chartNote?: string;
}) {
  const large = chartSize === 'large';
  const computed = panels.map((p, i) => computePanel(p, i));

  return (
    <>
      <div
        className={
          large
            ? 'grid grid-cols-1 gap-[var(--space-5)]'
            : 'grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-5)] gap-x-[var(--space-8)]'
        }
      >
        {computed.map((p, i) => (
          <Sparkline key={i} panel={p} large={large} />
        ))}
      </div>
      {chartNote && (
        <p className='mt-[var(--space-4)] text-xs text-[var(--text-muted)]'>
          {chartNote}
        </p>
      )}
    </>
  );
}
