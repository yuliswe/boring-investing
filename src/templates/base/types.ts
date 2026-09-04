export type NavLinkData = {
  label: string;
  href: string;
  active?: boolean;
};

export type NavbarData = {
  brand: string;
  links: NavLinkData[];
  action?: { label: string; href: string };
};

export type ValueFormatData = {
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type TrendPanelData = {
  label: string;
  years: string[];
  values: (number | null)[];
  format?: ValueFormatData;
  median10y?: number;
  invertColor?: boolean;
  deltaMode?: 'pct' | 'add';
};

export type MetricRowData = {
  label: string;
  value: string;
  note?: string;
};

export type ChartBarData = {
  label: string;
  value: number;
  sub?: string;
};

export type StackBarData = {
  label: string;
  parts: [number, number, number];
};

export type PeerRowData = {
  name: string;
  value: number;
  self?: boolean;
};

export type PeerPanelData = {
  label: string;
  hint: string;
  rows: PeerRowData[];
  format?: ValueFormatData;
};

export type FilingEntryData = {
  kind: string;
  note: string;
  date: string;
};

export type TableRowData = {
  label: string;
  values: string[];
};

type ProseSectionData = {
  kind: 'prose';
  paragraphs: string[];
};

type TrendsSectionData = {
  kind: 'trends';
  panels: TrendPanelData[];
  chartNote?: string;
};

type MetricsSectionData = {
  kind: 'metrics';
  metrics: MetricRowData[];
};

type ChartSectionData = {
  kind: 'chart';
  bars: ChartBarData[];
  format?: ValueFormatData;
  refValue?: number;
  refLabel?: string;
  chartNote?: string;
};

type StackSectionData = {
  kind: 'stack';
  bars: StackBarData[];
  format?: ValueFormatData;
  chartNote?: string;
};

type TableSectionData = {
  kind: 'table';
  firstColumn: string;
  columns: string[];
  rows: TableRowData[];
  tableNote?: string;
};

type RowsSectionData = {
  kind: 'rows';
  entries: FilingEntryData[];
};

type PeersSectionData = {
  kind: 'peers';
  panels: PeerPanelData[];
  chartNote?: string;
};

export type SectionData = {
  rank: number;
  id: string;
  title: string;
  kicker: string;
  origin?: string;
} & (
  | ProseSectionData
  | TrendsSectionData
  | MetricsSectionData
  | ChartSectionData
  | StackSectionData
  | TableSectionData
  | RowsSectionData
  | PeersSectionData
);

export type HeroData = {
  symbol: string;
  name: string;
  sector: string;
  tags?: string[];
  price: string;
  change: string;
  changeDir: 'up' | 'down' | 'flat';
  priceNote?: string;
  summary: string;
};

export type FooterData = {
  links?: { label: string; href: string }[];
  externalLinks?: { label: string; href: string }[];
  disclaimer?: string;
};
