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
  symbol: 'MA',
  name: 'Mastercard Incorporated',
  sector: 'Payment Networks',
  tags: ['Large Cap', 'Dividend'],
  price: '$566.08',
  changePct: -0.31,
  priceNote: 'close, 23 September',
  summary:
    'Global payment network connecting cardholders and merchants through issuing and acquiring banks. Mastercard earns toll-like fees on every electronic transaction without taking consumer credit risk, producing operating margins above 55% and predictable revenue growth tied to the secular shift from cash to digital payments.',
};

const priceConfig: PriceConfig = {
  symbol: 'MA',
  defaultPrice: 566.08,
  currency: '$',
  referenceClose: 567.84,
};

const EPS_EST = 19.93;
const FCF_PER_SHARE_EST = 19.5;

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
      'Each line of the income statement as a share of net revenue, using the categories Mastercard reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'The $1.1B merchant class action litigation provision in FY18 spiked total expenses from 43% to 51% of revenue for that year alone. The provision for litigation line is inherently lumpy and unpredictable.',
    series: [
      {
        label: 'Total',
        desc: 'Sum of all expense lines below.\nShown as a percentage of net revenue.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map((l, li) => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of net revenue.',
        values: linePcts[li],
        format: pctFormat,
      })),
    ],
    chartNote:
      'Shares of net revenue from the filed income statement. General & administrative is the dominant cost, reflecting Mastercard’s asset-light model. The FY18 spike in total expenses is entirely from the $1.1B litigation provision. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'The same costs on a cash basis: D&A drops out, replaced by actual capital expenditures. Everything as a share of net revenue.',
    kind: 'multi',
    years: cashFlowYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    series: [
      {
        label: 'Total',
        desc: 'Sum of all cash-flow lines below.\nShown as a percentage of net revenue.',
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
      'FY20–FY25 only, because Mastercard began disclosing capitalized software as a separate capex line starting with FY20. Cash operating costs include cash taxes paid and working capital movements. The improving FCF margin from 43% in FY20 to 50% in FY25 reflects operating leverage as revenue grew faster than cash costs.',
  };
}

const segmentYears = ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'];
const revenueYears = financials.revenue.map(r => r.year);

const maSections: SectionData[] = [
  {
    rank: 350,
    id: 'revenue-total',
    title: 'Revenue & Operating Income',
    kicker:
      'Net revenue and operating income in billions with year-on-year growth rates. Net revenue is gross revenue minus rebates and incentives paid to financial institutions and merchants.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: revenueYears,
    series: [
      {
        label: 'Net revenue',
        desc: 'Consolidated net revenue after rebates and incentives.',
        values: financials.revenue.map(r => r.revenue),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Operating income',
        desc: 'Net revenue minus total operating expenses (general and administrative, advertising and marketing, depreciation and amortization, and provision for litigation).',
        values: financials.revenue.map(r => r.operatingIncome),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue dipped 9% in FY20 from COVID-19 as cross-border travel and in-person spending fell, then recovered strongly from FY21 onward. FY18 operating income was depressed by a $1.1B litigation provision; excluding it, the operating margin trend is smooth at 53–58%. FY26E revenue is the consensus estimate from 37 analysts.',
  },
  buildExpensesSection(),
  buildFCFSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue by Segment',
    kicker:
      'Net revenue split between the core Payment Network and Value-Added Services and Solutions, in billions.',
    kind: 'multi',
    mode: 'absolute',
    years: segmentYears,
    series: [
      {
        label: 'Net revenue',
        desc: 'Sum of Payment Network and Value-Added Services and Solutions.',
        values: [18.884, 22.237, 25.098, 28.167, 32.791],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Payment Network',
        desc: 'Assessment fees on gross dollar volume, transaction processing fees on switched transactions, and cross-border volume fees. Growth is driven by the secular shift from cash to electronic payments and by cross-border travel recovery post-COVID.',
        values: [11.943, 14.358, 15.824, 17.335, 19.476],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Value-Added Services',
        desc: 'Cyber and intelligence solutions, data and services (analytics, consulting, marketing), loyalty and rewards, processing, and real-time payments. This segment grew from 37% of revenue in FY21 to 41% in FY25.',
        values: [6.941, 7.879, 9.274, 10.832, 13.315],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Mastercard reports two revenue lines in its earnings releases. Value-Added Services has grown at roughly double the rate of Payment Network since FY21, driven by cyber security, analytics, and real-time payments. The segment mix shift toward VAS deepens integration with customers beyond pure transaction processing.',
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
        date: 'Aug 5 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report for Q1 2026, three months to 31 March',
        date: 'May 6 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 11 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report for Q3 2025, three months to 30 September',
        date: 'Nov 5 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investor.mastercard.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://investor.mastercard.com/financial-information/sec-filings/',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001141391',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/MA/',
    },
  ],
};

export function MaPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={maSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
