import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { UberPage } from '@/companies/UBER/UberPage';

const stock = getStock('UBER')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <UberPage />;
}
