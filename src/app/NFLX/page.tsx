import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { NflxPage } from '@/companies/NFLX/NflxPage';

const stock = getStock('NFLX')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <NflxPage />;
}
