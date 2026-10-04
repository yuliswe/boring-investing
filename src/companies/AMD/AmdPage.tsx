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
  symbol: 'AMD',
  name: 'Advanced Micro Devices, Inc.',
  sector: 'Semiconductors',
  tags: ['Mega Cap'],
  price: '$633.91',
  changePct: 2.95,
  priceNote: 'close, 2 October',
  summary:
    'Fabless designer of CPUs, GPUs, and adaptive chips for data centers, PCs, game consoles, and embedded systems. AMD competes with Intel in x86 processors and with NVIDIA in AI accelerators, and outsources fabrication to TSMC.',
};

const priceConfig: PriceConfig = {
  symbol: 'AMD',
  defaultPrice: 633.91,
  currency: '$',
  referenceClose: 615.73,
};

const pctFormat = { suffix: '%', decimals: 1 };
const billionFormat = { prefix: '$', suffix: 'B', decimals: 2 };

function toShareOfRevenue(values: (number | null)[]): (number | null)[] {
  return values.map((v, i) =>
    v !== null && revenueByYear[i]
      ? +((v / revenueByYear[i]) * 100).toFixed(1)
      : null
  );
}

function buildExpensesSection(): SectionData {
  const topLevel = expenseLines.filter(l => !('indent' in l));
  const totalRaw = expenseYears.map((_, i) =>
    topLevel.reduce((sum, l) => sum + l.values[i], 0)
  );
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'Every line of the income statement from net revenue to net income, expressed as a share of net revenue, using the categories AMD reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY20 income taxes are −12.4% of revenue because AMD released a $1.3B valuation allowance on deferred tax assets. From FY22, amortization of intangibles acquired with Xilinx adds between 6% and 15% of revenue in non-cash expense.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net income, covering operating expenses, non-operating items, income taxes, and discontinued operations.\nShown as a percentage of net revenue.',
        values: toShareOfRevenue(totalRaw),
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of net revenue.',
        values: toShareOfRevenue(l.values),
        format: pctFormat,
        ...('indent' in l && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of net revenue from the filed income statement. Indented lines break down the operating and non-operating totals above them. Stock-based compensation is embedded within cost of sales, R&D, and MG&A. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
  };
}

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
      'Operating cash flow was near zero in FY17 and FY18 while receivables grew. FY22 investing turned positive with cash acquired from Xilinx. Financing outflows from FY21 onward are mostly share repurchases. FY25 operating and investing activities include the ZT Systems manufacturing business, which was acquired and then divested during the year.',
  };
}

const amdSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by market in billions. Data Center grew from 22% of revenue in FY21 to 48% in FY25 on EPYC server CPUs and Instinct AI GPUs.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all four markets.',
        values: segments.segments.map(
          s => +(s.dataCenter + s.client + s.gaming + s.embedded).toFixed(2)
        ),
        format: billionFormat,
        total: true,
      },
      {
        label: 'Data Center',
        desc: 'EPYC server CPUs, Instinct GPU accelerators, Pensando DPUs, and rack-scale AI systems sold to cloud providers and enterprises.',
        values: segments.segments.map(s => s.dataCenter),
        format: billionFormat,
      },
      {
        label: 'Client',
        desc: 'Ryzen desktop and notebook processors and chipsets.',
        values: segments.segments.map(s => s.client),
        format: billionFormat,
      },
      {
        label: 'Gaming',
        desc: 'Radeon discrete GPUs and semi-custom SoCs for Sony PlayStation and Microsoft Xbox consoles.',
        values: segments.segments.map(s => s.gaming),
        format: billionFormat,
      },
      {
        label: 'Embedded',
        desc: 'Xilinx FPGAs and adaptive SoCs plus embedded CPUs for industrial, automotive, communications, and aerospace customers. FY21 predates the Xilinx acquisition.',
        values: segments.segments.map(s => s.embedded),
        format: billionFormat,
      },
    ],
    chartNote:
      'Before FY21 AMD reported two segments that do not map onto these markets. Computing and Graphics revenue was $2.98B, $4.13B, $4.71B and $6.43B for FY17 to FY20, and Enterprise, Embedded and Semi-Custom was $2.28B, $2.35B, $2.02B and $3.33B. Gaming fell from $6.21B in FY23 to $2.60B in FY24 as semi-custom console sales declined, then recovered to $3.91B in FY25. AMD merged Client and Gaming into one reporting segment in FY25 but still discloses each market.',
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
        note: 'Quarterly report, quarter to 27 June',
        date: 'Aug 5 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter to 28 March',
        date: 'May 6 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 4 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter to 27 September',
        date: 'Nov 5 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.amd.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://ir.amd.com/financial-information/annual-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000002488',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/AMD/',
    },
  ],
};

const EPS_EST = 5.64;
const FCF_PER_SHARE_EST = 4.56;

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
            FY26E: `Calculated from $${price.toFixed(2)} divided by derived GAAP EPS of $${EPS_EST}.`,
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus FCF per share of $${FCF_PER_SHARE_EST}.`,
          },
        };
      }
      return m;
    }),
  };
}

export function AmdPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={amdSections}
      figuresDate='last Saturday of December'
      footer={footer}
    />
  );
}
