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
  priceNote: 'close, 1 February 2026',
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
      'FY25',
      'FY26E',
    ],
    guidanceCount: 1,
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated net revenue from all channels and geographies.',
        values: [
          2.34, 2.65, 3.29, 3.98, 4.4, 6.26, 8.11, 9.62, 10.59, 11.1, 11.43,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Operating income',
        desc: 'Income from operations before interest and taxes.\nShown as a percentage of total revenue.',
        values: [
          0.42,
          0.46,
          0.71,
          0.89,
          0.82,
          1.33,
          1.33,
          2.13,
          2.51,
          2.21,
          null,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue and operating income from filed annual statements. FY26E is management guidance midpoint.',
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
        note: 'Quarterly report, thirteen weeks to 2 August',
        date: 'Sep 3 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 3 May',
        date: 'Jun 4 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Mar 17 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 2 November',
        date: 'Dec 11 2025',
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
      figuresDate='1 February 2026'
      footer={footer}
    />
  );
}
