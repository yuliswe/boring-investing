import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { PepPage } from '@/companies/PEP/PepPage';

const stock = getStock('PEP')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <PepPage />;
}
