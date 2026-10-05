import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { KoPage } from '@/companies/KO/KoPage';

const stock = getStock('KO')!;

export const metadata: Metadata = {
  title: `${stock.name} (${stock.symbol}) — Ledger`,
  description: stock.summary,
};

export default function Page() {
  return <KoPage />;
}
