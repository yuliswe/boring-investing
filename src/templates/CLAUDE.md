# Templates

## Inheritance

```
BaseTemplate  →  SoftwareTemplate  →  MsftPage
(layout)         (company type)       (single stock)
```

`BaseTemplate` renders navbar → hero → header → sections → footer. It accepts
`sections` and `childSections` separately, merges them by `rank`, and renders
the sorted result. It also accepts an optional `expenses` array
(`ExpensesRowData[]`) and builds the base "Expenses" section (rank 500) from
it, computing each income-statement line as a share of revenue. When both
`expenses` and `cashFlow` (`CashFlowRowData[]`) are provided, it also builds a
"Free Cash Flow" section (rank 550) that shows the same costs on a cash basis:
D&A and SBC are stripped from the operating lines proportionally, and cash
taxes paid, working-capital changes, and capital expenditures are added.

A child template (e.g. `SoftwareTemplate`) builds its own sections from typed
financial data and passes them as `sections` to `BaseTemplate`. Any
stock-specific sections from the page come through as `childSections`. Both
lists merge by rank, so a page can interleave sections at any position.

## Required financial data

`SoftwareFinancials` (the data shape consumed by `SoftwareTemplate`) requires
every company page to provide these fields:

- **`revenue`** — one entry per fiscal year with revenue and operating income.
- **`criticalMetrics`** — valuation ratios (P/E, P/FCF, and optionally PEG)
  rendered in the "Critical Metrics" section (rank 200).
- **`keyMetrics`** — profitability and return metrics (EPS, FCF/share, ROE,
  ROIC, D/E, sustainable growth rate, net margin, FCF margin) rendered in the
  "Key Metrics" section (rank 300).
- **`thesis`** — three investment-thesis bullet points.

The page must also provide a segment revenue breakdown in `extraSections`
(rank 400, kind `'multi'`) and a filings section (rank 600, kind `'rows'`).

## Expenses and Free Cash Flow sections

Every company page must include an Expenses section (rank 500) and a Free Cash
Flow section (rank 550). There are two ways to provide them, and the choice
depends on whether the company's filing categories map cleanly onto the
template's predefined columns.

**Option 1: template-generated sections.** Pass `expenses` and `cashFlow`
arrays in `SoftwareFinancials`. The template builds the Expenses and FCF
sections automatically using its fixed columns (cost of revenue, SG&A, R&D,
D&A, other operating, non-operating, taxes, stock-based compensation). Use
this when the company reports those lines separately, as most US software
companies do. Individual fields may be `null` for years without data.

**Option 2: custom sections.** Build the Expenses and FCF sections directly
as `extraSections` in the page component, using `kind: 'multi'` with
`mode: 'share'`. Each line uses the label and description from the company's
actual filing, and its values are shown as a percentage of total revenue. Omit
`expenses` and `cashFlow` from the financials object so the template does not
generate duplicate sections.

Use option 2 when the company's reporting does not fit the template's
predefined categories. GAAP and IFRS give companies flexibility in how they
present the income statement — a company may report a single combined
operating expense line, use different functional groupings, or capitalise
costs that other companies expense. Forcing such data into the wrong column
misrepresents what the company reported and can break the FCF computation.
The rule is: each expense line on the page should correspond to a line the
company actually reports, with the same label.

See `src/companies/MSFT/` for option 1 and `src/companies/TRI/` for option 2.

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
as-is (typically percentages) with pp deltas; in `absolute` mode values plot
as-is with the y-axis showing formatted amounts (using the series format)
and YoY % deltas, which is suited to revenue or other dollar-denominated
series where the reader wants to see the actual scale. A series marked
`total: true` draws in the text color and serves as the denominator for
share-of-total readouts beneath each non-total line.

## Adding a child template

Every template must extend `BaseTemplate` — render it as the root element and
delegate layout to it. No template should implement its own navbar, hero, section
ordering, or footer; those belong to `BaseTemplate`.

1. Create `src/templates/<Type>Template.tsx`.
2. Accept typed financial data and build sections from it.
3. Render `BaseTemplate` as the root, passing those sections plus any
   caller-provided extras through its props.
4. Register the template name in `CompanyTemplate` in `src/lib/stocks.ts`.
