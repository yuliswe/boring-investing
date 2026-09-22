import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { ToiPage } from '@/companies/TOI/ToiPage';

const stock = getStock('TOI')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <ToiPage />;
}
