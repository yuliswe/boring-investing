# NOW — Data Sources

## Financial statements

All income-statement, balance-sheet, and cash-flow figures are from
ServiceNow's audited annual reports filed with the SEC on Form 10-K (CIK
0001373715). Values in `data/financials.ts` are in billions of US dollars.

| Source filing                 | Covers           | Accession number     |
| ----------------------------- | ---------------- | -------------------- |
| FY25 10-K (filed 29 Jan 2026) | FY23, FY24, FY25 | 0001373715-26-000007 |
| FY23 10-K (filed 25 Jan 2024) | FY22 balance     | 0001373715-24-000030 |
| FY22 10-K (filed 31 Jan 2023) | FY20, FY21, FY22 | 0001373715-23-000035 |
| FY19 10-K (filed 20 Feb 2020) | FY17, FY18, FY19 | 0001373715-20-000072 |

Shareholders' equity, debt, depreciation and stock-based compensation were
cross-checked against the SEC EDGAR CompanyFacts API
(`CIK0001373715`). FY17 revenue is the ASC 606 restated figure from the FY19
10-K.

## Derived figures

- Diluted EPS for FY17 to FY22 is the filed figure divided by five for the
  December 2025 split; FY23 to FY25 are as restated in the FY25 10-K.
- Free cash flow is net cash provided by operating activities minus purchases
  of property and equipment.
- ROE uses average shareholders' equity. ROIC is operating income taxed at
  21% divided by year-end debt plus equity. Debt to equity uses the carrying
  value of convertible and senior notes and excludes operating leases.
- P/E is not shown for FY17 and FY18 (net losses) or FY20 and FY21 (above
  500×).
- Funds from operations is operating cash flow minus the filed changes in
  operating assets and liabilities. "Purchase/Sale of investments" nets
  purchases against sales and maturities of marketable securities; "Other
  investing" is the remainder of investing activities after capital
  expenditures, business combinations and marketable securities.

## Stock prices

Fiscal year-end closing prices, split-adjusted, from Yahoo Finance.

| FY   | End date    | Close   |
| ---- | ----------- | ------- |
| FY17 | 29 Dec 2017 | $26.08  |
| FY18 | 31 Dec 2018 | $35.61  |
| FY19 | 31 Dec 2019 | $56.46  |
| FY20 | 31 Dec 2020 | $110.09 |
| FY21 | 31 Dec 2021 | $129.82 |
| FY22 | 30 Dec 2022 | $77.65  |
| FY23 | 29 Dec 2023 | $141.30 |
| FY24 | 31 Dec 2024 | $212.02 |
| FY25 | 31 Dec 2025 | $153.19 |

The default page price of $112.95 is a Yahoo Finance intraday quote at
11:02 ET on 29 October 2026; the reference close is $150.13 on 28 October 2026.

## Forward estimates (FY26E)

- Management guidance from the Q3 2026 earnings release (8-K, filed
  28 Oct 2026, accession 0001373715-26-000092): subscription revenue of
  $15,780M–$15,790M, GAAP operating margin of 10%, GAAP operating cash flow
  of 37% of revenue, capital expenditures of 3% of revenue, and 1.04B
  weighted-average diluted shares.
- Consensus from stockanalysis.com (45 analysts, accessed 29 Oct 2026):
  revenue of $16.22B and net income of $1.49B. The site's EPS estimate of
  $4.07 is non-GAAP and is not used.
- Derived: operating income $1.62B (10% × $16.22B), operating cash flow
  $6.00B, capital expenditures $0.49B, free cash flow $5.52B (34%), GAAP EPS
  $1.43 ($1.49B / 1.04B), free cash flow per share $5.30, and professional
  services revenue $0.435B (consensus revenue minus the subscription
  guidance midpoint).

## Reverse DCF

- Shares outstanding (1.0379B): Q3 2026 10-Q balance sheet, 30 Sep 2026
  (accession 0001373715-26-000096).
- Net cash (-0.563B): $2.393B of cash and equivalents, $2.214B of marketable
  securities and $2.354B of long-term marketable securities, minus $2.086B of
  short-term and $5.438B of long-term debt, Q3 2026 10-Q.
- Starting value: FY26E free cash flow of $5.515B derived from GAAP guidance
  as above.

## Acquisitions

From the Q3 2026 10-Q business combinations note: Armis Security Ltd.
(closed 20 Apr 2026, about $7.6B in cash), Veza Technologies, Inc. (closed
2 Mar 2026, about $1.2B), and five other 2026 acquisitions for $612M. From
the same note, Moveworks, Inc. closed on 15 Dec 2025 for $2.407B.
