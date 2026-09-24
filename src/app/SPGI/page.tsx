import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { SpgiPage } from '@/companies/SPGI/SpgiPage';

const stock = getStock('SPGI')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <SpgiPage />;
}
