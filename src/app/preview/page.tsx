'use client';

import { BaseTemplate } from '@/templates/base';
import type {
  NavbarData,
  HeroData,
  FooterData,
  SectionData,
} from '@/templates/base';

const navbar: NavbarData = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '#', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
  action: { label: 'Sign in', href: '#' },
};

const hero: HeroData = {
  symbol: 'MSFT',
  name: 'Microsoft Corporation',
  sector: 'Technology',
  tags: ['Large Cap', 'Dividend'],
  price: '$442.57',
  changePct: 1.24,
  priceNote: 'as of close Jun 30 2025',
  summary:
    "Microsoft is the world's largest software company by revenue, operating across three segments: Productivity & Business Processes, Intelligent Cloud, and More Personal Computing. The company derives the majority of its revenue from recurring commercial subscriptions and cloud services.",
};

const years = ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

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
      {
        label: 'P/E ratio',
        years,
        values: [36.2, 28.7, 32.1, 36.2, 34.8],
        format: { decimals: 1 },
        median10y: 30.5,
        invertColor: true,
      },
      {
        label: 'P/FCF ratio',
        years,
        values: [28.4, 26.1, 33.6, 31.2, 32.5],
        format: { decimals: 1 },
        median10y: 28.0,
        invertColor: true,
      },
      {
        label: 'EV/EBITDA',
        years,
        values: [25.8, 22.0, 24.5, 27.8, 26.4],
        format: { decimals: 1 },
        median10y: 24.0,
        invertColor: true,
      },
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
      {
        label: 'Diluted EPS',
        years,
        values: [8.05, 9.21, 9.68, 11.86, 13.15],
        format: { prefix: '$', decimals: 2 },
        median10y: 8.0,
      },
      {
        label: 'ROE %',
        years,
        values: [47.1, 47.2, 38.6, 39.2, 40.8],
        format: { suffix: '%', decimals: 1 },
        median10y: 42.0,
        deltaMode: 'add',
      },
      {
        label: 'ROIC %',
        years,
        values: [29.3, 30.1, 27.6, 31.4, 33.0],
        format: { suffix: '%', decimals: 1 },
        median10y: 28.0,
        deltaMode: 'add',
      },
      {
        label: 'D/E ratio',
        years,
        values: [0.5, 0.39, 0.32, 0.29, 0.26],
        format: { decimals: 2 },
        median10y: 0.45,
        invertColor: true,
      },
      {
        label: 'Net margin %',
        years,
        values: [36.4, 36.7, 34.1, 35.6, 36.8],
        format: { suffix: '%', decimals: 1 },
        median10y: 34.7,
        deltaMode: 'add',
      },
      {
        label: 'FCF margin %',
        years,
        values: [35.8, 30.2, 31.9, 29.4, 29.2],
        format: { suffix: '%', decimals: 1 },
        median10y: 32.1,
        deltaMode: 'add',
      },
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
      {
        label: 'Revenue ($B)',
        years,
        values: [168.1, 198.3, 211.9, 245.1, 277.0],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        median10y: 210.0,
      },
      {
        label: 'Revenue Growth',
        years,
        values: [17.5, 17.9, 6.9, 15.7, 13.1],
        format: { suffix: '%', decimals: 1 },
        median10y: 14.3,
        deltaMode: 'add',
      },
      {
        label: 'Cloud Revenue ($B)',
        years,
        values: [77.4, 91.2, 111.6, 135.3, 158.0],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
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
      { label: 'Market Cap', value: '$3.42T' },
      { label: 'Dividend Yield', value: '0.72%' },
      { label: 'Payout Ratio', value: '23.8%' },
      { label: 'Interest Coverage', value: '49.2x' },
      { label: 'Recurring Revenue %', value: '~80%', note: 'estimated' },
    ],
  },
  {
    rank: 400,
    id: 'fcf',
    title: 'Free Cash Flow',
    kicker: 'Annual free cash flow with break-even reference line.',
    origin: 'Software',
    kind: 'chart',
    bars: years.map((y, i) => ({
      label: y,
      value: [56.1, 65.1, 59.5, 74.1, 80.9][i],
    })),
    format: { prefix: '$', suffix: 'B', decimals: 0 },
    refValue: 0,
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
    bars: [
      { label: 'FY21', parts: [9.2, 15.3, 38.4] },
      { label: 'FY22', parts: [10.1, 18.7, 40.2] },
      { label: 'FY23', parts: [11.8, 20.9, 35.6] },
      { label: 'FY24', parts: [13.4, 25.7, 38.1] },
      { label: 'FY25', parts: [15.2, 30.4, 39.6] },
    ],
    format: { decimals: 1 },
    chartNote:
      'Maintenance = depreciation-level capex. Growth = capex above maintenance + acquisitions. Returned = dividends + buybacks.',
  },
  {
    rank: 500,
    id: 'segments',
    title: 'Segment Breakdown',
    kicker:
      'Revenue by operating segment indexed to FY22, so relative growth is visible regardless of absolute scale.',
    origin: 'Software',
    kind: 'multi',
    years: ['FY22', 'FY23', 'FY24', 'FY25'],
    series: [
      {
        label: 'Total',
        values: [198, 212, 245, 277],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'Intelligent Cloud',
        values: [75, 88, 105, 124],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Productivity',
        values: [63, 69, 78, 86],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Personal Computing',
        values: [60, 55, 62, 67],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'Lines are indexed to FY22 = 100; the dashed rule is the base. Share of total shown beneath each value.',
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
      {
        label: 'Operating Margin',
        hint: 'higher is better',
        rows: [
          { name: 'MSFT', value: 44.6, self: true },
          { name: 'AAPL', value: 33.9 },
          { name: 'GOOGL', value: 31.5 },
          { name: 'AMZN', value: 10.7 },
          { name: 'META', value: 41.2 },
        ],
        format: { suffix: '%', decimals: 1 },
      },
      {
        label: 'Revenue Growth',
        hint: 'higher is better',
        rows: [
          { name: 'MSFT', value: 15.7, self: true },
          { name: 'AAPL', value: -2.8 },
          { name: 'GOOGL', value: 8.7 },
          { name: 'AMZN', value: 11.8 },
          { name: 'META', value: 15.7 },
        ],
        format: { suffix: '%', decimals: 1 },
      },
      {
        label: 'P/E Ratio',
        hint: 'lower is better',
        rows: [
          { name: 'MSFT', value: 36.2, self: true },
          { name: 'AAPL', value: 33.8 },
          { name: 'GOOGL', value: 27.1 },
          { name: 'AMZN', value: 62.3 },
          { name: 'META', value: 28.4 },
        ],
        format: { suffix: 'x', decimals: 1 },
      },
      {
        label: 'ROIC',
        hint: 'higher is better',
        rows: [
          { name: 'MSFT', value: 31.4, self: true },
          { name: 'AAPL', value: 56.7 },
          { name: 'GOOGL', value: 25.8 },
          { name: 'AMZN', value: 13.2 },
          { name: 'META', value: 28.9 },
        ],
        format: { suffix: '%', decimals: 1 },
      },
    ],
    chartNote: 'Figures are trailing twelve months where available.',
  },
];

const footer: FooterData = {
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
