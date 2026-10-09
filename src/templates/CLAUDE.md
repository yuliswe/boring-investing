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

When the financials carry `reverseDcf` (`ReverseDcfData` from
`base/reverseDcf.ts`), `BaseTemplate` also builds "Reverse DCF at 10%" (rank 700) and "Value per Share at 10%" (rank 710). Both read the price from
`hero.price`, so they follow the price adjuster without extra wiring. Cash
flows, `netCash` (negative for net debt) and `sharesOutstanding` are in
billions; cash flows and net cash are in the reporting currency, and `fxRate`
converts them into the trading currency when the two differ. Each entry in
`paths` is one projected cash flow series that starts from its `forward`
value, so a company can show an adjusted measure beside reported free cash
flow.

A child template (e.g. `SoftwareTemplate`) builds its own sections from typed
financial data and passes them as `sections` to `BaseTemplate`. Any
stock-specific sections from the page come through as `childSections`. Both
lists merge by rank, so a page can interleave sections at any position.

## Adding a child template

Every template must extend `BaseTemplate` — render it as the root element and
delegate layout to it. No template should implement its own navbar, hero, section
ordering, or footer; those belong to `BaseTemplate`.

1. Create `src/templates/<Type>Template.tsx`.
2. Accept typed financial data and build sections from it.
3. Render `BaseTemplate` as the root, passing those sections plus any
   caller-provided extras through its props.
4. Register the template name in `CompanyTemplate` in `src/lib/stocks.ts`.
