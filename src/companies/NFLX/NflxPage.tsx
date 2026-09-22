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
  symbol: 'NFLX',
  name: 'Netflix, Inc.',
  sector: 'Entertainment',
  tags: ['Large Cap'],
  price: '$97.00',
  changePct: 1.35,
  priceNote: 'close, 31 December',
  summary:
    'Dominant global streaming entertainment platform with more than 300 million paid members across 190 countries. Netflix earns nearly all of its revenue from monthly subscriptions, supplemented by an ad-supported tier introduced in late 2022.',
};

const priceConfig: PriceConfig = {
  symbol: 'NFLX',
  defaultPrice: 97.0,
  currency: '$',
  referenceClose: 95.7079,
};

const membershipYears = segments.segments.map(s => s.year);
const memberships = [117.6, 139.3, 167.1, 203.7, 221.8, 231.7, 260.3, 301.7];
const arm = [9.22, 10.24, 10.96, 11.24, 11.63, 11.62, 11.42, 11.57];

const nflxSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by geographic region in billions, with year-on-year growth rates.',
    kind: 'multi',
    mode: 'absolute',
    years: [...segments.segments.map(s => s.year), 'FY25', 'FY26E'],
    guidanceCount: 1,
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all four geographic regions. Through FY20 the regional sum falls slightly short of reported total revenue because DVD-by-mail revenue was a separate segment.',
        values: [
          ...segments.segments.map(s => s.ucan + s.emea + s.latam + s.apac),
          45.18,
          51.2,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'US & Canada',
        desc: 'Revenue from members in the United States and Canada, the most mature and highest-ARM region.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.ucan), 19.7, 21.5],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'EMEA',
        desc: 'Revenue from members in Europe, the Middle East, and Africa.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.emea), 14.5, 17.0],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Latin America',
        desc: 'Revenue from members in Central and South America and the Caribbean.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.latam), 5.4, 6.0],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Asia-Pacific',
        desc: 'Revenue from members in Japan, South Korea, India, Australia, and the rest of Asia. Fastest-growing region by percentage.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.apac), 5.6, 6.7],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'FY17–FY20 regional sums fall slightly below reported total revenue because DVD-by-mail was a separate segment (discontinued FY23). FY25 regional split is estimated; FY26E is management guidance midpoint.',
  },
  {
    rank: 450,
    id: 'membership',
    title: 'Paid Memberships',
    kicker:
      'Global paid streaming memberships at year-end, alongside the blended average monthly revenue per member derived by dividing total revenue by average membership. Netflix stopped reporting membership counts after Q4 2024.',
    kind: 'trends',
    panels: [
      {
        label: 'Global paid members',
        desc: 'Total paid streaming memberships at the end of Q4, as reported in the quarterly earnings letter. Netflix announced in October 2024 that it would stop disclosing membership counts starting in Q1 2025.',
        years: membershipYears,
        values: memberships,
        format: { suffix: 'M', decimals: 1 },
      },
      {
        label: 'Blended ARM',
        desc: 'Total annual revenue divided by average paid memberships divided by twelve. This is a rough global average that blends higher-priced mature markets with lower-priced growth markets and the ad-supported tier.',
        years: membershipYears,
        values: arm,
        format: { prefix: '$', decimals: 2 },
      },
    ],
    chartNote:
      'Membership sourced from quarterly earnings letters, not SEC filings. ARM is a computed global average and does not match any single plan price.',
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
        date: 'Jul 17 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'Apr 17 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Jan 23 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Oct 22 2025',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'Apr 17 2025',
      },
    ],
  },
];

const EPS_EST = 3.59;
const FCF_PER_SHARE_EST = 3.02;
const PRIOR_EPS = 2.53;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus free cash flow per share of $${FCF_PER_SHARE_EST}.`,
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
            FY26E: `Calculated from the forward P/E of ${pe} divided by the FY25-to-FY26 EPS growth rate of ${epsGrowth.toFixed(1)}%.`,
          },
        };
      }
      return m;
    }),
  };
}

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.netflix.net/',
    },
    {
      label: 'Annual Reports',
      href: 'https://ir.netflix.net/ir/sec-filings/annual-reports/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065280',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/NFLX/',
    },
  ],
};

export function NflxPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={nflxSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
