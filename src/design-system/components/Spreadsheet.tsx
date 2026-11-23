'use client';

import { useState } from 'react';

export type SpreadsheetCell = number | string | null;

export type SpreadsheetRow = {
  label: string;
  unit?: string;
  indent?: number;
  values: SpreadsheetCell[];
};

export type SpreadsheetTable = {
  id: string;
  title: string;
  columns: string[];
  rows: SpreadsheetRow[];
};

export type SpreadsheetSheet = {
  name: string;
  tables: SpreadsheetTable[];
};

type Selection = { tableId: string; row: number; col: number };

type Grid = { header: string[]; body: SpreadsheetCell[][]; indents: number[] };

// Column A holds the row labels and, when any row carries one, column B holds
// its unit, so the header row and each data row line up like a sheet.
function toGrid(table: SpreadsheetTable): Grid {
  const hasUnit = table.rows.some(r => r.unit);
  const lead = (r: SpreadsheetRow) =>
    hasUnit ? [r.label, r.unit ?? null] : [r.label];
  return {
    header: ['', ...(hasUnit ? ['Unit'] : []), ...table.columns],
    body: table.rows.map(r => [...lead(r), ...r.values]),
    indents: table.rows.map(r => r.indent ?? 0),
  };
}

function columnLetter(index: number): string {
  let s = '';
  for (let n = index + 1; n > 0; n = Math.floor((n - 1) / 26))
    s = String.fromCharCode(65 + ((n - 1) % 26)) + s;
  return s;
}

const display = (v: SpreadsheetCell) => (v === null ? '' : String(v));

function toTsv(grid: Grid): string {
  return [grid.header, ...grid.body]
    .map(r => r.map(display).join('\t'))
    .join('\n');
}

type SpreadsheetProps = {
  table: SpreadsheetTable;
  selection: Selection | null;
  onSelect: (selection: Selection) => void;
};

export function Spreadsheet({ table, selection, onSelect }: SpreadsheetProps) {
  const [copied, setCopied] = useState(false);
  const grid = toGrid(table);
  const selected = selection?.tableId === table.id ? selection : null;
  const width = grid.header.length;

  const copy = async () => {
    await navigator.clipboard.writeText(toTsv(grid));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const cell = (
    value: SpreadsheetCell,
    row: number,
    col: number,
    indent = 0
  ) => {
    const isOn = selected?.row === row && selected.col === col;
    const kind =
      row === 0
        ? 'sheet-head'
        : col === 0
          ? 'sheet-label'
          : typeof value === 'number'
            ? 'sheet-num'
            : 'sheet-text';
    return (
      <td
        key={col}
        className={`sheet-cell ${kind}${isOn ? ' is-on' : ''}`}
        style={
          indent
            ? { paddingLeft: `calc(var(--spacing-2) + ${indent}rem)` }
            : undefined
        }
        onClick={() => onSelect({ tableId: table.id, row, col })}
      >
        {display(value)}
      </td>
    );
  };

  return (
    <section id={table.id} className='sheet-table'>
      <div className='sheet-caption'>
        <h3 className='sheet-title'>{table.title}</h3>
        <button type='button' className='sheet-copy' onClick={copy}>
          {copied ? 'Copied' : 'Copy as TSV'}
        </button>
      </div>
      <div className='sheet-scroll'>
        <table className='sheet'>
          <thead>
            <tr>
              <th className='sheet-corner' />
              {Array.from({ length: width }, (_, i) => (
                <th
                  key={i}
                  className={`sheet-axis${selected?.col === i ? ' is-on' : ''}`}
                >
                  {columnLetter(i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[grid.header, ...grid.body].map((values, row) => (
              <tr key={row}>
                <th
                  className={`sheet-axis sheet-rownum${selected?.row === row ? ' is-on' : ''}`}
                >
                  {row + 1}
                </th>
                {values.map((v, col) =>
                  cell(
                    v,
                    row,
                    col,
                    col === 0 && row > 0 ? grid.indents[row - 1] : 0
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

type WorkbookProps = {
  sheets: SpreadsheetSheet[];
};

export function Workbook({ sheets }: WorkbookProps) {
  const [active, setActive] = useState(0);
  const [selection, setSelection] = useState<Selection | null>(null);
  const sheet = sheets[active];

  const table = sheet?.tables.find(t => t.id === selection?.tableId);
  const grid = table && toGrid(table);
  const ref =
    selection && grid
      ? `${columnLetter(selection.col)}${selection.row + 1}`
      : '';
  const value =
    selection && grid
      ? display([grid.header, ...grid.body][selection.row][selection.col])
      : '';
  const context =
    selection && grid && selection.row > 0 && selection.col > 0
      ? `${table.title} · ${display(grid.body[selection.row - 1][0])} · ${grid.header[selection.col]}`
      : (table?.title ?? '');

  const switchSheet = (index: number) => {
    setActive(index);
    setSelection(null);
  };

  return (
    <div className='workbook'>
      <div className='sheet-formula' aria-live='polite'>
        <span className='sheet-namebox'>{ref || '—'}</span>
        <span className='sheet-fx'>fx</span>
        <span className='sheet-value'>{value}</span>
        <span className='sheet-context'>{context}</span>
      </div>

      {sheet && (
        <nav className='sheet-index' aria-label='Tables in this sheet'>
          {sheet.tables.map(t => (
            <a key={t.id} href={`#${t.id}`}>
              {t.title}
            </a>
          ))}
        </nav>
      )}

      <div className='sheet-tables'>
        {sheet?.tables.map(t => (
          <Spreadsheet
            key={t.id}
            table={t}
            selection={selection}
            onSelect={setSelection}
          />
        ))}
      </div>

      <div className='sheet-tabs' role='tablist'>
        {sheets.map((s, i) => (
          <button
            key={s.name}
            type='button'
            role='tab'
            aria-selected={i === active}
            className={i === active ? 'sheet-tab is-on' : 'sheet-tab'}
            onClick={() => switchSheet(i)}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
