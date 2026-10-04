'use client';

import type { ReactNode } from 'react';
import { BaseTemplate } from '@/templates/base';
import type {
  NavbarData,
  HeroData,
  FooterData,
  SectionData,
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

export type SegmentData<T extends { year: string }> = {
  segments: T[];
};

export type SoftwareFinancials = {
  guidanceYears?: string[];
  estimateNote?: string;
  criticalMetrics: TrendMetric[];
  criticalSection?: {
    title?: string;
    kicker?: string;
    chartNote?: string;
  };
  keyMetrics: TrendMetric[];
  keySection?: {
    kicker?: string;
    chartNote?: string;
  };
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
  expenseLineDescriptions?: Record<string, string>;
  expensesWarning?: string;
  cashFlow?: {
    year: string;
    cashTaxesPaid: number | null;
    workingCapitalChange: number | null;
    capitalExpenditures: number | null;
  }[];
  thesis: string[];
};

export type SoftwareTemplateProps = {
  navbar?: NavbarData;
  hero: HeroData;
  heroAddon?: ReactNode;
  financials: SoftwareFinancials;
  baseSections?: SectionData[];
  extraSections?: SectionData[];
  figuresDate?: string;
  footer?: FooterData;
  children?: ReactNode;
};

export function SoftwareTemplate({
  navbar,
  hero,
  heroAddon,
  financials,
  baseSections = [],
  extraSections = [],
  figuresDate,
  footer,
  children,
}: SoftwareTemplateProps) {
  const guidanceYears = financials.guidanceYears ?? [];
  const guidanceSet = new Set(guidanceYears);
  const estimateNote = financials.estimateNote;
  const years = financials.revenue
    .map(r => r.year)
    .filter(y => !guidanceSet.has(y));
  const allYears = [...years, ...guidanceYears];
  const expensesGuidanceCount = financials.expenses
    ? financials.expenses.filter(e => guidanceSet.has(e.year)).length
    : 0;

  const softwareSections: SectionData[] = [];

  softwareSections.push({
    rank: 200,
    id: 'critical',
    title: financials.criticalSection?.title ?? 'Critical Metrics',
    kicker:
      financials.criticalSection?.kicker ??
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
      financials.criticalSection?.chartNote ??
      'Lower is cheaper on all three. 10Y median shown as dashed line.',
    guidanceDesc: estimateNote,
  });

  softwareSections.push({
    rank: 300,
    id: 'key',
    title: 'Key Metrics',
    kicker:
      financials.keySection?.kicker ??
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
      financials.keySection?.chartNote ??
      'Source: filed annual statements. FY = fiscal year. Percentage deltas are additive (pp).',
    guidanceDesc: estimateNote,
  });

  const revSection = financials.revenueSection;
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
      format: { prefix: '$', suffix: 'B', decimals: 2 },
      total: true,
    },
    {
      label: 'Operating income',
      desc:
        revSection?.operatingIncomeDesc ??
        'Income from operations before interest and taxes.',
      values: financials.revenue.map(r => r.operatingIncome),
      format: { prefix: '$', suffix: 'B', decimals: 2 },
    },
  ];
  if (financials.revenue.some(r => r.netIncome != null)) {
    revSeries.push({
      label: 'Net income',
      desc: revSection?.netIncomeDesc ?? 'GAAP net income.',
      values: financials.revenue.map(r => r.netIncome ?? null),
      format: { prefix: '$', suffix: 'B', decimals: 2 },
    });
  }
  softwareSections.push({
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
      sections={[...softwareSections, ...baseSections]}
      childSections={extraSections}
      expenses={expenses}
      deducedExpenseLines={financials.expensesDeducedLines}
      expenseLineDescriptions={financials.expenseLineDescriptions}
      expensesWarning={financials.expensesWarning}
      expensesGuidanceCount={expensesGuidanceCount}
      guidanceDesc={estimateNote}
      cashFlow={financials.cashFlow}
      figuresDate={figuresDate}
      footer={footer}
    >
      {children}
    </BaseTemplate>
  );
}
