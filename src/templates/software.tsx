import type { ReactNode } from 'react';
import { LineChart } from '@/charts';
import { Card, Text } from '@/design-system';
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
    <main className='ds mx-auto flex max-w-[51.25rem] flex-col gap-8 px-5 py-10'>
      <header className='flex flex-col gap-2'>
        <Text variant='overline' className='text-ds-accent'>
          {stock.sector}
        </Text>
        <div className='flex items-baseline gap-3'>
          <Text variant='display'>{stock.symbol}</Text>
          <Text variant='h4' as='span' muted>
            {stock.name}
          </Text>
        </div>
        <Text variant='body' muted>
          {stock.summary}
        </Text>
      </header>

      <Card>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(8.75rem,1fr))] gap-5'>
          {financials.metrics.map(metric => (
            <div key={metric.label} className='flex flex-col gap-1'>
              <Text variant='caption' muted>
                {metric.label}
              </Text>
              <Text variant='h4' tabular>
                {metric.value}
              </Text>
              {typeof metric.changePct === 'number' ? (
                <Text
                  variant='small'
                  tabular
                  className={metric.changePct < 0 ? 'italic' : ''}
                >
                  {metric.changePct >= 0 ? '↑' : '↓'}{' '}
                  {metric.changePct.toFixed(1)}%
                </Text>
              ) : null}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <Text variant='h4' as='h3'>
          Revenue and operating income
        </Text>
        <Text variant='caption' muted>
          Fiscal year, in billions of USD
        </Text>
        <LineChart
          data={financials.revenue}
          xKey='year'
          series={[
            { dataKey: 'revenue', label: 'Revenue', color: '#b68235' },
            {
              dataKey: 'operatingIncome',
              label: 'Operating income',
              color: '#605d5d',
            },
          ]}
        />
      </Card>

      {children}

      <Card>
        <Text variant='h4' as='h3'>
          Investment thesis
        </Text>
        <ul className='flex flex-col gap-2 m-0 pl-5'>
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
