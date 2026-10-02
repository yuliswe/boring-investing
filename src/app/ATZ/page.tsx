import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { AtzPage } from '@/companies/ATZ/AtzPage';

const stock = getStock('ATZ')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <AtzPage />;
}
