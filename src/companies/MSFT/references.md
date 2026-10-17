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
- Segment revenue in `data/segments.json` (FY17–FY26) is taken from the
  XBRL "Segment Revenue (Detail)" tables in the individual 10-K filings:
  FY17 from the FY19 10-K (restated under ASC 606), FY18–FY20 from the
  FY20 10-K, FY21–FY23 from the FY23 10-K, and FY24–FY26 from the FY26
  10-K. FY24 onward uses the recast segment structure adopted in FY25;
  earlier years use the pre-recast definitions.

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

## Consensus estimates

- FY27E diluted EPS ($20.50) is from the consensus analyst estimate on
  stockanalysis.com (49 analysts, accessed 22 Sep 2026). The forward P/E and
  PEG ratios use this consensus EPS with the default stock price, and
  recalculate reactively when the price adjuster changes.
- FY27E P/FCF is omitted because the wide range of analyst free cash flow
  projections ($32B to $99B) reflects high uncertainty around the capex ramp
  for AI infrastructure.

## Notes

- All dollar figures in `data/financials.json` and `data/segments.json` are
  in billions of USD, rounded to one decimal.
- Figures are fiscal-year values (Microsoft's fiscal year ends 30 June).

## Reverse DCF

- Shares outstanding (7.43B): stockanalysis.com, October 2026, <https://stockanalysis.com/stocks/msft/>
- Net cash (36.55B): $76.84B of cash, cash equivalents, and short-term investments minus $40.29B of debt, FY26 10-K; $66.6B of data-centre finance leases are excluded
- Starting value: Consensus FY27E free cash flow of $32.34B, roughly halved by AI capital spending, and consensus operating income of $182.2B less 18% tax.

## Stress test scenario

The scenario assumes OpenAI and Anthropic both cease to exist in FY27.

- Revenue from OpenAI ($24.1B in FY26, including revenue-sharing payments),
  receivables owed by OpenAI ($6.0B), and the $13.0B funding commitment:
  FY26 10-K related-party note
  <https://www.sec.gov/Archives/edgar/data/0000789019/000119312526323660/msft-20260630.htm>.
  The FY26 revenue stands in as a floor for FY27E, because neither lab
  discloses an FY27 forecast.
- OpenAI equity-method investment (~$12.0B): XBRL `EquityMethodInvestments`
  at June 30, 2026, which is mostly OpenAI.
- Anthropic stake (~$8.2B): $5B invested in November 2025
  <https://blogs.microsoft.com/blog/2025/11/18/microsoft-nvidia-and-anthropic-announce-strategic-partnerships/>
  plus the $3.2B Q4 FY26 gain
  <https://techcrunch.com/2026/07/29/microsoft-logs-3-2b-from-anthropic-investment-but-openai-was-a-mixed-bag/>.
  Microsoft does not disclose Azure revenue from Anthropic.
- OpenAI and Anthropic share of commercial RPO (~$280–310B): about 45% of
  $625B attributed to OpenAI on the Q2 FY26 call
  <https://www.constellationr.com/insights/news/microsoft-q2-strong-azure-growth-39-openai-45-rpo>,
  plus Anthropic's $30B Azure commitment.
- Diluted shares (7.451B): FY26 net income of $133.749B divided by diluted
  EPS of $17.95.
- Stressed EPS subtracts lost revenue in full with no tax shield, and the
  write-offs once, from FY27E consensus EPS of $20.50.
