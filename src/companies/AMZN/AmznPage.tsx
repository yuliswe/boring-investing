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
  symbol: 'AMZN',
  name: 'Amazon.com, Inc.',
  sector: 'Technology',
  tags: ['Mega Cap'],
  price: '$246.15',
  changePct: 0,
  priceNote: 'close, 28 September',
  summary:
    "Global technology company operating the world's largest e-commerce marketplace (North America and International segments) and the leading cloud infrastructure platform (AWS), with expanding advertising, streaming, and AI businesses. Revenue is earned across logistics, third-party seller services, subscriptions, cloud computing, and digital advertising.",
};

const priceConfig: PriceConfig = {
  symbol: 'AMZN',
  defaultPrice: 246.15,
  currency: '$',
  referenceClose: 246.15,
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
      'Each line of the income statement as a share of revenue, using the categories Amazon reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Non-operating items are highly volatile because of unrealised gains and losses on equity investments. FY21 non-operating items were −13.3% of revenue ($14.6B Rivian gains). FY22 non-operating items were +3.5% of revenue ($16.8B Rivian losses). FY25 non-operating items were −2.3% of revenue ($15.2B gains on Anthropic and other investments).',
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
      "Shares of revenue from the filed income statement. Cost of sales is the largest line at roughly 50% of revenue, reflecting Amazon's first-party retail business. Technology and infrastructure grew from 13% to 15% of revenue as AWS infrastructure investment scaled. Non-operating items swing the total significantly: they reduced total expenses by 2.8pp in FY21 (Rivian gains) and increased them by 3.5pp in FY22 (Rivian losses). Deltas are additive (pp); lower is better on every line, so a fall shows green.",
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
      'Operating cash flow grew from $18.4B (FY17) to $139.5B (FY25). Capital expenditures grew even faster, from $12.0B to $131.8B, compressing free cash flow to $7.7B in FY25 despite record operating cash flow. FY21–FY22 negative FCF was driven by the post-pandemic warehouse buildout. The FY25 capex surge is primarily AI data-centre infrastructure for AWS. Financing activities were positive in FY17 (debt), FY21–FY22 (debt for buildout), and FY25 (debt for AI infrastructure).',
  };
}

const amznSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by reporting segment in billions. AWS grew from $17.5B (FY17) to $128.7B (FY25), a 7.4x increase.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: [
      'FY17',
      'FY18',
      'FY19',
      'FY20',
      'FY21',
      'FY22',
      'FY23',
      'FY24',
      'FY25',
      'FY26E',
    ],
    series: [
      {
        label: 'Total revenue',
        desc: 'Consolidated net sales from all three reporting segments.',
        values: [
          177.866, 232.887, 280.522, 386.064, 469.822, 513.983, 574.785,
          637.959, 716.924, 828.49,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
        total: true,
      },
      {
        label: 'North America',
        desc: 'Online and physical retail, advertising, and subscription services in the United States, Canada, and Mexico. Includes Amazon.com, Whole Foods Market, and Prime Video.',
        values: [
          106.11,
          141.366,
          170.773,
          236.282,
          279.833,
          315.88,
          352.828,
          387.497,
          426.305,
          null,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'International',
        desc: 'Same businesses as North America but outside North America. Includes all country-specific Amazon websites and operations.',
        values: [
          54.297,
          65.866,
          74.723,
          104.412,
          127.787,
          118.007,
          131.2,
          142.906,
          161.894,
          null,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'AWS',
        desc: 'Cloud computing, storage, database, machine learning, and AI services. The highest-margin segment, generating 57% of total operating income in FY25 on 18% of revenue.',
        values: [
          17.459,
          25.655,
          35.026,
          45.37,
          62.202,
          80.096,
          90.757,
          107.556,
          128.725,
          null,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
    ],
    chartNote:
      'North America is the largest segment by revenue but generated only $29.6B in operating income in FY25. International posted operating losses in seven of nine years (FY17–FY23), turning profitable only in FY24–FY25. AWS generated $45.6B in operating income in FY25 on $128.7B of revenue, an operating margin of 35.4%. FY26E total is the consensus estimate; segment-level estimates are not shown.',
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
        date: 'Aug 1 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'May 1 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 6 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Oct 31 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.aboutamazon.com/',
    },
    {
      label: 'SEC Filings',
      href: 'https://ir.aboutamazon.com/sec-filings/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001018724',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/AMZN/',
    },
  ],
};

const EPS_EST = 8.15;

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

export function AmznPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={amznSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
