'use client';

import { RetailTemplate } from '@/templates/RetailTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
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
  symbol: 'PEP',
  name: 'PepsiCo, Inc.',
  sector: 'Consumer Staples',
  tags: ['Large Cap', 'Dividend'],
  price: '$128.63',
  changePct: -0.42,
  priceNote: 'close, 25 September',
  summary:
    'Global food and beverage company operating complementary snack and drink portfolios across six segments. Frito-Lay holds dominant North American snack share, while the beverage business spans Pepsi, Gatorade, and SodaStream. More than 40% of revenue comes from international markets.',
};

const priceConfig: PriceConfig = {
  symbol: 'PEP',
  defaultPrice: 128.63,
  currency: '$',
  referenceClose: 129.17,
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
      'Each line of the income statement as a share of revenue, using the categories PepsiCo reports in its earnings releases.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY17 income taxes include a $2.5B TCJA transition tax charge. FY18 income taxes reflect a $3.4B net tax benefit from international reorganizations. FY25 other operating charges include approximately $2.0B in impairment and restructuring charges.',
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
      'Shares of revenue from the filed income statement. FY17 income taxes are elevated by the TCJA transition charge; FY18 taxes are negative due to a $3.4B international reorganization benefit. FY25 other operating charges reflect impairment and restructuring. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'FY18 investing activities were positive due to large proceeds from asset sales and bottling operations. FY20 investing activities reached $11.6B negative as PepsiCo acquired Rockstar Energy ($3.9B) and Pioneer Foods ($1.7B), funded by $13.8B in new debt issuance. FY26E free cash flow is the consensus analyst estimate.',
  };
}

const revenueYears = financials.revenue.map(r => r.year);

const pepSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by business category in billions. North America Food combines Frito-Lay and Quaker (FY18–FY23) or PepsiCo Foods North America (FY24–FY25). International aggregates all non-North-American segments across the three segment structures PepsiCo used during this period.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all three business categories.',
        values: segments.segments.map(
          s => +(s.naFood + s.naBev + s.intl).toFixed(2)
        ),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'North America Food',
        desc: "Frito-Lay North America plus Quaker Foods North America (FY18–FY23), or PepsiCo Foods North America (FY24–FY25). Includes Lay's, Doritos, Cheetos, Tostitos, Quaker Oats, and other snack and cereal brands.",
        values: segments.segments.map(s => s.naFood),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'North America Beverages',
        desc: 'PepsiCo Beverages North America. Includes Pepsi, Mountain Dew, Gatorade, Tropicana (through FY21), and other beverage brands sold in the United States and Canada.',
        values: segments.segments.map(s => s.naBev),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'International',
        desc: "All international segments aggregated across PepsiCo's evolving segment structures: LatAm, Europe/EMEA, AMESA/Asia Pacific, and International Beverages Franchise.",
        values: segments.segments.map(s => s.intl),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Business categories bridge three segment reorganizations (FY16–FY17, FY18–FY23, FY24–FY25) by aggregating into North America Food, North America Beverages, and International. The FY21–FY22 international revenue surge reflects pricing-led growth and currency effects.',
  },
  {
    rank: 350,
    id: 'revenue-total',
    title: 'Revenue & Operating Income',
    kicker:
      'Total revenue and GAAP operating income in billions with year-on-year growth rates.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: revenueYears,
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated net revenue from all food and beverage segments worldwide.',
        values: financials.revenue.map(r => r.revenue),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Operating income',
        desc: 'GAAP operating profit. FY25 includes approximately $2.0B in impairment and restructuring charges.',
        values: financials.revenue.map(r => r.operatingIncome),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue grew steadily from FY16 to FY25, accelerating from FY21 onward as pricing actions offset slowing volume growth. FY25 operating income declined despite revenue growth due to impairment and restructuring charges. FY26E is consensus analyst estimate.',
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
        note: 'Quarterly report, twelve weeks to 13 June',
        date: 'Jul 8 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, twelve weeks to 21 March',
        date: 'Apr 22 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 2 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, twelve weeks to 6 September',
        date: 'Oct 7 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.pepsico.com/our-stories/press-release/pepsico-reports-fourth-quarter-and-full-year-2025-results02042026',
    },
    {
      label: 'Annual Reports',
      href: 'https://investor.pepsico.com/sec-filings/annual-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000077476',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/PEP/',
    },
  ],
};

const ADJ_EPS_EST = 8.56;
const FCF_PER_SHARE_EST = 7.69;

function buildDynamicFinancials(price: number) {
  const pe = +(price / ADJ_EPS_EST).toFixed(1);
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus core diluted EPS of $${ADJ_EPS_EST}.`,
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

export function PepPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <RetailTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={pepSections}
      figuresDate='27 December'
      footer={footer}
    />
  );
}
