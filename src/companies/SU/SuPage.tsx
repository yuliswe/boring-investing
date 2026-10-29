'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  years,
  revenueByYear,
  netIncomeByYear,
  expenseLines,
  cashFlowStatementYears,
  cashFlowStatementLines,
} from './data/financials';
import {
  segmentRevenue,
  royalties,
  operating,
  sensitivities,
} from './data/segments';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'SU',
  name: 'Suncor Energy Inc.',
  sector: 'Integrated Oil & Gas',
  tags: ['Large Cap', 'Dividend', 'TSX 60'],
  price: 'CA$108.52',
  changePct: 1.43,
  priceNote: 'TSX close, 28 October',
  summary:
    'Canadian integrated energy company that produces bitumen from oil sands mines and in situ wells in Alberta, upgrades much of it into synthetic crude, and refines crude at four refineries in Canada and Colorado for sale through 1,732 retail stations in Canada, mainly under the Petro-Canada brand.',
};

const priceConfig: PriceConfig = {
  symbol: 'SU',
  defaultPrice: 108.52,
  currency: 'CA$',
  referenceClose: 106.99,
};

const EPS_EST = 12.11;
const FFF_PER_SHARE_EST = 12.22;
const SHARES_OUTSTANDING = 1.1696;
const NET_DEBT = 9.308;
const AFFO_EST = 20.32;

function withForward(
  values: (number | null)[],
  forward: number
): (number | null)[] {
  const next = [...values];
  next[next.length - 1] = forward;
  return next;
}

function buildDynamicFinancials(price: number) {
  const p = price.toFixed(2);
  const pe = +(price / EPS_EST).toFixed(1);
  const pfff = +(price / FFF_PER_SHARE_EST).toFixed(1);
  const evAffo = +((price * SHARES_OUTSTANDING + NET_DEBT) / AFFO_EST).toFixed(
    1
  );
  return {
    ...financials,
    criticalMetrics: financials.criticalMetrics.map(m => {
      if (m.label === 'P/E ratio') {
        return {
          ...m,
          values: withForward(m.values, pe),
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from CA$${p} divided by consensus adjusted EPS of CA$${EPS_EST}.`,
          },
        };
      }
      if (m.label === 'P/FFF ratio') {
        return {
          ...m,
          values: withForward(m.values, pfff),
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from CA$${p} divided by CA$${FFF_PER_SHARE_EST} of free funds flow per share, which is consensus free funds flow of CA$14.47B over 1,184M diluted shares (first half of 2026).`,
          },
        };
      }
      if (m.label === 'EV / AFFO') {
        return {
          ...m,
          values: withForward(m.values, evAffo),
          yearNotes: {
            ...m.yearNotes,
            FY26E: `Calculated from CA$${p} × 1,169.6M shares plus CA$9.31B of net debt, divided by CA$${AFFO_EST}B of AFFO implied by consensus free funds flow of CA$14.47B plus the CA$5.85B midpoint of capital guidance including capitalized interest.`,
          },
        };
      }
      return m;
    }),
  };
}

const pctFormat = { suffix: '%', decimals: 1 };
const billionFormat = { prefix: 'CA$', suffix: 'B', decimals: 2 };

function toShareOfRevenue(values: number[]): number[] {
  return values.map((v, i) => +((v / revenueByYear[i]) * 100).toFixed(1));
}

