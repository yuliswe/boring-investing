import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { SuPage } from '@/companies/SU/SuPage';

const stock = getStock('SU')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <SuPage />;
}
