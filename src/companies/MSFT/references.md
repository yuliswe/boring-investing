# MSFT — Data sources

## Primary filings

- [SEC EDGAR XBRL company facts — CIK 0000789019](https://data.sec.gov/api/xbrl/companyfacts/CIK0000789019.json) —
  the machine-readable 10-K figures behind `data/financials.json`: revenue,
  cost of revenue, R&D, S&M, G&A, operating income, non-operating
  income/expense, taxes, net income, diluted EPS and share count,
  share-based compensation, operating cash flow, capital expenditure,
  depreciation, intangible amortization, stockholders' equity, long-term
  debt, dividends paid and share repurchases. Annual values are taken from
  10-K filings for fiscal years FY17–FY26, with later filings (restatements)
  taking precedence.
- [SEC EDGAR — MSFT filings](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000789019&type=10-K&dateb=&owner=include&count=10) —
  filing dates for the Filings section come from the EDGAR submissions feed.
- [Microsoft Investor Relations](https://www.microsoft.com/en-us/investor) —
  the FY25 Q4 and FY26 Q4 press releases are the source for segment revenue
  on the recast segment structure adopted in FY25 (`data/segments.json`,
  FY24–FY26).

## Market data

- [Yahoo Finance — MSFT](https://finance.yahoo.com/quote/MSFT/) — fiscal
  year-end closing prices (last trading day on or before 30 June each year),
  used for the hero price and the P/E and P/FCF ratios.

## Derived series

Ratios are computed from the filed figures: P/E = fiscal year-end close ÷
diluted EPS; P/FCF = close × diluted shares ÷ free cash flow; FCF =
operating cash flow − capital expenditure; ROE = net income ÷ ending
equity; D/E = long-term debt ÷ equity. Model-dependent series: PEG = P/E ÷
trailing five-year EPS CAGR; ROIC = operating income × (1 − effective tax
rate) ÷ (equity + long-term debt); sustainable growth rate = ROE ×
(1 − dividend payout). In the Expenses section, "Total" is the sum of the
displayed lines and is marked ⚠️ because D&A and the dilution adjustment
overlap the reported cost lines.

## Free Cash Flow section

The cash-basis cost breakdown in `data/financials.json` under `cashFlow`
uses three filed values per year: cash taxes paid
(`IncomeTaxesPaidNet`), capital expenditures
(`PaymentsToAcquirePropertyPlantAndEquipment`), and working-capital change
(the net of `IncreaseDecreaseInAccountsReceivable`,
`IncreaseDecreaseInInventories`, `IncreaseDecreaseInAccountsPayable`,
`IncreaseDecreaseInContractWithCustomerLiability`, and the four
`IncreaseDecreaseInOther*` current/non-current asset/liability concepts),
all from the XBRL 10-K filings. "Cash COGS", "Cash SG&A", and "Cash R&D"
are derived by stripping D&A and SBC from the accrual operating lines
proportionally, so they represent the cash portion of each cost category.

## Notes

- All dollar figures in `data/financials.json` and `data/segments.json` are
  in billions of USD, rounded to one decimal.
- Figures are fiscal-year values (Microsoft's fiscal year ends 30 June).
