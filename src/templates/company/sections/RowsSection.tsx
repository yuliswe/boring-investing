import { Tag } from '@/design-system';
import type { FilingEntry } from '../types';

export function RowsSection({ entries }: { entries: FilingEntry[] }) {
  return (
    <div>
      {entries.map((e, i) => (
        <div
          key={i}
          className='flex items-center gap-3.5 min-h-14 border-b border-[var(--color-divider)]'
        >
          <Tag tone='outline'>{e.kind}</Tag>
          <span className='flex-1 min-w-0 text-[0.8125rem]'>{e.note}</span>
          <span className='text-[0.6875rem] ds-tnum text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
            {e.date}
          </span>
        </div>
      ))}
    </div>
  );
}
