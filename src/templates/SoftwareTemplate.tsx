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
  keyMetrics: TrendMetric[];
  revenue: { year: string; revenue: number; operatingIncome: number | null }[];
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

  const softwareSections: SectionData[] = [
    {
      rank: 100,
      id: 'method',
      title: 'Method',
      kicker:
        'How this company was read, and what the sections below will and will not tell you.',
      kind: 'prose',
      paragraphs: [
        'Every page here is built the same way. We read the last ten annual filings before the most recent quarter, take each figure from the audited statements rather than the press release, and set it beside its own decade — so a good year cannot pass for a good business.',
        'Where a number only means something next to somebody else’s — an earnings multiple, a margin, a return on equity — we show the three closest listed competitors and the sector median on their latest reported figures, and say how far apart the period ends are.',
        'Nothing is scored, ranked or rated. What follows is the record, the balance sheet, the management and the filings, in that order, with the judgement left to you. Prices are delayed fifteen minutes and marked with a dagger.',
      ],
    },
  ];

  softwareSections.push({
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
      'Lower is cheaper on all three. 10Y median shown as dashed line.',
    guidanceDesc: estimateNote,
  });

  softwareSections.push({
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
    guidanceDesc: estimateNote,
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
