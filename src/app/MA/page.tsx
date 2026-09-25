import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { MaPage } from '@/companies/MA/MaPage';

const stock = getStock('MA')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <MaPage />;
}
