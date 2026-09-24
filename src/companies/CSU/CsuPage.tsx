'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials from './data/financials';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'CSU',
  name: 'Constellation Software Inc.',
  sector: 'Software',
  tags: ['Large Cap'],
  price: 'CA$3,297.78',
  changePct: -0.63,
  priceNote: 'TSX close, 31 December',
  summary:
    'Serial acquirer of vertical market software businesses, operating a decentralized portfolio of hundreds of companies across diverse industries. Constellation Software generates the majority of its revenue from recurring maintenance and subscription fees, deploying free cash flow into disciplined acquisitions.',
};

const priceConfig: PriceConfig = {
  symbol: 'CSU',
  defaultPrice: 3297.78,
  currency: 'CA$',
  referenceClose: 3318.6877,
};

const FCFA2S_PER_SHARE_EST_CAD = 193.64;

function buildDynamicFinancials(price: number) {
  const pfcf = +(price / FCFA2S_PER_SHARE_EST_CAD).toFixed(1);
  return {
    ...financials,
    criticalMetrics: financials.criticalMetrics.map(m => {
      if (m.label === 'P/FCFA2S ratio') {
        const values = [...m.values];
        values[values.length - 1] = pfcf;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from CA$${price.toFixed(2)} divided by consensus FCFA2S per share of CA$${FCFA2S_PER_SHARE_EST_CAD} (US$140.19 at FY25 year-end exchange rate).`,
          },
        };
      }
      return m;
    }),
  };
}

const csuSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by type in billions of US dollars, with year-on-year growth rates. Constellation reports revenue by nature rather than by operating group.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: ['FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'FY26E'],
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all four revenue streams.',
        values: [5.107, 6.622, 8.405, 10.066, 11.623, 13.82],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Maintenance & Recurring',
        desc: 'Recurring revenue from software maintenance contracts, subscriptions, and transaction-based fees across all operating groups.',
        values: [3.611, 4.688, 5.985, 7.396, 8.7, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Professional Services',
        desc: 'Implementation, customisation, consulting, and training services delivered alongside software products.',
        values: [1.033, 1.381, 1.766, 1.975, 2.126, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Licenses',
        desc: 'One-time perpetual and term software licence fees.',
        values: [0.287, 0.32, 0.386, 0.393, 0.415, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Hardware & Other',
        desc: 'Hardware sales and other miscellaneous revenue.',
        values: [0.176, 0.233, 0.268, 0.302, 0.382, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Maintenance and recurring revenue consistently exceeds seventy percent of total revenue, reflecting the sticky, subscription-like nature of vertical market software. Revenue growth is primarily acquisition-driven, with organic growth in the low single digits.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: 'Interim',
        note: 'Shareholder report, six months to 30 June',
        date: 'Aug 8 2026',
      },
      {
        kind: 'Interim',
        note: 'Shareholder report, three months to 31 March',
        date: 'May 12 2026',
      },
      {
        kind: 'Annual',
        note: 'Annual financial statements for fiscal year 2025',
        date: 'Mar 9 2026',
      },
      {
        kind: 'Interim',
        note: 'Shareholder report, nine months to 30 September',
        date: 'Nov 7 2025',
      },
      {
        kind: 'AIF',
        note: 'Annual Information Form for fiscal year 2024',
        date: 'Mar 12 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.csisoftware.com/investor-relations/',
    },
    {
      label: 'Annual Reports',
      href: 'https://www.csisoftware.com/category/stat-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEDAR+',
      href: 'https://www.sedarplus.ca/landingpage/',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/CSU.TO/',
    },
  ],
};

export function CsuPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={csuSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
