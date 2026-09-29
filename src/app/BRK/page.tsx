import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { BrkPage } from '@/companies/BRK/BrkPage';

const stock = getStock('BRK')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <BrkPage />;
}
