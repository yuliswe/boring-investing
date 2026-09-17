import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { LuluPage } from '@/companies/LULU/LuluPage';

const stock = getStock('LULU')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <LuluPage />;
}
