import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { AsmlPage } from '@/companies/ASML/AsmlPage';

const stock = getStock('ASML')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <AsmlPage />;
}
