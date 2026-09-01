'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';
import {
  chartBar,
  chartPolyline,
  chartRefBottom,
  stackBar,
  tableColumns,
  tableRow,
} from '@/templates/base';
import type { Hero, Footer, SectionData } from '@/templates/base';
import financials from './data/financials.json';
import segments from './data/segments.json';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: Hero = {
  symbol: 'MSFT',
  name: 'Microsoft Corporation',
  sector: 'Software',
  tags: ['Large Cap', 'Dividend'],
  price: '$442.57',
  change: '1.24%',
  changeDir: 'up',
  priceNote: 'close, 30 June',
  summary:
    'Cloud, productivity, and platform franchises with durable recurring revenue. Microsoft derives the majority of its revenue from recurring commercial subscriptions and cloud services across three segments.',
};

const years = financials.revenue.map(r => r.year);
const fcfValues = [45.2, 56.1, 65.1, 59.5, 74.1];

const msftSections: SectionData[] = [
  {
    rank: 400,
    id: 'fcf',
    title: 'Free Cash Flow',
    kicker: 'Annual free cash flow in billions, with a break-even reference.',
    kind: 'chart',
    bars: (() => {
      const lo = 0;
      const hi = 85;
      return years.map((y, i) =>
        chartBar(y, '$' + fcfValues[i].toFixed(0) + 'B', fcfValues[i], lo, hi)
      );
    })(),
    points: (() => {
      const lo = 0;
      const hi = 85;
      const bars = years.map((y, i) =>
        chartBar(y, '$' + fcfValues[i].toFixed(0) + 'B', fcfValues[i], lo, hi)
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
      'How cash is deployed across maintenance capex, growth investment, and shareholder returns.',
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
    kicker:
      'Revenue by operating segment over the last three fiscal years, in billions.',
    kind: 'table',
    firstColumn: 'Segment',
    columns: tableColumns(...segments.segments.map(s => s.year)),
    rows: [
      tableRow(
        'Productivity & Business',
        ...segments.segments.map(s => '$' + s.productivity + 'B')
      ),
      tableRow(
        'Intelligent Cloud',
        ...segments.segments.map(s => '$' + s.intelligentCloud + 'B')
      ),
      tableRow(
        'More Personal Computing',
        ...segments.segments.map(s => '$' + s.morePersonalComputing + 'B')
      ),
    ],
    tableNote: 'Source: 10-K filings.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Key regulatory filings in the last twelve months.',
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
        kind: '8-K',
        note: 'Q3 FY25 earnings release',
        date: 'Apr 30 2025',
      },
    ],
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

export function MsftPage() {
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={hero}
      financials={financials as SoftwareFinancials}
      extraSections={msftSections}
      figuresDate='30 June'
      footer={footer}
    />
  );
}
