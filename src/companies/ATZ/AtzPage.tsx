'use client';

import { RetailTemplate } from '@/templates/RetailTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  netIncomeByYear,
  expenseLines,
  cashFlowStatementYears,
  cashFlowStatementLines,
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
  symbol: 'ATZ',
  name: 'Aritzia Inc.',
  sector: 'Retail',
  tags: ['Mid Cap', 'DTC', 'TSX'],
  price: 'CA$120.72',
  changePct: 0.7,
  priceNote: 'close, 1 October',
  summary:
    'Vancouver-based design house that sells its own exclusive women’s fashion brands, such as Wilfred, Babaton and TNA, only through its own boutiques and website. More than 60% of revenue now comes from the United States, where most new boutiques are opening.',
};

const priceConfig: PriceConfig = {
  symbol: 'ATZ',
  defaultPrice: 120.72,
  currency: 'CA$',
  referenceClose: 119.88,
};

const EPS_EST = 4.69;
const FCF_PER_SHARE_EST = 5.34;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
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
            FY27E: `Calculated from CA$${price.toFixed(2)} divided by consensus diluted EPS of CA$${EPS_EST} (MarketScreener).`,
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
            FY27E: `Calculated from CA$${price.toFixed(2)} divided by consensus free cash flow per share of CA$${FCF_PER_SHARE_EST} (MarketScreener).`,
          },
        };
      }
      return m;
    }),
  };
}

const pctFormat = { suffix: '%', decimals: 1 };

function toShareOfRevenue(values: number[]): number[] {
  return values.map((v, i) => +((v / revenueByYear[i]) * 100).toFixed(1));
}

function buildExpensesSection(): SectionData {
  const totalExpenses = revenueByYear.map((r, i) => r - netIncomeByYear[i]);
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'Every line of the statement of operations from net revenue to net income, expressed as a share of net revenue, using the categories Aritzia reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'IFRS 16, adopted in FY20, replaced rent expense with depreciation of right-of-use assets (mostly in cost of goods sold) and lease interest (in finance expense), so the lines before and after FY20 are not strictly comparable.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Net revenue minus net income, covering operating expenses, non-operating items and income taxes.\nShown as a percentage of net revenue.',
        values: toShareOfRevenue(totalExpenses),
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of net revenue.',
        values: toShareOfRevenue(l.values),
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of net revenue from the audited statements of operations. Aritzia books boutique occupancy and distribution costs in cost of goods sold, so its gross margin reads lower than retailers that put rent in SG&A. FY21 expenses rose with pandemic closures, and FY24 cost of goods sold rose with normalized markdowns, product-cost inflation and pre-opening lease costs. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
  };
}

const billionFormat = { prefix: 'CA$', suffix: 'B', decimals: 2 };

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions of Canadian dollars. Net cash flow is the net change in cash for the year.',
    kind: 'multi',
    years: cashFlowStatementYears,
    mode: 'absolute',
    guidanceCount: 1,
    series: cashFlowStatementLines.map(l => ({
      ...l,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      'From FY20 onward IFRS 16 reports lease principal under financing, which lifts operating cash flow and free cash flow relative to FY18–FY19. FY23 free cash flow was negative because working capital absorbed CA$229M as inventory more than doubled. FY27E capital expenditures are management guidance and FY27E free cash flow is the MarketScreener consensus.',
  };
}

const atzSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Net revenue by the location of the client, in billions of Canadian dollars. Aritzia reports a single operating segment, so geography is the main breakdown it discloses.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.geography.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated net revenue.',
        values: segments.geography.map(s => +(s.canada + s.us).toFixed(3)),
        format: billionFormat,
        total: true,
      },
      {
        label: 'United States',
        desc: 'Net revenue from clients in the United States, through U.S. boutiques and digital orders shipped there.',
        values: segments.geography.map(s => s.us),
        format: billionFormat,
      },
      {
        label: 'Canada',
        desc: 'Net revenue from clients in Canada, through Canadian boutiques and digital orders shipped there.',
        values: segments.geography.map(s => s.canada),
        format: billionFormat,
      },
    ],
    chartNote:
      'The United States overtook Canada in FY23 and reached 61% of revenue in FY26. Figures are from the geographic note to the annual financial statements.',
  },
  {
    rank: 410,
    id: 'channel',
    title: 'Revenue by Channel',
    kicker:
      'Net revenue from boutiques and from digital (aritzia.com and the app), in billions of Canadian dollars.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.channel.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated net revenue.',
        values: segments.channel.map(s => +(s.retail + s.digital).toFixed(3)),
        format: billionFormat,
        total: true,
      },
      {
        label: 'Retail',
        desc: 'Net revenue from Aritzia and Reigning Champ boutiques.',
        values: segments.channel.map(s => s.retail),
        format: billionFormat,
      },
      {
        label: 'Digital',
        desc: 'Net revenue from aritzia.com and the Aritzia app, reported as eCommerce before FY26.',
        values: segments.channel.map(s => s.digital),
        format: billionFormat,
      },
    ],
    chartNote:
      'The channel split is disclosed in the financial statements from FY20 onward. Digital nearly doubled in FY21 while boutiques were closed and has since held at roughly a third of revenue.',
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
        note: 'Quarterly report, thirteen weeks to 31 May',
        date: 'Jul 9 2026',
      },
      {
        kind: 'Annual',
        note: 'Annual financial statements and MD&A for fiscal 2026',
        date: 'May 7 2026',
      },
      {
        kind: 'AIF',
        note: 'Annual information form for fiscal 2026',
        date: 'May 7 2026',
      },
      {
        kind: 'Interim',
        note: 'Quarterly report, thirteen weeks to 30 November',
        date: 'Jan 8 2026',
      },
      {
        kind: 'Interim',
        note: 'Quarterly report, thirteen weeks to 31 August',
        date: 'Oct 9 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investors.aritzia.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://investors.aritzia.com/financial-reports/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEDAR+',
      href: 'https://www.sedarplus.ca/landingpage/',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/ATZ.TO/',
    },
  ],
};

export function AtzPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <RetailTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={atzSections}
      figuresDate='1 March 2026'
      footer={footer}
    />
  );
}
