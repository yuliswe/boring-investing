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
  symbol: 'HD',
  name: 'The Home Depot, Inc.',
  sector: 'Home Improvement Retail',
  tags: ['Mega Cap', 'Dividend', 'Dow 30'],
  price: '$295.47',
  changePct: 3.39,
  priceNote: 'close, 8 October',
  summary:
    'The largest home improvement retailer, selling building materials, décor and hardware to homeowners and professional contractors through 2,359 stores in the United States, Canada and Mexico and online, and since 2024 to roofing, pool and landscape contractors through the SRS distribution business.',
};

const priceConfig: PriceConfig = {
  symbol: 'HD',
  defaultPrice: 295.47,
  currency: '$',
  referenceClose: 285.77,
};

const EPS_EST = 14.51;
const FCF_PER_SHARE_EST = 17.06;

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
                FY26E: `Calculated from $${price.toFixed(2)} divided by $${EPS_EST}, the midpoint of guidance for diluted EPS growth of flat to 4% from $14.23 (18 August 2026).`,
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
                FY26E: `Calculated from $${price.toFixed(2)} divided by an estimated $${FCF_PER_SHARE_EST} of free cash flow per share, which is consensus free cash flow of $16.97B (stockanalysis.com) over FY25 diluted shares of 995M.`,
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
      'Every line of the income statement from net sales to net earnings, expressed as a share of net sales, using the categories Home Depot reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    series: [
      {
        label: 'Total expenses',
        desc: 'Net sales minus net earnings, covering operating expenses, interest and income taxes.\nShown as a percentage of net sales.',
        values: toShareOfRevenue(totalExpenses),
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of net sales.',
        values: toShareOfRevenue(l.values),
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of net sales from the audited income statements. The tax line fell by nearly two points of sales in FY18 when the federal rate dropped to 21%. Since FY22, SG&A, depreciation and interest have each risen as a share of sales while comps stalled, and interest expense has risen by half with acquisition debt. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'Investing outflows spike in the three acquisition years: HD Supply in FY20, SRS in FY24 and GMS in FY25. Financing outflows shrank in FY20 and FY24 as buybacks were cut and new debt was raised. FY26E capital expenditures are management guidance of about 2.5% of sales and FY26E free cash flow is the stockanalysis.com consensus.',
  };
}

const productLine = segments.productLine;
const geography = segments.geography;

const hdSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Net sales by product line, in billions. Building Materials, Décor and Hardlines are the Home Depot stores and websites; Other is the SRS distribution business.',
    kind: 'multi',
    mode: 'absolute',
    years: productLine.map(s => s.year),
    series: [
      {
        label: 'Total net sales',
        desc: 'Consolidated net sales.',
        values: productLine.map(
          s =>
            +(s.buildingMaterials + s.decor + s.hardlines + s.other).toFixed(3)
        ),
        format: billionFormat,
        total: true,
      },
      {
        label: 'Building Materials',
        desc: 'Building materials departments as grouped by Home Depot, including lumber, millwork, electrical and plumbing.',
        values: productLine.map(s => s.buildingMaterials),
        format: billionFormat,
      },
      {
        label: 'Décor',
        desc: 'Décor departments as grouped by Home Depot, including appliances, flooring, kitchen, bath and paint.',
        values: productLine.map(s => s.decor),
        format: billionFormat,
      },
      {
        label: 'Hardlines',
        desc: 'Hardlines departments as grouped by Home Depot, including hardware, garden and power tools.',
        values: productLine.map(s => s.hardlines),
        format: billionFormat,
      },
      {
        label: 'Other (SRS)',
        desc: 'Roofing, landscape and pool supplies sold to contractors by SRS from June 2024, and interior building products from GMS from September 2025.',
        values: productLine.map(s => s.other),
        format: billionFormat,
      },
    ],
    chartNote:
      'Home Depot moved departments between the three product lines in FY19, FY24 and FY25. FY22 is restated on the FY24 grouping and FY23–FY25 on the FY25 grouping, but FY17–FY21 are as first reported, so shifts between the lines before FY22 are partly reclassification. Net sales of the three store lines have been flat at about $152B since FY23, and all growth since then has come from SRS and GMS.',
  },
  {
    rank: 410,
    id: 'geography',
    title: 'Revenue by Geography',
    kicker:
      'Net sales in the United States and outside it (Canada and Mexico), in billions.',
    kind: 'multi',
    mode: 'absolute',
    years: geography.map(s => s.year),
    series: [
      {
        label: 'Total net sales',
        desc: 'Consolidated net sales.',
        values: geography.map(s => +(s.us + s.international).toFixed(3)),
        format: billionFormat,
        total: true,
      },
      {
        label: 'United States',
        desc: 'Net sales in the United States, including Puerto Rico, the U.S. Virgin Islands and Guam.',
        values: geography.map(s => s.us),
        format: billionFormat,
      },
      {
        label: 'Outside the United States',
        desc: 'Net sales in Canada and Mexico.',
        values: geography.map(s => s.international),
        format: billionFormat,
      },
    ],
    chartNote:
      'The United States is about 92% of net sales. Sales outside it have been flat at about $12.5B since FY22. Figures are from the segment and revenue notes to the 10-K.',
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
        note: 'Quarterly report, thirteen weeks to 2 August',
        date: 'Aug 25 2026',
      },
      {
        kind: '8-K',
        note: 'Second-quarter fiscal 2026 results; fiscal 2026 guidance reaffirmed',
        date: 'Aug 18 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 3 May',
        date: 'May 27 2026',
      },
      {
        kind: '8-K',
        note: 'First-quarter fiscal 2026 results',
        date: 'May 19 2026',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement for the 21 May 2026 annual meeting',
        date: 'Apr 7 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Mar 18 2026',
      },
      {
        kind: '8-K',
        note: 'Fourth-quarter and fiscal 2025 results; fiscal 2026 guidance',
        date: 'Feb 24 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 2 November',
        date: 'Nov 25 2025',
      },
      {
        kind: '8-K',
        note: 'Third-quarter fiscal 2025 results',
        date: 'Nov 18 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.homedepot.com/',
    },
    {
      label: 'Financial Reports',
      href: 'https://ir.homedepot.com/financial-reports/annual-reports/recent',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000354950',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/HD/',
    },
  ],
};

export function HdPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <RetailTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={hdSections}
      figuresDate='1 February 2026'
      footer={footer}
    />
  );
}
