'use client';

import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export type ChartSeries = {
  dataKey: string;
  label: string;
  color?: string;
};

type LineChartProps<T extends object> = {
  data: readonly T[];
  xKey: keyof T & string;
  series: ChartSeries[];
  height?: number;
};

export function LineChart<T extends object>({
  data,
  xKey,
  series,
  height = 280,
}: LineChartProps<T>) {
  return (
    <ResponsiveContainer width='100%' height={height}>
      <RechartsLineChart
        data={data as readonly T[] as unknown[]}
        margin={{ top: 8, right: 16, bottom: 8, left: 8 }}
      >
        <CartesianGrid strokeDasharray='3 3' stroke='#e2e8f0' />
        <XAxis dataKey={xKey} stroke='#64748b' fontSize={12} />
        <YAxis stroke='#64748b' fontSize={12} width={48} />
        <Tooltip />
        {series.map(item => (
          <Line
            key={item.dataKey}
            type='monotone'
            dataKey={item.dataKey}
            name={item.label}
            stroke={item.color ?? '#2563eb'}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
