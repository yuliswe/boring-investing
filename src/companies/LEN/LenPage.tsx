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
  cycle,
  peers,
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
  symbol: 'LEN',
  name: 'Lennar Corporation',
  sector: 'Homebuilding',
  tags: ['Large Cap'],
  price: '$79.81',
  changePct: -2.8,
  priceNote: 'close, 2 October',
  summary:
    'US homebuilder that delivered 82,583 single-family homes in fiscal 2025, with mortgage, title and insurance businesses that serve its buyers and smaller multifamily and investment segments. Lennar has Class A (LEN) and Class B (LEN.B) shares; per-share figures here count both classes.',
};

const priceConfig: PriceConfig = {
  symbol: 'LEN',
  defaultPrice: 79.81,
  currency: '$',
  referenceClose: 82.11,
};

const TANGIBLE_BOOK_PER_SHARE = 75.35;

function buildDynamicFinancials(price: number) {
  const ptbv = +(price / TANGIBLE_BOOK_PER_SHARE).toFixed(2);
  return {
    ...financials,
    criticalMetrics: financials.criticalMetrics.map(m => {
      if (m.label !== 'P/TBV ratio') return m;
      const values = [...m.values];
      values[values.length - 1] = ptbv;
      return {
        ...m,
        values,
        yearNotes: {
          ...m.yearNotes,
          FY26E: `Calculated from $${price.toFixed(2)} divided by tangible book value of $${TANGIBLE_BOOK_PER_SHARE} a share at 31 August 2026.`,
        },
      };
    }),
  };
}

const pctFormat = { suffix: '%', decimals: 1 };
const billionFormat = { prefix: '$', suffix: 'B', decimals: 2 };
const multipleFormat = { suffix: 'x', decimals: 2 };

function toShareOfRevenue(values: (number | null)[]): (number | null)[] {
  return values.map((v, i) =>
    v !== null && revenueByYear[i]
      ? +((v / revenueByYear[i]) * 100).toFixed(1)
      : null
  );
}

function buildPeersSection(currentPtbv: number): SectionData {
  const row = (name: keyof typeof peers.cycleRoe, value: number) => ({
    name,
    value,
    ...(name === 'LEN' && { self: true }),
  });
  const symbols = ['LEN', 'DHI', 'PHM', 'NVR'] as const;
  return {
    rank: 250,
    id: 'peers',
    title: 'Against Peers',
    kicker:
      'Lennar beside D.R. Horton, PulteGroup and NVR on the two metrics that matter for a builder, measured now and across the full cycle.',
    kind: 'peers',
    panels: [
      {
        label: 'P/TBV today',
        desc: 'Closing price on 2 October 2026 divided by tangible book value per share at each company’s latest quarter-end (31 August 2026 for Lennar, 30 June 2026 for the others). The Lennar bar follows the adjusted price.',
        hint: 'lower is cheaper',
        rows: symbols.map(s =>
          row(s, s === 'LEN' ? currentPtbv : peers.currentPtbv[s])
        ),
        format: multipleFormat,
      },
      {
        label: 'P/TBV today vs own median',
        desc: 'Today’s P/TBV divided by the company’s median fiscal year-end P/TBV from FY06 to FY25. Below 1.0 means the stock is cheaper than its own history.',
        hint: 'lower is cheaper',
        rows: symbols.map(s =>
          row(
            s,
            +(
              (s === 'LEN' ? currentPtbv : peers.currentPtbv[s]) /
              peers.medianPtbv[s]
            ).toFixed(2)
          )
        ),
        format: multipleFormat,
      },
      {
        label: 'Full-cycle ROE',
        desc: 'Average return on equity over fiscal years FY06 to FY25, which includes the housing bust of FY07 to FY11.',
        hint: 'higher is better',
        rows: symbols.map(s => row(s, peers.cycleRoe[s])),
        format: pctFormat,
      },
      {
        label: 'Trailing-twelve-month ROE',
        desc: 'Net income for the last four reported quarters divided by the average of equity at the latest quarter-end and a year earlier.',
        hint: 'higher is better',
        rows: symbols.map(s => row(s, peers.ttmRoe[s])),
        format: pctFormat,
      },
    ],
    chartNote:
      'Median FY06–FY25 P/TBV is 1.55x for Lennar, 1.64x for D.R. Horton, 1.71x for PulteGroup and 4.87x for NVR. NVR controls most of its lots through purchase options rather than owning land, so its book value is small relative to its earnings and both its ROE and its P/TBV run several times higher than the land-owning builders. Fiscal years end in November for Lennar, September for D.R. Horton and December for PulteGroup and NVR. Tangible book deducts goodwill and other intangible assets, including NVR’s reorganization value.',
  };
}

