'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
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
  symbol: 'TRI',
  name: 'Thomson Reuters Corporation',
  sector: 'Information Services',
  tags: ['Large Cap', 'Dividend'],
  price: '$106.35',
  changePct: -0.52,
  priceNote: 'close, 19 September',
  summary:
    'AI-powered information services and workflow software for legal, tax, and compliance professionals. More than eighty percent of revenue is recurring, drawn from subscriptions across research platforms, analytics tools, and workflow automation.',
};

const priceConfig: PriceConfig = {
  symbol: 'TRI',
  defaultPrice: 106.35,
  currency: '$',
  referenceClose: 106.9059,
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
      'Each line of the income statement as a share of revenue, using the categories Thomson Reuters reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Thomson Reuters reports operating expenses as one combined line. R&D spending is capitalised and appears in amortisation of computer software.',
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
      'Shares of revenue from the filed income statement. Stock-based compensation is the value of shares issued to employees, treated as a cash cost. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'All lines as a share of revenue. Δ Working capital: positive means cash was freed, negative means cash was consumed. SBC excluded as non-cash — subtract it from the residual for true owner earnings.',
  };
}

const triSections: SectionData[] = [
  buildExpensesSection(),
  buildFCFSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by segment in billions, with year-on-year growth rates. The current segment structure dates from FY19 after the Refinitiv divestiture.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all five reporting segments.',
        values: segments.segments.map(
          s =>
            s.legal +
            s.corporates +
            s.taxAccounting +
            s.reutersNews +
            s.globalPrint
        ),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
        total: true,
      },
      {
        label: 'Legal Professionals',
        desc: 'Westlaw, Practical Law, and other research and workflow tools for law firms and corporate legal departments.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.legal),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Corporates',
        desc: 'Compliance, trade management, and indirect tax solutions for corporations and the seven largest global accounting firms.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.corporates),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Tax, Audit & Accounting',
        desc: 'ONESOURCE, UltraTax, and practice management tools for tax, audit, and accounting firms outside the Big Seven.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.taxAccounting),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Reuters News',
        desc: 'Business, financial, and global news supplied to professional and agency customers, including the LSEG news agreement.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.reutersNews),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Global Print',
        desc: 'Print-based legal and regulatory information products, a legacy segment in structural decline.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.globalPrint),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
    ],
    chartNote:
      'Current segment structure applies from FY19 onward. Corporates grew fastest as indirect tax and compliance products gained traction; Global Print continues its structural decline as customers shift to digital.',
  },
  {
    rank: 560,
    id: 'capital',
    title: 'Capital Allocation',
    kicker:
      'How cash is deployed across maintenance capex, growth investment, and shareholder returns.',
    kind: 'stack',
    bars: [
      { label: 'FY21', parts: [0.177, 0.31, 2.173] },
      { label: 'FY22', parts: [0.14, 0.455, 2.116] },
      { label: 'FY23', parts: [0.116, 0.428, 4.016] },
      { label: 'FY24', parts: [0.113, 0.494, 1.583] },
      { label: 'FY25', parts: [0.111, 0.523, 2.035] },
    ],
    format: { decimals: 2 },
    chartNote:
      'Maintenance = reported depreciation. Growth = capital expenditure above depreciation. Returned = dividends + buybacks. From the filed cash flow statements.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '6-K',
        note: 'Quarterly report, three months to 30 June',
        date: 'Aug 5 2026',
      },
      {
        kind: '6-K',
        note: 'Quarterly report, three months to 31 March',
        date: 'May 6 2026',
      },
      {
        kind: '40-F',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 26 2026',
      },
      {
        kind: '6-K',
        note: 'Quarterly report, three months to 30 September',
        date: 'Nov 4 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.thomsonreuters.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://ir.thomsonreuters.com/financial-information/annual-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001075124',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/TRI/',
    },
  ],
};

const ADJ_EPS_EST = 4.44;
const FCF_PER_SHARE_EST = 4.85;

function buildDynamicFinancials(price: number) {
  const pe = +(price / ADJ_EPS_EST).toFixed(1);
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus adjusted EPS of $${ADJ_EPS_EST}.`,
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

export function TriPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={triSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
