'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import financials, {
  expenseYears,
  revenueByYear,
  expenseLines,
  cashFlowLines,
} from './data/financials';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'TOI',
  name: 'Topicus.com Inc.',
  sector: 'Software',
  tags: ['Mid Cap'],
  price: 'CA$89.60',
  changePct: -29.5,
  priceNote: 'TSXV close, 18 September',
  summary:
    'Majority-owned subsidiary of Constellation Software, acquiring and operating European vertical market software businesses. Topicus generates the majority of its revenue from recurring maintenance and subscription fees, deploying free cash flow into disciplined acquisitions across diverse industries.',
};

const pctFormat = { suffix: '%', decimals: 1 };

function toShareOfRevenue(values: (number | null)[]): (number | null)[] {
  return values.map((v, i) =>
    v !== null && revenueByYear[i]
      ? +((v / revenueByYear[i]) * 100).toFixed(1)
      : null
  );
}

function buildExpensesSection(): SectionData {
  const linePcts = expenseLines.map(l => toShareOfRevenue(l.values));
  const totalPct = linePcts[0].map((_, i) => {
    const vals = linePcts.map(lp => lp[i]);
    return vals.every(v => v !== null)
      ? +vals.reduce((sum, v) => sum + (v as number), 0).toFixed(1)
      : null;
  });
  return {
    rank: 500,
    id: 'expenses',
    title: 'Expenses',
    kicker:
      'Each line of the income statement as a share of revenue, using the categories Topicus reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Topicus reports under IFRS, which mandates amortization of acquired intangible assets (~10% of revenue). This non-cash charge is the main reason net income (~5%) is far below FCF margin (~14%). The company does not separately report R&D spending.',
    series: [
      {
        label: 'Total',
        desc: 'Sum of all expense lines below.\nShown as a percentage of total revenue.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map((l, li) => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of total revenue.',
        values: linePcts[li],
        format: pctFormat,
      })),
    ],
    chartNote:
      'Shares of revenue from the filed income statement. Topicus reports expenses by nature under IFRS, not by function, so there is no COGS/SG&A/R&D split. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
  };
}

function buildFCFSection(): SectionData {
  const linePcts = cashFlowLines.map(l => toShareOfRevenue(l.values));
  const totalPct = linePcts[0].map((_, i) => {
    const vals = linePcts.map(lp => lp[i]);
    return vals.every(v => v !== null)
      ? +vals.reduce((sum, v) => sum + (v as number), 0).toFixed(1)
      : null;
  });
  return {
    rank: 550,
    id: 'cashflow',
    title: 'Free Cash Flow',
    kicker:
      'The same costs on a cash basis: depreciation and amortization drop out, replaced by the actual cash movements — cash taxes paid and real capital expenditures. Everything as a share of revenue.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    series: [
      {
        label: 'Total',
        desc: 'Sum of all cash-flow lines below.\nShown as a percentage of total revenue.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...cashFlowLines.map((l, li) => ({
        label: l.label,
        desc: l.desc,
        values: linePcts[li],
        format: pctFormat,
      })),
    ],
    chartNote:
      'All lines as a share of revenue. Cash operating costs = staff + third-party + other operating, excluding D&A. The residual after subtracting the total from 100% is the pre-acquisition free cash flow margin.',
  };
}

const toiSections: SectionData[] = [
  buildExpensesSection(),
  buildFCFSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by type in billions of euros, with year-on-year growth rates. Topicus reports revenue by nature rather than by operating group.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'FY26E'],
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all four revenue streams.',
        values: [0.494, 0.743, 0.917, 1.125, 1.295, 1.552, 1.795],
        format: { prefix: '€', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Maintenance & Recurring',
        desc: 'Recurring revenue from software maintenance contracts and subscriptions, the largest and most predictable revenue stream.\nShown as a percentage of total revenue.',
        values: [0.354, 0.513, 0.635, 0.774, 0.9, 1.097, null],
        format: { prefix: '€', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Professional Services',
        desc: 'Implementation, customisation, consulting, and training services delivered alongside software products.\nShown as a percentage of total revenue.',
        values: [0.12, 0.197, 0.24, 0.298, 0.327, 0.372, null],
        format: { prefix: '€', suffix: 'B', decimals: 2 },
      },
      {
        label: 'License',
        desc: 'One-time perpetual software licence fees.\nShown as a percentage of total revenue.',
        values: [0.014, 0.027, 0.032, 0.035, 0.044, 0.044, null],
        format: { prefix: '€', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Hardware & Other',
        desc: 'Hardware sales and other miscellaneous revenue.\nShown as a percentage of total revenue.',
        values: [0.006, 0.006, 0.011, 0.018, 0.025, 0.039, null],
        format: { prefix: '€', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Maintenance and recurring revenue consistently exceeds seventy percent of total revenue, reflecting the sticky, subscription-like nature of vertical market software. Revenue growth is primarily acquisition-driven, with organic growth in the low-to-mid single digits.',
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
        date: 'Aug 6 2026',
      },
      {
        kind: 'Interim',
        note: 'Shareholder report, three months to 31 March',
        date: 'May 7 2026',
      },
      {
        kind: 'Annual',
        note: 'Annual financial statements for fiscal year 2025',
        date: 'Feb 25 2026',
      },
      {
        kind: 'Interim',
        note: 'Shareholder report, nine months to 30 September',
        date: 'Nov 5 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://topicus.com/investors/',
    },
    {
      label: 'Press Releases',
      href: 'https://topicus.com/news/',
    },
  ],
  externalLinks: [
    {
      label: 'SEDAR+',
      href: 'https://www.sedarplus.ca/landingpage/',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/TOI.V/',
    },
  ],
};

export function ToiPage() {
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={hero}
      financials={financials}
      extraSections={toiSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
