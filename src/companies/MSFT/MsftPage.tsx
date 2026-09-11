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
  price: '$373.02',
  changePct: 1.21,
  priceNote: 'close, 30 June',
  summary:
    'Cloud, productivity, and platform franchises with durable recurring revenue. Microsoft derives the majority of its revenue from recurring commercial subscriptions and cloud services across three segments.',
};

const msftSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Each segment’s growth on one chart, indexed to 100, so scale does not hide the trend. FY24 onward uses the recast segment structure adopted in FY25.',
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
      'Lines are indexed to FY17 = 100; the dashed rule is the base. FY17–FY23 use the pre-recast segment definitions; FY24 onward uses the recast structure adopted in FY25.',
  },
  {
    rank: 560,
    id: 'capital',
    title: 'Capital Allocation',
    kicker:
      'How cash is deployed across maintenance capex, growth investment, and shareholder returns.',
    kind: 'stack',
    bars: [
      { label: 'FY22', parts: [12.6, 11.3, 50.8] },
      { label: 'FY23', parts: [11.0, 17.1, 42.0] },
      { label: 'FY24', parts: [15.2, 29.3, 39.0] },
      { label: 'FY25', parts: [22.0, 42.6, 42.5] },
      { label: 'FY26', parts: [34.3, 81.6, 48.7] },
    ],
    format: { decimals: 1 },
    chartNote:
      'Maintenance = reported depreciation. Growth = capital expenditure above depreciation. Returned = dividends + buybacks. From the filed cash flow statements.',
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
        note: 'Annual report for fiscal year 2026',
        date: 'Jul 29 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'Apr 29 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 December',
        date: 'Jan 28 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Oct 29 2025',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'Oct 21 2025',
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
