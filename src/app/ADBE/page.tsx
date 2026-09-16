import type { Metadata } from 'next';
import { getStock } from '@/lib/stocks';
import { AdbePage } from '@/companies/ADBE/AdbePage';

const stock = getStock('ADBE')!;

export const metadata: Metadata = {
  title: `${stock.symbol} — ${stock.name}`,
  description: stock.summary,
};

export default function Page() {
  return <AdbePage />;
}
