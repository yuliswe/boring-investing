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
  symbol: 'COST',
  name: 'Costco Wholesale Corporation',
  sector: 'Warehouse Club Retail',
  tags: ['Mega Cap', 'Dividend', 'Nasdaq-100'],
  price: '$1,102.15',
  changePct: 0.76,
  priceNote: 'close, 20 November',
  summary:
    'The largest membership warehouse club, selling a limited range of fewer than 4,000 items per warehouse at low markups through 939 warehouses in 14 countries and online, and earning most of its profit from the annual fees paid by 84.1 million members.',
};

const priceConfig: PriceConfig = {
  symbol: 'COST',
  defaultPrice: 1102.15,
  currency: '$',
  referenceClose: 1093.83,
};

const EPS_EST = 22.8;
const FCF_PER_SHARE_EST = 17.12;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  const valuation = financials.metricGroups!.valuation!;
  return {
    ...financials,
    metricGroups: {
      ...financials.metricGroups,
      valuation: {
        ...valuation,
        metrics: valuation.metrics.map(m => {
          if (m.label === 'P/E ratio') {
            const values = [...m.values];
            values[values.length - 1] = pe;
            return {
              ...m,
              values,
              yearNotes: {
                ...m.yearNotes,
                FY27E: `Calculated from $${price.toFixed(2)} divided by consensus diluted EPS of $${EPS_EST.toFixed(2)} (stockanalysis.com, 17 November 2026).`,
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
                FY27E: `Calculated from $${price.toFixed(2)} divided by an estimated $${FCF_PER_SHARE_EST} of free cash flow per share, which is consensus free cash flow of $7.61B (stockanalysis.com) over FY26 diluted shares of 444.4M.`,
              },
            };
          }
          return m;
        }),
      },
    },
  };
}

function toShareOfRevenue(values: number[]): number[] {
  return values.map((v, i) => +((v / revenueByYear[i]) * 100).toFixed(2));
}

function buildExpensesSection(): SectionData {
  const totalExpenses = revenueByYear.map((r, i) => r - netIncomeByYear[i]);
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'Every line of the income statement from total revenue to net income, expressed as a share of total revenue, using the categories Costco reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    series: [
      {
        label: 'Total expenses',
        desc: 'Total revenue minus net income attributable to Costco, covering operating expenses, interest, taxes and noncontrolling interests.\nShown as a percentage of total revenue.',
        values: toShareOfRevenue(totalExpenses),
        format: { suffix: '%', decimals: 2 },
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of total revenue.',
        values: toShareOfRevenue(l.values),
        format: { suffix: '%', decimals: 2 },
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of total revenue from the audited income statements. Merchandise costs take about 87% of revenue and SG&A about 9%, which leaves an operating margin under 4%. Interest income on Costco’s growing cash balance has exceeded interest expense since FY22. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'Financing outflows spike in the special-dividend years: $10 a share in FY21 and $15 a share in FY24. A $30 special dividend of about $13.3B was declared on 10 November 2026 and is payable on 4 December, in FY27. FY27E free cash flow is the stockanalysis.com consensus; Costco gives no cash flow guidance.',
  };
}

const category = segments.category;
const geography = segments.geography;

const costSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Net sales by merchandise category plus membership fees, in billions. E-commerce and business center sales are allocated to the categories.',
    kind: 'multi',
    mode: 'absolute',
    years: category.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Net sales plus membership fees.',
        values: category.map(
          s =>
            +(
              s.foodsAndSundries +
              s.nonFoods +
              s.freshFoods +
              s.ancillary +
              s.membershipFees
            ).toFixed(3)
        ),
        format: billionFormat,
        total: true,
      },
      {
        label: 'Foods and Sundries',
        desc: 'Sundries, dry grocery, candy, cooler, freezer, liquor and tobacco.',
        values: category.map(s => s.foodsAndSundries),
        format: billionFormat,
      },
      {
        label: 'Non-Foods',
        desc: 'Consumer electronics, appliances, health and beauty aids, hardware, lawn and garden, sporting goods, tires, toys, automotive, apparel, furniture, housewares and jewelry. FY18 is the sum of the former Hardlines and Softlines categories.',
        values: category.map(s => s.nonFoods),
        format: billionFormat,
      },
      {
        label: 'Fresh Foods',
        desc: 'Meat, produce, deli and bakery.',
        values: category.map(s => s.freshFoods),
        format: billionFormat,
      },
      {
        label: 'Warehouse Ancillary and Other Businesses',
        desc: 'Gasoline, pharmacy, food court, optical, hearing aids and tire installation, plus the other businesses, which are e-commerce services, business centers and travel. Gasoline alone was 11% of net sales in FY26.',
        values: category.map(s => s.ancillary),
        format: billionFormat,
      },
      {
        label: 'Membership fees',
        desc: 'Annual membership fees, recognized ratably over the membership year.',
        values: category.map(s => s.membershipFees),
        format: billionFormat,
      },
    ],
    chartNote:
      'Costco regrouped its categories in FY21, merging Hardlines and Softlines into Non-Foods. FY18 Non-Foods is the sum of the two former categories; FY19 and FY20 are as restated in the FY21 10-K. Ancillary sales move with gasoline prices, which explains most of the 47% jump in FY22. Membership fees are under 2% of revenue but about half of operating income.',
  },
  {
    rank: 405,
    id: 'geography',
    title: 'Revenue by Segment',
    kicker:
      'Total revenue of Costco’s three operating segments, in billions: the United States and Puerto Rico, Canada, and Other International.',
    kind: 'multi',
    mode: 'absolute',
    years: geography.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated total revenue.',
        values: geography.map(
          s => +(s.us + s.canada + s.otherInternational).toFixed(3)
        ),
        format: billionFormat,
        total: true,
      },
      {
        label: 'United States',
        desc: 'Total revenue of the U.S. segment, including Puerto Rico.',
        values: geography.map(s => s.us),
        format: billionFormat,
      },
      {
        label: 'Canada',
        desc: 'Total revenue of the Canadian segment.',
        values: geography.map(s => s.canada),
        format: billionFormat,
      },
      {
        label: 'Other International',
        desc: 'Total revenue in Mexico, Japan, the U.K., Korea, Australia, Taiwan, China, Spain, France, Sweden, Iceland and New Zealand.',
        values: geography.map(s => s.otherInternational),
        format: billionFormat,
      },
    ],
    chartNote:
      'The United States is about 73% of total revenue, and the split has barely changed since FY18. Canadian and Other International revenue is converted into US dollars, so currency moves shift both lines. Figures are from the segment note to the 10-K.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '8-K',
        note: '$30 special dividend payable 4 December; director resignation',
        date: 'Nov 10 2026',
      },
      {
        kind: '8-K',
        note: 'Fiscal 2027 executive bonus plan',
        date: 'Oct 16 2026',
      },
      {
        kind: '8-K',
        note: 'Quarterly dividend of $1.47 per share',
        date: 'Oct 14 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2026',
        date: 'Oct 7 2026',
      },
      {
        kind: '8-K',
        note: 'Fourth-quarter and fiscal 2026 results',
        date: 'Sep 24 2026',
      },
      {
        kind: '8-K',
        note: 'Quarterly dividend of $1.47 per share',
        date: 'Jul 8 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, twelve weeks to 10 May',
        date: 'Jun 3 2026',
      },
      {
        kind: '8-K',
        note: 'Third-quarter fiscal 2026 results',
        date: 'May 28 2026',
      },
      {
        kind: '8-K',
        note: 'Quarterly dividend raised from $1.30 to $1.47 per share',
        date: 'Apr 15 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, twelve weeks to 15 February',
        date: 'Mar 11 2026',
      },
      {
        kind: '8-K',
        note: 'Second-quarter fiscal 2026 results',
        date: 'Mar 5 2026',
      },
      {
        kind: '8-K',
        note: 'Results of the 15 January 2026 annual meeting',
        date: 'Jan 21 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, twelve weeks to 23 November',
        date: 'Dec 17 2025',
      },
      {
        kind: '8-K',
        note: 'First-quarter fiscal 2026 results',
        date: 'Dec 11 2025',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement for the 15 January 2026 annual meeting',
        date: 'Dec 4 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investor.costco.com/',
    },
    {
      label: 'Financial Reports',
      href: 'https://investor.costco.com/financials/annual-reports-and-proxy-statements/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000909832',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/COST/',
    },
  ],
};

export function CostPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <RetailTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={costSections}
      figuresDate='30 August 2026'
      footer={footer}
    />
  );
}
