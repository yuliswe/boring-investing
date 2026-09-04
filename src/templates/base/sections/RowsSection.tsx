import { Tag } from '@/design-system';
import type { FilingEntryData } from '../types';

export function RowsSection({ entries }: { entries: FilingEntryData[] }) {
  return (
    <div>
      {entries.map((e, i) => (
        <div
          key={i}
          className='flex items-center gap-3.5 min-h-14 border-b border-[var(--color-divider)]'
        >
          <Tag tone='outline'>{e.kind}</Tag>
          <span className='flex-1 min-w-0 text-3.25'>{e.note}</span>
          <span className='text-2.75 ds-tnum text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
            {e.date}
          </span>
        </div>
      ))}
    </div>
  );
}