function buildExpensesSection(): SectionData {
  const totalExpenses = revenueByYear.map((r, i) => r - netIncomeByYear[i]);
  return {
    rank: 500,
    id: 'expenses',
    title: 'Cost Analysis',
    kicker:
      'Every line of the income statement from total revenues and other income to net earnings, expressed as a share of revenue, using the categories Suncor reports. Revenue is net of royalties.',
    kind: 'multi',
    years,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Impairments lifted depreciation to 27% of revenue in FY19 and 38% in FY20, and the net loss in FY20 pushed total expenses above 100% of revenue.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Total revenues and other income minus net earnings, covering operating expenses, financing expenses and income taxes.\nShown as a percentage of revenue.',
        values: toShareOfRevenue(totalExpenses),
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of revenue.',
        values: toShareOfRevenue(l.values),
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of total revenues and other income from the audited income statements; FY17 is the restated figure from the FY18 statements. Purchases of crude oil and products are the largest line and move with the oil price, so the mix shifts with WTI. Operating, selling and general fell from 29% of revenue in FY19 to 27% in FY25 while volumes grew. Financing expenses are the only non-operating line. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
  };
}

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions of Canadian dollars. Net cash flow is the net change in cash before foreign exchange.',
    kind: 'multi',
    years: cashFlowStatementYears,
    mode: 'absolute',
    series: cashFlowStatementLines.map(l => ({
      ...l,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      'From the audited cash flow statements. Free cash flow here is operating activities minus capital expenditures, so it swings with working capital; free funds flow in the Critical Metrics section starts from adjusted funds from operations instead. FY20 is the only year with negative free cash flow, when WTI averaged US$39.40 and Suncor borrowed CA$3.76B net. Repurchases exceeded dividends in FY18, FY21, FY22, FY24 and FY25.',
  };
}

const operatingYears = operating.years;
const operatingYearsE = [...operatingYears, 'FY26E'];

const suSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Gross revenues from external customers by segment, in billions of Canadian dollars, before royalties and after eliminating sales between segments.',
    kind: 'multi',
    mode: 'absolute',
    years: segmentRevenue.map(s => s.year),
    series: [
      {
        label: 'Gross revenues',
        desc: 'Consolidated gross revenues before royalties, including the corporate segment’s small remainder.',
        values: segmentRevenue.map(
          s => +(s.oilSands + s.ep + s.rm + s.corporate).toFixed(3)
        ),
        format: billionFormat,
        total: true,
      },
      {
        label: 'Oil Sands',
        desc: 'Synthetic crude, diesel and bitumen sold to third parties from Oil Sands Base, Firebag, MacKay River, Fort Hills and Syncrude. Bitumen and crude sent to Suncor’s own refineries are eliminated, about CA$8B a year since FY22.',
        values: segmentRevenue.map(s => s.oilSands),
        format: billionFormat,
      },
      {
        label: 'Exploration and Production',
        desc: 'Offshore crude oil from Hibernia, Hebron, Terra Nova and White Rose off Newfoundland, plus the U.K. and Norway interests in earlier years, and Libya.',
        values: segmentRevenue.map(s => s.ep),
        format: billionFormat,
      },
      {
        label: 'Refining and Marketing',
        desc: 'Refined products from the Edmonton, Montreal, Sarnia and Commerce City refineries sold through Petro-Canada retail and wholesale, and third-party trading.',
        values: segmentRevenue.map(s => s.rm),
        format: billionFormat,
      },
      {
        label: 'Royalties',
        desc: 'Crown royalties paid to Alberta and to Newfoundland and Labrador, deducted from gross revenues on the income statement. They rise faster than revenue when prices rise, because Alberta’s oil sands royalty rates increase with the oil price and step up once a project has recovered its capital costs.',
        values: royalties,
        format: billionFormat,
      },
    ],
    chartNote:
      'From the segmented information note to the audited statements; FY17 is restated from the FY18 statements. Refining and Marketing carries most external revenue because most Oil Sands output is refined or sold through it first. Royalties rose from 2.8% of gross revenues in FY17 to 6.6% in FY25 and peaked at 7.6% in FY24. The U.K. portfolio was sold in 2023 and the sale of Terra Nova, White Rose and West White Rose agreed in October 2026 is expected to close in early 2027.',
  },
  {
    rank: 420,
    id: 'operations',
    title: 'Operations',
    kicker:
      'Production, cost per barrel and refining volumes from the annual MD&A, with the WTI price for context. FY26E values are midpoints of Suncor’s 2026 guidance.',
    kind: 'trends',
    panels: [
      {
        label: 'Upstream production (bbl/d)',
        desc: 'Total upstream production in thousands of barrels per day, working interest before royalties.\nHow it is calculated: as reported. FY26E is the midpoint of guidance of 840,000–870,000 bbls/d.\nWhat to watch for: part of the growth since FY23 came from the additional Fort Hills interest bought in 2023. E&P fell from 107,000 bbls/d in FY19 to 61,000 in FY25 after asset sales.',
        years: operatingYearsE,
        values: [
          ...operating.upstreamProduction,
          operating.upstreamProductionGuidance,
        ],
        format: { suffix: 'k', decimals: 0 },
        median10y: 743.2,
        guidanceCount: 1,
        yearNotes: {
          FY20: 'Production fell 11% as WTI averaged US$39.40 during the pandemic.',
          FY24: 'Fort Hills rose from 106,000 to 168,000 bbls/d after Suncor bought the remaining interest.',
          FY26E:
            'Midpoint of 2026 guidance (11 December 2025). The first half averaged 818,000 bbls/d because of a planned Firebag turnaround in the second quarter.',
        },
      },
      {
        label: 'Oil Sands operations cash cost',
        desc: 'Cash operating cost per barrel at Oil Sands Base, Firebag and MacKay River, in Canadian dollars.\nHow it is calculated: as reported, a non-GAAP measure that strips non-production costs and excess power revenue from operating, selling and general expenses. FY26E is the midpoint of guidance of CA$26–29.\nWhat to watch for: the lower this is, the lower the oil price Suncor can withstand. It fell from CA$29.95 in FY22 to CA$26.55 in FY25.',
        years: operatingYearsE,
        values: [
          ...operating.oilSandsCashCost,
          operating.oilSandsCashCostGuidance,
        ],
        format: { prefix: 'CA$', decimals: 2 },
        invertColor: true,
        median10y: 26.9,
        guidanceCount: 1,
      },
      {
        label: 'Fort Hills cash cost',
        desc: 'Cash operating cost per barrel at the Fort Hills mine, in Canadian dollars.\nHow it is calculated: as reported. Fort Hills began production in 2018. FY26E is the midpoint of guidance of CA$33–36.\nWhat to watch for: costs per barrel fall as volume rises, so the FY21 spike reflects low output of 50,700 bbls/d.',
        years: operatingYearsE.slice(1),
        values: [
          ...operating.fortHillsCashCost.slice(1),
          operating.fortHillsCashCostGuidance,
        ],
        format: { prefix: 'CA$', decimals: 2 },
        invertColor: true,
        median10y: 32.8,
        guidanceCount: 1,
      },
      {
        label: 'Syncrude cash cost',
        desc: 'Cash operating cost per barrel at Syncrude (Suncor share 58.74%), in Canadian dollars.\nHow it is calculated: as reported. FY26E is the midpoint of guidance of CA$34–37.\nWhat to watch for: cost per barrel has fallen by more than a quarter since FY18 as volumes rose from 165,700 bbls/d in FY20 to 207,100 in FY25.',
        years: operatingYearsE,
        values: [
          ...operating.syncrudeCashCost,
          operating.syncrudeCashCostGuidance,
        ],
        format: { prefix: 'CA$', decimals: 2 },
        invertColor: true,
        median10y: 36.65,
        guidanceCount: 1,
      },
      {
        label: 'Refinery crude throughput (bbl/d)',
        desc: 'Crude oil processed at Suncor’s four refineries, in thousands of barrels per day.\nHow it is calculated: as reported. FY26E is the midpoint of guidance of 460,000–475,000 bbls/d.\nWhat to watch for: integration lets Suncor earn the refining margin on its own crude, which cushions it when crude prices fall.',
        years: operatingYearsE,
        values: [
          ...operating.refineryThroughput,
          operating.refineryThroughputGuidance,
        ],
        format: { suffix: 'k', decimals: 0 },
        median10y: 433.2,
        guidanceCount: 1,
      },
      {
        label: 'Refinery utilization',
        desc: 'Crude processed as a share of nameplate crude capacity.\nHow it is calculated: as reported, on nameplate capacity of 466,000 bbls/d by FY25. Suncor raised nameplate capacity to 511,000 bbls/d from 2026, so 2026 guidance of 99–102% is on a larger base and is not shown.\nWhat to watch for: utilization above 100% means the refineries ran above nameplate capacity.',
        years: operatingYears,
        values: operating.refineryUtilization,
        format: { suffix: '%', decimals: 0 },
        deltaMode: 'add',
        median10y: 93,
      },
      {
        label: 'Royalties as % of gross revenues',
        desc: 'Crown royalties as a share of gross revenues.\nHow it is calculated: royalties ÷ gross revenues, from the income statement and MD&A.\nWhat to watch for: royalty rates rise with the oil price and once a project has paid out its capital, so this line takes a larger share of revenue at high prices.',
        years: operatingYears,
        values: [2.8, 2.7, 3.8, 1.0, 4.9, 7.3, 6.0, 7.6, 6.6],
        format: { suffix: '%', decimals: 1 },
        deltaMode: 'add',
        invertColor: true,
        median10y: 4.9,
      },
      {
        label: 'WTI oil price',
        desc: 'Average WTI crude price at Cushing, in US dollars per barrel, as reported in the MD&A.\nWhat to watch for: compare every other metric on this page with the price in the same year. Suncor’s 2026 guidance was built on US$62, close to the futures curve in December 2025, and the first half of 2026 averaged US$82.55.',
        years: operatingYears,
        values: operating.wti,
        format: { prefix: 'US$', decimals: 2 },
        median10y: 64.8,
      },
    ],
    chartNote:
      'Source: annual MD&A in the 40-F filings, 2026 corporate guidance (11 December 2025) and the Q2 2026 report. Production volumes are working interest before royalties, except Libya on an economic basis. Cash costs per barrel are non-GAAP measures defined by Suncor.',
  },
  {
    rank: 430,
    id: 'sensitivities',
    title: 'Commodity Sensitivities',
    kicker:
      'Suncor’s estimate of how a change in each price would change its 2026 adjusted funds from operations, holding everything else constant.',
    kind: 'table',
    firstColumn: 'Change',
    columns: ['AFFO impact', 'Per share'],
    rows: sensitivities.map(s => ({
      label: s.label,
      desc: s.desc,
      values: [
        `${s.affo < 0 ? '−' : ''}CA$${Math.abs(s.affo)}M`,
        `${s.affo < 0 ? '−' : ''}CA$${(Math.abs(s.affo) / 1000 / SHARES_OUTSTANDING).toFixed(2)}`,
      ],
    })),
    tableNote:
      'From the 2026 corporate guidance (11 December 2025). Per-share figures divide by the 1,169.6M shares outstanding at 30 July 2026. A US$20/bbl fall in WTI would cut AFFO by about CA$4.3B, or roughly CA$3.70 a share, before any change in refining cracks.',
  },
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker:
      'Everything filed with the SEC in the last twelve months, newest first. Suncor files its quarterly reports and news releases on Form 6-K.',
    kind: 'rows',
    entries: [
      {
        kind: '6-K',
        note: 'Third-quarter 2026 results to be released on 3 November',
        date: 'Oct 20 2026',
      },
      {
        kind: '6-K',
        note: 'Sale of Terra Nova, White Rose and West White Rose to Ithaca Energy for CA$1.2B; buybacks raised to CA$750M a month',
        date: 'Oct 5 2026',
      },
      {
        kind: '6-K',
        note: 'Peter Zebedee to succeed Rich Kruger as chief executive in April 2027',
        date: 'Aug 6 2026',
      },
      {
        kind: '6-K',
        note: 'Second-quarter 2026 report and results; buybacks raised to CA$500M a month',
        date: 'Aug 5 2026',
      },
      {
        kind: 'F-10',
        note: 'Shelf registration statement for future securities offerings',
        date: 'Jun 15 2026',
      },
      {
        kind: '6-K',
        note: 'First-quarter 2026 report and results',
        date: 'May 6 2026',
      },
      {
        kind: '6-K',
        note: '2026 Investor Day: US$38 WTI breakeven target by 2028; contingent resources report',
        date: 'Mar 31 2026',
      },
      {
        kind: '40-F',
        note: 'Annual report for 2025, with the annual information form, audited statements and MD&A',
        date: 'Feb 26 2026',
      },
      {
        kind: '6-K',
        note: 'Fourth-quarter and full-year 2025 results',
        date: 'Feb 4 2026',
      },
      {
        kind: '6-K',
        note: '2025 operating results against the 2024 Investor Day targets',
        date: 'Jan 6 2026',
      },
      {
        kind: '6-K',
        note: '2026 corporate guidance',
        date: 'Dec 11 2025',
      },
      {
        kind: '6-K',
        note: 'CA$1B medium term note offering',
        date: 'Nov 7 2025',
      },
      {
        kind: '6-K',
        note: 'Third-quarter 2025 report and results; quarterly dividend raised to CA$0.60',
        date: 'Nov 4 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.suncor.com/en-ca/investors',
    },
    {
      label: 'Financial Reports',
      href: 'https://www.suncor.com/en-ca/investors/financial-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000311337',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/SU.TO/',
    },
  ],
};

export function SuPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={suSections}
      figuresDate='31 December 2025'
      footer={footer}
    />
  );
}
