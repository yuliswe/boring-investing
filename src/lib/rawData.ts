// Turns a company's data modules into spreadsheet tables for the raw data page.
// Every company exports the same family of shapes (year-keyed records,
// label/values series, column/row tables, keyed records), so one walker covers
// them all without per-company code.

import type {
  SpreadsheetCell as RawCell,
  SpreadsheetRow as RawRow,
  SpreadsheetSheet as RawSheet,
  SpreadsheetTable as RawTable,
} from '@/design-system';

export type CompanyDataModules = {
  financials: Record<string, unknown>;
  segments?: Record<string, unknown>;
};

type Dict = Record<string, unknown>;
type Format = { prefix?: string; suffix?: string };

// Names of string arrays that label the columns of same-length series.
type YearsContext = { named: Map<string, string[]>; fallbacks: string[][] };

const TITLES: Record<string, string> = {
  revenue: 'Income statement',
  cashFlow: 'Cash flow inputs',
  reverseDcf: 'Reverse DCF inputs',
  cashFlowStatementLines: 'Cash flow statement',
  expenseLines: 'Expense lines',
  stressTest: 'Stress test',
};

const isDict = (v: unknown): v is Dict =>
  typeof v === 'object' && v !== null && !Array.isArray(v);
const isCell = (v: unknown): v is number | null =>
  v === null || typeof v === 'number';
const isNumberArray = (v: unknown): v is (number | null)[] =>
  Array.isArray(v) &&
  v.length > 0 &&
  v.every(isCell) &&
  v.some(x => x !== null);
const isStringArray = (v: unknown): v is string[] =>
  Array.isArray(v) && v.length > 0 && v.every(x => typeof x === 'string');

const titleOf = (key: string) => TITLES[key] ?? humanize(key);

