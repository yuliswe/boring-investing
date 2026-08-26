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
    <main
      className='ds'
      style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <header style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text variant='overline' style={{ color: 'var(--color-accent)' }}>
          {stock.sector}
        </Text>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 20,
          }}
        >
          {financials.metrics.map(metric => (
            <div
              key={metric.label}
              style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
            >
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
                  style={{
                    fontStyle: metric.changePct < 0 ? 'italic' : 'normal',
                  }}
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
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            margin: 0,
            paddingLeft: 20,
          }}
        >
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
