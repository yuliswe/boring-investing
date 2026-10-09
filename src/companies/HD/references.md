# HD — Data sources

Historical figures come from Home Depot's annual reports on Form 10-K, read
through the SEC's XBRL company facts
([CIK 0000354950](https://data.sec.gov/api/xbrl/companyfacts/CIK0000354950.json))
and checked against the filings on
[EDGAR](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000354950&type=10-K).
Where a later filing restates a year, the later figure is used.

## Financial statements

Net sales, cost of sales, SG&A, depreciation and amortization, operating
income, interest expense, interest and other (net), provision for income
taxes, net earnings, diluted EPS, diluted weighted average shares, the cash
flow statement lines, merchandise inventories, cash and cash equivalents,
stockholders' equity, commercial paper, long-term debt (including current
installments and finance leases), operating lease liabilities and the
weighted-average operating lease discount rate come from the 10-Ks for fiscal
2015 to fiscal 2025. Interest and investment income is interest expense plus
interest and other (net); it matches the tagged figure in every year where
both are tagged. The FY18 impairment loss ($247M, Interline trade names) is
operating income subtracted from gross profit less SG&A and D&A.

## Segment and product-line revenue

- Net sales by product line (Building Materials, Décor, Hardlines, Other)
  and by geography (U.S. and outside the U.S.) come from the revenue
  disaggregation and segment notes. FY17–FY21 are from the FY19–FY23 10-Ks,
  FY22 is restated in the FY24 10-K after the Q1 FY24 regrouping, and
  FY23–FY25 are restated in the FY25 10-K after the Q1 FY25 regrouping.
- "Other" is the SRS business (with GMS from September 2025), which forms
  the Other segment from FY24.

## Operating metrics

Comparable sales growth, customer transactions, average ticket, sales per
retail square foot, store counts and online share of net sales come from the
10-K MD&A and Item 2. The FY16 count of 2,278 stores is the base for FY17 net
openings. One-off items in the year notes (Tax Act, Interline impairment,
53rd weeks, acquisition prices and goodwill) are from the 10-K for the year.

## Derived metrics

- Free cash flow is operating cash flow minus capital expenditures. Under US
  GAAP, operating lease payments stay in operating cash flow, so no lease
  adjustment is made.
- P/E and P/FCF use the NYSE closing price on the last trading day of each
  fiscal year, from Yahoo Finance, divided by diluted EPS and by free cash
  flow per diluted share.
- Lease-adjusted ROIC adds the implied interest on operating leases (average
  lease liability times the weighted-average discount rate) to operating
  income, applies the effective tax rate, and divides by the average of
  opening and closing invested capital (stockholders' equity plus commercial
  paper and long-term debt plus operating lease liabilities minus cash). FY19
  opening invested capital uses the $6.0B of lease liabilities recognized on
  adoption of ASC 842.
- Inventory growth minus sales growth and inventory turnover use FY16
  inventory ($12.5B) and net sales ($94.6B) as the base for FY17.

## Forward estimates

- Fiscal 2026 guidance from the second-quarter earnings release
  ([8-K, 18 August 2026](https://www.sec.gov/Archives/edgar/data/354950/000035495026000145/hd_exhibit991x08022026.htm)),
  which reaffirmed the guidance first given on 24 February 2026.
- Consensus free cash flow for fiscal 2026 (period ending January 2027) from
  [stockanalysis.com](https://stockanalysis.com/stocks/hd/forecast/),
  updated 6 October 2026.
