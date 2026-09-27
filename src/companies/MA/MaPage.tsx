'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  expenseLines,
  cashFlowStatementYears,
  cashFlowStatementLines,
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
      'Every line of the income statement from revenue to net income, expressed as a share of net revenue. Includes operating expenses, non-operating items, and income taxes.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'The $1.1B merchant class action litigation provision in FY18 spiked total expenses from 43% to 61% of revenue for that year alone. FY17 income tax expense includes an $873M provisional charge for the Tax Cuts and Jobs Act.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net income, covering all operating expenses, non-operating items, and income taxes.\nShown as a percentage of net revenue.',
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
      'Shares of net revenue from the filed income statement. The first four lines are operating expenses; "Other income (expense)" is the net of non-operating items (interest expense, investment income, equity gains and losses); income tax expense completes the bridge from revenue to net income. FY17 total is elevated by the $873M TCJA charge in taxes. FY18 total is elevated by the $1.1B litigation provision. FY19 and FY21 show negative non-operating expense because equity investment gains exceeded interest costs. Deltas are additive (pp); lower is better, so a fall shows green.',
  };
}

const billionFormat = { prefix: '$', suffix: 'B', decimals: 2 };

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions. Net cash flow is the net change in cash for the year.',
    kind: 'multi',
    years: cashFlowStatementYears,
    mode: 'absolute',
    series: cashFlowStatementLines.map(l => ({
      label: l.label,
      desc: l.desc,
      values: l.values,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      'Operating activities is the cash generated by the business. Investing activities includes acquisitions, capital expenditures, and investment purchases. Financing activities is dominated by share repurchases and dividends, which grew from $4.8B in FY17 to $14.2B in FY25. Free cash flow is operating cash flow minus capital expenditures. FY20 financing was unusually low as Mastercard paused buybacks during COVID-19. FY21 investing was elevated by the $4.1B Aiia and CipherTrace acquisitions.',
  };
}

const maSections: SectionData[] = [
  {
    rank: 350,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Net revenue split between the core Payment Network and Value-Added Services and Solutions, in billions. Net revenue is gross revenue minus rebates and incentives paid to financial institutions and merchants.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'FY26E'],
    series: [
      {
        label: 'Net revenue',
        desc: 'Consolidated net revenue after rebates and incentives.',
        values: [15.301, 18.884, 22.237, 25.098, 28.167, 32.791, 37.26],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Payment Network',
        desc: 'Assessment fees on gross dollar volume, transaction processing fees on switched transactions, and cross-border volume fees. Growth is driven by the secular shift from cash to electronic payments and by cross-border travel recovery post-COVID.',
        values: [9.897, 11.943, 14.358, 15.824, 17.335, 19.476, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Value-Added Services',
        desc: 'Cyber and intelligence solutions, data and services (analytics, consulting, marketing), loyalty and rewards, processing, and real-time payments. This segment grew from 35% of revenue in FY20 to 41% in FY25.',
        values: [5.404, 6.941, 7.879, 9.274, 10.832, 13.315, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue dipped 9% in FY20 from COVID-19 as cross-border travel and in-person spending fell, then recovered strongly from FY21 onward. Value-Added Services has grown at roughly double the rate of Payment Network since FY20, driven by cyber security, analytics, and real-time payments. FY20 segment split is from the recast in the FY22 10-K. FY26E total is the consensus estimate from 37 analysts.',
  },
  buildExpensesSection(),
  buildCashFlowStatementSection(),
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
