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
  symbol: 'AXP',
  name: 'American Express Company',
  sector: 'Financial Services',
  tags: ['Large Cap', 'Dividend'],
  price: '$304.13',
  changePct: 0,
  priceNote: 'close, 29 September',
  summary:
    'Closed-loop payment network that issues charge and credit cards directly to consumers and businesses, earning revenue from merchant discount fees, annual card fees, interest on card member loans, and travel and lifestyle services. Unlike Visa and Mastercard, American Express acts as both the card issuer and the payment network, which gives it direct relationships with cardholders and merchants and unique transaction-level data.',
};

const priceConfig: PriceConfig = {
  symbol: 'AXP',
  defaultPrice: 304.13,
  currency: '$',
  referenceClose: 304.13,
};

const EPS_EST = 17.59;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus GAAP diluted EPS of $${EPS_EST}.`,
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
    title: 'Cost Analysis',
    kicker:
      'Every line of the income statement from total revenues net of interest expense to net income, expressed as a share of revenue.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY17 income tax expense includes a $2.6B Tax Cuts and Jobs Act transition tax charge, spiking the tax line to 12.7% of revenue. FY21 provisions for credit losses were negative ($1.4B benefit) because AXP released COVID-era reserves.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net income, covering all operating expenses, credit loss provisions, and income taxes.\nShown as a percentage of total revenues net of interest expense.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map((l, li) => ({
        label: l.label,
        desc:
          l.desc +
          '\nShown as a percentage of total revenues net of interest expense.',
        values: linePcts[li],
        format: pctFormat,
      })),
    ],
    chartNote:
      'Card member rewards and services is the largest expense at 27–34% of revenue, reflecting the cost of premium reward programs that drive card member spending. Marketing and business development grew from 16% to 18% of revenue as AXP invested in card acquisition and co-brand partnerships. Provisions for credit losses swung from 13% of revenue in FY20 (COVID) to −3% in FY21 (reserve release) before normalising around 7–8%. FY17 total expenses reached 93% of revenue because of the $2.6B TCJA tax charge. Deltas are additive (pp); lower is better, so a fall shows green.',
  };
}

const billionFormat = { prefix: '$', suffix: 'B', decimals: 2 };

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions. Net cash flow is the net change in cash for the year, including exchange rate effects.',
    kind: 'multi',
    years: cashFlowStatementYears,
    mode: 'absolute',
    series: cashFlowStatementLines.map(l => ({
      ...l,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      "AXP's cash flow statement differs from non-financial companies because investing activities are dominated by growth in the card member loan portfolio (not capital expenditures), and financing activities include large swings in customer deposits. FY20 investing was positive $11.6B because the loan book contracted during COVID. FY22 financing was positive $24.5B as AXP attracted deposits to fund loan growth. Free cash flow (operating minus capex) is less volatile because capex is a small fraction of operating cash flow ($1–2.4B versus $6–21B).",
  };
}

const axpSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue split between non-interest revenue (merchant discount fees, card member fees, and service fees) and net interest income (interest earned on card member loans minus interest paid on deposits and debt). AXP reports total revenues net of interest expense as its top-line revenue metric.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: [
      'FY17',
      'FY18',
      'FY19',
      'FY20',
      'FY21',
      'FY22',
      'FY23',
      'FY24',
      'FY25',
      'FY26E',
    ],
    series: [
      {
        label: 'Total revenue',
        desc: 'Total revenues net of interest expense, the top-line revenue metric AXP reports.',
        values: [
          36.878, 40.338, 43.556, 36.087, 42.38, 52.862, 60.515, 65.949, 72.229,
          79.45,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
        total: true,
      },
      {
        label: 'Non-interest revenue',
        desc: 'Discount revenue from merchants, net card fees from card members, service fees, and other non-interest income. This is the fee-based portion of revenue tied to transaction volume and the card member base.',
        values: [
          30.427,
          32.675,
          34.936,
          28.102,
          34.63,
          42.967,
          47.381,
          50.406,
          54.865,
          null,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Net interest income',
        desc: 'Interest earned on card member loans and investment securities minus interest paid on customer deposits and long-term debt. Growth has been driven by expansion of the lending portfolio and higher interest rates since FY22.',
        values: [
          6.451,
          7.663,
          8.62,
          7.985,
          7.75,
          9.895,
          13.134,
          15.543,
          17.364,
          null,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
    ],
    chartNote:
      "Non-interest revenue fell 20% in FY20 as COVID-19 reduced card member spending, then recovered strongly with a spend-led recovery from FY21 onward. Net interest income has been the faster-growing component since FY22, driven by expansion of the card member lending portfolio and higher market interest rates, growing from $9.9B in FY22 to $17.4B in FY25. Net interest income's share of total revenue rose from 17.5% in FY17 to 24.0% in FY25. FY26E total is from company guidance; segment-level estimates are not shown.",
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
        note: 'Quarterly report, three months to 30 June',
        date: 'Jul 25 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'Apr 24 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 6 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Oct 24 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.americanexpress.com/',
    },
    {
      label: 'SEC Filings',
      href: 'https://ir.americanexpress.com/financial-information/sec-filings/',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000004962',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/AXP/',
    },
  ],
};

export function AxpPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={axpSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
