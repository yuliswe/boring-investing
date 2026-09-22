'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials from './data/financials';
import segments from './data/segments';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'UBER',
  name: 'Uber Technologies, Inc.',
  sector: 'Technology',
  tags: ['Large Cap', 'Growth'],
  price: '$97.42',
  changePct: 0.87,
  priceNote: 'close, 16 September',
  summary:
    'Global ride-hailing, delivery, and freight platform connecting consumers with independent drivers, couriers, and carriers across more than 70 countries. Uber derives revenue from service fees on each transaction, with Mobility and Delivery accounting for roughly 90% of total revenue.',
};

const priceConfig: PriceConfig = {
  symbol: 'UBER',
  defaultPrice: 97.42,
  currency: '$',
  referenceClose: 96.5798,
};

const uberSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by segment in billions, with year-on-year growth rates. FY20 totals exclude revenue from the ATG segment, which was divested in early 2021.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of Mobility, Delivery, and Freight segments.',
        values: segments.segments.map(s => s.mobility + s.delivery + s.freight),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'Mobility',
        desc: 'Ride-hailing, vehicle rentals, and transit partnerships.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.mobility),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Delivery',
        desc: 'Uber Eats restaurant delivery, grocery, convenience, and other local commerce.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.delivery),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Freight',
        desc: 'Digital freight brokerage connecting shippers with carriers, including the Transplace platform acquired in Q4 2021.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.freight),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'FY20 segment total ($10.5B) is lower than reported total revenue ($11.1B) because the divested ATG and Other segments are excluded. FY22 Freight includes a full year of Transplace revenue following its Q4 2021 acquisition.',
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
        date: 'Aug 6 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'May 7 2026',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'Apr 15 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 11 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Nov 5 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investor.uber.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://investor.uber.com/financial-information/sec-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001543151',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/UBER/',
    },
  ],
};

const EPS_EST = 2.95;
const FCF_PER_SHARE_EST = 5.12;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  return {
    ...financials,
    criticalMetrics: financials.criticalMetrics.map(m => {
      if (m.label === 'P/E ratio') {
        const values = [...m.values];
        values[values.length - 1] = pe;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus diluted EPS of $${EPS_EST}.`,
          },
        };
      }
      if (m.label === 'P/FCF ratio') {
        const values = [...m.values];
        values[values.length - 1] = pfcf;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from $${price.toFixed(2)} divided by estimated free cash flow per share of $${FCF_PER_SHARE_EST}.`,
          },
        };
      }
      return m;
    }),
  };
}

export function UberPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={uberSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
