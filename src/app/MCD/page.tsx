import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { McdPage } from '@/companies/MCD/McdPage';

const stock = getStock('MCD')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <McdPage />;
}
