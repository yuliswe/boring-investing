# LULU — Data sources

Historical figures for the metric sections come from Lululemon's annual
reports on Form 10-K, read through the SEC's XBRL company facts
([CIK 0001397187](https://data.sec.gov/api/xbrl/companyfacts/CIK0001397187.json))
and checked against the filings on
[EDGAR](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001397187&type=10-K).
Where a later filing restates a year, the later figure is used.

## Financial statements

Revenue, cost of goods sold, income from operations, income tax expense, net
income, diluted EPS, diluted weighted average shares, operating cash flow,
purchases of property and equipment, inventory, cash and cash equivalents,
stockholders' equity, operating lease liabilities and the weighted-average
operating lease discount rate are taken from the 10-Ks for fiscal 2015 to
fiscal 2025. Lululemon reported no borrowings and no short-term investments in
any of those years.

## Segment and channel revenue

- Revenue by channel (company-operated stores, e-commerce, other) comes from
  the revenue disaggregation note. E-commerce was called direct to consumer
  through the fiscal 2022 10-K.
- Americas revenue comes from the segment note. Before the September 2024
  acquisition of the Mexico operations, sales to the Mexico licensee were
  recorded within Canada, so they are inside the Americas in every year.
- China Mainland revenue is first disclosed for fiscal 2021.

## Operating metrics

Store counts and comparable sales growth come from the 10-K MD&A. The fiscal
2015 count of 363 stores is the base for fiscal 2016 net openings.

## Derived metrics

- Free cash flow is operating cash flow minus purchases of property and
  equipment. Under US GAAP, operating lease payments stay in operating cash
  flow, so no lease adjustment is made.
- P/E and P/FCF use the NASDAQ closing price on the last trading day of each
  fiscal year, from Yahoo Finance, divided by diluted EPS and by free cash flow
  per diluted share.
- Lease-adjusted ROIC adds the implied interest on operating leases (average
  lease liability times the weighted-average discount rate) to income from
  operations, applies the effective tax rate, and divides by the average of
  opening and closing invested capital (stockholders' equity plus borrowings
  plus operating lease liabilities minus cash). Fiscal 2019 opening invested
  capital uses the $651.1M of lease liabilities recognized on adoption of
  ASC 842.
- Inventory growth minus sales growth, revenue per store and net openings use
  fiscal 2015 inventory ($284.0M), revenue ($2,060.5M) and store count as the
  base for fiscal 2016.

## Forward estimates

- Consensus revenue, operating income, net income, EPS, gross margin and free
  cash flow for fiscal 2026 from 30 analysts on
  [stockanalysis.com](https://stockanalysis.com/stocks/lulu/forecast/).
