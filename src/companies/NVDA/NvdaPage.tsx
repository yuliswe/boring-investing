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
  offBalanceSheetCommitments,
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
  symbol: 'NVDA',
  name: 'NVIDIA Corporation',
  sector: 'Semiconductors',
  tags: ['Mega Cap', 'Dividend'],
  price: '$225.51',
  changePct: -1.47,
  priceNote: 'close, 23 September',
  summary:
    'Designer of GPUs and accelerated computing platforms for AI training and inference, gaming, data center, professional visualization, and autonomous vehicles. NVIDIA designs chips and outsources fabrication to TSMC, earning software-like margins on a hardware business.',
};

const priceConfig: PriceConfig = {
  symbol: 'NVDA',
  defaultPrice: 225.51,
  currency: '$',
  referenceClose: 228.87,
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
      'Each line of the income statement as a share of revenue, using the categories NVIDIA reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY23 includes a $1.35B acquisition termination charge from the cancelled Arm Holdings deal. FY19 and FY23 income taxes are negative (tax benefits) due to TCJA transition effects and deferred tax asset revaluations.',
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
      "Shares of revenue from the filed income statement. Stock-based compensation is embedded within cost of revenue, R&D, and SGA in NVIDIA's GAAP filings. Deltas are additive (pp); lower is better on every line, so a fall shows green.",
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
      'FY21 investing cash flow reflects the $7B Mellanox acquisition. FY23 investing was positive due to net sales of short-term investments. Operating cash flow surged from FY24 onward as AI accelerator demand drove record earnings.',
  };
}

const nvdaSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 570,
    id: 'off-balance-sheet',
    title: 'Off-Balance-Sheet Commitments',
    kicker: `Contractual obligations not yet recognized as liabilities, as of ${offBalanceSheetCommitments.asOf}. Manufacturing commitments grew nearly 6× year-over-year, driven by TSMC’s requirement for longer contract terms and upfront payments to fund custom fabrication capacity.`,
    kind: 'table',
    firstColumn: 'Category',
    columns: offBalanceSheetCommitments.columns,
    rows: offBalanceSheetCommitments.rows,
    tableNote:
      'Leases not yet commenced ($32.4B) are spread across FY27–FY33, primarily for data centers, with terms of 3–20 years. Facility lease guarantees ($3.5B max exposure) reduce over 5–7 years as partners make payments. The $24.0B manufacturing balance for FY28–31 is not broken down by individual year in the filing. Cloud service FY28–31 is the sum of $7.0B + $7.0B + $5.0B + $3.0B. Investment commitments include pledged but unfunded equity stakes; completed investments ($99B as of July 2026, including the $30B OpenAI stake) are on the balance sheet and not shown here.',
  },
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by market platform in billions. Data Center has grown from 12% of revenue in FY17 to 90% in FY26, driven by AI accelerator demand.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all five market platforms.',
        values: segments.segments.map(
          s =>
            +(
              s.dataCenter +
              s.gaming +
              s.proViz +
              s.automotive +
              s.oem
            ).toFixed(2)
        ),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Data Center',
        desc: 'GPU accelerators, networking (InfiniBand, Ethernet), and DPUs for AI training, inference, and high-performance computing in cloud and enterprise data centers.',
        values: segments.segments.map(s => s.dataCenter),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Gaming',
        desc: 'GeForce GPUs for PC gaming, GeForce NOW cloud gaming service, and console SoCs.',
        values: segments.segments.map(s => s.gaming),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Professional Visualization',
        desc: 'Quadro and RTX GPUs for professional design, simulation, and digital content creation workstations.',
        values: segments.segments.map(s => s.proViz),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Automotive',
        desc: 'DRIVE platform for autonomous vehicles, cockpit infotainment, and AI-powered mapping.',
        values: segments.segments.map(s => s.automotive),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'OEM & Other',
        desc: 'OEM desktop and notebook GPU sales, cryptocurrency mining processors, and intellectual property licensing.',
        values: segments.segments.map(s => s.oem),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      "Data Center revenue accelerated sharply from FY24 onward as hyperscale cloud providers adopted NVIDIA's H100 and subsequent GPU architectures for AI workloads. Gaming revenue dipped in FY23 due to post-COVID normalization and crypto inventory overhang.",
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
        note: 'Quarterly report, thirteen weeks to 27 July',
        date: 'Aug 27 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 27 April',
        date: 'May 28 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2026',
        date: 'Feb 25 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, thirteen weeks to 26 October',
        date: 'Nov 20 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investor.nvidia.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://investor.nvidia.com/financial-info/financial-reports/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001045810',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/NVDA/',
    },
  ],
};

const EPS_EST = 9.31;
const FCF_PER_SHARE_EST = 8.03;
const PRIOR_EPS = 4.9;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  const epsGrowth = ((EPS_EST - PRIOR_EPS) / PRIOR_EPS) * 100;
  const peg = +(pe / epsGrowth).toFixed(2);
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
            FY27E: `Calculated from $${price.toFixed(2)} divided by consensus diluted EPS of $${EPS_EST}.`,
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
            FY27E: `Calculated from $${price.toFixed(2)} divided by consensus FCF per share of $${FCF_PER_SHARE_EST}.`,
          },
        };
      }
      if (m.label === 'PEG ratio') {
        const values = [...m.values];
        values[values.length - 1] = peg;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            FY27E: `Calculated from the forward P/E of ${pe} divided by the FY26-to-FY27 EPS growth rate of ${epsGrowth.toFixed(1)}%.`,
          },
        };
      }
      return m;
    }),
  };
}

export function NvdaPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={nvdaSections}
      figuresDate='last Sunday of January'
      footer={footer}
    />
  );
}
