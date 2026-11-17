'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import { applyStressTest } from '@/templates/base';
import type {
  HeroData,
  FooterData,
  SectionData,
  ReverseDcfData,
} from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  expenseLines,
  cashFlowStatementYears,
  cashFlowStatementLines,
  commitments,
  stressTest,
  LOST_PROFIT_SHARE,
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
  symbol: 'ASML',
  name: 'ASML Holding N.V.',
  sector: 'Semiconductor Equipment',
  tags: ['Mega Cap', 'Buyback', 'Dividend'],
  price: '€1,236.80',
  changePct: -5.34,
  priceNote: 'Euronext Amsterdam close, 17 November',
  summary:
    'Dutch maker of the lithography systems that print circuit patterns onto silicon wafers, and the only supplier of the extreme ultraviolet (EUV) machines that leading-edge logic and memory fabs need. It sells to a handful of chipmakers such as TSMC, Samsung, SK hynix, Intel and Micron, and earns a growing share of sales from servicing the machines it has already installed.',
};

const priceConfig: PriceConfig = {
  symbol: 'ASML',
  defaultPrice: 1236.8,
  currency: '€',
  referenceClose: 1306.6,
};

const pctFormat = { suffix: '%', decimals: 1 };
const billionFormat = { prefix: '€', suffix: 'B', decimals: 2 };

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
      'Every line of the income statement from net sales to net income, as a share of net sales, using the categories ASML reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY16 and FY17 other operating income is customer co-investment funding for research, and FY21 includes a €0.21B gain on selling Berliner Glas subsidiaries. Both lower total expenses in those years.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Net sales minus net income, covering operating expenses, non-operating items and income taxes.\nShown as a percentage of net sales.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map((l, li) => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of net sales.',
        values: linePcts[li],
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of net sales from the filed income statement. Operating expenses, non-operating items and income tax sum to total expenses, and indented lines break down the line above. Cost of sales fell from 54% of sales in FY16 to 47% in FY25 as EUV systems and service margins improved. Deltas are additive (pp); lower is better, so a fall shows green.',
  };
}

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions of euros. Net cash flow is the net change in cash for the year.',
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
      'Operating cash flow moves with customer down payments, which is why it jumped in FY21 and fell in FY23 while earnings kept rising. Capital spending is small for a hardware maker, at 4–8% of sales, because suppliers such as Carl Zeiss SMT build many of the modules. FY26E free cash flow is the consensus estimate, and the other FY26E lines have no estimate.',
  };
}

const systemFormat = { prefix: '€', suffix: 'B', decimals: 2 };

function buildRevenueSection(): SectionData {
  const s = segments.segments;
  return {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Net sales by technology in billions of euros. EUV grew from 5% of sales in FY16 to 36% in FY25, and Installed Base Management, the service and upgrade business, now earns a quarter of sales.',
    kind: 'multi',
    mode: 'absolute',
    years: s.map(x => x.year),
    series: [
      {
        label: 'Total net sales',
        desc: 'System sales plus Installed Base Management.',
        values: revenueByYear,
        format: systemFormat,
        total: true,
      },
      {
        label: 'EUV',
        desc: 'Extreme ultraviolet systems (NXE and the High-NA EXE), which print the finest features on leading-edge logic and DRAM. ASML is the only supplier.',
        values: s.map(x => x.euv),
        format: systemFormat,
      },
      {
        label: 'ArF immersion',
        desc: 'Deep ultraviolet immersion systems, used for most critical layers that do not need EUV.',
        values: s.map(x => x.arfi),
        format: systemFormat,
      },
      {
        label: 'ArF dry',
        desc: 'Dry deep ultraviolet systems for less critical layers.',
        values: s.map(x => x.arfDry),
        format: systemFormat,
      },
      {
        label: 'KrF',
        desc: 'Older deep ultraviolet systems for mature-node chips.',
        values: s.map(x => x.krf),
        format: systemFormat,
      },
      {
        label: 'i-line',
        desc: 'Mercury-lamp systems for the least critical layers and specialty chips.',
        values: s.map(x => x.iLine),
        format: systemFormat,
      },
      {
        label: 'Metrology & inspection',
        desc: 'YieldStar and HMI e-beam systems that measure and inspect patterns on the wafer.',
        values: s.map(x => x.metrology),
        format: systemFormat,
      },
      {
        label: 'Installed Base Management',
        desc: 'Service contracts, spare parts and field upgrades for systems already in fabs. Calculated as net sales minus net system sales.',
        values: s.map(x => x.installedBase),
        format: systemFormat,
      },
    ],
    chartNote:
      'From the technology split in the 20-F. FY24 EUV fell as customers digested capacity, then FY25 EUV rose 39% on leading-edge foundry and DRAM orders for AI. ASML does not split FY26 sales by technology until its next 20-F.',
  };
}

function buildRegionSection(): SectionData {
  const r = segments.regions;
  const series = (
    label: string,
    desc: string,
    key: keyof (typeof r)[number]
  ) => ({
    label,
    desc,
    values: r.map(x => x[key] as number),
    format: systemFormat,
  });
  return {
    rank: 405,
    id: 'regions',
    title: 'Sales by Region',
    kicker:
      'Net sales by the location of the customer’s fab. China rose from 14% of sales in FY22 to 36% in FY24 as Chinese chipmakers stockpiled DUV systems ahead of export controls, which is why the stress test leaves FY24 alone.',
    kind: 'multi',
    mode: 'absolute',
    years: r.map(x => x.year),
    series: [
      {
        label: 'Total net sales',
        desc: 'Sum of all regions.',
        values: revenueByYear,
        format: systemFormat,
        total: true,
      },
      series(
        'China',
        'Mainland China, which cannot buy EUV systems and faces limits on advanced DUV immersion systems.',
        'china'
      ),
      series('Taiwan', 'Mainly TSMC.', 'taiwan'),
      series('South Korea', 'Mainly Samsung and SK hynix.', 'korea'),
      series('United States', 'Mainly Intel and Micron.', 'usa'),
      series('Japan', 'Fabs located in Japan.', 'japan'),
      series(
        'Other',
        'Singapore, the Netherlands, the rest of EMEA and the rest of Asia.',
        'other'
      ),
    ],
    chartNote:
      'ASML expects China to fall to about 20% of FY26 sales. Taiwan dropped by almost half in FY24 and recovered in FY25 as TSMC added capacity for AI accelerators.',
  };
}

const asmlSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  buildRevenueSection(),
  buildRegionSection(),
  {
    rank: 570,
    id: 'commitments',
    title: 'Commitments and Down Payments',
    kicker: `Supplier commitments and customer prepayments, as of ${commitments.asOf}. Both would cut cash if AI orders were cancelled, because ASML must still pay suppliers and would hand back or stop receiving down payments.`,
    kind: 'table',
    firstColumn: 'Item',
    columns: commitments.columns,
    rows: commitments.rows,
    tableNote:
      'Purchase obligations are off the balance sheet. Customer down payments are on it as contract liabilities, and the ≤1 yr and >1 yr columns split them into current and non-current. Total contractual obligations, including €4.6B of debt and €0.3B of leases, were €17.6B.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker:
      'Everything filed with the SEC in the last twelve months, newest first. ASML files an annual 20-F and furnishes its quarterly results on Form 6-K.',
    kind: 'rows',
    entries: [
      {
        kind: '6-K',
        note: 'Q3 2026 results, quarter to 27 September',
        date: 'Oct 14 2026',
      },
      {
        kind: '6-K',
        note: 'Q2 2026 results and statutory interim report',
        date: 'Jul 15 2026',
      },
      { kind: '6-K', note: 'Q1 2026 results', date: 'Apr 15 2026' },
      {
        kind: '20-F',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 25 2026',
      },
      { kind: '6-K', note: 'Q4 and FY2025 results', date: 'Jan 28 2026' },
    ],
  },
];

const footer: FooterData = {
  links: [
    { label: 'Investor Relations', href: 'https://www.asml.com/en/investors' },
    {
      label: 'Annual Reports',
      href: 'https://www.asml.com/en/investors/annual-report',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000937966',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/ASML.AS/',
    },
  ],
};

const fcfLine = cashFlowStatementLines.find(l => l.label === 'Free cash flow')!;
const fcfAt = (year: string) =>
  fcfLine.values[cashFlowStatementYears.indexOf(year)]!;
const lostProfit = (year: string) =>
  stressTest.deductions.reduce((sum, d) => sum + (d.values[year] ?? 0), 0) *
  LOST_PROFIT_SHARE;

function buildReverseDcf(): ReverseDcfData {
  const actual = fcfAt('FY25');
  const forward = fcfAt('FY26E');
  const stressedActual = +(actual - lostProfit('FY25')).toFixed(2);
  const stressedForward = +(forward - lostProfit('FY26E')).toFixed(2);
  return {
    companyName: 'ASML',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    reportingCurrency: '€',
    paths: [
      {
        label: 'Free cash flow',
        column: 'Consensus',
        phrase: 'on consensus free cash flow',
        actual,
        forward,
      },
      {
        label: 'Stressed free cash flow',
        column: 'Stress test',
        phrase: 'without AI hype and circular financing',
        actual: stressedActual,
        forward: stressedForward,
      },
    ],
    startNote: 'FY26E free cash flow',
    actualNote: `Actual FY25 free cash flow of €${actual.toFixed(2)}B, or €${stressedActual.toFixed(2)}B after removing the stress test’s lost profit of €${lostProfit('FY25').toFixed(2)}B.`,
    forwardNote: `Consensus FY26E free cash flow of €${forward.toFixed(2)}B, or €${stressedForward.toFixed(2)}B after removing the stress test’s lost profit of €${lostProfit('FY26E').toFixed(2)}B, which treats the lost net income as lost cash.`,
    impliedNoteSuffix:
      'The stressed path also keeps the FY26 rise in customer down payments, which flatters both starting points.',
    sharesOutstanding: 0.3831,
    sharesSource: 'Q3 2026 weighted average basic shares',
    netCash: 10.04,
    netCashSource:
      '€12.74B of cash and short-term investments at 27 September 2026 minus an estimated €2.70B of debt, which is the €4.39B at year-end 2025 less €1.69B repaid in 2026; the Mistral and Carl Zeiss SMT stakes are excluded',
    assumptionNote:
      'The stress test removes the Mistral stake from value, consistent with excluding it from net cash.',
  };
}

const reverseDcf = buildReverseDcf();

const EPS_EST = 41.33;
const FCF_PER_SHARE_EST = 40.99;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  const priceText = `€${price.toFixed(2)}`;
  return {
    ...financials,
    reverseDcf,
    criticalMetrics: financials.criticalMetrics.map(m => {
      if (m.label === 'P/E ratio') {
        const values = [...m.values];
        values[values.length - 1] = pe;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from ${priceText} divided by consensus diluted EPS of €${EPS_EST}.`,
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
            FY26E: `Calculated from ${priceText} divided by consensus FCF per share of €${FCF_PER_SHARE_EST}.`,
          },
        };
      }
      return m;
    }),
  };
}

export function AsmlPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const { financials: dynamicFinancials, sections: stressSections } =
    applyStressTest(buildDynamicFinancials(price), stressTest, price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={[...asmlSections, ...stressSections]}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
