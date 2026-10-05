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
  symbol: 'KO',
  name: 'The Coca-Cola Company',
  sector: 'Beverages',
  tags: ['Mega Cap', 'Dividend'],
  price: '$85.65',
  changePct: ((85.65 - 86.1) / 86.1) * 100,
  priceNote: 'close, 2 October',
  summary:
    'Beverage company that owns Coca-Cola, Sprite, Fanta, smartwater, Powerade, Minute Maid, fairlife, BodyArmor, and Costa, among many other brands. Coca-Cola mostly sells concentrate and syrups to independent bottling partners, which make, package, and distribute the finished drinks, and it owns a smaller set of bottlers and finished-goods businesses directly.',
};

const priceConfig: PriceConfig = {
  symbol: 'KO',
  defaultPrice: 85.65,
  currency: '$',
  referenceClose: 86.1,
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
      'Each line of the income statement as a share of revenue, using the categories Coca-Cola reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY17 taxes include the Tax Cuts and Jobs Act charge, which put income taxes at 15.5% of revenue and total expenses at 96.6%. FY24 operating expenses include $3.1B of fairlife contingent consideration remeasurement.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net income attributable to shareowners, covering operating expenses, non-operating items, income taxes, and the noncontrolling interests’ share of income.\nShown as a percentage of total revenue.',
        values: totalPct,
        format: pctFormat,
        total: true,
      },
      ...expenseLines.map((l, li) => ({
        label: l.label,
        desc: l.desc + '\nShown as a percentage of total revenue.',
        values: linePcts[li],
        format: pctFormat,
        ...(l.indent && { indent: l.indent }),
      })),
    ],
    chartNote:
      'Shares of revenue from the filed income statement. Operating expenses, non-operating items, income taxes, and noncontrolling interests sum to total expenses; indented lines break down the line above. Non-operating items have reduced expenses every year since FY19, mainly because equity income from bottlers is larger than net interest cost. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
  };
}

const billionFormat = { prefix: '$', suffix: 'B', decimals: 2 };

function buildCashFlowStatementSection(): SectionData {
  return {
    rank: 560,
    id: 'cashflow-statement',
    title: 'Cash Flow',
    kicker:
      'The three sections of the cash flow statement plus free cash flow, in billions. Net cash flow is the net change in cash, cash equivalents, and restricted cash for the year, including exchange rate effects.',
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
      'Two one-time payments cut operating cash flow to $6.8B in FY24 and $7.4B in FY25: the $6.0B deposit with the IRS in the 2007–2009 tax case, and $6.1B of the final fairlife milestone payment. Capital expenditures have stayed between $1.2B and $2.1B a year. FY26E operating cash flow, capital expenditures, and free cash flow are company guidance.',
  };
}

const segmentFormat = { prefix: '$', suffix: 'B', decimals: 2 };

const koSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Third-party net operating revenues by operating segment in billions. North America grew from $8.7B in FY17 to $19.6B in FY25, while Bottling Investments shrank from $11.2B to $5.7B as Coca-Cola sold company-owned bottlers.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of third-party segment revenues and Corporate, equal to net operating revenues on the income statement.',
        values: segments.segments.map(
          s =>
            +(
              s.emea +
              s.latinAmerica +
              s.northAmerica +
              s.asiaPacific +
              s.globalVentures +
              s.bottlingInvestments +
              s.corporate
            ).toFixed(2)
        ),
        format: segmentFormat,
        total: true,
      },
      {
        label: 'North America',
        desc: 'Concentrate sales to bottlers in the United States and Canada plus finished goods sold by Coca-Cola directly, including fairlife, BodyArmor, and fountain syrups. It jumped in FY18 because concentrate sold to North American bottlers, an intersegment sale ($1.95B in FY17) while Coca-Cola owned them, became a third-party sale once they were refranchised.',
        values: segments.segments.map(s => s.northAmerica),
        format: segmentFormat,
      },
      {
        label: 'Europe, Middle East & Africa',
        desc: 'Concentrate and finished goods across Europe, the Middle East, and Africa. From FY23 it includes Costa, innocent, and doğadan, which were reported in Global Ventures before.',
        values: segments.segments.map(s => s.emea),
        format: segmentFormat,
      },
      {
        label: 'Latin America',
        desc: 'Concentrate sales to bottlers in Mexico, Brazil, and the rest of Latin America. It earns the highest operating margin of any segment, 59.1% in FY25.',
        values: segments.segments.map(s => s.latinAmerica),
        format: segmentFormat,
      },
      {
        label: 'Asia Pacific',
        desc: 'Concentrate and finished goods across Asia and the Pacific.',
        values: segments.segments.map(s => s.asiaPacific),
        format: segmentFormat,
      },
      {
        label: 'Global Ventures',
        desc: 'Costa, innocent, doğadan, and fees from Monster distribution agreements, reported as a separate segment from FY19 (FY17–FY18 recast) until it was dissolved on 1 January 2025. Shown through FY22 only, because the FY25 10-K recasts FY23 onward into the geographic segments.',
        values: segments.segments.map(s => s.globalVentures),
        format: segmentFormat,
      },
      {
        label: 'Bottling Investments',
        desc: 'Company-owned bottlers, including those in India and Africa, which Coca-Cola aims to refranchise over time. Revenue falls as bottlers are sold, as with the North America territories (FY17), the Philippines, Bangladesh, and parts of India (FY24), and the pending sale of the Africa bottler.',
        values: segments.segments.map(s => s.bottlingInvestments),
        format: segmentFormat,
      },
      {
        label: 'Corporate',
        desc: 'Revenue recorded at Corporate rather than in an operating segment.',
        values: segments.segments.map(s => s.corporate),
        format: segmentFormat,
      },
    ],
    chartNote:
      'Third-party revenue excludes intersegment sales, so the segments sum to consolidated revenue. FY17–FY22 come from the FY19 and FY22 10-Ks as originally filed; FY23–FY25 come from the FY25 10-K, which moved Costa, innocent, and doğadan into EMEA and Monster fees and Costa ready-to-drink into the geographic segments. The FY22 to FY23 jump in EMEA is that reclassification, not organic growth.',
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
        note: 'Quarterly report, quarter ended 3 July',
        date: 'Jul 29 2026',
      },
      {
        kind: '8-K',
        note: 'Earnings release for second quarter 2026',
        date: 'Jul 28 2026',
      },
      {
        kind: '8-K',
        note: 'Ransomware incident at fairlife',
        date: 'Jul 16 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 3 April',
        date: 'Apr 30 2026',
      },
      {
        kind: '8-K',
        note: 'Earnings release for first quarter 2026',
        date: 'Apr 28 2026',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement for the 2026 annual meeting',
        date: 'Mar 16 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 20 2026',
      },
      {
        kind: '8-K',
        note: 'Earnings release for fourth quarter and full year 2025',
        date: 'Feb 10 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 26 September',
        date: 'Oct 23 2025',
      },
      {
        kind: '8-K',
        note: 'Earnings release for third quarter 2025',
        date: 'Oct 21 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://investors.coca-colacompany.com/',
    },
    {
      label: 'SEC Filings',
      href: 'https://investors.coca-colacompany.com/filings-reports/all-sec-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000021344',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/KO/',
    },
  ],
};

const EPS_EST = 3.29;
const FCF_PER_SHARE_EST = 2.88;

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
            FY26E: `Calculated from $${fmt} divided by estimated comparable EPS of $${EPS_EST}. Comparable EPS excludes items impacting comparability, so this ratio is not strictly comparable with the GAAP ratios before it.`,
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
            FY26E: `Calculated from $${fmt} divided by guided FCF per share of $${FCF_PER_SHARE_EST} (FCF $12.4B / 4.313B diluted shares in the first half of 2026).`,
          },
        };
      }
      return m;
    }),
  };
}

export function KoPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={koSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
