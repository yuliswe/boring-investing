import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { AmdPage } from '@/companies/AMD/AmdPage';

const stock = getStock('AMD')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <AmdPage />;
}
