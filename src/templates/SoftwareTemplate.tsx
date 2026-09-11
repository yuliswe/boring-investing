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
  values: (number | null)[];
  format?: { prefix?: string; suffix?: string; decimals?: number };
  invertColor?: boolean;
  deltaMode?: 'pct' | 'add';
  median10y?: number;
};

export type SoftwareFinancials = {
  criticalMetrics?: TrendMetric[];
  keyMetrics?: TrendMetric[];
  revenue: { year: string; revenue: number; operatingIncome: number }[];
  expenses?: {
    year: string;
    costOfRevenue: number;
    sellingGeneralAndAdmin: number;
    researchAndDev: number;
    depreciationAndAmortization: number;
    otherOperating: number;
    nonOperating: number;
    taxes: number;
    dilutionAdjustment: number;
  }[];
  expensesDeducedLines?: string[];
  thesis: string[];
};

export type SoftwareTemplateProps = {
  navbar?: NavbarData;
  hero: HeroData;
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
  financials,
  baseSections = [],
  extraSections = [],
  figuresDate,
  footer,
  children,
}: SoftwareTemplateProps) {
  const years = financials.revenue.map(r => r.year);

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

  if (financials.criticalMetrics) {
    softwareSections.push({
      rank: 200,
      id: 'critical',
      title: 'Critical Metrics',
      kicker:
        'Valuation ratios that signal whether the market price is justified by earnings and cash flow.',
      kind: 'trends',
      panels: financials.criticalMetrics.map(m => ({
        label: m.label,
        years,
        values: m.values,
        format: m.format,
        invertColor: m.invertColor,
        deltaMode: m.deltaMode,
        median10y: m.median10y,
      })),
      chartNote:
        'Lower is cheaper on all three. 10Y median shown as dashed line.',
    });
  }

  if (financials.keyMetrics) {
    softwareSections.push({
      rank: 300,
      id: 'key',
      title: 'Key Metrics',
      kicker:
        'Profitability, returns, leverage and margins with ten-year trend and 10Y median.',
      kind: 'trends',
      panels: financials.keyMetrics.map(m => ({
        label: m.label,
        years,
        values: m.values,
        format: m.format,
        invertColor: m.invertColor,
        deltaMode: m.deltaMode,
        median10y: m.median10y,
      })),
      chartNote:
        'Source: filed annual statements. FY = fiscal year. Percentage deltas are additive (pp).',
    });
  }

  const expenses = financials.expenses?.map(e => ({
    ...e,
    revenue: financials.revenue.find(r => r.year === e.year)?.revenue ?? 0,
  }));

  return (
    <BaseTemplate
      navbar={navbar}
      hero={hero}
      sections={[...softwareSections, ...baseSections]}
      childSections={extraSections}
      expenses={expenses}
      deducedExpenseLines={financials.expensesDeducedLines}
      figuresDate={figuresDate}
      footer={footer}
    >
      {children}
    </BaseTemplate>
  );
}
