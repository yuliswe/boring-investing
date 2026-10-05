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
  symbol: 'JNJ',
  name: 'Johnson & Johnson',
  sector: 'Pharmaceuticals & Medical Devices',
  tags: ['Mega Cap', 'Dividend'],
  price: '$256.03',
  changePct: ((256.03 - 258.66) / 258.66) * 100,
  priceNote: 'close, 2 October',
  summary:
    'Healthcare company with two segments: Innovative Medicine, which sells prescription drugs in oncology, immunology, neuroscience, and other areas, and MedTech, which sells cardiovascular, orthopaedic, surgical, and vision devices. Johnson & Johnson separated its consumer brands as Kenvue in 2023 and plans to separate its Orthopaedics business next.',
};

const priceConfig: PriceConfig = {
  symbol: 'JNJ',
  defaultPrice: 256.03,
  currency: '$',
  referenceClose: 258.66,
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
      'Each line of the income statement as a share of revenue, using the categories Johnson & Johnson reports in its filings.',
    kind: 'multi',
    years: expenseYears,
    mode: 'share',
    invert: true,
    baseLabel: '0%',
    warning:
      'FY17–FY20 include the Consumer Health business; FY21 onward is restated to continuing operations after the Kenvue separation. FY17 taxes include a provisional Tax Cuts and Jobs Act charge of about $13.0B, which put total expenses at 98% of revenue.',
    series: [
      {
        label: 'Total expenses',
        desc: 'Revenue minus net earnings from continuing operations, covering operating expenses, non-operating items, and income taxes.\nShown as a percentage of total revenue.',
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
      'Shares of revenue from the filed income statement. Operating expenses, non-operating items, and income taxes sum to total expenses; indented lines break down the line above. Talc litigation accruals sit in other (income) expense, so the non-operating line rose to 7.2% of revenue in FY23 and turned negative in FY25 when about $7.0B of the reserve was reversed. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
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
      'Operating cash flow has stayed between $21B and $25B every year, and capital expenditures between $3.3B and $4.8B, so free cash flow is steady even as earnings swing with litigation. The cash flow statement is consolidated and includes Consumer Health until August 2023. Investing outflows spike in acquisition years. FY26E free cash flow is the consensus analyst estimate.',
  };
}

const segmentFormat = { prefix: '$', suffix: 'B', decimals: 2 };

const jnjSections: SectionData[] = [
  buildExpensesSection(),
  buildCashFlowStatementSection(),
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue Streams',
    kicker:
      'Sales by segment of business in billions. Innovative Medicine grew from 47% of sales in FY17 to 64% in FY25.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of segment sales, equal to sales to customers on the income statement.',
        values: segments.segments.map(
          s => +(s.innovativeMedicine + s.medTech + s.consumerHealth).toFixed(2)
        ),
        format: segmentFormat,
        total: true,
      },
      {
        label: 'Innovative Medicine',
        desc: 'Prescription medicines in oncology (Darzalex, Erleada, Carvykti), immunology (Stelara, Tremfya), neuroscience (Invega, Spravato, Caplyta), pulmonary hypertension, infectious diseases, and cardiovascular and metabolism. Reported as the Pharmaceutical segment before FY23.',
        values: segments.segments.map(s => s.innovativeMedicine),
        format: segmentFormat,
      },
      {
        label: 'MedTech',
        desc: 'Medical devices in Cardiovascular (electrophysiology, Abiomed, Shockwave), Orthopaedics (DePuy Synthes), Surgery, and Vision. Reported as the Medical Devices segment before FY23.',
        values: segments.segments.map(s => s.medTech),
        format: segmentFormat,
      },
      {
        label: 'Consumer Health',
        desc: 'Over-the-counter medicines and personal care brands, separated as Kenvue in 2023. Shown through FY20 only, because FY21 onward is restated to exclude it.',
        values: segments.segments.map(s => s.consumerHealth),
        format: segmentFormat,
      },
    ],
    chartNote:
      'FY17–FY20 sales come from the 10-Ks as originally filed; FY21–FY25 come from the FY23–FY25 10-Ks, which restate results to exclude Consumer Health. Stelara sales fell 41% in FY25 because of biosimilar competition and the Medicare Part D redesign, while oncology sales grew 22% to $25.4B. MedTech fell 11.6% in FY20 as medical procedures were deferred during COVID-19.',
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
        note: 'Quarterly report, quarter ended 28 June',
        date: 'Jul 23 2026',
      },
      {
        kind: '8-K',
        note: 'Earnings release for second quarter 2026',
        date: 'Jul 15 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 29 March',
        date: 'Apr 22 2026',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement for the 2026 annual meeting',
        date: 'Mar 11 2026',
      },
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 11 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, quarter ended 28 September',
        date: 'Oct 22 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.investor.jnj.com/',
    },
    {
      label: 'SEC Filings',
      href: 'https://www.investor.jnj.com/financials/sec-filings/default.aspx',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000200406',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/JNJ/',
    },
  ],
};

const EPS_EST = 11.68;
const FCF_PER_SHARE_EST = 10.29;

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
            FY26E: `Calculated from $${fmt} divided by adjusted EPS guidance of $${EPS_EST}. Adjusted EPS excludes intangible amortization and special items, so this ratio reads lower than the GAAP ratios before it.`,
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
            FY26E: `Calculated from $${fmt} divided by consensus FCF per share of $${FCF_PER_SHARE_EST} (FCF $25.15B / 2.444B diluted shares in the first half of 2026).`,
          },
        };
      }
      return m;
    }),
  };
}

export function JnjPage() {
  const { price, hero: h, addon } = usePriceHero(hero, priceConfig);
  const dynamicFinancials = buildDynamicFinancials(price);
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={h}
      heroAddon={addon}
      financials={dynamicFinancials}
      extraSections={jnjSections}
      figuresDate='Sunday closest to 31 December'
      footer={footer}
    />
  );
}
