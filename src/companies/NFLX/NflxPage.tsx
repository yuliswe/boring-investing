'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  cashFlowStatementYears,
  cashFlowStatementLines,
  reverseDcfInputs,
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
  symbol: 'NFLX',
  name: 'Netflix, Inc.',
  sector: 'Entertainment',
  tags: ['Large Cap'],
  price: '$97.00',
  changePct: 1.35,
  priceNote: 'close, 31 December',
  summary:
    'Dominant global streaming entertainment platform with more than 300 million paid members across 190 countries. Netflix earns nearly all of its revenue from monthly subscriptions, supplemented by an ad-supported tier introduced in late 2022.',
};

const priceConfig: PriceConfig = {
  symbol: 'NFLX',
  defaultPrice: 97.0,
  currency: '$',
  referenceClose: 95.7079,
};

const membershipYears = segments.segments.map(s => s.year);
const memberships = [117.6, 139.3, 167.1, 203.7, 221.8, 231.7, 260.3, 301.7];
const arm = [9.22, 10.24, 10.96, 11.24, 11.63, 11.62, 11.42, 11.57];

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
      'Operating cash flow was deeply negative from FY16 through FY19 because cash spent on content exceeded content amortization, requiring large debt issuance (positive financing). The reversal in FY20 marked the transition to self-funding. FY23–FY25 financing outflows reflect aggressive share repurchases funded by the now-substantial free cash flow.',
  };
}

const nflxSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by geographic region in billions, with year-on-year growth rates.',
    kind: 'multi',
    mode: 'absolute',
    years: [...segments.segments.map(s => s.year), 'FY25', 'FY26E'],
    guidanceCount: 1,
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all four geographic regions. Through FY20 the regional sum falls slightly short of reported total revenue because DVD-by-mail revenue was a separate segment.',
        values: [
          ...segments.segments.map(s => s.ucan + s.emea + s.latam + s.apac),
          45.18,
          51.2,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'US & Canada',
        desc: 'Revenue from members in the United States and Canada, the most mature and highest-ARM region.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.ucan), 19.7, 21.5],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'EMEA',
        desc: 'Revenue from members in Europe, the Middle East, and Africa.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.emea), 14.5, 17.0],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Latin America',
        desc: 'Revenue from members in Central and South America and the Caribbean.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.latam), 5.4, 6.0],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Asia-Pacific',
        desc: 'Revenue from members in Japan, South Korea, India, Australia, and the rest of Asia. Fastest-growing region by percentage.\nShown as a percentage of total revenue.',
        values: [...segments.segments.map(s => s.apac), 5.6, 6.7],
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'FY17–FY20 regional sums fall slightly below reported total revenue because DVD-by-mail was a separate segment (discontinued FY23). FY25 regional split is estimated; FY26E is management guidance midpoint.',
  },
  {
    rank: 450,
    id: 'membership',
    title: 'Paid Memberships',
    kicker:
      'Global paid streaming memberships at year-end, alongside the blended average monthly revenue per member derived by dividing total revenue by average membership. Netflix stopped reporting membership counts after Q4 2024.',
    kind: 'trends',
    panels: [
      {
        label: 'Global paid members',
        desc: 'Total paid streaming memberships at the end of Q4, as reported in the quarterly earnings letter. Netflix announced in October 2024 that it would stop disclosing membership counts starting in Q1 2025.',
        years: membershipYears,
        values: memberships,
        format: { suffix: 'M', decimals: 1 },
      },
      {
        label: 'Blended ARM',
        desc: 'Total annual revenue divided by average paid memberships divided by twelve. This is a rough global average that blends higher-priced mature markets with lower-priced growth markets and the ad-supported tier.',
        years: membershipYears,
        values: arm,
        format: { prefix: '$', decimals: 2 },
      },
    ],
    chartNote:
      'Membership sourced from quarterly earnings letters, not SEC filings. ARM is a computed global average and does not match any single plan price.',
  },
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
        date: 'Jul 17 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 31 March',
        date: 'Apr 17 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Jan 23 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 September',
        date: 'Oct 22 2025',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'Apr 17 2025',
      },
    ],
  },
];

const {
  discountRate,
  terminalGrowth,
  explicitYears,
  sharesOutstanding,
  netDebt,
} = reverseDcfInputs;

function dcfEnterpriseValue(firstYearFcf: number, growth: number): number {
  let pv = 0;
  let fcf = firstYearFcf;
  for (let t = 1; t <= explicitYears; t++) {
    if (t > 1) fcf *= 1 + growth;
    pv += fcf / (1 + discountRate) ** t;
  }
  const terminal =
    (fcf * (1 + terminalGrowth)) / (discountRate - terminalGrowth);
  return pv + terminal / (1 + discountRate) ** explicitYears;
}

