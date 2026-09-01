'use client';

import type { ReactNode } from 'react';
import { BaseTemplate, trend, resetColorIndex } from '@/templates/base';
import type { Navbar, Hero, Footer, SectionData } from '@/templates/base';

export type SoftwareFinancials = {
  metrics: { label: string; value: string; changePct?: number }[];
  revenue: { year: string; revenue: number; operatingIncome: number }[];
  thesis: string[];
};

export type SoftwareTemplateProps = {
  navbar?: Navbar;
  hero: Hero;
  financials: SoftwareFinancials;
  baseSections?: SectionData[];
  extraSections?: SectionData[];
  figuresDate?: string;
  footer?: Footer;
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
  resetColorIndex();

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
        note:
          m.changePct != null
            ? (m.changePct >= 0 ? '↑' : '↓') +
              ' ' +
              Math.abs(m.changePct).toFixed(1) +
              '%'
            : undefined,
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
        trend('Revenue ($B)', years, revenues, v =>
          v != null ? '$' + v.toFixed(0) + 'B' : 'n/a'
        ),
        trend('Operating Income ($B)', years, opIncomes, v =>
          v != null ? '$' + v.toFixed(0) + 'B' : 'n/a'
        ),
        trend(
          'Operating Margin',
          years,
          opMargins,
          v => (v != null ? v.toFixed(1) + '%' : 'n/a'),
          undefined,
          false,
          'add'
        ),
      ],
      chartNote: 'Source: 10-K filings.',
    },
  ];

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
