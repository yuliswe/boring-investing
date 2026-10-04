import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { LenPage } from '@/companies/LEN/LenPage';

const stock = getStock('LEN')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <LenPage />;
}
