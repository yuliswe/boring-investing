import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { HdPage } from '@/companies/HD/HdPage';

const stock = getStock('HD')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <HdPage />;
}
