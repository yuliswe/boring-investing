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
  symbol: 'PG',
  name: 'The Procter & Gamble Company',
  sector: 'Consumer Staples',
  tags: ['Mega Cap', 'Dividend'],
  price: '$144.91',
  changePct: ((144.91 - 143.95) / 143.95) * 100,
  priceNote: 'close, 2 October',
  summary:
    'Maker of everyday household and personal care brands, including Tide, Pampers, Gillette, Crest, Pantene, and Charmin, sold through five segments in about 180 countries and territories. Walmart accounts for about 16% of net sales, and P&G has raised its dividend for 70 consecutive years.',
};

const priceConfig: PriceConfig = {
  symbol: 'PG',
  defaultPrice: 144.91,
  currency: '$',
  referenceClose: 143.95,
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
      'Each line of the income statement as a share of net sales, using the categories Procter & Gamble reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY19 operating expenses include the $8.3B Shave Care impairment, which put total expenses at 94% of net sales. FY24 includes a further $1.3B Gillette impairment. FY18 income taxes include a provisional $602M net charge from the US Tax Cuts and Jobs Act.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Net sales minus net earnings (including noncontrolling interests), covering operating expenses, non-operating items, and income taxes.\nShown as a percentage of net sales.',
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
      'Shares of net sales from the filed income statement. Operating expenses, non-operating items, and income taxes sum to total expenses; indented lines break down the line above. Cost of products sold rose from 49.7% of net sales in FY20 to 52.6% in FY22 as commodity and freight costs climbed, then fell back to 49.8% by FY26 after price increases. Non-operating items are small in every year. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
    guidanceCount: 1,
    series: cashFlowStatementLines.map(l => ({
      ...l,
      format: billionFormat,
      ...(l.label === 'Net cash flow' && { bold: true }),
    })),
    chartNote:
      'Dividends and buybacks together exceeded free cash flow in every year except FY24. FY20 net cash flow jumped to $11.9B because P&G sold $6.2B of investment securities and added $4.8B of net debt during the pandemic, and FY21 spent it down with $11.0B of buybacks. FY27E capital expenditures, dividends, buybacks, and free cash flow are derived from company guidance.',
  };
}

const segmentFormat = { prefix: '$', suffix: 'B', decimals: 2 };

const pgSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Net sales by reportable segment in billions. Fabric & Home Care grew from 32% of net sales in FY18 to 35% in FY26.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of segment net sales plus Corporate, equal to net sales on the income statement.',
        values: segments.segments.map(
          s =>
            +(
              s.beauty +
              s.grooming +
              s.healthCare +
              s.fabricHomeCare +
              s.babyFeminineFamilyCare +
              s.corporate
            ).toFixed(2)
        ),
        format: segmentFormat,
        total: true,
      },
      {
        label: 'Fabric & Home Care',
        desc: 'Fabric care (laundry detergents, additives, and fabric enhancers) and home care (air care, dish care, P&G Professional, and surface care), including Tide, Ariel, Downy, Gain, Dawn, Febreze, and Swiffer.',
        values: segments.segments.map(s => s.fabricHomeCare),
        format: segmentFormat,
      },
      {
        label: 'Baby, Feminine & Family Care',
        desc: 'Baby care (diapers and wipes), feminine care, adult incontinence, and family care (paper towels, tissues, and toilet paper), including Pampers, Always, Tampax, Bounty, and Charmin.',
        values: segments.segments.map(s => s.babyFeminineFamilyCare),
        format: segmentFormat,
      },
      {
        label: 'Beauty',
        desc: 'Hair care and skin and personal care, including Head & Shoulders, Pantene, Olay, SK-II, Old Spice, and Secret.',
        values: segments.segments.map(s => s.beauty),
        format: segmentFormat,
      },
      {
        label: 'Health Care',
        desc: 'Oral care and personal health care, including Crest, Oral-B, Vicks, and Metamucil. Includes the over-the-counter healthcare business acquired from Merck KGaA in FY19.',
        values: segments.segments.map(s => s.healthCare),
        format: segmentFormat,
      },
      {
        label: 'Grooming',
        desc: 'Razors, blades, shave care, and appliances, including Gillette, Venus, and Braun.',
        values: segments.segments.map(s => s.grooming),
        format: segmentFormat,
      },
      {
        label: 'Corporate',
        desc: 'Incidental businesses managed at the corporate level and reconciling items that are not allocated to a segment.',
        values: segments.segments.map(s => s.corporate),
        format: segmentFormat,
      },
    ],
    chartNote:
      'Segment net sales from the global segment results in the FY20, FY23, and FY26 10-Ks, which each cover three years. Fabric & Home Care added $8.9B of net sales between FY18 and FY26 and Health Care grew 59%, while Grooming grew only 6% over the same eight years and was the segment behind both Gillette impairments.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: 'DEF 14A',
        note: 'Proxy statement for the 2026 annual meeting',
        date: 'Aug 28 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2026',
        date: 'Aug 4 2026',
      },
      {
        kind: '8-K',
        note: 'Earnings release for fiscal 2026 and fiscal 2027 guidance',
        date: 'Jul 29 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 31 March',
        date: 'Apr 24 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 31 December',
        date: 'Jan 23 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 30 September',
        date: 'Oct 24 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.pginvestor.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://www.pginvestor.com/financial-reporting/annual-reports/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000080424',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/PG/',
    },
  ],
};

const EPS_EST = 6.82;
const FCF_PER_SHARE_EST = 5.97;

function buildDynamicFinancials(price: number) {
  const pe = +(price / EPS_EST).toFixed(1);
  const pfcf = +(price / FCF_PER_SHARE_EST).toFixed(1);
  const fmt = price.toFixed(2);
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
            FY27E: `Calculated from $${fmt} divided by the $${EPS_EST} midpoint of GAAP EPS guidance.`,
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
            FY27E: `Calculated from $${fmt} divided by FCF per share of $${FCF_PER_SHARE_EST} derived from company guidance (FCF $14.46B / 2.422B FY26 diluted shares).`,
          },
        };
      }
      return m;
    }),
  };
}

export function PgPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={pgSections}
      figuresDate='30 June'
      footer={footer}
    />
  );
}