export function humanize(key: string): string {
  const words = key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function unitOf(format: unknown): string | undefined {
  if (!isDict(format)) return undefined;
  const { prefix = '', suffix = '' } = format as Format;
  const unit = `${prefix}${suffix}`.trim();
  return unit || undefined;
}

// "$329.1B" → 329.1, "(12.5)" → -12.5, "—" → null; anything else stays text.
export function parseCell(v: unknown): RawCell {
  if (isCell(v)) return v;
  if (typeof v !== 'string') return null;
  const s = v.trim();
  if (s === '' || /^[—–-]+$/.test(s) || s.toLowerCase() === 'n/a') return null;
  const m = s.match(
    /^(\()?([-−+]?)[$€£¥]?\s?([\d,]*\.?\d+)\s?([%A-Za-z]{0,2})(\))?$/
  );
  if (!m) return s;
  const n = Number(m[3].replace(/,/g, ''));
  if (!Number.isFinite(n)) return s;
  return (m[1] && m[5]) || m[2] === '-' || m[2] === '−' ? -n : n;
}

function resolveColumns(key: string, n: number, ctx: YearsContext): string[] {
  const stem = key.replace(/(Lines|ByYear|Metrics|Values)$/, '');
  const exact = ctx.named.get(`${stem}Years`);
  if (exact?.length === n) return exact;
  for (const years of ctx.fallbacks) if (years.length === n) return years;
  for (const years of ctx.named.values()) if (years.length === n) return years;
  return Array.from({ length: n }, (_, i) => `${i + 1}`);
}

function collectYears(module: Dict, fallbacks: string[][]): YearsContext {
  const named = new Map<string, string[]>();
  for (const [k, v] of Object.entries(module))
    if (/years$/i.test(k) && isStringArray(v)) named.set(k, v);
  return { named, fallbacks };
}

function seriesRow(item: Dict): RawRow {
  return {
    label: String(item.label),
    unit: unitOf(item.format),
    indent: typeof item.indent === 'number' ? item.indent : undefined,
    values: (item.values as unknown[]).map(parseCell),
  };
}

// Container keys such as `metrics` add nothing to a nested title.
const childTitle = (title: string, key: string) =>
  ['metrics', 'series', 'segments', 'rows'].includes(key)
    ? title
    : `${title} › ${humanize(key)}`;

type Series = Dict & { label: string; values: unknown[] };

const isSeries = (v: unknown): v is Series =>
  isDict(v) && typeof v.label === 'string' && Array.isArray(v.values);

// Each recognised shape becomes one table; unrecognised objects are walked so
// that their numeric children still surface under a nested title.
function toTables(
  key: string,
  value: unknown,
  ctx: YearsContext,
  title = titleOf(key),
  id = key
): RawTable[] {
  // [{ year, a, b }] → years across, one row per numeric field.
  if (Array.isArray(value) && value.length && value.every(isDict)) {
    const items = value as Dict[];
    if (items.every(r => typeof r.year === 'string')) {
      const fields = [...new Set(items.flatMap(Object.keys))].filter(
        f => f !== 'year' && items.some(r => typeof r[f] === 'number')
      );
      return [
        {
          id,
          title,
          columns: items.map(r => r.year as string),
          rows: fields.map(f => ({
            label: humanize(f),
            values: items.map(r => parseCell(r[f] ?? null)),
          })),
        },
      ];
    }
    // [{ label, values: [...] }] → one row per series.
    if (items.every(isSeries) && items.every(r => Array.isArray(r.values))) {
      const n = Math.max(...items.map(r => (r.values as unknown[]).length));
      // A series without guidance stops at the last reported year, so it is
      // padded to sit under the same columns as the series that run further.
      const pad = (row: RawRow) => ({
        ...row,
        values: [...row.values, ...Array(n - row.values.length).fill(null)],
      });
      return [
        {
          id,
          title,
          columns: resolveColumns(key, n, ctx),
          rows: items.map(seriesRow).map(pad),
        },
      ];
    }
    // [{ label, values: { FY25: n } }] → keyed columns.
    if (items.every(r => typeof r.label === 'string' && isDict(r.values))) {
      const cols = [
        ...new Set(items.flatMap(r => Object.keys(r.values as Dict))),
      ];
      return [
        {
          id,
          title,
          columns: cols,
          rows: items.map(r => ({
            label: String(r.label),
            values: cols.map(c => parseCell((r.values as Dict)[c] ?? null)),
          })),
        },
      ];
    }
    // Any other record list → one row per record, one column per number.
    const fields = [...new Set(items.flatMap(Object.keys))].filter(f =>
      items.some(r => typeof r[f] === 'number')
    );
    if (!fields.length) return [];
    return [
      {
        id,
        title,
        columns: fields.map(humanize),
        rows: items.map((r, i) => ({
          label: String(r.label ?? r.name ?? i + 1),
          values: fields.map(f => parseCell(r[f] ?? null)),
        })),
      },
    ];
  }

  if (!isDict(value)) return [];

  // { label, values } on its own.
  if (isSeries(value)) {
    const n = (value.values as unknown[]).length;
    return [
      {
        id,
        title,
        columns: resolveColumns(key, n, ctx),
        rows: [seriesRow(value)],
      },
    ];
  }

  // { columns, rows: [{ label, values }] } → the table as filed.
  if (isStringArray(value.columns) && Array.isArray(value.rows)) {
    return [
      {
        id,
        title,
        columns: value.columns,
        rows: (value.rows as Dict[]).filter(isSeries).map(seriesRow),
      },
    ];
  }

  const entries = Object.entries(value);

  // { years, a: [...], b: { X: [...] } } → years across, one row per array.
  if (isStringArray(value.years)) {
    const years = value.years;
    const rows: RawRow[] = [];
    for (const [k, v] of entries) {
      if (isNumberArray(v)) rows.push({ label: humanize(k), values: v });
      else if (isDict(v))
        for (const [k2, v2] of Object.entries(v))
          if (isNumberArray(v2))
            rows.push({ label: `${humanize(k)} · ${k2}`, values: v2 });
    }
    const local = { ...ctx, fallbacks: [years] };
    const rest = entries.flatMap(([k, v]) =>
      isNumberArray(v) || k === 'years' || isDict(v)
        ? []
        : toTables(k, v, local, childTitle(title, k), `${id}-${k}`)
    );
    return [{ id, title, columns: years, rows }, ...rest];
  }

  // { A: { x: 1, y: 2 }, B: { x: 3 } } → matrix of rows by inner key.
  const dictChildren = entries.filter(([, v]) => isDict(v));
  if (
    dictChildren.length === entries.length &&
    entries.every(([, v]) => Object.values(v as Dict).every(isCell))
  ) {
    const cols = [
      ...new Set(entries.flatMap(([, v]) => Object.keys(v as Dict))),
    ];
    return [
      {
        id,
        title,
        columns: cols,
        rows: entries.map(([k, v]) => ({
          label: humanize(k),
          values: cols.map(c => parseCell((v as Dict)[c] ?? null)),
        })),
      },
    ];
  }

  // { FY25: 1.2, FY26E: 1.3 } → a single row keyed by column.
  if (entries.length && entries.every(([, v]) => isCell(v))) {
    return [
      {
        id,
        title,
        columns: entries.map(([k]) => k),
        rows: [
          {
            label: humanize(key),
            values: entries.map(([, v]) => v as RawCell),
          },
        ],
      },
    ];
  }

  // { FY25: [{ label, value }] } → rows by label, columns by key.
  if (
    entries.length &&
    entries.every(
      ([, v]) =>
        Array.isArray(v) &&
        v.every(
          x => isDict(x) && typeof x.label === 'string' && isCell(x.value)
        )
    )
  ) {
    const labels = [
      ...new Set(
        entries.flatMap(([, v]) => (v as Dict[]).map(x => x.label as string))
      ),
    ];
    return [
      {
        id,
        title,
        columns: entries.map(([k]) => k),
        rows: labels.map(label => ({
          label,
          values: entries.map(
            ([, v]) =>
              ((v as Dict[]).find(x => x.label === label)?.value as RawCell) ??
              null
          ),
        })),
      },
    ];
  }

  // Mixed object: numeric scalars form a two-column table; everything else is
  // walked under a nested title.
  const scalars = entries.filter(([, v]) => typeof v === 'number');
  const own: RawTable[] = scalars.length
    ? [
        {
          id,
          title,
          columns: ['Value'],
          rows: scalars.map(([k, v]) => ({
            label: humanize(k),
            values: [v as number],
          })),
        },
      ]
    : [];
  const nested = entries.flatMap(([k, v]) =>
    typeof v === 'number'
      ? []
      : toTables(k, v, ctx, childTitle(title, k), `${id}-${k}`)
  );
  return [...own, ...nested];
}

// Top-level number arrays in a module share a table per column set.
function groupNumberArrays(
  module: Dict,
  ctx: YearsContext,
  id: string
): RawTable[] {
  const groups = new Map<string, RawTable>();
  for (const [k, v] of Object.entries(module)) {
    if (!isNumberArray(v)) continue;
    const columns = resolveColumns(k, v.length, ctx);
    const sig = columns.join('|');
    if (!groups.has(sig))
      groups.set(sig, {
        id: `${id}-series-${groups.size + 1}`,
        title: 'Annual series',
        columns,
        rows: [],
      });
    groups.get(sig)!.rows.push({ label: humanize(k), values: v });
  }
  return [...groups.values()];
}

const LEADING_KEYS = ['revenue', 'expenses', 'cashFlow'];
const TRAILING_KEYS = ['reverseDcf', 'reverseDcfInputs', 'stressTest'];

const rankOf = (key: string) =>
  LEADING_KEYS.includes(key)
    ? LEADING_KEYS.indexOf(key) - LEADING_KEYS.length
    : TRAILING_KEYS.includes(key)
      ? 1 + TRAILING_KEYS.indexOf(key)
      : 0;

function moduleTables(
  module: Dict,
  ctx: YearsContext,
  prefix: string
): RawTable[] {
  const entries = Object.entries(module).sort(
    ([a], [b]) => rankOf(a) - rankOf(b)
  );
  return [
    ...groupNumberArrays(module, ctx, prefix),
    ...entries.flatMap(([k, v]) =>
      isNumberArray(v) ? [] : toTables(k, v, ctx, titleOf(k), `${prefix}-${k}`)
    ),
  ].filter(t => t.rows.length && t.columns.length);
}

// Templates label a series with guidance by every year and one without by the
// reported years alone, so both are candidates for unlabeled series.
function trendYears(financials: Dict): string[][] {
  const guidance = isStringArray(financials.guidanceYears)
    ? financials.guidanceYears
    : [];
  const revenue = Array.isArray(financials.revenue)
    ? (financials.revenue as Dict[]).map(r => String(r.year))
    : [];
  const reported = revenue.filter(y => !guidance.includes(y));
  return [[...reported, ...guidance], reported];
}

export function buildRawSheets({
  financials,
  segments,
}: CompanyDataModules): RawSheet[] {
  const { default: core, ...statements } = financials;
  const coreDict = isDict(core) ? core : {};
  const years = trendYears(coreDict);

  const sheets: RawSheet[] = [
    {
      name: 'Financials',
      tables: moduleTables(coreDict, collectYears(coreDict, years), 'fin'),
    },
    {
      name: 'Statements',
      tables: moduleTables(statements, collectYears(statements, years), 'stm'),
    },
  ];

  if (segments) {
    const { default: main, ...rest } = segments;
    const merged: Dict = {
      ...(Array.isArray(main) ? { segments: main } : isDict(main) ? main : {}),
      ...rest,
    };
    sheets.push({
      name: 'Segments',
      tables: moduleTables(merged, collectYears(merged, years), 'seg'),
    });
  }

  return sheets.filter(s => s.tables.length);
}
