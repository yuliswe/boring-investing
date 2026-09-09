import { Tag } from '@/design-system';
import type { FilingEntryData } from '../types';

export function RowsSection({ entries }: { entries: FilingEntryData[] }) {
  return (
    <div>
      {entries.map((e, i) => (
        <div
          key={i}
          className='flex items-center gap-[var(--space-3)] min-h-14 border-b border-[var(--color-divider)]'
        >
          <Tag tone='outline'>{e.kind}</Tag>
          <span className='flex-1 min-w-0 text-xs'>{e.note}</span>
          <span className='text-xs ds-tnum text-[var(--text-muted)]'>
            {e.date}
          </span>
        </div>
      ))}
    </div>
  );
}
