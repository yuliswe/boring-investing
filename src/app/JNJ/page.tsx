import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { JnjPage } from '@/companies/JNJ/JnjPage';

const stock = getStock('JNJ')!;

export const metadata: Metadata = {
  title: `${stock.name} (${stock.symbol}) — Ledger`,
  description: stock.summary,
};

export default function Page() {
  return <JnjPage />;
}
