'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

type TabItem = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultIndex?: number;
};

export function Tabs({ items, defaultIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div>
      <div className='tabs' role='tablist'>
        {items.map((item, index) => (
          <button
            key={item.label}
            type='button'
            role='tab'
            aria-selected={index === active}
            className={index === active ? 'tab is-on' : 'tab'}
            onClick={() => setActive(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role='tabpanel' className='pt-4'>
        {items[active]?.content}
      </div>
    </div>
  );
}
