'use client';

import type { ReactNode } from 'react';
import { BaseTemplate } from '@/templates/base';
import type {
  NavbarData,
  HeroData,
  FooterData,
  SectionData,
} from '@/templates/base';

export type SoftwareFinancials = {
  metrics: { label: string; value: string; changePct?: number }[];
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
  const revenues = financials.revenue.map(r => r.revenue);
  const opIncomes = financials.revenue.map(r => r.operatingIncome);
  const opMargins = revenues.map((rev, i) => (opIncomes[i] / rev) * 100);

  const softwareSections: SectionData[] = [
    {
      rank: 100,
      id: 'thesis',
      title: 'Investment Thesis',
      kicker:
        'The case for owning this business, drawn from the filed record rather than the stock price.',
      kind: 'prose',
      paragraphs: financials.thesis,
    },
    {
      rank: 200,
      id: 'key-metrics',
      title: 'Key Metrics',
      kicker:
        'Snapshot of fundamental metrics for the most recent fiscal year.',
      kind: 'metrics',
      metrics: financials.metrics.map(m => ({
        label: m.label,
        value: m.value,
        changePct: m.changePct,
      })),
    },
    {
      rank: 300,
      id: 'revenue',
      title: 'Revenue & Profitability',
      kicker:
        'Total revenue, operating income, and margin trend over the trailing fiscal years.',
      origin: 'Software',
      kind: 'trends',
      panels: [
        {
          label: 'Revenue ($B)',
          years,
          values: revenues,
          format: { prefix: '$', suffix: 'B', decimals: 0 },
        },
        {
          label: 'Operating Income ($B)',
          years,
          values: opIncomes,
          format: { prefix: '$', suffix: 'B', decimals: 0 },
        },
        {
          label: 'Operating Margin',
          years,
          values: opMargins,
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
        },
      ],
      chartNote: 'Source: 10-K filings.',
    },
  ];

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
      rank: 350,
      id: 'expenses',
      title: 'Expenses Breakdown',
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
