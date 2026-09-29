import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { AmznPage } from '@/companies/AMZN/AmznPage';

const stock = getStock('AMZN')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <AmznPage />;
}
