# Templates

## Inheritance

```
BaseTemplate  →  SoftwareTemplate  →  MsftPage
(layout)         (company type)       (single stock)
```

`BaseTemplate` renders navbar → hero → header → sections → footer. It accepts
`sections` and `childSections` separately, merges them by `rank`, and renders
the sorted result. It also accepts an optional `expenses` array
(`ExpensesRowData[]`) and builds the base "Expenses" section (rank 450) from
it, computing each income-statement line as a share of revenue.

A child template (e.g. `SoftwareTemplate`) builds its own sections from typed
financial data and passes them as `sections` to `BaseTemplate`. Any
stock-specific sections from the page come through as `childSections`. Both
lists merge by rank, so a page can interleave sections at any position.

## Data types

All inputs are pure JSON data — numbers, strings, booleans, and arrays. Section
components compute visual properties (sparkline coordinates, bar heights, delta
colors) at render time from the raw values. Data types are in `base/types.ts`
and follow the `*Data` naming convention.

`SectionData` is a discriminated union on `kind`: prose, trends, metrics, chart,
stack, multi, table, rows, peers. Each section carries a `rank` that controls
its display order.

The `multi` kind renders several series on one chart. In `index` mode (the
default) each series is rebased to its first value = 100 so the lines show
relative growth regardless of absolute scale; in `share` mode values plot
as-is (typically percentages) with pp deltas. A series marked `total: true`
draws in the text color and serves as the denominator for share-of-total
readouts beneath each non-total line.

## Adding a child template

1. Create `src/templates/<Type>Template.tsx`.
2. Accept typed financial data and build sections from it.
3. Pass those sections plus any caller-provided extras to `BaseTemplate`.
4. Register the template name in `CompanyTemplate` in `src/lib/stocks.ts`.
