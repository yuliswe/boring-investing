import NextLink from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type NextLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

type LinkProps = NextLinkProps & {
  tone?: 'default' | 'muted';
};

export function Link({ tone = 'default', className = '', ...rest }: LinkProps) {
  const toneClasses =
    tone === 'muted'
      ? 'text-ink-muted hover:text-ink'
      : 'text-brand hover:text-brand/80';
  return (
    <NextLink
      className={`font-medium underline-offset-4 hover:underline ${toneClasses} ${className}`}
      {...rest}
    />
  );
}
