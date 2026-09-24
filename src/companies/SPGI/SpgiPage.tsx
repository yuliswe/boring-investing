'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  expenseLines,
  cashFlowYears,
  cashFlowRevenue,
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
  symbol: 'SPGI',
  name: 'S&P Global Inc.',
  sector: 'Financial Data & Analytics',
  tags: ['Large Cap', 'Dividend'],
  price: '$403.81',
  changePct: -0.66,
  priceNote: 'close, 23 September',
  summary:
    'Provider of credit ratings, benchmarks, analytics, and data to the capital and commodity markets. S&P Global generates the majority of its revenue from subscriptions and recurring fees across five divisions, anchored by the regulatory moat of its Ratings business and the index licensing power of S&P Dow Jones Indices.',
};

const priceConfig: PriceConfig = {
  symbol: 'SPGI',
  defaultPrice: 403.81,
  currency: '$',
  referenceClose: 406.5,
};

const EPS_EST = 16.48;
const FCF_PER_SHARE_EST = 18.0;

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
            FY26E: `Calculated from $${price.toFixed(2)} divided by GAAP EPS guidance midpoint of $${EPS_EST}.`,
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by estimated FCF per share of $${FCF_PER_SHARE_EST.toFixed(2)}.`,
          },
        };
      }
      return m;
    }),
  };
}

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
      'Total expenses as a share of revenue, split into core operating costs and non-cash depreciation and amortization. SPGI reports a single combined expenses line in its earnings releases.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Amortization of intangibles jumped from approximately 1% of revenue pre-merger to 7-8% post-merger due to the IHS Markit acquisition in February 2022. This non-cash charge is the primary reason post-merger operating margins appear compressed relative to the pre-merger baseline of approximately 48-51%.',
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
      'Shares of revenue from the filed income statement. The combined Operating & SG&A line reflects SPGI reporting a single total-expenses figure in its earnings releases rather than separate functional categories. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
  };
}

function toCashFlowShareOfRevenue(
  values: (number | null)[]
): (number | null)[] {
  return values.map((v, i) =>
    v !== null && cashFlowRevenue[i]
      ? +((v / cashFlowRevenue[i]) * 100).toFixed(1)
      : null
  );
}

function buildFCFSection(): SectionData {
  const linePcts = cashFlowLines.map(l => toCashFlowShareOfRevenue(l.values));
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
      'The same costs on a cash basis: D&A and stock compensation drop out, replaced by the actual cash movements. Everything as a share of revenue.',
    kind: 'multi',
    years: cashFlowYears,
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
      'FY21-FY25 only. Cash operating costs absorb working capital movements because SPGI does not separately disclose the components in its earnings releases. FY22 cash operating costs spiked to 76.7% of revenue as merger integration consumed cash and one-time transaction costs were paid.',
  };
}

const segmentYears = ['FY22', 'FY23', 'FY24', 'FY25'];
const revenueYears = financials.revenue.map(r => r.year);

const spgiSections: SectionData[] = [
  {
    rank: 350,
    id: 'revenue-total',
    title: 'Revenue & Operating Income',
    kicker:
      'Total revenue and operating income in billions with year-on-year growth rates. Operating income is revenue minus total expenses, excluding gains and losses on dispositions.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: revenueYears,
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated revenue from all divisions.',
        values: financials.revenue.map(r => r.revenue),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Operating income',
        desc: 'Revenue minus total expenses, excluding gains and losses on dispositions and equity in income on unconsolidated subsidiaries. This provides a cleaner view of recurring operating profitability than GAAP Operating Profit, which in FY22 included a $1.9B gain from the sale of Engineering Solutions.',
        values: financials.revenue.map(r => r.operatingIncome),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue jumped 34.7% in FY22 from the IHS Markit merger (closed February 2022), but operating income initially fell as approximately $900M in new intangible amortization and merger integration costs more than offset the added revenue. Operating margins have recovered from 27.0% in FY22 toward the pre-merger level of approximately 50% as integration costs wind down. FY26E is derived from SPGI guidance.',
  },
  buildExpensesSection(),
  buildFCFSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue by Segment',
    kicker:
      'Revenue by division in billions, using the post-merger segment structure that took effect in February 2022. Commodity Insights was renamed to Energy in FY24.',
    kind: 'multi',
    mode: 'absolute',
    years: segmentYears,
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all five divisions. Segment totals exceed consolidated revenue due to intersegment eliminations.',
        values: [11.027, 12.541, 14.394, 15.536],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Market Intelligence',
        desc: 'Desktop and enterprise data products, research, analytics, and data management solutions for financial professionals.',
        values: [3.811, 4.376, 4.645, 4.916],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Ratings',
        desc: 'Credit ratings and research on corporate and sovereign debt, structured finance, and financial institutions. Revenue is driven by debt issuance volumes.',
        values: [3.05, 3.332, 4.37, 4.724],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Energy',
        desc: 'Commodity price assessments, energy and petrochemical data, and analytics. Reported as Commodity Insights in FY22-FY23.',
        values: [1.685, 1.946, 2.142, 2.299],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Indices',
        desc: 'S&P Dow Jones Indices licensing fees, exchange-traded derivatives, and data subscriptions tied to benchmarks including the S&P 500.',
        values: [1.339, 1.403, 1.628, 1.85],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Mobility',
        desc: 'Automotive data and analytics for dealers, manufacturers, insurers, and financiers. Spun off as Mobility Global (NYSE: MBGL) on 1 July 2026.',
        values: [1.142, 1.484, 1.609, 1.747],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Segment structure reflects the post-merger combined company from February 2022 onward. Engineering Solutions ($323M in FY22, $133M in FY23) was divested and is excluded. Ratings revenue is highly cyclical, driven by debt issuance volumes, which explains the 31% jump in FY24 as issuance recovered. Mobility was spun off as Mobility Global on 1 July 2026 and will not appear in future results.',
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
        note: 'Quarterly report for Q2 2026, three months to 30 June',
        date: 'Jul 29 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report for Q1 2026, three months to 31 March',
        date: 'Apr 29 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 10 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report for Q3 2025, three months to 30 September',
        date: 'Oct 30 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investor.spglobal.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://investor.spglobal.com/financial-information/sec-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000064040',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/SPGI/',
    },
  ],
};

export function SpgiPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={spgiSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
