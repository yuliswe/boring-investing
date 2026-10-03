'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  cashFlowStatementYears,
  cashFlowStatementLines,
  expenseYears,
  revenueByYear,
  expenseLines,
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
  symbol: 'BRK-B',
  name: 'Berkshire Hathaway Inc.',
  sector: 'Conglomerate',
  tags: ['Large Cap'],
  price: '$502.35',
  changePct: 0,
  priceNote: 'close, 29 September',
  summary:
    'Diversified holding company with insurance (GEICO, General Re), railroad (BNSF), energy (BH Energy), and manufacturing/service/retailing operations, alongside a concentrated public equity portfolio. Berkshire centralizes capital allocation at the holding company level and does not pay a dividend, reinvesting all earnings through acquisitions, share buybacks, and portfolio investments. All per-share figures are for Class B shares (BRK-B); one Class A share equals 1,500 Class B shares.',
};

const priceConfig: PriceConfig = {
  symbol: 'BRK-B',
  defaultPrice: 502.35,
  currency: '$',
  referenceClose: 502.35,
};

const OPERATING_EPS_EST = 22.93;

function buildDynamicFinancials(price: number) {
  const poe = +(price / OPERATING_EPS_EST).toFixed(1);
  return {
    ...financials,
    criticalMetrics: financials.criticalMetrics.map(m => {
      if (m.label === 'P/Operating earnings') {
        const values = [...m.values];
        values[values.length - 1] = poe;
        return {
          ...m,
          values,
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus operating EPS of $${OPERATING_EPS_EST}.`,
          },
        };
      }
      return m;
    }),
  };
}

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
  const operatingLines = expenseLines.slice(0, -1);
  const taxLine = expenseLines[expenseLines.length - 1];
  const operatingPcts = operatingLines.map(l => toShareOfRevenue(l.values));
  const taxPct = toShareOfRevenue(taxLine.values);
  const totalPct = operatingPcts[0].map((_, i) => {
    const vals = operatingPcts.map(lp => lp[i]);
    return vals.every(v => v !== null)
      ? +vals.reduce((sum, v) => sum + (v as number), 0).toFixed(1)
      : null;
  });
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'GAAP costs and expenses as a share of operating revenue (excluding investment gains and losses). The total covers the five operating cost lines reported between revenue and pre-tax income; income tax is shown separately because it includes tax on investment gains and losses that are not in operating revenue.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY20 SGA includes a $10.7B goodwill impairment on Precision Castparts. FY17 income tax shows a $21.5B net benefit from the Tax Cuts and Jobs Act. FY22 income tax shows an $8.5B benefit because unrealized investment losses reduced taxable income.',
    series: [
      {
        label: 'Total costs and expenses',
        desc: 'Sum of all operating cost lines from the GAAP income statement, excluding income taxes.\nExpressed as a percentage of operating revenue.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...operatingLines.map((l, li) => ({
        label: l.label,
        desc: l.desc + '\nExpressed as a percentage of operating revenue.',
        values: operatingPcts[li],
        format: pctFormat,
      })),
      {
        label: taxLine.label,
        desc:
          taxLine.desc + '\nExpressed as a percentage of operating revenue.',
        values: taxPct,
        format: pctFormat,
      },
    ],
    chartNote:
      "Cost of sales, services and leasing is Berkshire's largest expense at 53–58% of operating revenue, driven by BNSF, BH Energy, and dozens of manufacturing and retailing businesses; the jump to 58% in FY23 reflects Pilot Travel Centers consolidation. Insurance claims and benefits run 17–23% of revenue with moderate year-to-year variation from catastrophe activity. Total operating costs have gradually declined from 91% (FY17) to 86% (FY25) as the business mix has shifted toward higher-margin insurance investment income. Income tax swings from a 9% benefit (FY17, TCJA) to 8% of revenue (FY19) because taxes are levied on total earnings including investment gains and losses excluded from operating revenue.",
  };
}

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
      "Berkshire's investing cash flow is dominated by purchases and sales of equity and fixed-income securities, not by capital expenditures. FY21 investing was positive $29.4B because Berkshire was a net seller of securities; FY22 was deeply negative at -$87.6B from the Alleghany acquisition ($11.6B) and net securities purchases. Free cash flow (operating minus capex) is the most stable measure because capex ($12-21B per year) is a small fraction of operating cash flow. FY24 free cash flow fell to $11.6B because operating cash flow dropped to $30.6B on timing of insurance claim payments.",
  };
}

const segmentYears = [
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
];

const brkSections: SectionData[] = [
  {
    rank: 400,
    id: 'segments',
    title: 'Operating Earnings by Segment',
    kicker:
      "After-tax operating earnings broken down by Berkshire's major business segments. This is the metric management uses to evaluate each business, excluding investment gains/losses and impairments. FY17-FY21 grouped railroad, utilities and energy together; FY22 onward reports BNSF and BH Energy separately (combined here for consistency).",
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: segmentYears,
    series: [
      {
        label: 'Total operating earnings',
        desc: 'After-tax operating earnings across all segments, excluding investment and derivative gains/losses and impairment charges.',
        values: [
          14.46, 24.78, 23.97, 21.92, 27.46, 30.79, 37.35, 47.44, 44.49, 49.4,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 1 },
        total: true,
      },
      {
        label: 'Insurance underwriting',
        desc: 'Underwriting profit or loss from GEICO, Berkshire Hathaway Reinsurance, and Berkshire Hathaway Primary Group. Negative in FY17 from hurricane catastrophe losses; strongly positive from FY23 onward as GEICO improved pricing discipline.',
        values: [-2.22, 1.57, 0.33, 0.66, 0.73, -0.09, 5.43, 9.02, 7.26, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Insurance investment income',
        desc: 'After-tax income from investing the insurance float and other invested assets, including interest on Treasury bills and dividends on equity holdings. Growth since FY22 reflects rising interest rates on the expanding cash and Treasury bill position.',
        values: [3.89, 4.55, 5.53, 5.04, 4.81, 6.48, 9.57, 13.67, 12.51, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'BNSF and BH Energy',
        desc: 'Combined after-tax earnings from BNSF Railway and Berkshire Hathaway Energy (utilities, power generation, natural gas pipelines). Reported as a single segment through FY21; combined here for comparability.',
        values: [5.99, 7.84, 8.32, 8.25, 9.49, 9.85, 7.42, 8.76, 9.46, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Other businesses and corporate',
        desc: "Manufacturing, service, and retailing businesses (Precision Castparts, Lubrizol, Markel, See's Candies, Dairy Queen, Pilot Travel Centers from 2023), non-controlled businesses (Kraft Heinz), and corporate items (holding company interest expense, purchase accounting adjustments).",
        values: [
          6.8,
          10.82,
          9.79,
          7.97,
          12.43,
          14.55,
          14.93,
          15.99,
          15.26,
          null,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      "Insurance has become Berkshire's largest earnings segment since FY23, driven by both improved underwriting discipline at GEICO and surging investment income from rising interest rates on the $370B+ cash and Treasury bill position. Insurance investment income alone grew from $4.8B (FY21) to $13.7B (FY24). BNSF and BH Energy have been relatively stable at $7-10B per year. Other businesses contribute $13-16B annually from dozens of wholly owned manufacturing, service, and retailing companies. FY26E total is from a single analyst estimate; segment-level estimates are not shown.",
  },
  buildExpensesSection(),
  buildCashFlowStatementSection(),
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
        date: 'Aug 4 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'May 3 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 24 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Nov 3 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Shareholder Letters',
      href: 'https://www.berkshirehathaway.com/letters/letters.html',
    },
    {
      label: 'Annual Reports',
      href: 'https://www.berkshirehathaway.com/reports.html',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067983',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/BRK-B/',
    },
  ],
};

export function BrkPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={brkSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
