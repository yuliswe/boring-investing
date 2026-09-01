# Data sources for multiples, betas, and filings

Record an as-of date and source for every figure. Figures across providers won't
share a date and usually won't match the prices in the user's brokerage table —
say so rather than implying a single snapshot.

## Current & historical P/E, P/FCF

- **GuruFocus** — primary. Term pages:
  - Current TTM P/E: `gurufocus.com/term/pettm/<TICKER>`
  - The same page carries the 10-year **median** (the default anchor).
  - P/FCF: `gurufocus.com/term/price-to-free-cash-flow/<TICKER>` (use
    exchange-prefixed ticker for non-US, e.g. `TSX:CSU`).
  - "P/E without NRI" — use to detect non-recurring distortion in TTM EPS.
- **Fullratio** — secondary cross-check for 10-year mean and current P/E. Means
  run hotter than medians; prefer medians.
- **stockanalysis.com** — `/stocks/<ticker>/statistics/` carries current P/E,
  forward P/E, and **beta** (sourced from S&P Global Market Intelligence). Use
  `/quote/<exch>/<TICKER>/statistics/` for non-US listings.

Search patterns that work: `gurufocus <TICKER> PE ratio TTM 10-year median`,
`stockanalysis "The beta is" <TICKER>`.

## Beta

Betas vary materially by provider and lookback window (3-year vs 5-year), often
by 0.3+ on the same name. Quote a range, not false precision. Sources:
stockanalysis (S&P Global, ~5yr), GuruFocus (3yr), finbox/investing.com (5yr),
Motley Fool quote pages. Cash has beta 0. For a portfolio, `Σ(wᵢ × βᵢ)`.

## Per-market venues for the underlying filings

- **US**: SEC EDGAR (10-K/10-Q/8-K). Earnings press-release 8-K exhibits are more
  token-efficient than the full 10-K for financial-statement data.
- **Canada (TSX)**: SEDAR+ (AIF, MD&A, audited financials).
- **Europe (Euronext)**: local regulator — e.g. AMF Universal Registration
  Document (URD) for French names.
- **Foreign private issuers**: 20-F, whose chapters map to standard 10-K items.

## Cross-checking

When two sources disagree on a current multiple, prefer the one whose as-of date
is closest to today and note the discrepancy. When they disagree on a historical
anchor, prefer the median source and treat the mean as an upper-bound sensitivity.
