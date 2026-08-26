import { Card, Text } from '@/design-system';
import { STOCKS } from '@/lib/stocks';

export default function HomePage() {
  return (
    <main
      className='ds'
      style={{ maxWidth: 900, margin: '0 auto', padding: '48px 20px' }}
    >
      <header style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text variant='display'>Boring Investing</Text>
        <Text variant='body' muted>
          Plain, static analysis of a few companies worth understanding.
        </Text>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
          marginTop: 28,
        }}
      >
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
                <span style={{ color: 'var(--color-accent)' }}>
                  View analysis &#8594;
                </span>
              </>
            }
          />
        ))}
      </div>
    </main>
  );
}
