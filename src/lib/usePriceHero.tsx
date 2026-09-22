'use client';

import { useState, useCallback, type ReactNode } from 'react';
import type { HeroData } from '@/templates/base';

export type PriceConfig = {
  symbol: string;
  defaultPrice: number;
  currency: string;
  referenceClose: number;
};

function formatPrice(n: number): string {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function usePriceOverride(
  symbol: string,
  defaultPrice: number
): [number, (p: number) => void] {
  const key = `price-${symbol}`;

  const [price, setPrice] = useState(() => {
    if (typeof window === 'undefined') return defaultPrice;
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      const n = parseFloat(stored);
      if (!isNaN(n) && n > 0) return n;
    }
    return defaultPrice;
  });

  const update = useCallback(
    (p: number) => {
      setPrice(p);
      if (p === defaultPrice) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, p.toString());
      }
    },
    [key, defaultPrice]
  );

  return [price, update];
}

function PriceAdjuster({
  price,
  defaultPrice,
  currency,
  onChange,
}: {
  price: number;
  defaultPrice: number;
  currency: string;
  onChange: (p: number) => void;
}) {
  const [draft, setDraft] = useState<string | null>(null);
  const isAdjusted = price !== defaultPrice;
  const displayValue = draft ?? formatPrice(price);

  function commit() {
    if (draft === null) return;
    const n = parseFloat(draft.replace(/,/g, ''));
    if (!isNaN(n) && n > 0) {
      onChange(n);
    }
    setDraft(null);
  }

  return (
    <div className='flex items-center gap-[var(--space-2)] mt-[var(--space-2)]'>
      <span className='text-xs text-[var(--text-muted)] font-[family-name:var(--font-interactable)]'>
        Adjust price
      </span>
      <div className='inline-flex items-center gap-px rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-[var(--surface-raised)] px-[var(--space-2)] py-[var(--space-1)]'>
        <span className='text-xs text-[var(--text-muted)] ds-tnum select-none'>
          {currency}
        </span>
        <input
          type='text'
          inputMode='decimal'
          value={displayValue}
          onChange={e => setDraft(e.target.value)}
          onFocus={() => setDraft(formatPrice(price))}
          onBlur={commit}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.currentTarget.blur();
            }
          }}
          className='w-20 bg-transparent text-xs ds-tnum text-[var(--text-primary)] outline-none border-none pl-[var(--space-1)]'
        />
      </div>
      {isAdjusted && (
        <button
          onClick={() => onChange(defaultPrice)}
          className='text-xs text-[var(--text-muted)] font-[family-name:var(--font-interactable)] hover:text-[var(--color-accent)] cursor-pointer bg-transparent border-none p-0'
        >
          Reset
        </button>
      )}
    </div>
  );
}

export function usePriceHero(
  staticHero: HeroData,
  config: PriceConfig
): {
  price: number;
  setPrice: (p: number) => void;
  hero: HeroData;
  addon: ReactNode;
} {
  const [price, setPrice] = usePriceOverride(
    config.symbol,
    config.defaultPrice
  );
  const isAdjusted = price !== config.defaultPrice;

  const hero: HeroData = isAdjusted
    ? {
        ...staticHero,
        price: `${config.currency}${formatPrice(price)}`,
        changePct:
          ((price - config.referenceClose) / config.referenceClose) * 100,
        priceNote: `adjusted · ${staticHero.priceNote}`,
      }
    : staticHero;

  const addon = (
    <PriceAdjuster
      price={price}
      defaultPrice={config.defaultPrice}
      currency={config.currency}
      onChange={setPrice}
    />
  );

  return { price, setPrice, hero, addon };
}
