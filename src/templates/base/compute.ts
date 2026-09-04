import type { ValueFormatData } from './types';

export const METRIC_COLORS = [
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

export const PEER_COLORS = [
  'oklch(0.62 0.19 145)',
  'oklch(0.68 0.13 145)',
  'oklch(0.72 0.06 90)',
  'oklch(0.65 0.13 30)',
  'oklch(0.58 0.19 25)',
];

export const COLOR_GOOD = 'oklch(0.62 0.19 145)';
export const COLOR_BAD = 'oklch(0.58 0.19 25)';

export function pct(v: number, lo: number, hi: number): number {
  return Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100));
}

export function formatValue(v: number | null, fmt?: ValueFormatData): string {
  if (v == null) return 'n/a';
  const decimals = fmt?.decimals ?? 1;
  return (fmt?.prefix ?? '') + v.toFixed(decimals) + (fmt?.suffix ?? '');
}
