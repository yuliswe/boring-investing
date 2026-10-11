import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { EnePage } from '@/companies/ENE/EnePage';

const stock = getStock('ENE')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <EnePage />;
}
