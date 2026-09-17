'use client';

import { RetailTemplate } from '@/templates/RetailTemplate';
import type { RetailFinancials } from '@/templates/RetailTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import financials from './data/financials.json';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'LULU',
  name: 'Lululemon Athletica Inc.',
  sector: 'Retail',
  tags: ['Large Cap', 'DTC'],
  price: '$293.15',
  changePct: -0.87,
  priceNote: 'close, 2 February',
  summary:
    'Technical athletic apparel retailer operating primarily through company-owned stores and e-commerce, with a vertically integrated brand that commands premium pricing in the athleisure category.',
};

const luluSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Total net revenue in billions with year-on-year growth rates. Revenue is predominantly direct-to-consumer through company-operated stores and e-commerce.',
    kind: 'multi',
    mode: 'absolute',
    years: [
      'FY16',
      'FY17',
      'FY18',
      'FY19',
      'FY20',
      'FY21',
      'FY22',
      'FY23',
      'FY24',
      'FY25E',
    ],
    guidanceCount: 1,
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated net revenue from all channels and geographies.',
        values: [2.34, 2.65, 3.29, 3.98, 4.4, 6.26, 8.11, 9.62, 10.59, 11.3],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Operating income',
        desc: 'Income from operations before interest and taxes.\nShown as a percentage of total revenue.',
        values: [0.41, 0.43, 0.6, 0.72, 0.66, 1.37, 1.63, 1.97, 2.0, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue and operating income from filed annual statements. FY25E is management guidance.',
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
        date: 'Mar 27 2025',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 27 October',
        date: 'Dec 5 2024',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 28 July',
        date: 'Sep 5 2024',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 28 April',
        date: 'Jun 6 2024',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'May 10 2024',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://corporate.lululemon.com/investors',
    },
    {
      label: 'Annual Reports',
      href: 'https://corporate.lululemon.com/investors/financial-information/sec-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001397187',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/LULU/',
    },
  ],
};

export function LuluPage() {
  return (
    <RetailTemplate
      navbar={navbar}
      hero={hero}
      financials={financials as RetailFinancials}
      extraSections={luluSections}
      figuresDate='2 February'
      footer={footer}
    />
  );
}