function buildCyclePtbvSection(): SectionData {
  return {
    rank: 260,
    id: 'cycle-ptbv',
    title: 'P/TBV Through the Cycle',
    kicker:
      'Fiscal year-end price-to-tangible-book from FY05, before the housing bust, to FY25, for Lennar and the two land-owning peers.',
    kind: 'multi',
    mode: 'absolute',
    years: cycle.years,
    series: [
      {
        label: 'Lennar',
        desc: 'LEN Class A fiscal year-end close divided by tangible book value per share. Prices before FY17 are as traded, consistent with share counts that predate the November 2017 Class B stock dividend.',
        values: cycle.ptbv.LEN,
        format: multipleFormat,
        bold: true,
        invert: true,
      },
      {
        label: 'D.R. Horton',
        desc: 'DHI close on 30 September divided by tangible book value per share.',
        values: cycle.ptbv.DHI,
        format: multipleFormat,
        invert: true,
      },
      {
        label: 'PulteGroup',
        desc: 'PHM close on 31 December divided by tangible book value per share. The 2009 Centex merger raised its share count from 258M to 381M.',
        values: cycle.ptbv.PHM,
        format: multipleFormat,
        invert: true,
      },
    ],
    chartNote:
      'All three bottomed between 0.4x and 0.75x tangible book in FY07–FY08 and peaked between 2.2x and 3.4x. Lennar’s range was 0.44x (FY08) to 2.16x (FY12), with a median of 1.55x; it is 1.06x at today’s price. NVR is left off the chart because its multiple ran from 1.91x (FY08) to 8.32x (FY17), which would flatten the other lines.',
  };
}

function buildCycleRoeSection(): SectionData {
  return {
    rank: 270,
    id: 'cycle-roe',
    title: 'ROE Through the Cycle',
    kicker:
      'Return on average equity from FY05 to FY25. A builder’s multiple of book is only justified by what it earns on that book across the whole cycle, not in its best or worst year.',
    kind: 'multi',
    mode: 'share',
    years: cycle.years,
    series: [
      {
        label: 'Lennar',
        desc: 'Net earnings attributable to Lennar divided by average stockholders’ equity. FY12 includes a $491.5M reversal of the deferred tax valuation allowance.',
        values: cycle.roe.LEN,
        format: pctFormat,
        bold: true,
      },
      {
        label: 'D.R. Horton',
        desc: 'Net income attributable to D.R. Horton divided by average equity. FY12 includes a tax valuation allowance reversal.',
        values: cycle.roe.DHI,
        format: pctFormat,
      },
      {
        label: 'PulteGroup',
        desc: 'Net income divided by average equity. FY13 is 76.6% because of a $2.6B net income year driven by a deferred tax valuation allowance reversal.',
        values: cycle.roe.PHM,
        format: pctFormat,
      },
    ],
    chartNote:
      'Averaged over FY06–FY25, ROE was 7.0% for Lennar, 10.6% for D.R. Horton, 8.3% for PulteGroup and 31.1% for NVR. The medians are higher (13.4%, 14.4%, 11.9% and 33.2%) because the bust years of FY07–FY11 cost Lennar 41%, 34% and 17% of equity and PulteGroup about 40% a year for four years. Lennar’s FY26 consensus implies about 5.4%, the lowest outside the bust.',
  };
}

