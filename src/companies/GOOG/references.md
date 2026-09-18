# GOOG — Data sources

## Primary filings

- [SEC EDGAR XBRL company facts — CIK 0001652044](https://data.sec.gov/api/xbrl/companyfacts/CIK0001652044.json) —
  the machine-readable 10-K figures behind `data/financials.json`: revenue,
  cost of revenue, R&D, sales and marketing, general and administrative,
  operating income, non-operating income/expense, taxes, net income, diluted
  EPS and share count, share-based compensation, operating cash flow,
  capital expenditure, depreciation, stockholders' equity, long-term debt,
  dividends paid and share repurchases. Annual values are taken from 10-K
  filings for calendar years CY16–CY25, with later filings (restatements)
  taking precedence.
- [SEC EDGAR — GOOG filings](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001652044&type=10-K&dateb=&owner=include&count=10) —
  filing dates for the Filings section come from the EDGAR submissions feed.
- Segment revenue in `data/segments.json` (CY16–CY25) is taken from the
  XBRL segment tables in the individual 10-K filings. Google Cloud was
  first broken out as a reporting segment in CY19 with figures restated to
  CY17; CY16 values are estimates.

## Market data

- [Yahoo Finance — GOOG](https://finance.yahoo.com/quote/GOOG/) — calendar
  year-end closing prices (last trading day on or before 31 December each
  year), used for the hero price and the P/E and P/FCF ratios. All per-share
  figures are adjusted for the July 2022 20-for-1 stock split.

## Derived series

Ratios are computed from the filed figures: P/E = calendar year-end close ÷
diluted EPS; P/FCF = close × diluted shares ÷ free cash flow; FCF =
operating cash flow − capital expenditure; ROE = net income ÷ ending
equity; D/E = long-term debt ÷ equity. Model-dependent series: PEG = P/E ÷
trailing five-year EPS CAGR; ROIC = operating income × (1 − effective tax
rate) ÷ (equity + long-term debt); sustainable growth rate = ROE ×
(1 − dividend payout). Alphabet began paying dividends in CY24, so earlier
years' sustainable growth rate equals ROE. In the Expenses section, "Total"
is the sum of the displayed lines and is marked ⚠️ because D&A and the
dilution adjustment overlap the reported cost lines.

## Free Cash Flow section

The cash-basis cost breakdown in `data/financials.json` under `cashFlow`
uses three filed values per year: cash taxes paid
(`IncomeTaxesPaidNet`), capital expenditures
(`PaymentsToAcquirePropertyPlantAndEquipment`), and working-capital change
(the net of receivables, payables, deferred revenue, and other current
asset/liability movements), all from the XBRL 10-K filings. "Cash COGS",
"Cash SG&A", and "Cash R&D" are derived by stripping D&A and SBC from the
accrual operating lines proportionally.

## Notes

- All dollar figures in `data/financials.json` and `data/segments.json` are
  in billions of USD, rounded to one decimal.
- Figures are calendar-year values (Alphabet's fiscal year ends 31 December).
