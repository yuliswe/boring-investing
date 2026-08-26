import { Card, Link, Text } from '@/design-system';
import { STOCKS } from '@/lib/stocks';

export default function HomePage() {
  return (
    <main className='mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10'>
      <header className='flex flex-col gap-2'>
        <Text variant='display'>Boring Investing</Text>
        <Text variant='body' className='text-ink-muted'>
          Plain, static analysis of a few companies worth understanding.
        </Text>
      </header>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {STOCKS.map(stock => (
          <Card key={stock.symbol}>
            <div className='flex flex-col gap-2'>
              <div className='flex items-baseline justify-between'>
                <Text variant='subheading'>{stock.symbol}</Text>
                <Text variant='caption'>{stock.sector}</Text>
              </div>
              <Text variant='caption'>{stock.name}</Text>
              <Text variant='body' className='text-ink-muted'>
                {stock.summary}
              </Text>
              <Link href={`/${stock.symbol}`}>View analysis &rarr;</Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
