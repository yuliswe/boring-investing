'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
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

const hero: HeroData = {
  symbol: 'MSFT',
  name: 'Microsoft Corporation',
  sector: 'Software',
  tags: ['Large Cap', 'Dividend'],
  price: '$468.80',
  changePct: 0.87,
  priceNote: 'close, 30 June',
  summary:
    'Cloud, productivity, and platform franchises with durable recurring revenue. Microsoft derives the majority of its revenue from recurring commercial subscriptions and cloud services across three segments.',
};

const fcfYears = financials.revenue.map(r => r.year);
const fcfValues = [56.1, 65.1, 59.5, 74.1, 80.9];

const msftSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue-breakdown',
    title: 'Revenue breakdown',
    kicker:
      'Each segment’s growth from FY22 on one chart, indexed to 100, so scale does not hide the trend.',
    kind: 'multi',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        values: segments.segments.map(
          s => s.productivity + s.intelligentCloud + s.morePersonalComputing
        ),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'Intelligent Cloud',
        values: segments.segments.map(s => s.intelligentCloud),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Productivity',
        values: segments.segments.map(s => s.productivity),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Personal Computing',
        values: segments.segments.map(s => s.morePersonalComputing),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'Lines are indexed to FY22 = 100; the dashed rule is the base. Year-on-year change per segment is shown beneath.',
  },
  {
    rank: 500,
    id: 'fcf',
    title: 'Free Cash Flow',
    kicker: 'Annual free cash flow in billions, with a break-even reference.',
    kind: 'chart',
    bars: fcfYears.map((y, i) => ({ label: y, value: fcfValues[i] })),
    format: { prefix: '$', suffix: 'B', decimals: 0 },
    refValue: 0,
    refLabel: 'Break-even',
    chartNote: 'FCF = operating cash flow − capital expenditures.',
  },
  {
    rank: 550,
    id: 'capital',
    title: 'Capital Allocation',
    kicker:
      'How cash is deployed across maintenance capex, growth investment, and shareholder returns.',
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
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Jul 29 2025',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report Q1 FY26',
        date: 'Oct 28 2025',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report Q2 FY26',
        date: 'Jan 27 2026',
      },
      {
        kind: '8-K',
        note: 'Q3 FY26 earnings release',
        date: 'Apr 29 2026',
      },
    ],
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
