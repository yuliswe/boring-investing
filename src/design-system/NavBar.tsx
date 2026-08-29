'use client';

import NextLink from 'next/link';
import { useState } from 'react';
import type { ReactNode } from 'react';

type NavLink = {
  label: string;
  href: string;
  current?: boolean;
};

type NavBarProps = {
  brand: ReactNode;
  links: NavLink[];
  action?: ReactNode;
};

export function NavBar({ brand, links, action }: NavBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className='nav-shell'>
      <div className='nav border-b-0'>
        <span className='nav-brand'>{brand}</span>
        <div className='nav-links'>
          {links.map(link => (
            <NextLink
              key={link.href}
              href={link.href}
              aria-current={link.current ? 'page' : undefined}
            >
              {link.label}
            </NextLink>
          ))}
          {action}
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-icon nav-toggle'
          aria-label='Menu'
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          {open ? '×' : '≡'}
        </button>
      </div>
      {open ? (
        <div className='nav-menu'>
          {links.map(link => (
            <NextLink
              key={link.href}
              href={link.href}
              aria-current={link.current ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NextLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}
