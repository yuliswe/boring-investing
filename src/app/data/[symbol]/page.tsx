import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link, Text, ThemeToggle, Workbook } from '@/design-system';
import { loadCompanyData } from '@/lib/companyData';
import { buildRawSheets } from '@/lib/rawData';
import { STOCKS, getStock } from '@/lib/stocks';

type Params = { params: Promise<{ symbol: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return STOCKS.map(stock => ({ symbol: stock.symbol }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const stock = getStock((await params).symbol);
  return {
    title: stock ? `${stock.symbol} raw data — ${stock.name}` : 'Raw data',
    description:
      stock && `Every figure collected for ${stock.name}, as numbers.`,
  };
}

export default async function RawDataPage({ params }: Params) {
  const stock = getStock((await params).symbol);
  if (!stock) notFound();
  const sheets = buildRawSheets(await loadCompanyData(stock.symbol));

  return (
    <main className='mx-auto max-w-page-max px-5 pt-10'>
      <header className='flex flex-col gap-2 mb-6'>
        <div className='flex items-start justify-between gap-4'>
          <Text variant='display'>{stock.symbol} raw data</Text>
          <ThemeToggle />
        </div>
        <Text variant='body' muted>
          Every figure collected for {stock.name}, as stored in the data files.
          Amounts are in billions of the reporting currency unless a unit says
          otherwise. Select a cell to see its value and position.
        </Text>
        <div className='flex gap-4'>
          <Link href={`/${stock.symbol}`} variant='standalone'>
            &#8592; {stock.symbol} analysis
          </Link>
          <Link href='/' variant='standalone'>
            All companies
          </Link>
        </div>
      </header>
      <Workbook sheets={sheets} />
    </main>
  );
}
