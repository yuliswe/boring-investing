'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  totalExpenses,
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
  symbol: 'NOW',
  name: 'ServiceNow, Inc.',
  sector: 'Software',
  tags: ['Large Cap'],
  price: '$112.95',
  changePct: -24.77,
  priceNote: 'intraday, 29 October',
  summary:
    'Cloud workflow platform for IT, employee, customer and security operations at large enterprises. Subscriptions make up 97% of revenue, and in 2026 ServiceNow bought Armis and Veza for $8.8B to build out its security business.',
};

const priceConfig: PriceConfig = {
  symbol: 'NOW',
  defaultPrice: 112.95,
  currency: '$',
  referenceClose: 150.13,
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
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'Every line of the income statement from revenue to net income, as a share of revenue, using the categories ServiceNow reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Stock-based compensation, about 15% of revenue in FY25, is spread across every operating line rather than shown separately. FY19 and FY23 tax expense is negative because of valuation allowance releases.',
    series: [
      {
        label: totalExpenses.label,
        desc: totalExpenses.desc + '\nShown as a percentage of total revenue.',
        values: toShareOfRevenue(totalExpenses.values),
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of total revenue.',
        values: toShareOfRevenue(l.values),
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of revenue from the filed income statements. Operating expenses fell from 103% of revenue in FY17 to 86% in FY25 as sales and marketing shrank from 47% to 33%. Interest income on a growing cash and securities balance made non-operating items a net gain of 3.3% of revenue by FY25. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
    guidanceCount: 1,
    series: cashFlowStatementLines.map(l => ({
      ...l,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      'FY17 financing was positive because ServiceNow raised $772M net from convertible notes. FY20 financing was positive because it issued the $1.5B 2030 notes and unwound the 2022 note hedge for $1.1B while repaying most of the 2022 notes. FY25 investing used less cash because $1.3B of marketable securities matured, net of purchases. FY26E operating cash flow and capital expenditures come from GAAP guidance applied to consensus revenue; the other lines have no published estimate.',
  };
}

const nowSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by type in billions, with year-on-year growth rates. ServiceNow reports a single operating segment.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Subscription plus professional services and other revenue.',
        values: segments.segments.map(
          s => +(s.subscription + s.professionalServices).toFixed(3)
        ),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
        total: true,
      },
      {
        label: 'Subscription',
        desc: 'Fees for access to the cloud platform and its workflow applications, plus self-hosted licences with support. Recognized mostly ratably over the contract term.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.subscription),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Professional services and other',
        desc: 'Implementation, consulting and training, sold at a gross loss to help customers deploy the platform.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.professionalServices),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'FY17 is restated under ASC 606. FY26E subscription revenue is the midpoint of management’s $15.78B–$15.79B guidance; professional services is consensus total revenue of $16.22B minus that midpoint.',
  },
  {
    rank: 570,
    id: 'capital',
    title: 'Capital Allocation',
    kicker:
      'How cash is deployed across maintenance capex, growth investment, and shareholder returns.',
    kind: 'stack',
    bars: [
      { label: 'FY21', parts: [0.312, 0.08, 0] },
      { label: 'FY22', parts: [0.261, 0.289, 0] },
      { label: 'FY23', parts: [0.372, 0.322, 0.538] },
      { label: 'FY24', parts: [0.371, 0.481, 0.696] },
      { label: 'FY25', parts: [0.508, 0.36, 1.84] },
    ],
    format: { decimals: 2 },
    chartNote:
      'Maintenance = reported depreciation. Growth = capital expenditure above depreciation. Returned = share repurchases; ServiceNow pays no dividend. Acquisitions, which reached $1.08B in FY25 and $9.17B in the first nine months of FY26, are not shown. From the filed cash flow statements.',
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
        note: 'Quarterly report, three months to 30 September',
        date: 'Oct 28 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 June',
        date: 'Jul 23 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'Apr 23 2026',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'Apr 6 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Jan 29 2026',
      },
      {
        kind: 'DEF 14A',
        note: 'Special meeting proxy for the five-for-one stock split',
        date: 'Nov 12 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investors.servicenow.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://investors.servicenow.com/financials/annual-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001373715',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/NOW/',
    },
  ],
};

const EPS_EST = 1.43;
const FCF_PER_SHARE_EST = 5.3;

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
            FY26E: `Calculated from $${price.toFixed(2)} divided by estimated GAAP diluted EPS of $${EPS_EST.toFixed(2)}.`,
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by estimated free cash flow per share of $${FCF_PER_SHARE_EST.toFixed(2)}.`,
          },
        };
      }
      return m;
    }),
  };
}

export function NowPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={nowSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
