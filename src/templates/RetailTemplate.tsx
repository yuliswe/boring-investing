'use client';

import type { ReactNode } from 'react';
import { BaseTemplate } from '@/templates/base';
import type {
  NavbarData,
  HeroData,
  FooterData,
  SectionData,
  ReverseDcfData,
} from '@/templates/base';

type TrendMetric = {
  label: string;
  desc?: string;
  values: (number | null)[];
  format?: { prefix?: string; suffix?: string; decimals?: number };
  invertColor?: boolean;
  deltaMode?: 'pct' | 'add';
  median10y?: number;
  guidanceCount?: number;
  yearNotes?: Record<string, string>;
};

type MetricGroup = {
  metrics: TrendMetric[];
  chartNote?: string;
};

type MarginSeries = {
  label: string;
  desc?: string;
  values: (number | null)[];
};

export type RetailMetricGroups = {
  valuation?: MetricGroup;
  demand?: MetricGroup;
  pricing?: MetricGroup;
  stores?: MetricGroup;
  margins?: { series: MarginSeries[]; chartNote?: string };
  returns?: MetricGroup;
};

const METRIC_GROUP_SECTIONS = [
  {
    key: 'valuation',
    rank: 200,
    title: 'Valuation',
    kicker:
      'What the market price assumes, measured against earnings and against free cash flow after lease payments.',
    chartNote:
      'Lower is cheaper on all ratios. 10Y median shown as dashed line.',
  },
  {
    key: 'demand',
    rank: 250,
    title: 'Demand and Brand Health',
    kicker:
      'Whether customers still want the product, and where the growth is coming from.',
  },
  {
    key: 'pricing',
    rank: 420,
    title: 'Pricing Power and Inventory Discipline',
    kicker:
      'Whether the brand sells at full price, and whether inventory is growing faster than demand, which is how markdowns start.',
  },
  {
    key: 'stores',
    rank: 430,
    title: 'Store Growth and Economics',
    kicker:
      'How fast the store base is growing, how productive each store is, and how much capital the expansion consumes.',
  },
  {
    key: 'returns',
    rank: 530,
    title: 'Returns and Capital Allocation',
    kicker:
      'What the business earns on the capital invested in it, how much of its earnings arrive as cash, and how much of that reaches each share.',
  },
] as const;

export type RetailFinancials = {
  reverseDcf?: ReverseDcfData;
  currency?: string;
  guidanceYears?: string[];
  criticalMetrics?: TrendMetric[];
  operationalMetrics?: TrendMetric[];
  keyMetrics?: TrendMetric[];
  metricGroups?: RetailMetricGroups;
  revenue: {
    year: string;
    revenue: number;
    operatingIncome: number | null;
    netIncome?: number | null;
  }[];
  revenueSection?: {
    kicker?: string;
    chartNote?: string;
    revenueDesc?: string;
    operatingIncomeDesc?: string;
    netIncomeDesc?: string;
  };
  expenses?: {
    year: string;
    costOfRevenue: number | null;
    sellingGeneralAndAdmin: number | null;
    researchAndDev: number | null;
    depreciationAndAmortization: number | null;
    otherOperating: number | null;
    nonOperating: number | null;
    taxes: number | null;
    dilutionAdjustment: number | null;
  }[];
  expensesDeducedLines?: string[];
  cashFlow?: {
    year: string;
    cashTaxesPaid: number | null;
    workingCapitalChange: number | null;
    capitalExpenditures: number | null;
  }[];
  thesis: string[];
};

export type RetailTemplateProps = {
  navbar?: NavbarData;
  hero: HeroData;
  heroAddon?: ReactNode;
  financials: RetailFinancials;
  baseSections?: SectionData[];
  extraSections?: SectionData[];
  figuresDate?: string;
  footer?: FooterData;
  children?: ReactNode;
};

