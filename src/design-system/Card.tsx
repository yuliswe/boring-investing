import NextLink from 'next/link';
import type { ReactNode } from 'react';

type CardProps = {
  kicker?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
  meta?: ReactNode;
  elevation?: 'sm' | 'md' | 'lg';
  href?: string;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Card({
  kicker,
  title,
  body,
  meta,
  elevation,
  href,
  disabled = false,
  className = '',
  children,
}: CardProps) {
  const classes = ['card', elevation ? `elev-${elevation}` : '', className]
    .filter(Boolean)
    .join(' ');
  const content = (
    <>
      {kicker ? <span className='card-kicker'>{kicker}</span> : null}
      {title ? <div className='card-title'>{title}</div> : null}
      {body ? <p className='card-body'>{body}</p> : null}
      {children}
      {meta ? <div className='card-meta'>{meta}</div> : null}
    </>
  );
  if (href && !disabled) {
    return (
      <NextLink href={href} className={classes}>
        {content}
      </NextLink>
    );
  }
  return (
    <div className={classes} style={disabled ? { opacity: 0.45 } : undefined}>
      {content}
    </div>
  );
}
