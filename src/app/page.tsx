import { Card, Link, Text, ThemeToggle } from '@/design-system';
import { STOCKS, type Stock } from '@/lib/stocks';

function groupByInitial(stocks: Stock[]): Map<string, Stock[]> {
  const groups = new Map<string, Stock[]>();
  const sorted = [...stocks].sort((a, b) => a.symbol.localeCompare(b.symbol));
  for (const stock of sorted) {
    const initial = stock.symbol[0].toUpperCase();
    groups.set(initial, [...(groups.get(initial) ?? []), stock]);
  }
  return groups;
}

export default function HomePage() {
  const groups = [...groupByInitial(STOCKS)];

  return (
    <main className='ds mx-auto max-w-[56.25rem] px-5 py-12'>
      <header className='flex flex-col gap-2'>
        <div className='flex items-start justify-between'>
          <Text variant='display'>Boring Investing</Text>
          <ThemeToggle />
        </div>
        <Text variant='body' muted>
          Plain, static analysis of a few companies worth understanding.
        </Text>
      </header>

      <nav
        aria-label='Jump to symbols by initial letter'
        className='mt-7 flex flex-wrap gap-x-4'
      >
        {groups.map(([letter]) => (
          <Link key={letter} href={`#${letter}`} variant='standalone'>
            {letter}
          </Link>
        ))}
      </nav>

      <div className='mt-5 flex flex-col gap-6'>
        {groups.map(([letter, stocks]) => (
          <section key={letter} id={letter} className='scroll-mt-6'>
            <Text variant='overline' muted>
              {letter}
            </Text>
            <div className='mt-2 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-3.5'>
              {stocks.map(stock => (
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
                      <span className='text-accent'>View analysis &#8594;</span>
                    </>
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className='mt-8 pt-4.5 border-t border-divider'>
        <Link href='/components' variant='standalone'>
          Component library &#8594;
        </Link>
      </footer>
    </main>
  );
}
