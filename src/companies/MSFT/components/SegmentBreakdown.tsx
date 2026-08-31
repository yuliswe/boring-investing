import { BarChart } from '@/charts';
import { Card, Text } from '@/design-system';
import segments from '@/companies/MSFT/data/segments.json';

export function SegmentBreakdown() {
  return (
    <Card>
      <Text variant='h4' as='h3'>
        Revenue by segment
      </Text>
      <Text variant='caption' muted>
        Fiscal year, in billions of USD
      </Text>
      <BarChart
        data={segments.segments}
        xKey='year'
        stacked
        series={[
          {
            dataKey: 'productivity',
            label: 'Productivity & Business Processes',
            color: '#b68235',
          },
          {
            dataKey: 'intelligentCloud',
            label: 'Intelligent Cloud',
            color: '#7d5411',
          },
          {
            dataKey: 'morePersonalComputing',
            label: 'More Personal Computing',
            color: '#bab6b6',
          },
        ]}
      />
    </Card>
  );
}
