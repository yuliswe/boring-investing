import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { GoogPage } from '@/companies/GOOG/GoogPage';

const stock = getStock('GOOG')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <GoogPage />;
}
