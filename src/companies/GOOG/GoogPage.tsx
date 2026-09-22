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
  symbol: 'GOOG',
  name: 'Alphabet Inc.',
  sector: 'Software',
  tags: ['Large Cap', 'Buyback', 'Dividend'],
  price: '$313.80',
  changePct: 64.78,
  priceNote: 'close, 31 December',
  summary:
    'Advertising, cloud, and platform conglomerate whose core franchise in search and YouTube advertising generates the cash that funds Google Cloud growth and Other Bets ventures including Waymo autonomous vehicles.',
};

const priceConfig: PriceConfig = {
  symbol: 'GOOG',
  defaultPrice: 313.8,
  currency: '$',
  referenceClose: 190.4357,
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
    guidanceDesc: financials.estimateNote,
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all three reporting segments.',
        values: [
          ...segments.segments.map(
            s => s.googleServices + s.googleCloud + s.otherBets
          ),
          459,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'Google Services',
        desc: 'Search, YouTube advertising and subscriptions, Android, Chrome, Google Play, hardware, Gmail, and Maps.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.googleServices), 384],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Google Cloud',
        desc: 'Google Cloud Platform infrastructure and Google Workspace (formerly G Suite) productivity tools.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.googleCloud), 72],
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
      { label: 'CY21', parts: [10.3, 14.3, 50.3] },
      { label: 'CY22', parts: [13.5, 18.0, 59.3] },
      { label: 'CY23', parts: [11.9, 20.4, 61.5] },
      { label: 'CY24', parts: [15.3, 37.2, 69.6] },
      { label: 'CY25', parts: [21.1, 70.4, 55.7] },
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

const EPS_EST = 20.62;
const PRIOR_EPS = 10.81;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const epsGrowth = ((EPS_EST - PRIOR_EPS) / PRIOR_EPS) * 100;
  const peg = +(pe / epsGrowth).toFixed(2);
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
            CY26E: `Calculated from $${price.toFixed(2)} divided by consensus diluted EPS of $${EPS_EST}.`,
          },
        };
      }
      if (m.label === 'PEG ratio') {
        const values = [...m.values];
        values[values.length - 1] = peg;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            CY26E: `Calculated from the forward P/E of ${pe} divided by the CY25-to-CY26 EPS growth rate of ${epsGrowth.toFixed(1)}%.`,
          },
        };
      }
      return m;
    }),
  };
}

export function GoogPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={googSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
