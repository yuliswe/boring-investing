import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { TriPage } from '@/companies/TRI/TriPage';

const stock = getStock('TRI')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <TriPage />;
}
