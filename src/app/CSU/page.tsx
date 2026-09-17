import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { CsuPage } from '@/companies/CSU/CsuPage';

const stock = getStock('CSU')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <CsuPage />;
}
