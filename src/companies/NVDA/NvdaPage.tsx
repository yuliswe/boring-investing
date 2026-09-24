'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  expenseLines,
  cashFlowYears,
  cashFlowRevenue,
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
    title: 'Expenses',
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

function toCashFlowShareOfRevenue(
  values: (number | null)[]
): (number | null)[] {
  return values.map((v, i) =>
    v !== null && cashFlowRevenue[i]
      ? +((v / cashFlowRevenue[i]) * 100).toFixed(1)
      : null
  );
}

function buildFCFSection(): SectionData {
  const linePcts = cashFlowLines.map(l => toCashFlowShareOfRevenue(l.values));
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
    years: cashFlowYears,
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
      'FY22–FY26 only because full cash flow breakdowns are not available for earlier years. Δ Working capital: positive means cash was freed, negative means cash was consumed.',
  };
}

const revenueYears = financials.revenue.map(r => r.year);

const nvdaSections: SectionData[] = [
  buildExpensesSection(),
  buildFCFSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
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
    rank: 350,
    id: 'revenue-total',
    title: 'Revenue & Operating Income',
    kicker:
      'Total revenue and operating income in billions with year-on-year growth rates.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: revenueYears,
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated revenue from all market platforms.',
        values: financials.revenue.map(r => r.revenue),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Operating income',
        desc: 'Income from operations before interest and taxes. FY23 includes a $1.35B Arm acquisition termination charge.',
        values: financials.revenue.map(r => r.operatingIncome),
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Revenue more than doubled in each of FY24 and FY25 as AI accelerator demand surged. FY23 operating income was depressed by the $1.35B Arm deal termination charge and a gaming revenue downturn. FY27E is consensus analyst estimate.',
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
