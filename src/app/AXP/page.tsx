import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { AxpPage } from '@/companies/AXP/AxpPage';

const stock = getStock('AXP')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <AxpPage />;
}
