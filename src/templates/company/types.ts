export type TrendDot = {
  year: string;
  value: string;
  delta: string;
  deltaColor: string;
  h: string;
  x: string;
};

export type TrendPanel = {
  label: string;
  lineColor: string;
  latest: string;
  dots: TrendDot[];
  points: string;
  hasMedian: boolean;
  medianH: string;
  medianLabel: string;
};

export type MetricRow = {
  label: string;
  value: string;
  note?: string;
};

export type ChartBar = {
  label: string;
  value: string;
  sub?: string;
  h: string;
  labelBottom: string;
};

export type StackBar = {
  label: string;
  value: string;
  h: string;
  labelBottom: string;
  maintH: string;
  growthH: string;
  retH: string;
};

export type PeerRow = {
  name: string;
  value: string;
  self: boolean;
  w: string;
  barColor: string;
};

export type PeerPanel = {
  label: string;
  hint: string;
  rows: PeerRow[];
};

export type FilingEntry = {
  kind: string;
  note: string;
  date: string;
};

export type TableColumn = {
  label: string;
};

export type TableRow = {
  label: string;
  values: { text: string }[];
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
  points: string;
  hasRef?: boolean;
  refBottom?: string;
  refLabel?: string;
  chartNote?: string;
};

type StackSection = {
  kind: 'stack';
  bars: StackBar[];
  chartNote?: string;
};

type TableSection = {
  kind: 'table';
  firstColumn: string;
  columns: TableColumn[];
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

export type CompanyHero = {
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

export type CompanyFooter = {
  links?: { label: string; href: string }[];
  externalLinks?: { label: string; href: string }[];
  disclaimer?: string;
};
