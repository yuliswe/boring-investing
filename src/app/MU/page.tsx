import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { MuPage } from '@/companies/MU/MuPage';

const stock = getStock('MU')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <MuPage />;
}
