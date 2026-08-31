import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type TableProps = ComponentPropsWithoutRef<'table'> & {
  children: ReactNode;
};

export function Table({ className = '', children, ...rest }: TableProps) {
  return (
    <table className={['table', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </table>
  );
}

type SortHeaderProps = {
  label: string;
  direction?: 'asc' | 'desc' | null;
  onSort?: () => void;
};

export function SortHeader({ label, direction, onSort }: SortHeaderProps) {
  const mark = direction === 'asc' ? ' ↑' : direction === 'desc' ? ' ↓' : '';
  return (
    <button type='button' className='table-sort' onClick={onSort}>
      {label}
      {mark}
    </button>
  );
}
