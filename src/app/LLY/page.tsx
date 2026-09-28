import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { LlyPage } from '@/companies/LLY/LlyPage';

const stock = getStock('LLY')!;

export const metadata: Metadata = {
  title: `${stock.name} (${stock.symbol}) — Ledger`,
  description: stock.summary,
};

export default function Page() {
  return <LlyPage />;
}
