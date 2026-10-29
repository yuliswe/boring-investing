import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { NowPage } from '@/companies/NOW/NowPage';

const stock = getStock('NOW')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <NowPage />;
}
