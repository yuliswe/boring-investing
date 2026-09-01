'use client';

import {
  BaseTemplate,
  trend,
  chartBar,
  chartPolyline,
  chartRefBottom,
  stackBar,
  peerPanel,
  tableColumns,
  tableRow,
  resetColorIndex,
} from '@/templates/base';
import type { Navbar, Hero, Footer, SectionData } from '@/templates/base';

const navbar: Navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '#', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
  action: { label: 'Sign in', href: '#' },
};

const hero: Hero = {
  symbol: 'MSFT',
  name: 'Microsoft Corporation',
  sector: 'Technology',
  tags: ['Large Cap', 'Dividend'],
  price: '$442.57',
  change: '1.24%',
  changeDir: 'up',
  priceNote: 'as of close Jun 30 2025',
  summary:
    "Microsoft is the world's largest software company by revenue, operating across three segments: Productivity & Business Processes, Intelligent Cloud, and More Personal Computing. The company derives the majority of its revenue from recurring commercial subscriptions and cloud services.",
};

const years = ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'];

resetColorIndex();

const baseSections: SectionData[] = [
  {
    rank: 100,
    id: 'method',
    title: 'Method',
    kicker:
      'How this company was read, and what the sections below will and will not tell you.',
    kind: 'prose',
    paragraphs: [
      'Every page here is built the same way. We read the last ten annual filings before the most recent quarter, take each figure from the audited statements rather than the press release, and set it beside its own decade — so a good year cannot pass for a good business.',
      'Where a number only means something next to somebody else’s — an earnings multiple, a margin, a return on equity — we show the three closest listed competitors and the sector median on their latest reported figures, and say how far apart the period ends are.',
      'Nothing is scored, ranked or rated. What follows is the record, the balance sheet, the management and the filings, in that order, with the judgement left to you. Prices are delayed fifteen minutes and marked with a dagger.',
    ],
  },
  {
    rank: 200,
    id: 'critical',
    title: 'Critical Metrics',
    kicker:
      'Valuation ratios that signal whether the market price is justified by earnings and cash flow.',
    kind: 'trends',
    panels: [
      trend(
        'P/E ratio',
        years,
        [34.5, 36.2, 28.7, 32.1, 36.2],
        v => (v != null ? v.toFixed(1) : 'n/a'),
        30.5,
        true
      ),
      trend(
        'P/FCF ratio',
        years,
        [30.8, 28.4, 26.1, 33.6, 31.2],
        v => (v != null ? v.toFixed(1) : 'n/a'),
        28.0,
        true
      ),
      trend(
        'EV/EBITDA',
        years,
        [24.1, 25.8, 22.0, 24.5, 27.8],
        v => (v != null ? v.toFixed(1) : 'n/a'),
        24.0,
        true
      ),
    ],
    chartNote:
      'Lower is cheaper on all three. 10Y median shown as dashed line.',
  },
  {
    rank: 300,
    id: 'key',
    title: 'Key Metrics',
    kicker:
      'Profitability, returns, leverage and margins with five-year trend and 10Y median.',
    kind: 'trends',
    panels: [
      trend(
        'Diluted EPS',
        years,
        [5.76, 8.05, 9.21, 9.68, 11.86],
        v => (v != null ? '$' + v.toFixed(2) : 'n/a'),
        8.0
      ),
      trend(
        'ROE %',
        years,
        [40.1, 47.1, 47.2, 38.6, 39.2],
        v => (v != null ? v.toFixed(1) + '%' : 'n/a'),
        42.0,
        false,
        'add'
      ),
      trend(
        'ROIC %',
        years,
        [24.8, 29.3, 30.1, 27.6, 31.4],
        v => (v != null ? v.toFixed(1) + '%' : 'n/a'),
        28.0,
        false,
        'add'
      ),
      trend(
        'D/E ratio',
        years,
        [0.61, 0.5, 0.39, 0.32, 0.29],
        v => (v != null ? v.toFixed(2) : 'n/a'),
        0.45,
        true
      ),
      trend(
        'Net margin %',
        years,
        [30.9, 36.4, 36.7, 34.1, 35.6],
        v => (v != null ? v.toFixed(1) + '%' : 'n/a'),
        34.7,
        false,
        'add'
      ),
      trend(
        'FCF margin %',
        years,
        [33.2, 35.8, 30.2, 31.9, 29.4],
        v => (v != null ? v.toFixed(1) + '%' : 'n/a'),
        32.1,
        false,
        'add'
      ),
    ],
    chartNote:
      'Source: filed annual statements. FY = fiscal year. Percentage deltas are additive (pp).',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2024',
        date: 'Jul 30 2024',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report Q1 FY25',
        date: 'Oct 23 2024',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report Q2 FY25',
        date: 'Jan 28 2025',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement for annual meeting',
        date: 'Oct 17 2024',
      },
      {
        kind: '8-K',
        note: 'Q3 FY25 earnings release',
        date: 'Apr 30 2025',
      },
    ],
  },
];

