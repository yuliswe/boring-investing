import NextLink from 'next/link';
import type { ReactNode } from 'react';

type ListRowProps = {
  primary: ReactNode;
  secondary?: ReactNode;
  trailing?: ReactNode;
  href?: string;
  chevron?: boolean;
};

export function ListRow({
  primary,
  secondary,
  trailing,
  href,
  chevron = true,
}: ListRowProps) {
  const content = (
    <>
      <div className='min-w-0 flex-1'>
        <div className='list-row-primary'>{primary}</div>
        {secondary ? (
          <div className='list-row-secondary'>{secondary}</div>
        ) : null}
      </div>
      {trailing ? <div className='text-right'>{trailing}</div> : null}
      {href && chevron ? (
        <span className='list-row-chevron' aria-hidden='true'>
          &#8250;
        </span>
      ) : null}
    </>
  );
  if (href) {
    return (
      <NextLink href={href} className='list-row'>
        {content}
      </NextLink>
    );
  }
  return <div className='list-row'>{content}</div>;
}
