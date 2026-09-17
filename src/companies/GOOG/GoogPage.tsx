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
  symbol: 'GOOG',
  name: 'Alphabet Inc.',
  sector: 'Software',
  tags: ['Large Cap', 'Buyback'],
  price: '$192.50',
  changePct: -0.26,
  priceNote: 'close, 31 December',
  summary:
    'Advertising, cloud, and platform conglomerate whose core franchise in search and YouTube advertising generates the cash that funds Google Cloud growth and Other Bets ventures including Waymo autonomous vehicles.',
};

const googSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by segment in billions, with year-on-year growth rates. Google Cloud was first broken out in CY19 with figures restated to CY17; CY16 values are estimates.',
    kind: 'multi',
    mode: 'absolute',
    years: [...segments.segments.map(s => s.year), 'CY26E'],
    guidanceCount: 1,
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all three reporting segments.',
        values: [
          ...segments.segments.map(
            s => s.googleServices + s.googleCloud + s.otherBets
          ),
          450,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'Google Services',
        desc: 'Search, YouTube advertising and subscriptions, Android, Chrome, Google Play, hardware, Gmail, and Maps.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.googleServices), 380],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Google Cloud',
        desc: 'Google Cloud Platform infrastructure and Google Workspace (formerly G Suite) productivity tools.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.googleCloud), 67],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Other Bets',
        desc: 'Waymo autonomous vehicles, Verily life sciences, Calico longevity research, and other early-stage ventures.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.otherBets), 3],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'CY16 segment values are estimates; Google Cloud was first disclosed separately in CY19 with figures restated to CY17. CY26E is a consensus estimate.',
  },
  {
    rank: 560,
    id: 'capital',
    title: 'Capital Allocation',
    kicker:
      'How cash is deployed across maintenance capex, growth investment, and shareholder returns.',
    kind: 'stack',
    bars: [
      { label: 'CY21', parts: [12.4, 12.2, 50.3] },
      { label: 'CY22', parts: [13.9, 17.6, 59.3] },
      { label: 'CY23', parts: [14.5, 17.8, 61.5] },
      { label: 'CY24', parts: [16.0, 36.5, 68.0] },
      { label: 'CY25', parts: [19.0, 56.0, 75.0] },
    ],
    format: { decimals: 1 },
    chartNote:
      'Maintenance = reported depreciation. Growth = capital expenditure above depreciation. Returned = dividends + buybacks. Alphabet began paying dividends in CY24. From the filed cash flow statements.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 June',
        date: 'Jul 29 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'Apr 29 2026',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'Apr 10 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for calendar year 2025',
        date: 'Feb 3 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Oct 28 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://abc.xyz/investor/',
    },
    {
      label: 'Annual Reports',
      href: 'https://abc.xyz/investor/#tab-annual-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001652044',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/GOOG/',
    },
  ],
};

export function GoogPage() {
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={hero}
      financials={financials as SoftwareFinancials}
      extraSections={googSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