const childSections: SectionData[] = [
  {
    rank: 250,
    id: 'revenue',
    title: 'Revenue Trend',
    kicker:
      'Total revenue and growth rate over the trailing five fiscal years.',
    origin: 'Software',
    kind: 'trends',
    panels: [
      trend(
        'Revenue ($B)',
        years,
        [143.0, 168.1, 198.3, 211.9, 245.1],
        v => (v != null ? '$' + v.toFixed(0) + 'B' : 'n/a'),
        190.0
      ),
      trend(
        'Revenue Growth',
        years,
        [13.6, 17.5, 17.9, 6.9, 15.7],
        v => (v != null ? v.toFixed(1) + '%' : 'n/a'),
        14.3,
        false,
        'add'
      ),
      trend('Cloud Revenue ($B)', years, [59.5, 77.4, 91.2, 111.6, 135.3], v =>
        v != null ? '$' + v.toFixed(0) + 'B' : 'n/a'
      ),
    ],
    chartNote: 'Fiscal year ends June 30. Source: 10-K filings.',
  },
  {
    rank: 350,
    id: 'metrics',
    title: 'Snapshot',
    kicker: 'Fundamental metrics for the most recent fiscal year.',
    origin: 'Software',
    kind: 'metrics',
    metrics: [
      { label: 'Market Cap', value: '$3.29T' },
      { label: 'Dividend Yield', value: '0.68%' },
      { label: 'Payout Ratio', value: '24.7%' },
      { label: 'Interest Coverage', value: '46.7x' },
      { label: 'Recurring Revenue %', value: '~78%', note: 'estimated' },
    ],
  },
  {
    rank: 400,
    id: 'fcf',
    title: 'Free Cash Flow',
    kicker: 'Annual free cash flow with break-even reference line.',
    origin: 'Software',
    kind: 'chart',
    bars: (() => {
      const vals = [45.2, 56.1, 65.1, 59.5, 74.1];
      const lo = 0;
      const hi = 85;
      return years.map((y, i) =>
        chartBar(y, '$' + vals[i].toFixed(0) + 'B', vals[i], lo, hi)
      );
    })(),
    points: (() => {
      const vals = [45.2, 56.1, 65.1, 59.5, 74.1];
      const lo = 0;
      const hi = 85;
      const bars = years.map((y, i) =>
        chartBar(y, '$' + vals[i].toFixed(0) + 'B', vals[i], lo, hi)
      );
      return chartPolyline(bars);
    })(),
    hasRef: true,
    refBottom: chartRefBottom(0, 0, 85),
    refLabel: 'Break-even',
    chartNote: 'FCF = operating cash flow − capital expenditures.',
  },
  {
    rank: 450,
    id: 'capital',
    title: 'Capital Allocation',
    kicker:
      'How the company deploys its cash across maintenance capex, growth investment, and shareholder returns.',
    origin: 'Software',
    kind: 'stack',
    bars: (() => {
      const lo = 0;
      const hi = 90;
      return [
        stackBar('FY20', [8.5, 12.1, 33.8], lo, hi),
        stackBar('FY21', [9.2, 15.3, 38.4], lo, hi),
        stackBar('FY22', [10.1, 18.7, 40.2], lo, hi),
        stackBar('FY23', [11.8, 20.9, 35.6], lo, hi),
        stackBar('FY24', [13.4, 25.7, 38.1], lo, hi),
      ];
    })(),
    chartNote:
      'Maintenance = depreciation-level capex. Growth = capex above maintenance + acquisitions. Returned = dividends + buybacks.',
  },
  {
    rank: 500,
    id: 'segments',
    title: 'Segment Breakdown',
    kicker: 'Revenue by operating segment for the most recent fiscal year.',
    origin: 'Software',
    kind: 'table',
    firstColumn: 'Segment',
    columns: tableColumns('Revenue', '% of Total', 'YoY Growth'),
    rows: [
      tableRow('Intelligent Cloud', '$96.8B', '39.5%', '+19.9%'),
      tableRow('Productivity & Business', '$80.8B', '33.0%', '+12.6%'),
      tableRow('More Personal Computing', '$67.5B', '27.5%', '+14.0%'),
    ],
    tableNote: 'Source: FY24 10-K filing.',
  },
  {
    rank: 550,
    id: 'peers',
    title: 'Peer Comparison',
    kicker:
      'How Microsoft compares to large-cap software peers on key financial metrics.',
    origin: 'Software',
    kind: 'peers',
    panels: [
      peerPanel('Operating Margin', 'higher is better', [
        ['MSFT', 44.6, '44.6%', true],
        ['AAPL', 33.9, '33.9%'],
        ['GOOGL', 31.5, '31.5%'],
        ['AMZN', 10.7, '10.7%'],
        ['META', 41.2, '41.2%'],
      ]),
      peerPanel('Revenue Growth', 'higher is better', [
        ['MSFT', 15.7, '15.7%', true],
        ['AAPL', -2.8, '-2.8%'],
        ['GOOGL', 8.7, '8.7%'],
        ['AMZN', 11.8, '11.8%'],
        ['META', 15.7, '15.7%'],
      ]),
      peerPanel('P/E Ratio', 'lower is better', [
        ['MSFT', 36.2, '36.2x', true],
        ['AAPL', 33.8, '33.8x'],
        ['GOOGL', 27.1, '27.1x'],
        ['AMZN', 62.3, '62.3x'],
        ['META', 28.4, '28.4x'],
      ]),
      peerPanel('ROIC', 'higher is better', [
        ['MSFT', 31.4, '31.4%', true],
        ['AAPL', 56.7, '56.7%'],
        ['GOOGL', 25.8, '25.8%'],
        ['AMZN', 13.2, '13.2%'],
        ['META', 28.9, '28.9%'],
      ]),
    ],
    chartNote: 'Figures are trailing twelve months where available.',
  },
];

const footer: Footer = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.microsoft.com/en-us/Investor',
    },
    {
      label: 'Annual Reports',
      href: 'https://www.microsoft.com/en-us/Investor/annual-reports.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000789019',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/MSFT/',
    },
  ],
};

export default function PreviewPage() {
  return (
    <BaseTemplate
      navbar={navbar}
      hero={hero}
      sections={baseSections}
      childSections={childSections}
      figuresDate='30 June'
      footer={footer}
    />
  );
}
