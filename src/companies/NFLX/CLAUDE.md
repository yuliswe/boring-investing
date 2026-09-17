# NFLX — Netflix, Inc.

Analytical method: [software](../../methods/software.md)

## Company-specific notes

- **Single segment.** Netflix reports as a single operating segment
  (streaming entertainment). The geographic breakdown (UCAN, EMEA, LATAM,
  APAC) in `data/segments.json` comes from the revenue-by-region disclosure
  in the 10-K, not from segment reporting.

- **Fiscal year.** Netflix uses a calendar fiscal year ending 31 December, so
  "FY24" covers January through December 2024. All figures in the data files
  use fiscal-year labels.

- **Cost of revenue.** The largest component of cost of revenue is content
  amortization (the amortisation of capitalised content assets), which ran
  $15.3 B in FY24. Starting with the FY22 10-K, Netflix broke cost of
  revenue into "content amortization" and "other cost of revenues" on the
  face of the income statement; the data files combine them back into a
  single line.

- **Expense mapping.** Netflix's income-statement lines are Cost of Revenue,
  Marketing (renamed "Sales and marketing" from FY22), Technology and
  Development, and General and Administrative. In the data files, Marketing
  and G&A are combined into `sellingGeneralAndAdmin`, and Technology and
  Development maps to `researchAndDev`. D&A of property and equipment
  (distinct from content amortization) and stock-based compensation are
  disclosed in the cash-flow statement, not the income statement.

- **Stock split.** Netflix executed a 10-for-1 stock split on 14 November 2025. All per-share figures (EPS, FCF per share) are post-split adjusted.

- **Membership disclosure.** Netflix reported global paid streaming
  memberships quarterly through Q4 2024 and stopped disclosing the metric
  starting Q1 2025.

- **FY17 negative taxes.** The $(0.07 B) tax benefit in FY17 reflects excess
  tax benefits from stock-based compensation under ASU 2016-09, adopted that
  year.

- **FY20 non-operating.** The large negative non-operating figure in FY20
  ($-1.39 B) includes $618 M of unrealised foreign-exchange losses on
  euro-denominated debt.

- **FY25 expense estimates.** The FY25 expense line items (cost of revenue,
  SG&A, R&D) are estimated from the reported revenue and operating income
  using FY24 cost ratios adjusted for the reported margin expansion. The
  FY25 10-K was filed but the exact line-item breakdown was not available
  at the time these data files were compiled.

- **ROIC calculation.** ROIC is computed as operating income × (1 − 15%
  normalised tax rate) ÷ (total equity + total debt), using a flat 15% rate
  across all years. Netflix's effective tax rate has varied widely (negative
  in FY17–FY18 due to stock-comp deductions), so these values are
  approximate.
