export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export type Navbar = {
  brand: string;
  links: NavLink[];
  action?: { label: string; href: string };
};

export type ValueFormat = {
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type TrendPanel = {
  label: string;
  years: string[];
  values: (number | null)[];
  format?: ValueFormat;
  median10y?: number;
  invertColor?: boolean;
  deltaMode?: 'pct' | 'add';
};

export type MetricRow = {
  label: string;
  value: string;
  note?: string;
};

export type ChartBar = {
  label: string;
  value: number;
  sub?: string;
};

export type StackBar = {
  label: string;
  parts: [number, number, number];
};

export type PeerRow = {
  name: string;
  value: number;
  self?: boolean;
};

export type PeerPanel = {
  label: string;
  hint: string;
  rows: PeerRow[];
  format?: ValueFormat;
};

export type FilingEntry = {
  kind: string;
  note: string;
  date: string;
};

export type TableRow = {
  label: string;
  values: string[];
};

type ProseSection = {
  kind: 'prose';
  paragraphs: string[];
};

type TrendsSection = {
  kind: 'trends';
  panels: TrendPanel[];
  chartNote?: string;
};

type MetricsSection = {
  kind: 'metrics';
  metrics: MetricRow[];
};

type ChartSection = {
  kind: 'chart';
  bars: ChartBar[];
  format?: ValueFormat;
  refValue?: number;
  refLabel?: string;
  chartNote?: string;
};

type StackSection = {
  kind: 'stack';
  bars: StackBar[];
  format?: ValueFormat;
  chartNote?: string;
};

type TableSection = {
  kind: 'table';
  firstColumn: string;
  columns: string[];
  rows: TableRow[];
  tableNote?: string;
};

type RowsSection = {
  kind: 'rows';
  entries: FilingEntry[];
};

type PeersSection = {
  kind: 'peers';
  panels: PeerPanel[];
  chartNote?: string;
};

export type SectionData = {
  rank: number;
  id: string;
  title: string;
  kicker: string;
  origin?: string;
} & (
  | ProseSection
  | TrendsSection
  | MetricsSection
  | ChartSection
  | StackSection
  | TableSection
  | RowsSection
  | PeersSection
);

export type Hero = {
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

export type Footer = {
  links?: { label: string; href: string }[];
  externalLinks?: { label: string; href: string }[];
  disclaimer?: string;
};
