'use client';

import { RetailTemplate } from '@/templates/RetailTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  expenseLines,
  cashFlowLines,
} from './data/financials';
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
  symbol: 'MCD',
  name: "McDonald's Corporation",
  sector: 'Restaurants',
  tags: ['Large Cap', 'Dividend'],
  price: '$238.32',
  changePct: 0.84,
  priceNote: 'close, 23 September',
  summary:
    "Global quick-service restaurant franchisor operating more than 45,000 restaurants in over 100 countries. Roughly 95% of restaurants are franchised, making McDonald's effectively a real-estate and brand-licensing company that collects rent and royalties.",
};

const priceConfig: PriceConfig = {
  symbol: 'MCD',
  defaultPrice: 238.32,
  currency: '$',
  referenceClose: 236.33,
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
      "Each line of the income statement as a share of revenue, using the categories McDonald's reports in its filings.",
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Company-operated restaurant expenses dropped sharply from FY16 to FY18 as McDonald’s refranchised thousands of restaurants. The franchise model shifts food, labor, and most occupancy costs to the franchisee.',
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
      'Shares of revenue from the filed income statement. FY17 income taxes include a one-time TCJA transition tax charge. FY22 other operating includes charges from the sale of the Russia business. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'The same costs on a cash basis: D&A and stock comp drop out, replaced by the actual cash movements — working capital swings, real CapEx, and cash taxes paid. Everything as a share of revenue.',
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
      'All lines as a share of revenue. Δ Working capital: positive means cash was freed, negative means cash was consumed. SBC excluded as non-cash.',
  };
}

const revenueYears = financials.revenue.map(r => r.year);

const mcdSections: SectionData[] = [
  buildExpensesSection(),
  buildFCFSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by geographic segment in billions. The current segment structure (US, IOM, IDL) dates from FY17 after a reorganization away from the prior ILM/High Growth/Foundational grouping.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all three reporting segments.',
        values: segments.segments.map(s => +(s.us + s.iom + s.idl).toFixed(2)),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'United States',
        desc: 'Company-operated and franchised restaurant revenue from the US market, the single largest segment.',
        values: segments.segments.map(s => s.us),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'International Operated Markets',
        desc: "Markets where McDonald's has a significant company-operated presence, including Australia, Canada, France, Germany, and the UK.",
        values: segments.segments.map(s => s.iom),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'International Developmental Licensed',
        desc: 'Markets operated primarily under license or developmental agreements, plus corporate revenue.',
        values: segments.segments.map(s => s.idl),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      "Segment structure dates from FY17. IOM revenue is the largest segment because it aggregates several major markets where McDonald's retains company-operated restaurants alongside franchisees.",
  },
  {
    rank: 350,
    id: 'revenue-total',
    title: 'Revenue & Operating Income',
    kicker:
      'Total revenue and operating income in billions with year-on-year growth rates.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: revenueYears,
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated revenue from company-operated restaurants, franchised restaurants, and other revenue.',
        values: financials.revenue.map(r => r.revenue),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Operating income',
        desc: 'Income from operations before interest and taxes.',
        values: financials.revenue.map(r => r.operatingIncome),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue declined from FY16 to FY18 as McDonald’s refranchised thousands of restaurants, converting company-operated revenue to lower but higher-margin franchise fees. FY26E is consensus analyst estimate.',
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
        date: 'Jul 28 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'Apr 28 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 24 2026',
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
      href: 'https://corporate.mcdonalds.com/corpmcd/investors.html',
    },
    {
      label: 'Annual Reports',
      href: 'https://corporate.mcdonalds.com/corpmcd/investors/financial-information/annual-reports.html',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000063908',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/MCD/',
    },
  ],
};

const ADJ_EPS_EST = 12.92;
const FCF_PER_SHARE_EST = 10.24;

function buildDynamicFinancials(price: number) {
  const pe = +(price / ADJ_EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  return {
    ...financials,
    criticalMetrics: financials.criticalMetrics!.map(m => {
      if (m.label === 'P/E ratio') {
        const values = [...m.values];
        values[values.length - 1] = pe;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus diluted EPS of $${ADJ_EPS_EST}.`,
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
      return m;
    }),
  };
}

export function McdPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <RetailTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={mcdSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
