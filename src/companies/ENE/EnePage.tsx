'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
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
  symbol: 'ENE',
  name: 'Enron Corp.',
  sector: 'Energy Trading',
  tags: ['Defunct', 'Bankruptcy'],
  price: '$83.13',
  changePct: 0,
  priceNote: 'close, 29 December 2000 (last full fiscal year)',
  summary:
    'Defunct energy conglomerate that grew from a natural gas pipeline company into the largest energy trader in the world before collapsing into bankruptcy on 2 December 2001 in what was then the largest corporate fraud in American history. The stock peaked at $90.75 in August 2000 and was trading below $1 by late November 2001. All financial figures on this page are as filed with the SEC, except where noted as restated per the November 2001 restatement.',
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
  const operatingLines = expenseLines.slice(0, -2);
  const interestLine = expenseLines[expenseLines.length - 2];
  const taxLine = expenseLines[expenseLines.length - 1];
  const operatingPcts = operatingLines.map(l => toShareOfRevenue(l.values));
  const interestPct = toShareOfRevenue(interestLine.values);
  const taxPct = toShareOfRevenue(taxLine.values);
  const totalPct = operatingPcts[0].map((_, i) => {
    const all = [...operatingPcts.map(lp => lp[i]), interestPct[i], taxPct[i]];
    return all.every(v => v !== null)
      ? +all.reduce((sum, v) => sum + (v as number), 0).toFixed(1)
      : null;
  });
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'GAAP costs and expenses as a share of revenue. The total covers all cost lines between revenue and net income. Data is from the FY1995 and FY1996 earnings releases (8-K filings) and the FY1998 earnings release; FY1997 and FY1999–FY2000 income statement details were not available in the SEC EDGAR text filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY1998 is missing exploration costs and taxes other than income because the earnings release did not break them out separately, so the total for that year understates true costs by approximately 0.5–0.7 percentage points.',
    series: [
      {
        label: 'Total costs and expenses',
        desc: 'Sum of all cost lines from the GAAP income statement, from cost of products through income tax.\nExpressed as a percentage of revenue.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...operatingLines.map((l, li) => ({
        label: l.label,
        desc: l.desc + '\nExpressed as a percentage of revenue.',
        values: operatingPcts[li],
        format: pctFormat,
      })),
      {
        label: interestLine.label,
        desc: interestLine.desc + '\nExpressed as a percentage of revenue.',
        values: interestPct,
        format: pctFormat,
      },
      {
        label: taxLine.label,
        desc: taxLine.desc + '\nExpressed as a percentage of revenue.',
        values: taxPct,
        format: pctFormat,
      },
    ],
    chartNote:
      "Cost of gas, electricity and products dominated Enron's income statement at 70–84% of revenue, rising as Enron shifted from pipeline operations (where the spread was wider) to energy trading (where the spread was thin). Operating expenses ran 12–14% of revenue in the pipeline era and compressed to 8% by FY1998 as trading revenue swelled the denominator. Interest expense declined as a share of revenue from 3.8% in FY1993 to 1.8% in FY1998 even as the absolute amount nearly doubled, because revenue grew much faster than debt. The low income tax rate in FY1993 (1.7% of revenue) reflected a one-time tax rate adjustment.",
  };
}

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions. Data is from SEC earnings releases (8-K), the FY2000 10-K, and Justice Department bankruptcy exhibits. FY2001 is omitted because no full-year cash flow statement was ever filed. The bankruptcy examiner later estimated that Enron misclassified $5B or more of financing flows as operating activities through structured prepay transactions with banks.',
    kind: 'multi',
    years: cashFlowStatementYears,
    mode: 'absolute',
    series: cashFlowStatementLines.map(l => ({
      ...l,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      'Enron generated negative free cash flow in six of the eight years shown, spending more on capital projects and acquisitions than it earned from operations. FY1995 is particularly notable because operating cash flow went negative (-$15M) after a $530M gain on the sale of EOG Resources shares (a non-cash item that boosted net income) while working capital consumed $834M of cash. From FY1997 onward, investing outflows exceeded $2B every year as Enron built out trading infrastructure and acquired power plants, pipelines, and broadband assets. FY2000 is the sole year with positive free cash flow ($1.47B), but the bankruptcy examiner later attributed much of the operating figure ($4.78B) to prepay transactions with JPMorgan and Citigroup that were financing in substance.',
  };
}

const segmentYears = ['FY98', 'FY99', 'FY00'];

const eneSections: SectionData[] = [
  {
    rank: 400,
    id: 'segments',
    title: 'Segment IBIT',
    kicker:
      'Income before interest, minority interests and taxes (IBIT) by business segment, as reported in the FY2000 10-K. Wholesale Services, which included the energy trading operations, generated more than half of total segment IBIT by FY2000. Corporate and Other turned sharply negative in FY2000, reflecting losses on merchant investments and special purpose entity activity.',
    kind: 'multi',
    mode: 'absolute',
    years: segmentYears,
    series: [
      {
        label: 'Total IBIT',
        desc: 'Total income before interest, minority interests and taxes across all business segments.',
        values: [1.582, 1.995, 2.482],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
        total: true,
      },
      {
        label: 'Wholesale Services',
        desc: "Energy trading and market-making operations in natural gas, electricity, and other commodities across North America and internationally. The core of Enron's business by the late 1990s.",
        values: [0.968, 1.317, 2.26],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Transportation and Distribution',
        desc: "Natural gas pipeline operations (Enron's original business) plus Portland General Electric (acquired July 1997).",
        values: [0.637, 0.685, 0.732],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Retail Energy Services',
        desc: 'Energy pricing, delivery and demand management services for commercial and industrial customers.',
        values: [-0.119, -0.068, 0.165],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Exploration and Production',
        desc: 'Oil and gas exploration and production. This segment was being wound down by FY2000.',
        values: [0.128, 0.065, null],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Broadband Services',
        desc: 'Bandwidth trading and content delivery services, launched in FY2000.',
        values: [null, null, -0.06],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
      {
        label: 'Corporate and Other',
        desc: 'Unallocated corporate expenses, gains and losses on merchant investments, and activity related to off-balance-sheet entities. The FY2000 figure includes large losses that were later attributed to the Raptor structures and other SPE activity.',
        values: [-0.032, -0.004, -0.615],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Wholesale Services grew IBIT from $968M in FY1998 to $2,260M in FY2000, driven by the expansion of energy trading volumes and the adoption of mark-to-market accounting that recognised contract profits at inception. Transportation and Distribution, the original pipeline business, was stable at $637–$732M. Retail Energy Services turned profitable in FY2000 after two years of losses. The $615M loss in Corporate and Other in FY2000 foreshadowed the losses that would emerge from the Raptor and LJM entities in 2001.',
  },
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 580,
    id: 'collapse',
    title: 'The 2001 Collapse',
    kicker:
      'Timeline of events from the first public warning signs to the bankruptcy filing, with the approximate ENE stock price at each date.',
    kind: 'rows',
    entries: [
      {
        kind: '$82.00',
        note: '14 August: CEO Jeffrey Skilling resigns after six months, citing "personal reasons." Chairman Kenneth Lay returns as CEO.',
        date: 'Aug 2001',
      },
      {
        kind: '$33.84',
        note: '16 October: Enron reports Q3 results with $1.01B in non-recurring after-tax write-downs and discloses a $1.2B reduction in shareholders equity related to unwinding Raptor SPE transactions with LJM2.',
        date: 'Oct 2001',
      },
      {
        kind: '$15.40',
        note: "22 October: SEC opens a formal investigation into Enron's related-party transactions.",
        date: 'Oct 2001',
      },
      {
        kind: '$8.41',
        note: '8 November: Enron restates financial statements for FY1997–FY2000, reducing cumulative net income by $591M and increasing reported debt by $2.6B.',
        date: 'Nov 2001',
      },
      {
        kind: '$4.01',
        note: '9 November: Dynegy announces a $9B merger agreement to acquire Enron.',
        date: 'Nov 2001',
      },
      {
        kind: '$0.61',
        note: '28 November: Credit rating agencies downgrade Enron to junk status, triggering $3.9B in debt repayment obligations. Dynegy withdraws its merger offer.',
        date: 'Nov 2001',
      },
      {
        kind: '$0.26',
        note: '2 December: Enron files for Chapter 11 bankruptcy, then the largest bankruptcy filing in American history ($63.4B in assets).',
        date: 'Dec 2001',
      },
    ],
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Key Filings',
    kicker: 'Selected SEC filings and reports, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '8-K',
        note: 'November 2001 restatement, restating FY1997–Q3 2001 financials',
        date: 'Nov 8 2001',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, nine months to 30 September 2001',
        date: 'Nov 2001',
      },
      {
        kind: '8-K',
        note: 'Q3 2001 earnings release with $1.01B write-down',
        date: 'Oct 16 2001',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2000 (filed April 2001)',
        date: 'Apr 2 2001',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 1998',
        date: 'Mar 31 1999',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 1996',
        date: 'Mar 1997',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'SEC Filings (CIK 1024401)',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001024401',
    },
    {
      label: 'SEC Filings (CIK 72859)',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000072859',
    },
  ],
  externalLinks: [
    {
      label: 'Bankruptcy Examiner Report',
      href: 'https://www.justice.gov/archive/enron/',
    },
    {
      label: 'Enron Annual Reports (U. Chicago)',
      href: 'https://picker.uchicago.edu/Enron/',
    },
  ],
};

export function EnePage() {
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={hero}
      financials={financials}
      extraSections={eneSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
