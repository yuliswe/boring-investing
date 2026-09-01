import type { PeerPanel } from '../types';

function PeerBar({ panel }: { panel: PeerPanel }) {
  return (
    <div className='flex flex-col gap-1.5'>
      <div className='flex items-baseline gap-2.5 pb-1.75 border-b border-[var(--color-divider)]'>
        <span className='flex-1 min-w-0 ds-kicker'>{panel.label}</span>
        <span className='flex-none text-2.5 text-[color-mix(in_srgb,var(--color-text)_42%,transparent)]'>
          {panel.hint}
        </span>
      </div>
      {panel.rows.map((r, i) => (
        <div key={i} className='flex items-center gap-2.5 min-h-6.5'>
          <span
            className={`flex-none w-26 text-2.75 ${
              r.self
                ? 'font-semibold'
                : 'text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]'
            }`}
            style={r.self ? { color: r.barColor } : undefined}
          >
            {r.name}
          </span>
          <div className='relative flex-1 h-2.75'>
            <div
              className='absolute left-0 inset-y-0 rounded-[var(--radius-sm)]'
              style={{
                width: r.w,
                background: r.self
                  ? r.barColor
                  : 'color-mix(in srgb, var(--color-text) 7%, transparent)',
                border: r.self
                  ? `1.5px solid ${r.barColor}`
                  : '1px solid var(--color-divider)',
              }}
            />
          </div>
          <span className='flex-none w-13 text-right text-2.75 ds-tnum'>
            {r.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function PeersSection({
  panels,
  chartNote,
}: {
  panels: PeerPanel[];
  chartNote?: string;
}) {
  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-6 gap-x-10'>
        {panels.map((p, i) => (
          <PeerBar key={i} panel={p} />
        ))}
      </div>
      {chartNote && (
        <p className='mt-4.5 text-2.75 text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
          {chartNote}
        </p>
      )}
    </>
  );
}
