import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { SoftwareTemplate } from '@/templates/software';
import type { SoftwareFinancials } from '@/templates/software';
import { SegmentBreakdown } from '@/companies/MSFT/components/SegmentBreakdown';
import financials from '@/companies/MSFT/data/financials.json';

const stock = getStock('MSFT')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function MicrosoftPage() {
  return (
    <SoftwareTemplate
      stock={stock}
      financials={financials as SoftwareFinancials}
    >
      <SegmentBreakdown />
    </SoftwareTemplate>
  );
}
