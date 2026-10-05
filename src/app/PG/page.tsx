import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { PgPage } from '@/companies/PG/PgPage';

const stock = getStock('PG')!;

export const metadata: Metadata = {
  title: `${stock.name} (${stock.symbol}) — Ledger`,
  description: stock.summary,
};

export default function Page() {
  return <PgPage />;
}
