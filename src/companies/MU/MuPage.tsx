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
  symbol: 'MU',
  name: 'Micron Technology, Inc.',
  sector: 'Semiconductors',
  tags: ['Mega Cap', 'Dividend'],
  price: '$1,074.89',
  changePct: -2.05,
  priceNote: 'close, 2 October',
  summary:
    'Maker of DRAM, NAND flash, and high-bandwidth memory (HBM) that sells into data centers, PCs, phones, cars, and industrial devices. Unlike fabless chip designers, Micron owns and runs its own fabs, so its margins swing with memory prices across the industry cycle.',
};

const priceConfig: PriceConfig = {
  symbol: 'MU',
  defaultPrice: 1074.89,
  currency: '$',
  referenceClose: 1097.39,
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
  const topLevel = linePcts.filter((_, li) => !expenseLines[li].indent);
  const totalPct = expenseYears.map((_, i) => {
    const vals = topLevel.map(lp => lp[i]);
    return vals.every(v => v !== null)
      ? +vals.reduce((sum, v) => sum + (v as number), 0).toFixed(1)
      : null;
  });
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'Each line of the income statement as a share of revenue, using the categories Micron reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY23 total expenses exceed 100% of revenue because Micron lost money that year. Cost of goods sold is largely fixed fab cost, so its share of revenue mostly tracks memory prices rather than efficiency.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net income, covering operating expenses, non-operating items, and income taxes.\nShown as a percentage of total revenue.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map((l, li) => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of total revenue.',
        values: linePcts[li],
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of revenue from the filed income statement. Operating expenses, non-operating items, and income taxes sum to total expenses; indented lines break down the line above. Stock-based compensation is embedded within cost of goods sold, R&D, and SG&A. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'Capital expenditures absorbed most of operating cash flow until FY26, leaving free cash flow near zero in FY20 and FY24 and negative in FY23. Micron also reports an "adjusted free cash flow" that nets government incentives against capex ($62.31B in FY26); the line here uses gross capex. FY27E free cash flow is the consensus analyst estimate.',
  };
}

const segmentFormat = { prefix: '$', suffix: 'B', decimals: 2 };

const muSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by memory technology in billions. DRAM grew from 64% of revenue in FY17 to 76% in FY26 as HBM and server DRAM for AI data centers took over.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of DRAM, NAND, and other revenue.',
        values: segments.segments.map(
          s => +(s.dram + s.nand + s.other).toFixed(2)
        ),
        format: segmentFormat,
        total: true,
      },
      {
        label: 'DRAM',
        desc: 'Dynamic random-access memory, including HBM for AI accelerators, server DDR5 and LPDDR modules, and DRAM for PCs, phones, and cars.',
        values: segments.segments.map(s => s.dram),
        format: segmentFormat,
      },
      {
        label: 'NAND',
        desc: 'NAND flash memory, sold as data-center and client SSDs, managed NAND for phones, and components. Multichip packages are reported within NAND.',
        values: segments.segments.map(s => s.nand),
        format: segmentFormat,
      },
      {
        label: 'Other',
        desc: 'Primarily NOR flash. Earlier years also included 3D XPoint memory, which Micron discontinued in 2021.',
        values: segments.segments.map(s => s.other),
        format: segmentFormat,
      },
    ],
    chartNote:
      'Micron reorganized its business units in FY26 (Cloud Memory, Core Data Center, Mobile and Client, Automotive and Embedded), so the technology split is the only breakdown available on a consistent basis for all ten years. FY26 Q4 DRAM ($39.8B) and NAND ($14.1B) come from the earnings call prepared remarks and are rounded to $0.1B.',
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
        note: 'Earnings release for fourth quarter and fiscal year 2026',
        date: 'Sep 30 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 28 May',
        date: 'Jun 25 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 26 February',
        date: 'Mar 19 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 27 November',
        date: 'Dec 18 2025',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Oct 3 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investors.micron.com/',
    },
    {
      label: 'Quarterly Results',
      href: 'https://investors.micron.com/quarterly-results',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000723125',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/MU/',
    },
  ],
};

const EPS_EST = 161.49;
const FCF_PER_SHARE_EST = 122.06;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  const fmt = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
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
            FY27E: `Calculated from $${fmt} divided by consensus diluted EPS of $${EPS_EST}.`,
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
            FY27E: `Calculated from $${fmt} divided by consensus FCF per share of $${FCF_PER_SHARE_EST} (FCF $140.37B / ~1.15B shares).`,
          },
        };
      }
      return m;
    }),
  };
}

export function MuPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={muSections}
      figuresDate='Thursday closest to 31 August'
      footer={footer}
    />
  );
}
