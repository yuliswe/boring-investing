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
  symbol: 'SHOP',
  name: 'Shopify Inc.',
  sector: 'Software',
  tags: ['Large Cap'],
  price: '$144.57',
  changePct: -7.46,
  priceNote: 'intraday, 3 November',
  summary:
    'Commerce platform that sells online store, point-of-sale and back-office software to merchants on subscription, and earns most of its revenue from payment processing and other fees on the $335B of merchandise those merchants sold through it in the first nine months of 2026.',
};

const priceConfig: PriceConfig = {
  symbol: 'SHOP',
  defaultPrice: 144.57,
  currency: '$',
  referenceClose: 156.22,
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
      'Every line of the income statement from revenue to net income, as a share of revenue, using the categories Shopify reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Non-operating items swing with the market value of Shopify’s equity stakes, from a 62% of revenue gain in FY21 to a 50% loss in FY22. FY23 operating expenses include the $1.34B logistics impairment, equal to 19% of revenue.',
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
      'Shares of revenue from the filed income statements. Cost of revenues rose from 44% of revenue in FY17 to 52% in FY25 as lower-margin payment processing grew faster than subscriptions, while sales and marketing fell from 34% to 14% and research and development from 20% to 13%. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'Financing was positive in FY17 to FY21 because Shopify sold $6.4B of new shares in public offerings and issued $0.9B of convertible notes in FY20; most of the proceeds went into marketable securities, which drive investing cash flow. FY22 operating cash flow was negative in the year of the $0.82B operating loss. FY25 financing was negative because the convertible notes were repaid in cash. FY26E free cash flow is the consensus; the other lines have no published estimate.',
  };
}

const shopSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by type in billions, with year-on-year growth rates. Shopify reports a single operating segment.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Subscription solutions plus merchant solutions revenue.',
        values: segments.segments.map(
          s => +(s.subscription + s.merchant).toFixed(3)
        ),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
        total: true,
      },
      {
        label: 'Subscription solutions',
        desc: 'Monthly and annual plan fees for the Shopify platform, plus revenue from themes, apps and domain names.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.subscription),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Merchant solutions',
        desc: 'Payment processing and currency conversion fees from Shopify Payments, plus Shopify Capital lending, Shopify Shipping, point-of-sale hardware and advertising. Most of it moves with gross merchandise volume.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.merchant),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'From the filed income statements. Shopify gives quarterly guidance only and analysts do not publish a revenue split, so FY26E is not shown; consensus total revenue is $15.26B. In Q3 2026, 68% of gross merchandise volume went through Shopify Payments, up from 65% a year earlier.',
  },
  {
    rank: 570,
    id: 'capital',
    title: 'Capital Allocation',
    kicker:
      'How cash is deployed across capital spending and merchant lending, acquisitions and investments, and share repurchases, in billions.',
    kind: 'stack',
    legend: [
      'Capex and merchant lending',
      'Acquisitions and investments',
      'Buybacks',
    ],
    bars: [
      { label: 'FY21', parts: [0.082, 0.71, 0] },
      { label: 'FY22', parts: [0.209, 2.389, 0] },
      { label: 'FY23', parts: [0.562, 0.395, 0] },
      { label: 'FY24', parts: [0.483, 0.167, 0] },
      { label: 'FY25', parts: [0.605, 0.155, 0] },
      { label: '9M26', parts: [0.713, 0.321, 2.473] },
    ],
    format: { decimals: 2 },
    chartNote:
      'Capex and merchant lending = purchases of property and equipment plus Shopify Capital loans net of repayments; from April 2026 this also includes merchant cash advances. Acquisitions and investments = business combinations, equity and other investments, and intangible assets; FY22 is mostly the Deliverr acquisition. Buybacks began in February 2026 under authorizations totalling $5B. Shopify pays no dividend. From the filed cash flow statements.',
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
        date: 'Nov 3 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 June',
        date: 'Aug 5 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'May 5 2026',
      },
      {
        kind: '10-K/A',
        note: 'Executive compensation and governance (Part III) for fiscal year 2025',
        date: 'Apr 29 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 11 2026',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.shopify.com/investors',
    },
    {
      label: 'Financial Reports',
      href: 'https://www.shopify.com/investors/financial-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001594805',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/SHOP/',
    },
  ],
};

const EPS_EST = 1.63;
const FCF_PER_SHARE_EST = 2.22;

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

export function ShopPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={shopSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
