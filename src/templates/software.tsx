import type { ReactNode } from 'react';
import { LineChart } from '@/charts';
import { Card, Stat, Text } from '@/design-system';
import type { Stock } from '@/lib/stocks';

export type SoftwareMetric = {
  label: string;
  value: string;
  changePct?: number;
};

export type SoftwareRevenuePoint = {
  year: string;
  revenue: number;
  operatingIncome: number;
};

export type SoftwareFinancials = {
  metrics: SoftwareMetric[];
  revenue: SoftwareRevenuePoint[];
  thesis: string[];
};

type SoftwareTemplateProps = {
  stock: Stock;
  financials: SoftwareFinancials;
  children?: ReactNode;
};

export function SoftwareTemplate({
  stock,
  financials,
  children,
}: SoftwareTemplateProps) {
  return (
    <main className='mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10'>
      <header className='flex flex-col gap-2'>
        <Text variant='caption'>{stock.sector}</Text>
        <div className='flex items-baseline gap-3'>
          <Text variant='display'>{stock.symbol}</Text>
          <Text variant='subheading' as='span' className='text-ink-muted'>
            {stock.name}
          </Text>
        </div>
        <Text variant='body' className='text-ink-muted'>
          {stock.summary}
        </Text>
      </header>

      <Card>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-4'>
          {financials.metrics.map(metric => (
            <Stat
              key={metric.label}
              label={metric.label}
              value={metric.value}
              changePct={metric.changePct}
            />
          ))}
        </div>
      </Card>

      <Card
        title='Revenue and operating income'
        hint='Fiscal year, in billions of USD'
      >
        <LineChart
          data={financials.revenue}
          xKey='year'
          series={[
            { dataKey: 'revenue', label: 'Revenue', color: '#2563eb' },
            {
              dataKey: 'operatingIncome',
              label: 'Operating income',
              color: '#16a34a',
            },
          ]}
        />
      </Card>

      {children}

      <Card title='Investment thesis'>
        <ul className='flex list-disc flex-col gap-2 pl-5'>
          {financials.thesis.map((point, index) => (
            <li key={index}>
              <Text variant='body' as='span'>
                {point}
              </Text>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  );
}
