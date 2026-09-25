# Companies — data rules

Never populate financial data files from memory or training knowledge. Every
number in `data/financials.ts` and `data/segments.ts` must come from an
actual filing (SEC EDGAR XBRL, 10-K, 10-Q) or a verifiable market-data source
(Yahoo Finance for prices). When adding or updating a company, fetch the filed
figures first and transcribe them; do not fill in values that "seem about right."

## Forward-year estimates

Each company page covers the last nine completed fiscal years plus one forward
fiscal-year estimate (the "E" year, such as FY26E), for a total of ten data
points per series. The forward estimate must come from a verifiable source, not
from memory. Prefer management guidance when the company provides it; fall back
to consensus analyst estimates otherwise.

The last data point in every series must be non-null. If a forward estimate is
genuinely unavailable for a metric, omit the forward year from that series
entirely so the last visible value is the most recent actual. The page should
never display "N/A" as its final data point.

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
Flow section (rank 550). These sections follow the same principle as the
Revenue breakdown (rank 400), which already uses the company's own segment
structure as a custom `extraSections` entry. Each expense and cash-flow line
on the page must correspond to a line the company actually reports in its
filing, using the same label. GAAP and IFRS give companies flexibility in how
they present the income statement — a company may report a single combined
operating expense line, use different functional groupings, or capitalise
costs that other companies expense — so the page must follow whatever
structure the company uses rather than forcing data into a fixed set of
categories.

**All new company pages must use custom sections.** Build the Expenses and FCF
sections directly as `extraSections` in the page component, using
`kind: 'multi'` with `mode: 'share'`. Define each line with a label and
description matching the company's filing, and provide its values as raw
amounts in billions; the page component converts them to percentages of
revenue. Omit `expenses` and `cashFlow` from the financials object so the
template does not generate its own sections at those ranks.

See `src/companies/TRI/` for the reference implementation. The data lives in
`financials.ts` as named exports (`expenseLines`, `cashFlowLines`,
`expenseYears`, `revenueByYear`), and the page component (`TriPage.tsx`)
contains `buildExpensesSection()` and `buildFCFSection()` helper functions
that assemble the `SectionData` objects.

**Deprecated: template-generated sections.** Some older company pages (MSFT,
ADBE, CSU, NFLX, LULU) pass `expenses` and `cashFlow` arrays in
`SoftwareFinancials`, and the template builds sections from fixed columns
(cost of revenue, SG&A, R&D, D&A, etc.). This approach is deprecated because
it forces every company into the same categories regardless of what they
actually report, which misrepresents the data and breaks the FCF computation
when a company's reporting does not fit. These pages will be migrated to
custom sections over time.

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

## Forward-year critical metrics

Forward-year critical metrics that depend on the stock price (P/E, P/FCF, and
PEG) must recalculate reactively when the user adjusts the price through the
price adjuster. The page component should destructure `price` from
`usePriceHero`, store the per-share consensus estimates (EPS, FCF per share) as
constants, and override the forward-year values in the financials object at
render time. The data file holds the default values for the initial price; the
page component replaces them dynamically. See `src/companies/TRI/TriPage.tsx`
for the reference implementation.
