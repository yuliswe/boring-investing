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
    researchAndDev: number;
    salesAndMarketing: number;
  }[];
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
        'Profitability, returns, leverage and margins with five-year trend and 10Y median.',
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

  if (financials.expenses) {
    const expYears = financials.expenses.map(e => e.year);
    const totalOpEx = financials.expenses.map((e, i) => {
      const rev = financials.revenue[i]?.revenue;
      return rev
        ? +((1 - financials.revenue[i].operatingIncome / rev) * 100).toFixed(1)
        : 0;
    });
    const cogs = financials.expenses.map((e, i) => {
      const rev = financials.revenue[i]?.revenue;
      return rev ? +((e.costOfRevenue / rev) * 100).toFixed(1) : 0;
    });
    const rd = financials.expenses.map((e, i) => {
      const rev = financials.revenue[i]?.revenue;
      return rev ? +((e.researchAndDev / rev) * 100).toFixed(1) : 0;
    });
    const sm = financials.expenses.map((e, i) => {
      const rev = financials.revenue[i]?.revenue;
      return rev ? +((e.salesAndMarketing / rev) * 100).toFixed(1) : 0;
    });

    softwareSections.push({
      rank: 450,
      id: 'expenses',
      title: 'Expenses breakdown',
      kicker:
        'Each line of the income statement as a share of revenue. A falling line means the cost is being outgrown.',
      origin: 'Software',
      kind: 'multi',
      years: expYears,
      mode: 'share',
      invert: true,
      baseLabel: '0%',
      series: [
        {
          label: 'Total OpEx',
          values: totalOpEx,
          format: { suffix: '%', decimals: 1 },
          total: true,
        },
        {
          label: 'Cost of Revenue',
          values: cogs,
          format: { suffix: '%', decimals: 1 },
        },
        {
          label: 'Research & Dev.',
          values: rd,
          format: { suffix: '%', decimals: 1 },
        },
        {
          label: 'Sales & Marketing',
          values: sm,
          format: { suffix: '%', decimals: 1 },
        },
      ],
      chartNote:
        'Shares of revenue from the filed income statement. Deltas are additive (pp); lower is better on every line, so a fall shows green.',
    });
  }

  return (
    <BaseTemplate
      navbar={navbar}
      hero={hero}
      sections={[...softwareSections, ...baseSections]}
      childSections={extraSections}
      figuresDate={figuresDate}
      footer={footer}
    >
      {children}
    </BaseTemplate>
  );
}
