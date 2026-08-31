import { Card, Link, Text } from '@/design-system';
import { STOCKS } from '@/lib/stocks';

export default function HomePage() {
  return (
    <main className='ds mx-auto max-w-[56.25rem] px-5 py-12'>
      <header className='flex flex-col gap-2'>
        <Text variant='display'>Boring Investing</Text>
        <Text variant='body' muted>
          Plain, static analysis of a few companies worth understanding.
        </Text>
      </header>

      <div className='mt-7 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-3.5'>
        {STOCKS.map(stock => (
          <Card
            key={stock.symbol}
            href={`/${stock.symbol}`}
            kicker={stock.sector}
            title={stock.symbol}
            body={stock.summary}
            meta={
              <>
                <span>{stock.name}</span>
                <span>&middot;</span>
                <span className='text-ds-accent'>View analysis &#8594;</span>
              </>
            }
          />
        ))}
      </div>

      <footer className='mt-8 pt-4.5 border-t border-ds-divider'>
        <Link href='/components' variant='standalone'>
          Component library &#8594;
        </Link>
      </footer>
    </main>
  );
}
