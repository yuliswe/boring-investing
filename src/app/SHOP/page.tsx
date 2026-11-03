import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { ShopPage } from '@/companies/SHOP/ShopPage';

const stock = getStock('SHOP')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <ShopPage />;
}
