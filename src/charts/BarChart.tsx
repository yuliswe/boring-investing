'use client';

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ChartSeries } from '@/charts/LineChart';

type BarChartProps<T extends object> = {
  data: readonly T[];
  xKey: keyof T & string;
  series: ChartSeries[];
  height?: number;
  stacked?: boolean;
};

export function BarChart<T extends object>({
  data,
  xKey,
  series,
  height = 280,
  stacked = false,
}: BarChartProps<T>) {
  return (
    <ResponsiveContainer width='100%' height={height}>
      <RechartsBarChart
        data={data as readonly T[] as unknown[]}
        margin={{ top: 8, right: 16, bottom: 8, left: 8 }}
      >
        <CartesianGrid strokeDasharray='3 3' stroke='#e2e8f0' />
        <XAxis dataKey={xKey} stroke='#64748b' fontSize={12} />
        <YAxis stroke='#64748b' fontSize={12} width={48} />
        <Tooltip />
        {series.map(item => (
          <Bar
            key={item.dataKey}
            dataKey={item.dataKey}
            name={item.label}
            fill={item.color ?? '#2563eb'}
            radius={[4, 4, 0, 0]}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