function impliedGrowth(firstYearFcf: number, enterpriseValue: number): number {
  let lo = -0.5;
  let hi = 2;
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2;
    if (dcfEnterpriseValue(firstYearFcf, mid) > enterpriseValue) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

function buildReverseDcfSections(price: number): SectionData[] {
  const pct = (v: number) => `${(v * 100).toFixed(1)}%`;
  const fcf = cashFlowStatementLines.find(l => l.label === 'Free cash flow')!;
  const fcfAt = (year: string) =>
    fcf.values[cashFlowStatementYears.indexOf(year)]!;
  const actual = fcfAt('FY25');
  const forward = fcfAt('FY26E');
  const enterpriseValue = price * sharesOutstanding + netDebt;
  const growth = impliedGrowth(forward, enterpriseValue);
  const pathYears = [
    'FY25',
    ...Array.from({ length: explicitYears }, (_, t) => `FY${26 + t}E`),
  ];
  const path = [
    actual,
    ...Array.from(
      { length: explicitYears },
      (_, t) => +(forward * (1 + growth) ** t).toFixed(2)
    ),
  ];
  const lastYear = pathYears.at(-1)!;
  const assumptions = `Discount rate ${pct(discountRate)}, terminal growth ${pct(terminalGrowth)} after ${lastYear}, ${sharesOutstanding}B shares (${reverseDcfInputs.sharesSource}), and $${netDebt}B of net debt (${reverseDcfInputs.netDebtSource}).`;
  const perShare = (g: number) =>
    `$${((dcfEnterpriseValue(forward, g) - netDebt) / sharesOutstanding).toFixed(0)}`;
  return [
    {
      rank: 700,
      id: 'reverse-dcf',
      title: `Reverse DCF at ${discountRate * 100}%`,
      kicker: `The free cash flow growth that today’s $${price.toFixed(2)} share price requires at a ${pct(discountRate)} discount rate: ${pct(growth)} a year. The path starts from management’s FY26E free cash flow guidance and grows at the implied rate for nine more years.`,
      kind: 'multi',
      years: pathYears,
      mode: 'absolute',
      guidanceCount: explicitYears,
      yearNotes: {
        FY25: `Actual FY25 free cash flow of $${actual.toFixed(2)}B.`,
        FY26E: `Management guidance of about $${forward.toFixed(1)}B of FY26 free cash flow, reaffirmed in the Q2 2026 letter.`,
        [lastYear]: `The ${lastYear} free cash flow that the current price implies: $${path.at(-1)!.toFixed(0)}B.`,
      },
      series: [
        {
          label: 'Free cash flow',
          desc: `Grows at ${pct(growth)} a year after FY26E, the rate at which the discounted cash flows equal today’s enterprise value of $${enterpriseValue.toFixed(0)}B.`,
          values: path,
          format: { prefix: '$', suffix: 'B', decimals: 0 },
          bold: true,
        },
      ],
      chartNote: `${assumptions} The implied rate recalculates when the price is adjusted.`,
    },
    {
      rank: 710,
      id: 'reverse-dcf-values',
      title: `Value per Share at ${discountRate * 100}%`,
      kicker: `What one Netflix share is worth at a ${pct(discountRate)} discount rate for a range of free cash flow growth rates, compared with the current price of $${price.toFixed(2)}.`,
      kind: 'table',
      firstColumn: 'FCF growth, FY27–FY35',
      columns: ['Value per share'],
      rows: [
        ...reverseDcfInputs.scenarioGrowthRates.map(g => ({
          label: `${(g * 100).toFixed(0)}% a year`,
          values: [perShare(g)],
        })),
        {
          label: `Growth implied by $${price.toFixed(2)}`,
          desc: 'The growth rate at which the value per share equals the current price.',
          values: [pct(growth)],
        },
      ],
      tableNote: assumptions,
    },
  ];
}

const EPS_EST = 3.59;
const FCF_PER_SHARE_EST = 3.02;
const PRIOR_EPS = 2.53;

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
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus diluted EPS of $${EPS_EST}.`,
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
            FY26E: `Calculated from $${price.toFixed(2)} divided by consensus free cash flow per share of $${FCF_PER_SHARE_EST}.`,
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
            FY26E: `Calculated from the forward P/E of ${pe} divided by the FY25-to-FY26 EPS growth rate of ${epsGrowth.toFixed(1)}%.`,
          },
        };
      }
      return m;
    }),
  };
}

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.netflix.net/',
    },
    {
      label: 'Annual Reports',
      href: 'https://ir.netflix.net/ir/sec-filings/annual-reports/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065280',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/NFLX/',
    },
  ],
};

export function NflxPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={[...nflxSections, ...buildReverseDcfSections(price)]}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
