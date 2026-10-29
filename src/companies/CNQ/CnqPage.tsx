'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import { usePriceHero, type PriceConfig } from '@/lib/usePriceHero';
import financials, {
  expenseYears,
  revenueByYear,
  netIncomeByYear,
  expenseLines,
  cashFlowStatementYears,
  cashFlowStatementLines,
} from './data/financials';
import segments, { productionYears, totalProduction } from './data/segments';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'CNQ',
  name: 'Canadian Natural Resources Limited',
  sector: 'Oil & Gas Production',
  tags: ['Large Cap', 'Dividend', 'TSX'],
  price: 'CA$76.78',
  changePct: 1.09,
  priceNote: 'TSX close, 28 October',
  summary:
    'Calgary-based oil and natural gas producer averaging 1.57 million barrels of oil equivalent a day in 2025 from oil sands mines and upgraders, thermal in situ bitumen, conventional heavy and light oil and natural gas in Western Canada, with small offshore operations in the UK North Sea and Côte d’Ivoire.',
};

const priceConfig: PriceConfig = {
  symbol: 'CNQ',
  defaultPrice: 76.78,
  currency: 'CA$',
  referenceClose: 75.95,
};

const EPS_EST = 6.55;
const FCF_PER_SHARE_EST = 6.34;

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
            FY26E: `Calculated from CA$${price.toFixed(2)} divided by consensus adjusted EPS of CA$${EPS_EST} from 12 analysts.`,
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
            FY26E: `Calculated from CA$${price.toFixed(2)} divided by an estimated CA$${FCF_PER_SHARE_EST} of free cash flow per share, which is consensus free cash flow of CA$13.31B over FY25 diluted shares of 2,098M.`,
          },
        };
      }
      return m;
    }),
  };
}

const pctFormat = { suffix: '%', decimals: 1 };

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
      'Every line of the income statement from revenue to net earnings, expressed as a share of revenue (product sales net of royalties), using the categories Canadian Natural reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Total expenses exceeded revenue in FY20, the year of the net loss. In FY25 the CA$5.07B gain on the AOSP asset swap turned non-operating expenses into a large negative line, so total expenses fell even though depletion jumped.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net earnings, covering operating expenses, non-operating items and income taxes.\nShown as a percentage of revenue.',
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
      'Shares of revenue from the audited statements of earnings. Revenue swings with the oil price while most costs do not, so the operating ratio falls in strong-price years (FY22) and rises in weak ones (FY20). Depletion jumped in FY25 with CA$1.78B of non-cash charges for North Sea decommissioning and Espoir. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
  };
}

const billionFormat = { prefix: 'CA$', suffix: 'B', decimals: 2 };

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions of Canadian dollars. Net cash flow is the net change in cash for the year.',
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
      'Investing outflows spike in the three acquisition years: the AOSP mines in FY17, Devon Canada in FY19 and Chevron’s Alberta assets in FY24. The FY17 and FY24 deals were funded mostly with new debt, which was paid down over the following years. Financing outflows peaked in FY22 with CA$10.5B of dividends and buybacks. FY26E capital expenditures and acquisitions are management guidance and free cash flow is the stockanalysis.com consensus.',
  };
}

const cnqSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Segmented revenue (product sales less royalties) in billions of Canadian dollars. North America covers conventional oil, natural gas and thermal in situ bitumen; Oil Sands Mining and Upgrading is the Horizon and AOSP mines and their upgraders.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.map(s => s.year),
    series: [
      {
        label: 'Revenue',
        desc: 'Consolidated revenue, product sales less royalties.',
        values: revenueByYear,
        format: billionFormat,
        total: true,
      },
      {
        label: 'North America E&P',
        desc: 'Exploration and production in Western Canada: light and medium oil, heavy oil (including Pelican Lake), thermal in situ bitumen and natural gas.',
        values: segments.map(s => s.northAmerica),
        format: billionFormat,
      },
      {
        label: 'Oil Sands Mining and Upgrading',
        desc: 'Horizon and the AOSP mines, which produce synthetic crude oil from upgraded bitumen. AOSP was bought in May 2017, increased with Chevron’s 20% interest in December 2024, and the mines became 100% owned in the November 2025 asset swap.',
        values: segments.map(s => s.oilSands),
        format: billionFormat,
      },
      {
        label: 'International E&P',
        desc: 'The UK North Sea and Offshore Africa (Côte d’Ivoire). Both are in decline: North Sea fields are being decommissioned and the Espoir licence will not be extended.',
        values: segments.map(s => +(s.northSea + s.offshoreAfrica).toFixed(3)),
        format: billionFormat,
      },
      {
        label: 'Midstream, refining and other',
        desc: 'Pipelines and the 50% equity interest in the North West Redwater refinery partnership, plus inter-segment eliminations and other revenue.',
        values: segments.map(s => +(s.midstream + s.other).toFixed(3)),
        format: billionFormat,
      },
    ],
    chartNote:
      'North America and Oil Sands Mining together make up 88–94% of revenue in every year, and both swing with the oil price. Oil sands revenue grew 2.5 times from FY17, when AOSP was owned for seven months, to FY25 as the Chevron acquisition and asset swap added mining volumes. International revenue has fallen from CA$1.4B in FY17 to CA$0.5B in FY25.',
  },
  {
    rank: 410,
    id: 'production',
    title: 'Production',
    kicker:
      'Average daily production before royalties, in thousands of barrels of oil equivalent per day (MBOE/d), with natural gas converted at six thousand cubic feet per barrel.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: 1,
    years: productionYears,
    series: [
      {
        label: 'Total production',
        desc: 'Crude oil, synthetic crude oil, bitumen, NGLs and natural gas before royalties, as reported in the annual MD&A. FY26E is the midpoint of guidance of 1,637–1,682 MBOE/d (6 August 2026).',
        values: totalProduction.map(v => +(v / 1000).toFixed(1)),
        format: { suffix: ' MBOE/d', decimals: 0 },
        total: true,
      },
    ],
    chartNote:
      'Production grew from 962 MBOE/d in FY17 to 1,571 MBOE/d in FY25, a 6.3% compound rate. The largest step-ups, in FY18 and FY25, are the first full years of the AOSP and Chevron acquisitions, and FY19–FY20 include the Devon assets bought in June 2019.',
  },
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker:
      'Everything filed with the SEC in the last twelve months, newest first. Canadian Natural files its quarterly reports on Form 6-K and its annual report on Form 40-F.',
    kind: 'rows',
    entries: [
      {
        kind: '6-K',
        note: 'Second-quarter 2026 results; 2026 guidance raised for Peace River acquisitions',
        date: 'Aug 6 2026',
      },
      {
        kind: '6-K',
        note: 'Quarterly dividend of CA$0.625',
        date: 'Aug 6 2026',
      },
      {
        kind: '6-K',
        note: 'Amended dividend record date',
        date: 'May 12 2026',
      },
      {
        kind: '6-K',
        note: 'Voting results of the annual and special meeting',
        date: 'May 11 2026',
      },
      {
        kind: '6-K',
        note: 'First-quarter 2026 results',
        date: 'May 7 2026',
      },
      {
        kind: '40-F',
        note: 'Annual report for 2025',
        date: 'Mar 26 2026',
      },
      {
        kind: '6-K',
        note: 'Normal Course Issuer Bid renewed',
        date: 'Mar 16 2026',
      },
      {
        kind: '6-K',
        note: 'Fourth-quarter and 2025 results; dividend raised 6.4% to CA$0.625',
        date: 'Mar 6 2026',
      },
      {
        kind: '6-K',
        note: '2026 budget',
        date: 'Dec 16 2025',
      },
      {
        kind: '6-K',
        note: 'Pricing of CA$1.5B of medium-term notes',
        date: 'Dec 5 2025',
      },
      {
        kind: '6-K',
        note: 'Third-quarter 2025 results',
        date: 'Nov 6 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.cnrl.com/investors/',
    },
    {
      label: 'Financial Reports',
      href: 'https://www.cnrl.com/investors/financial-reporting/',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001017413',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/CNQ.TO/',
    },
  ],
};

export function CnqPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={cnqSections}
      figuresDate='31 December 2025'
      footer={footer}
    />
  );
}
