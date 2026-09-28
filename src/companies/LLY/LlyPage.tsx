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
  symbol: 'LLY',
  name: 'Eli Lilly and Company',
  sector: 'Pharmaceuticals',
  tags: ['Mega Cap', 'Dividend'],
  price: '$1,167.00',
  changePct: ((1167 - 1182) / 1182) * 100,
  priceNote: 'close, 25 September',
  summary:
    'Global pharmaceutical company anchored by tirzepatide (Mounjaro for diabetes, Zepbound for obesity), with leading positions in oncology, immunology, and neuroscience. Lilly discovers, develops, manufactures, and markets medicines, reinvesting heavily in R&D and manufacturing capacity to sustain growth from its GLP-1 franchise.',
};

const priceConfig: PriceConfig = {
  symbol: 'LLY',
  defaultPrice: 1167,
  currency: '$',
  referenceClose: 1182,
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
    title: 'Cost Analysis',
    kicker:
      'Each line of the income statement as a share of revenue, using the categories Eli Lilly reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY17 and FY18 include the Elanco animal health business, which was separated via IPO in September 2018 and fully spun off in February 2019. FY19 onward reflects continuing pharmaceutical operations only. FY17 income tax expense includes a $2.4B charge from the Tax Cuts and Jobs Act.',
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
      'Shares of revenue from the filed income statement. Acquired IPR&D is a recurring pharma-specific charge that Lilly expenses immediately upon acquiring pipeline assets; it spiked to 11% of revenue in FY23 from two large deals. The FY17–FY18 to FY19 drop in cost of products sold reflects the Elanco spin-off, not a margin improvement. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'FY18 investing was positive ($1.9B) because Elanco IPO proceeds offset other investing outflows. FY19 investing was deeply negative ($−8.1B) due to the $6.9B Loxo Oncology acquisition. FY23 operating cash flow fell to $4.2B as working capital consumed cash during the rapid Mounjaro launch. Capital expenditures surged from $1.0B (FY19) to $7.8B (FY25) for tirzepatide manufacturing capacity. FY23–FY24 financing was positive as Lilly issued debt to fund the manufacturing buildout.',
  };
}

const llySections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by product franchise in billions. Tirzepatide (Mounjaro + Zepbound) grew from zero to 56% of total revenue in three years.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: ['FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'FY26E'],
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated revenue from all product sales, starting from FY19 (post-Elanco spin-off).',
        values: [22.32, 24.54, 28.32, 28.54, 34.12, 45.04, 65.18, 88.46],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Tirzepatide',
        desc: 'Combined revenue from Mounjaro (type 2 diabetes, launched June 2022) and Zepbound (obesity, launched November 2023). Tirzepatide is a dual GIP/GLP-1 receptor agonist.',
        values: [0, 0, 0, 0.48, 5.34, 16.47, 36.51, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Verzenio',
        desc: 'Abemaciclib, a CDK4/6 inhibitor for HR+/HER2– breast cancer. The fastest-growing oncology product in Lilly’s portfolio.',
        values: [0.58, 0.91, 1.35, 2.48, 3.86, 5.31, 5.72, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Other products',
        desc: 'All other products including Trulicity (GLP-1, declining as Mounjaro cannibalizes), Jardiance (SGLT2 inhibitor, alliance with Boehringer Ingelheim), Taltz (immunology), Humalog/Humulin (insulin), and pipeline products.',
        values: [21.74, 23.63, 26.97, 25.57, 24.92, 23.27, 22.95, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Tirzepatide revenue went from zero (pre-launch) to $36.5B in three years, the fastest drug launch in pharmaceutical history. Other products are flat to declining as older franchises (Trulicity, Humalog, Alimta) lose patent protection or face cannibalization from Mounjaro. Verzenio growth decelerated in FY25 as the breast cancer market matured. FY26E total is the consensus estimate from 28 analysts; product-level estimates are not shown.',
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
        note: 'Quarterly report, three months to 30 June',
        date: 'Aug 6 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'May 7 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 19 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Nov 5 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investor.lilly.com/',
    },
    {
      label: 'SEC Filings',
      href: 'https://investor.lilly.com/financial-information/sec-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000059478',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/LLY/',
    },
  ],
};

const EPS_EST = 36.93;

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

export function LlyPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={llySections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
