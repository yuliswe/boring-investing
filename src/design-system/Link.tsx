import NextLink from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type NextLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

type LinkProps = NextLinkProps & {
  variant?: 'inline' | 'standalone';
  disabled?: boolean;
};

export function Link({
  variant = 'inline',
  disabled = false,
  className = '',
  children,
  ...rest
}: LinkProps) {
  const base = variant === 'standalone' ? 'ds-link-standalone' : 'ds-link';
  const classes = [base, className].filter(Boolean).join(' ');
  if (disabled) {
    return (
      <span className={classes} aria-disabled='true'>
        {children}
      </span>
    );
  }
  return (
    <NextLink className={classes} {...rest}>
      {children}
    </NextLink>
  );
}
