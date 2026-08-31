'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

type AccordionItem = {
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: number;
};

export function Accordion({ items, defaultOpen = -1 }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      {items.map((item, index) => {
        const isOpen = index === open;
        return (
          <div className='accordion-item' key={item.question}>
            <button
              type='button'
              className='accordion-trigger'
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className='accordion-q'>{item.question}</span>
              <span className='accordion-mark' aria-hidden='true'>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen ? <p className='accordion-panel'>{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
