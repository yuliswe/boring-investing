import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { MsftPage } from '@/companies/MSFT/MsftPage';

const stock = getStock('MSFT')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <MsftPage />;
}
