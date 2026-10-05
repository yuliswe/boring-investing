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
  symbol: 'GRGD',
  name: 'Groupe Dynamite Inc.',
  sector: 'Retail',
  tags: ['Mid Cap', 'Controlled', 'TSX'],
  price: 'CA$53.78',
  changePct: 1.5,
  priceNote: 'close, 2 October',
  summary:
    'Montreal-based designer and retailer of women’s apparel under two in-house brands, the casual Garage and the dressier Dynamite, sold only through its own 307 stores and websites. More than half of revenue now comes from the United States, where nearly all new Garage stores are opening.',
};

const priceConfig: PriceConfig = {
  symbol: 'GRGD',
  defaultPrice: 53.78,
  currency: 'CA$',
  referenceClose: 52.98,
};

const EPS_EST = 3.28;
const FCF_AFTER_LEASES_PER_SHARE_EST = 2.59;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_AFTER_LEASES_PER_SHARE_EST).toFixed(1);
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
                FY26E: `Calculated from CA$${price.toFixed(2)} divided by consensus diluted EPS of CA$${EPS_EST} (MarketScreener).`,
              },
            };
          }
          if (m.label === 'P/FCF after leases') {
            const values = [...m.values];
            values[values.length - 1] = pfcf;
            return {
              ...m,
              values,
              yearNotes: {
                ...m.yearNotes,
                FY26E: `Calculated from CA$${price.toFixed(2)} divided by an estimated CA$${FCF_AFTER_LEASES_PER_SHARE_EST} of free cash flow after leases per share, which is MarketScreener consensus free cash flow of CA$333M less an assumed CA$38M of lease payments (the FY23–FY25 average), over 114.0M diluted shares.`,
              },
            };
          }
          return m;
        }),
      },
    },
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
      'Every line of the statement of earnings from revenue to net earnings, expressed as a share of revenue, using the categories Groupe Dynamite reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY21 includes a CA$104.7M gain on debt forgiven in the 2020–21 CCAA restructuring, which makes non-operating expenses negative and total expenses unusually low that year.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net earnings, covering operating expenses, non-operating items and income taxes.\nShown as a percentage of revenue.',
        values: toShareOfRevenue(totalExpenses),
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of revenue.',
        values: toShareOfRevenue(l.values),
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of revenue from the audited statements of earnings. Groupe Dynamite reports depreciation of stores and leased premises on its own line rather than in cost of sales, so its cost of sales reads lower than retailers that put occupancy depreciation there. Fixed costs have fallen as a share of revenue as sales per square foot rose. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'Before the IPO, cash flowed to the controlling shareholder through a CA$185M dividend and a CA$110M loan to the parent in FY22, funded with new bank debt. The parent repaid the loan from IPO proceeds in FY24 and the company repaid its debt. FY26E capital expenditures are management guidance and FY26E free cash flow is the MarketScreener consensus.',
  };
}

const grgdSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by the location of the customer, in billions of Canadian dollars. Groupe Dynamite reports a single operating segment, so geography is the main breakdown it discloses.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.geography.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated revenue.',
        values: segments.geography.map(s => +(s.canada + s.us).toFixed(3)),
        format: billionFormat,
        total: true,
      },
      {
        label: 'United States',
        desc: 'Revenue from customers in the United States, through U.S. stores and online orders shipped there.',
        values: segments.geography.map(s => s.us),
        format: billionFormat,
      },
      {
        label: 'Canada',
        desc: 'Revenue from customers in Canada, through Canadian stores and online orders shipped there.',
        values: segments.geography.map(s => s.canada),
        format: billionFormat,
      },
    ],
    chartNote:
      'The United States overtook Canada in FY24 and reached 56% of revenue in FY25. U.S. revenue more than tripled from FY21 to FY25, while Canadian revenue grew 44% despite a shrinking store base. The first U.K. stores opened in March 2026, after the last year shown. Figures are from the segment note to the annual financial statements.',
  },
  {
    rank: 410,
    id: 'channel',
    title: 'Revenue by Channel',
    kicker:
      'Revenue from stores and from the Garage and Dynamite websites, in billions of Canadian dollars.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.channel.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated revenue.',
        values: segments.channel.map(s => +(s.retail + s.online).toFixed(3)),
        format: billionFormat,
        total: true,
      },
      {
        label: 'Retail',
        desc: 'Revenue from Garage and Dynamite stores.',
        values: segments.channel.map(s => s.retail),
        format: billionFormat,
      },
      {
        label: 'Online',
        desc: 'Revenue from the Garage and Dynamite websites, about 65% of which was shipped from store inventory in FY25.',
        values: segments.channel.map(s => s.online),
        format: billionFormat,
      },
    ],
    chartNote:
      'Stores have grown faster than online since FY21, so the online share slipped from 21% to about 18–19%. Figures are from the revenue note to the annual financial statements.',
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
        note: 'Quarterly report, thirteen weeks to 1 August',
        date: 'Sep 10 2026',
      },
      {
        kind: 'Interim',
        note: 'Quarterly report, thirteen weeks to 2 May',
        date: 'Jun 16 2026',
      },
      {
        kind: 'Circular',
        note: 'Management information circular for the annual meeting',
        date: 'May 7 2026',
      },
      {
        kind: 'Prospectus',
        note: 'Short-form base shelf prospectus and supplement for a secondary offering by the controlling shareholder',
        date: 'Apr 20 2026',
      },
      {
        kind: 'Annual',
        note: 'Annual financial statements and MD&A for fiscal 2025',
        date: 'Apr 1 2026',
      },
      {
        kind: 'AIF',
        note: 'Annual information form for fiscal 2025',
        date: 'Apr 1 2026',
      },
      {
        kind: 'Interim',
        note: 'Quarterly report, thirteen weeks to 1 November',
        date: 'Dec 9 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investors.groupedynamite.com/',
    },
    {
      label: 'Filings',
      href: 'https://investors.groupedynamite.com/sedar-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEDAR+',
      href: 'https://www.sedarplus.ca/landingpage/',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/GRGD.TO/',
    },
  ],
};

export function GrgdPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <RetailTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={grgdSections}
      figuresDate='31 January 2026'
      footer={footer}
    />
  );
}