export function RetailTemplate({
  navbar,
  hero,
  heroAddon,
  financials,
  baseSections = [],
  extraSections = [],
  figuresDate,
  footer,
  children,
}: RetailTemplateProps) {
  const guidanceYears = financials.guidanceYears ?? [];
  const guidanceSet = new Set(guidanceYears);
  const years = financials.revenue
    .map(r => r.year)
    .filter(y => !guidanceSet.has(y));
  const allYears = [...years, ...guidanceYears];
  const expensesGuidanceCount = financials.expenses
    ? financials.expenses.filter(e => guidanceSet.has(e.year)).length
    : 0;

  const retailSections: SectionData[] = [];

  if (financials.criticalMetrics) {
    retailSections.push({
      rank: 200,
      id: 'critical',
      title: 'Critical Metrics',
      kicker:
        'Valuation ratios that signal whether the market price is justified by earnings and cash flow.',
      kind: 'trends',
      panels: financials.criticalMetrics.map(m => ({
        label: m.label,
        desc: m.desc,
        years: m.guidanceCount ? allYears : years,
        values: m.values,
        format: m.format,
        invertColor: m.invertColor,
        deltaMode: m.deltaMode,
        median10y: m.median10y,
        guidanceCount: m.guidanceCount,
        yearNotes: m.yearNotes,
      })),
      chartNote:
        'Lower is cheaper on all ratios. 10Y median shown as dashed line.',
    });
  }

  if (financials.operationalMetrics) {
    retailSections.push({
      rank: 250,
      id: 'operational',
      title: 'Operational Metrics',
      kicker:
        'Store-level economics and inventory efficiency that drive a retailer’s unit economics and same-store leverage.',
      kind: 'trends',
      panels: financials.operationalMetrics.map(m => ({
        label: m.label,
        desc: m.desc,
        years: m.guidanceCount ? allYears : years,
        values: m.values,
        format: m.format,
        invertColor: m.invertColor,
        deltaMode: m.deltaMode,
        median10y: m.median10y,
        guidanceCount: m.guidanceCount,
        yearNotes: m.yearNotes,
      })),
      chartNote:
        'Source: filed annual statements and investor presentations. FY = fiscal year.',
    });
  }

  if (financials.keyMetrics) {
    retailSections.push({
      rank: 300,
      id: 'key',
      title: 'Key Metrics',
      kicker:
        'Profitability, returns, leverage and margins with ten-year trend and 10Y median.',
      kind: 'trends',
      panels: financials.keyMetrics.map(m => ({
        label: m.label,
        desc: m.desc,
        years: m.guidanceCount ? allYears : years,
        values: m.values,
        format: m.format,
        invertColor: m.invertColor,
        deltaMode: m.deltaMode,
        median10y: m.median10y,
        guidanceCount: m.guidanceCount,
        yearNotes: m.yearNotes,
      })),
      chartNote:
        'Source: filed annual statements. FY = fiscal year. Percentage deltas are additive (pp).',
    });
  }

  const groups = financials.metricGroups ?? {};
  for (const def of METRIC_GROUP_SECTIONS) {
    const group = groups[def.key];
    if (!group) continue;
    retailSections.push({
      rank: def.rank,
      id: def.key,
      title: def.title,
      kicker: def.kicker,
      kind: 'trends',
      panels: group.metrics.map(m => ({
        ...m,
        years: m.guidanceCount ? allYears : years,
      })),
      chartNote:
        group.chartNote ??
        ('chartNote' in def
          ? def.chartNote
          : 'Source: filed annual statements. FY = fiscal year. 10Y median shown as dashed line.'),
    });
  }

  if (groups.margins) {
    retailSections.push({
      rank: 450,
      id: 'margins',
      title: 'Margins',
      kicker:
        'Operating, net and free-cash-flow margins as a share of revenue. The gaps between the lines show how much of each revenue dollar survives as profit and how much as cash.',
      kind: 'multi',
      mode: 'share',
      years: allYears,
      guidanceCount: guidanceYears.length,
      baseLabel: '0%',
      series: groups.margins.series.map(s => ({
        ...s,
        format: { suffix: '%', decimals: 1 },
      })),
      chartNote: groups.margins.chartNote,
    });
  }

  const revSection = financials.revenueSection;
  const currency = financials.currency ?? '$';
  const revSeries: {
    label: string;
    desc: string;
    values: (number | null)[];
    format: { prefix: string; suffix: string; decimals: number };
    total?: boolean;
  }[] = [
    {
      label: 'Total revenue',
      desc:
        revSection?.revenueDesc ?? 'Consolidated revenue from all operations.',
      values: financials.revenue.map(r => r.revenue),
      format: { prefix: currency, suffix: 'B', decimals: 2 },
      total: true,
    },
    {
      label: 'Operating income',
      desc:
        revSection?.operatingIncomeDesc ??
        'Income from operations before interest and taxes.',
      values: financials.revenue.map(r => r.operatingIncome),
      format: { prefix: currency, suffix: 'B', decimals: 2 },
    },
  ];
  if (financials.revenue.some(r => r.netIncome != null)) {
    revSeries.push({
      label: 'Net income',
      desc: revSection?.netIncomeDesc ?? 'GAAP net income.',
      values: financials.revenue.map(r => r.netIncome ?? null),
      format: { prefix: currency, suffix: 'B', decimals: 2 },
    });
  }
  retailSections.push({
    rank: 350,
    id: 'revenue-total',
    title: 'Revenue & Operating Income',
    kicker:
      revSection?.kicker ??
      'Total revenue and operating income in billions with year-on-year growth rates.',
    kind: 'multi',
    mode: 'absolute',
    guidanceCount: guidanceYears.length,
    years: allYears,
    series: revSeries,
    chartNote: revSection?.chartNote,
  });

  const expenses = financials.expenses?.map(e => ({
    ...e,
    revenue: financials.revenue.find(r => r.year === e.year)?.revenue ?? 0,
  }));

  return (
    <BaseTemplate
      navbar={navbar}
      hero={hero}
      heroAddon={heroAddon}
      sections={[...retailSections, ...baseSections]}
      childSections={extraSections}
      expenses={expenses}
      deducedExpenseLines={financials.expensesDeducedLines}
      expensesGuidanceCount={expensesGuidanceCount}
      cashFlow={financials.cashFlow}
      reverseDcf={financials.reverseDcf}
      figuresDate={figuresDate}
      footer={footer}
    >
      {children}
    </BaseTemplate>
  );
}
