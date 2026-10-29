import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { CnqPage } from '@/companies/CNQ/CnqPage';

const stock = getStock('CNQ')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <CnqPage />;
}
