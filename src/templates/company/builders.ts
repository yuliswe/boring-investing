import type {
  TrendPanel,
  ChartBar,
  StackBar,
  PeerPanel,
  PeerRow,
  TableRow,
  TableColumn,
} from './types';

const METRIC_COLORS = [
  'oklch(0.72 0.14 210)',
  'oklch(0.72 0.14 145)',
  'oklch(0.72 0.14 50)',
  'oklch(0.72 0.14 330)',
  'oklch(0.72 0.14 270)',
  'oklch(0.72 0.14 175)',
  'oklch(0.72 0.14 25)',
  'oklch(0.72 0.14 105)',
  'oklch(0.72 0.14 295)',
  'oklch(0.72 0.14 60)',
  'oklch(0.72 0.14 240)',
  'oklch(0.72 0.14 0)',
];

let colorIdx = 0;

export function resetColorIndex() {
  colorIdx = 0;
}

function pct(v: number, lo: number, hi: number): number {
  return Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100));
}

/**
 * Build a TrendPanel from raw numeric values. Each panel gets a unique line
 * color from METRIC_COLORS so it is instantly recognisable when scanning.
 *
 * @param invertColor - when true, a decrease is good (green) and an increase
 *   is bad. Use for metrics where lower is better (P/E, debt ratio, etc.).
 * @param deltaMode - 'pct' for percentage change (default), 'add' for additive
 *   change in percentage-point terms.
 */
export function trend(
  label: string,
  years: string[],
  vals: (number | null)[],
  format?: (v: number | null) => string,
  median10y?: number,
  invertColor?: boolean,
  deltaMode?: 'pct' | 'add'
): TrendPanel {
  const numericVals = vals.filter((v): v is number => v !== null);
  const allVals =
    median10y != null ? numericVals.concat(median10y) : numericVals;
  const min = Math.min(...allVals);
  const max = Math.max(...allVals);
  const range = max - min || Math.abs(max) || 1;
  const lo = min - range * 0.25;
  const hi = max + range * 0.25;

  const fmt =
    format || ((v: number | null) => (v != null ? v.toFixed(1) : 'n/a'));

  const dots = vals.map((v, i) => {
    const prev = i > 0 ? vals[i - 1] : null;
    let delta = '';
    let deltaColor = '';

    if (v !== null && prev !== null) {
      if (deltaMode === 'add') {
        const diff = v - prev;
        if (diff !== 0) {
          delta = (diff >= 0 ? '↑+' : '↓−') + Math.abs(diff).toFixed(1) + 'pp';
          const isGood = invertColor ? diff <= 0 : diff >= 0;
          deltaColor = isGood ? 'oklch(0.62 0.19 145)' : 'oklch(0.58 0.19 25)';
        }
      } else if (prev !== 0) {
        const chg = ((v - prev) / Math.abs(prev)) * 100;
        delta = (chg >= 0 ? '↑' : '↓') + Math.abs(chg).toFixed(1) + '%';
        const isGood = invertColor ? chg <= 0 : chg >= 0;
        deltaColor = isGood ? 'oklch(0.62 0.19 145)' : 'oklch(0.58 0.19 25)';
      }
    }

    const h = v !== null ? pct(v, lo, hi) : 0;
    return {
      year: years[i],
      value: fmt(v),
      delta,
      deltaColor,
      h: h.toFixed(1) + '%',
      x:
        vals.length > 1
          ? ((i / (vals.length - 1)) * 100).toFixed(1) + '%'
          : '50%',
    };
  });

  const hs = vals.map(v => (v !== null ? pct(v, lo, hi) : 0));
  const hasMedian = median10y != null;
  const medianH = hasMedian ? pct(median10y!, lo, hi).toFixed(1) + '%' : '0%';
  const medianLabel = hasMedian ? fmt(median10y!) : '';

  const lineColor = METRIC_COLORS[colorIdx % METRIC_COLORS.length];
  colorIdx++;

  return {
    label,
    lineColor,
    latest: fmt(vals[vals.length - 1]),
    dots,
    hasMedian,
    medianH,
    medianLabel,
    points: hs
      .map(
        (h, i) =>
          ((i / (hs.length - 1)) * 100).toFixed(2) + ',' + (100 - h).toFixed(2)
      )
      .join(' '),
  };
}

export function chartBar(
  label: string,
  value: string,
  v: number,
  lo: number,
  hi: number,
  sub?: string
): ChartBar {
  const h = pct(v, lo, hi);
  return {
    label,
    value,
    sub,
    h: h.toFixed(1) + '%',
    labelBottom: 'calc(' + h.toFixed(1) + '% + 0.6875rem)',
  };
}

export function chartPolyline(bars: ChartBar[]): string {
  return bars
    .map((b, i) => {
      const h = parseFloat(b.h);
      return (
        (((i + 0.5) / bars.length) * 100).toFixed(2) +
        ',' +
        (100 - h).toFixed(2)
      );
    })
    .join(' ');
}

export function chartRefBottom(
  refValue: number,
  lo: number,
  hi: number
): string {
  return pct(refValue, lo, hi).toFixed(1) + '%';
}

export function stackBar(
  label: string,
  parts: [number, number, number],
  lo: number,
  hi: number
): StackBar {
  const total = parts[0] + parts[1] + parts[2];
  const h = pct(total, lo, hi);
  const seg = (v: number) =>
    total ? ((v / total) * 100).toFixed(1) + '%' : '0%';
  return {
    label,
    value: total.toFixed(1),
    h: h.toFixed(1) + '%',
    labelBottom: 'calc(' + h.toFixed(1) + '% + 0.3125rem)',
    maintH: seg(parts[0]),
    growthH: seg(parts[1]),
    retH: seg(parts[2]),
  };
}

const PEER_COLORS = [
  'oklch(0.62 0.19 145)',
  'oklch(0.68 0.13 145)',
  'oklch(0.72 0.06 90)',
  'oklch(0.65 0.13 30)',
  'oklch(0.58 0.19 25)',
];

export function peerPanel(
  label: string,
  hint: string,
  rows: [string, number, string, boolean?][]
): PeerPanel {
  const max = Math.max(...rows.map(r => Math.abs(r[1])));
  const lower = /lower|less|fewer/i.test(hint);
  const sorted = rows.map((r, i) => ({ i, v: r[1] })).sort((a, b) => a.v - b.v);
  if (!lower) sorted.reverse();
  const rankMap: Record<number, number> = {};
  sorted.forEach((s, rank) => {
    rankMap[s.i] = rank;
  });
  const n = rows.length;

  return {
    label,
    hint,
    rows: rows.map(([name, v, text, self], i): PeerRow => {
      const rank = rankMap[i];
      const ci = Math.round((rank / (n - 1)) * (PEER_COLORS.length - 1));
      return {
        name,
        value: text,
        self: !!self,
        w: (max ? (Math.abs(v) / max) * 100 : 0).toFixed(1) + '%',
        barColor: PEER_COLORS[ci],
      };
    }),
  };
}

export function tableColumns(...labels: string[]): TableColumn[] {
  return labels.map(label => ({ label }));
}

export function tableRow(label: string, ...vals: string[]): TableRow {
  return { label, values: vals.map(text => ({ text })) };
}
