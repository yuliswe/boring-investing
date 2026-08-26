import { BarChart } from '@/charts';
import { Card } from '@/design-system';
import segments from '@/app/MSFT/data/segments.json';

export function SegmentBreakdown() {
  return (
    <Card title='Revenue by segment' hint='Fiscal year, in billions of USD'>
      <BarChart
        data={segments.segments}
        xKey='year'
        stacked
        series={[
          {
            dataKey: 'productivity',
            label: 'Productivity & Business Processes',
            color: '#2563eb',
          },
          {
            dataKey: 'intelligentCloud',
            label: 'Intelligent Cloud',
            color: '#16a34a',
          },
          {
            dataKey: 'morePersonalComputing',
            label: 'More Personal Computing',
            color: '#f59e0b',
          },
        ]}
      />
    </Card>
  );
}
