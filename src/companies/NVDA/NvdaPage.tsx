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
  debtFundedDemand,
  circularOutflowYears,
  circularOutflowLines,
  circularOutflowYearDetails,
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

const investingLine = cashFlowStatementLines.find(
  l => l.label === 'Investing activities'
)!;
const forwardDeduction =
  offBalanceSheetCommitments.equityInvestmentsDueInFY27 +
  debtFundedDemand.total;

function circularDeduction(year: string): number | null {
  const i = cashFlowStatementYears.indexOf(year);
  if (i === -1) return null;
  return investingLine.values[i] === null
    ? forwardDeduction
    : -investingLine.values[i]!;
}

function adjustedEarningsRatio(year: string): number | null {
  const deduction = circularDeduction(year);
  const netIncome = financials.revenue.find(r => r.year === year)?.netIncome;
  if (deduction === null || !netIncome) return null;
  return (netIncome - deduction) / netIncome;
}

function buildRevenueMinusInvestingSection(): SectionData {
  const years = cashFlowStatementYears;
  const forward = financials.revenue.find(r => r.year === 'FY27E')!;
  const billions = (v: number) => `$${v.toFixed(2)}B`;
  const forwardMath = [
    `FY27E has no investing cash flow estimate, so it subtracts the ${billions(offBalanceSheetCommitments.equityInvestmentsDueInFY27)} of equity investments NVIDIA has committed to make in FY27 and the ${billions(debtFundedDemand.total)} of debt-funded demand, a total of ${billions(forwardDeduction)}.`,
    `Adjusted revenue = ${billions(forward.revenue)} consensus revenue − ${billions(forwardDeduction)} = ${billions(forward.revenue - forwardDeduction)}.`,
    `Adjusted operating income = ${billions(forward.operatingIncome!)} consensus operating income − ${billions(forwardDeduction)} = ${billions(forward.operatingIncome! - forwardDeduction)}.`,
  ].join('\n');
  const adjusted = (field: 'revenue' | 'operatingIncome') =>
    years.map(year => {
      const income = financials.revenue.find(r => r.year === year)![field]!;
      return +(income - circularDeduction(year)!).toFixed(2);
    });
  return {
    rank: 375,
    id: 'revenue-minus-investing',
    title: 'Revenue Minus Investment Activities',
    kicker:
      'Revenue and operating income after treating the cash NVIDIA spends on investing activities as circular financing, on the view that some of that money returns as revenue when the companies it funds buy NVIDIA chips.',
    kind: 'multi',
    years,
    mode: 'absolute',
    guidanceCount: 1,
    guidanceDesc: forwardMath,
    series: [
      {
        label: 'Adjusted revenue',
        desc: 'Revenue minus the net cash used in investing activities from the cash flow statement.',
        values: adjusted('revenue'),
        format: billionFormat,
      },
      {
        label: 'Adjusted operating income',
        desc: 'Operating income minus the net cash used in investing activities from the cash flow statement.',
        values: adjusted('operatingIncome'),
        format: billionFormat,
      },
    ],
    chartNote:
      'Investing activities are a net outflow in every year except FY23, when NVIDIA sold more marketable securities than it bought, so FY23 adjusted figures sit above reported ones. The net investing figure is a deliberately broad proxy, because it also includes capital expenditures, acquisitions, and purchases of marketable debt securities, none of which funds customers. FY27E has no investing estimate, so it instead subtracts the equity investments NVIDIA has committed to make in FY27 and the full debt-funded demand total, which includes deals from earlier years and SpaceX’s proposed loan. The rest of the FY27 off-balance-sheet commitments is left out, because supply purchases become cost of revenue and are already reflected in consensus operating income, and the capital expenditures and cloud services pay for NVIDIA’s own operations rather than funding customers.',
  };
}

function buildCircularFinancingSection(): SectionData {
  const totals = circularOutflowYears.map(
    (_, i) =>
      +circularOutflowLines.reduce((sum, l) => sum + l.values[i], 0).toFixed(3)
  );
  const yearNotes = Object.fromEntries(
    circularOutflowYears.map((year, i) => {
      const revenue = financials.revenue.find(r => r.year === year)!.revenue;
      const parts = circularOutflowLines
        .filter(l => l.values[i] > 0)
        .map(l => `${l.label} $${l.values[i].toFixed(2)}B`);
      return [
        year,
        [
          `${parts.join(' + ')} = $${totals[i].toFixed(2)}B.`,
          `That is ${((totals[i] / revenue) * 100).toFixed(1)}% of ${year} revenue of $${revenue.toFixed(2)}B.`,
          circularOutflowYearDetails[year],
        ].join('\n'),
      ];
    })
  );
  return {
    rank: 580,
    id: 'circular-financing',
    title: 'Circular Financing and Third-Party Debt Financing',
    kicker:
      'Cash NVIDIA sends to third parties that can buy NVIDIA GPUs, through equity stakes, acquisitions, and license payments, plus debt that lenders provide to customers to buy NVIDIA chips. Bond purchases, capital expenditures, and supplier payments are excluded, because that money does not reach potential customers.',
    kind: 'multi',
    years: circularOutflowYears,
    mode: 'absolute',
    guidanceCount: 1,
    yearNotes,
    series: [
      {
        label: 'Total',
        desc: 'Sum of the equity stakes, acquisitions, license payments, and third-party debt below.',
        values: totals,
        format: billionFormat,
        bold: true,
      },
      ...circularOutflowLines.map(l => ({ ...l, format: billionFormat })),
    ],
    chartNote:
      'NVIDIA’s outflows are gross cash paid, before any proceeds from selling stakes, and no loans to customers or guarantee payouts appear in the filings. Third-party debt counts GPU-backed loans and the corporate debt of AI clouds and AI labs at facility size, and excludes data center construction debt and hyperscaler bonds. Click a year to see what it includes and its share of revenue.',
  };
}

const nvdaSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  buildRevenueMinusInvestingSection(),
  buildCircularFinancingSection(),
  {
    rank: 570,
    id: 'off-balance-sheet',
    title: 'Off-Balance-Sheet Commitments',
    kicker: `Contractual commitments and guarantees not yet recognized as liabilities, as of ${offBalanceSheetCommitments.asOf}. Supply commitments rose from $119B to $279B in one quarter, and in August NVIDIA guaranteed up to $105B of an OpenAI data center’s lease payments.`,
    kind: 'table',
    firstColumn: 'Category',
    columns: offBalanceSheetCommitments.columns,
    rows: offBalanceSheetCommitments.rows,
    tableNote:
      'FY27 is the remainder of the fiscal year after July 26, 2026. The first five rows make up the $366B the filing reports as total commitments, and the AI cloud agreements and third-party leases are reported separately as $56B of additional commitments. Guarantee amounts are maximum exposures without a payment schedule, so the FY columns of the total exclude them. The SB Energy guarantees were signed in August 2026, after the quarter closed, and are disclosed in the same 10-Q.',
  },
  {
    rank: 575,
    id: 'debt-funded-demand',
    title: 'Debt-Funded Demand',
    kicker:
      'Debt that customers have raised, or are raising, to buy NVIDIA chips. NVIDIA does not guarantee any of it, so it is not a liability, but it shows how much demand depends on credit markets staying open.',
    kind: 'table',
    firstColumn: 'Borrower',
    columns: debtFundedDemand.columns,
    rows: debtFundedDemand.rows,
    tableNote:
      'This list covers the deals identified so far and is not exhaustive. It counts only third-party debt. Demand that NVIDIA funds with its own money, such as the $25B of equity commitments above or the reported but unsigned talks to finance about $350B of OpenAI chip purchases, is excluded. NVIDIA’s exposure here is to its equity stakes and to future revenue, not to the lenders.',
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

const metricYears = financials.revenue.map(r => r.year);
const dilutedEps = financials.keyMetrics.find(m => m.label === 'Diluted EPS')!;
const historicalPe = financials.criticalMetrics.find(
  m => m.label === 'P/E ratio'
)!;
const forwardRatio = adjustedEarningsRatio('FY27E')!;
const forwardNetIncome = financials.revenue.find(
  r => r.year === 'FY27E'
)!.netIncome!;
const adjustedEpsEst = EPS_EST * forwardRatio;
const negativeAdjustedNote =
  'Not meaningful, because adjusted net income was negative after the deduction.';

const adjustedEpsMetric = {
  label: 'Adjusted diluted EPS',
  desc: 'Diluted EPS after subtracting the same circular-financing deduction as adjusted revenue from net income. FY21–FY26 deduct the net cash used in investing activities, and FY27E deducts the equity investments committed for FY27 and the debt-funded demand total.',
  values: metricYears.map((year, i) => {
    const ratio = adjustedEarningsRatio(year);
    const eps = dilutedEps.values[i];
    return ratio === null || eps === null ? null : +(eps * ratio).toFixed(2);
  }),
  format: { prefix: '$', decimals: 2 },
  guidanceCount: 1,
  yearNotes: {
    FY27E: `Consensus EPS of $${EPS_EST} × adjusted net income of $${(forwardNetIncome - forwardDeduction).toFixed(2)}B ÷ consensus net income of $${forwardNetIncome.toFixed(2)}B = $${adjustedEpsEst.toFixed(2)}.`,
  },
};

function buildAdjustedPeMetric(price: number) {
  const values = metricYears.map((year, i) => {
    const ratio = adjustedEarningsRatio(year);
    const pe = historicalPe.values[i];
    if (ratio === null || pe === null || ratio <= 0) return null;
    return +(pe / ratio).toFixed(1);
  });
  values[values.length - 1] = +(price / adjustedEpsEst).toFixed(1);
  return {
    label: 'Adjusted P/E ratio',
    desc: 'Price at fiscal year-end divided by adjusted diluted EPS, which removes the same circular-financing deduction as adjusted revenue.',
    values,
    format: { decimals: 1 },
    invertColor: true,
    guidanceCount: 1,
    yearNotes: {
      FY21: negativeAdjustedNote,
      FY22: negativeAdjustedNote,
      FY27E: `Calculated from $${price.toFixed(2)} divided by adjusted diluted EPS of $${adjustedEpsEst.toFixed(2)}.`,
    },
  };
}

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  const epsGrowth = ((EPS_EST - PRIOR_EPS) / PRIOR_EPS) * 100;
  const peg = +(pe / epsGrowth).toFixed(2);
  return {
    ...financials,
    keyMetrics: financials.keyMetrics.flatMap(m =>
      m === dilutedEps ? [m, adjustedEpsMetric] : [m]
    ),
    criticalMetrics: financials.criticalMetrics
      .map(m => {
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
      })
      .flatMap(m =>
        m.label === 'P/E ratio' ? [m, buildAdjustedPeMetric(price)] : [m]
      ),
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
