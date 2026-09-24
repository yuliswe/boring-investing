import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { NvdaPage } from '@/companies/NVDA/NvdaPage';

const stock = getStock('NVDA')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <NvdaPage />;
}
