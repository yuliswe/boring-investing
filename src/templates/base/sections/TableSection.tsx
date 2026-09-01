import type { TableColumn, TableRow } from '../types';

export function TableSection({
  firstColumn,
  columns,
  rows,
  tableNote,
}: {
  firstColumn: string;
  columns: TableColumn[];
  rows: TableRow[];
  tableNote?: string;
}) {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table' style={{ minWidth: '32.5rem' }}>
          <thead>
            <tr>
              <th>{firstColumn}</th>
              {columns.map((c, i) => (
                <th key={i} className='text-right'>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td className='ds-tnum'>{r.label}</td>
                {r.values.map((v, j) => (
                  <td key={j} className='text-right ds-tnum'>
                    {v.text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tableNote && (
        <p className='mt-2.5 text-2.75 text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
          {tableNote}
        </p>
      )}
    </>
  );
}