function buildSegmentsSection(): SectionData {
  const seg = {
    homebuilding: [
      11.189, 19.078, 20.793, 20.981, 25.545, 31.951, 32.661, 33.906, 32.267,
    ],
    financialServices: [
      0.892, 0.955, 0.825, 0.89, 0.899, 0.81, 0.977, 1.109, 1.198,
    ],
    multifamily: [
      0.395, 0.421, 0.605, 0.576, 0.665, 0.866, 0.573, 0.412, 0.681,
    ],
    other: [0.171, 0.118, 0.037, 0.041, 0.021, 0.044, 0.022, 0.014, 0.041],
  };
  return {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Revenue by reporting segment in billions. Homebuilding has been between 88% and 96% of the total in every year.',
    kind: 'multi',
    mode: 'absolute',
    years: expenseYears,
    series: [
      {
        label: 'Total revenues',
        desc: 'Sum of all four segments.',
        values: revenueByYear,
        format: billionFormat,
        total: true,
      },
      {
        label: 'Homebuilding',
        desc: 'Sales of homes and land, plus other homebuilding revenue.',
        values: seg.homebuilding,
        format: billionFormat,
      },
      {
        label: 'Financial Services',
        desc: 'Mortgage origination and servicing, title insurance and closing services, mostly for Lennar homebuyers.',
        values: seg.financialServices,
        format: billionFormat,
      },
      {
        label: 'Multifamily',
        desc: 'Revenue from developing, building and selling rental apartment communities and from management fees.',
        values: seg.multifamily,
        format: billionFormat,
      },
      {
        label: 'Lennar Other',
        desc: 'The remaining Rialto assets and strategic investments. FY17 and FY18 are recast to include the former Rialto segment.',
        values: seg.other,
        format: billionFormat,
      },
    ],
    chartNote:
      'FY17 and FY18 follow the recast presentation in the FY2019 10-K, which folded the Rialto segment into Lennar Other after Lennar sold the Rialto investment and asset management platform in FY18.',
  };
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
      'Every line of the income statement from total revenues to net earnings attributable to Lennar, as a share of total revenues, using the categories Lennar reports.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'Lennar reports costs by segment rather than by function, and does not report operating income. The Homebuilding breakdown comes from the segment note; FY17’s breakdown is from the FY2018 10-K and totals $9.75B against the recast $9.74B.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Total revenues minus net earnings attributable to Lennar.\nShown as a percentage of total revenues.',
        values: toShareOfRevenue(totalRaw),
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map(l => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of total revenues.',
        values: toShareOfRevenue(l.values),
        format: pctFormat,
        ...('indent' in l && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Costs of homes sold rose from 68.4% of revenues in FY21 and FY22 to 77.3% in FY25 while the average sales price fell from $480K in FY22 to $391K. Indented lines break down the totals above them. Lower is better on every line, so a fall shows green.',
  };
}

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions. Net cash flow is the net change in cash, cash equivalents and restricted cash.',
    kind: 'multi',
    years: cashFlowStatementYears,
    mode: 'absolute',
    series: cashFlowStatementLines.map(l => ({
      ...l,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      'Land and homes under construction are inventory, so a builder’s operating cash flow moves inversely with land spending rather than with earnings. Capital expenditures are below $0.2B a year, so free cash flow tracks operating cash flow. Financing outflows from FY18 onward are mostly debt repayment, share repurchases and dividends.',
  };
}

const filingsSection: SectionData = {
  rank: 600,
  id: 'filings',
  title: 'Filings',
  kicker: 'Everything filed in the last twelve months, newest first.',
  kind: 'rows',
  entries: [
    {
      kind: '10-Q',
      note: 'Quarterly report, quarter to 31 August',
      date: 'Oct 2 2026',
    },
    {
      kind: '10-Q',
      note: 'Quarterly report, quarter to 31 May',
      date: 'Jun 29 2026',
    },
    {
      kind: '10-Q',
      note: 'Quarterly report, quarter to 28 February',
      date: 'Apr 9 2026',
    },
    {
      kind: '10-K',
      note: 'Annual report for fiscal year 2025',
      date: 'Jan 28 2026',
    },
    {
      kind: '10-Q',
      note: 'Quarterly report, quarter to 31 August',
      date: 'Oct 3 2025',
    },
  ],
};

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investors.lennar.com/',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000920760',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/LEN/',
    },
  ],
};

export function LenPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const currentPtbv = +(price / TANGIBLE_BOOK_PER_SHARE).toFixed(2);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={buildDynamicFinancials(price)}
      extraSections={[
        buildPeersSection(currentPtbv),
        buildCyclePtbvSection(),
        buildCycleRoeSection(),
        buildSegmentsSection(),
        buildExpensesSection(),
        buildCashFlowStatementSection(),
        filingsSection,
      ]}
      figuresDate='30 November'
      footer={footer}
    />
  );
}
