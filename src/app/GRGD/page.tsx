import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { GrgdPage } from '@/companies/GRGD/GrgdPage';

const stock = getStock('GRGD')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <GrgdPage />;
}
