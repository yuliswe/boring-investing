# SHOP — Data Sources

## Financial statements

All income-statement, balance-sheet, and cash-flow figures are from
Shopify's audited annual reports filed with the SEC (CIK 0001594805), read
from the XBRL financial report pages of each filing. Values in
`data/financials.ts` are in billions of US dollars. Each year uses the latest
filing that presents it.

| Source filing                 | Covers                | Accession number     |
| ----------------------------- | --------------------- | -------------------- |
| FY25 10-K (filed 11 Feb 2026) | FY23, FY24, FY25      | 0001594805-26-000007 |
| FY23 40-F (filed 13 Feb 2024) | FY22 cash flow        | 0001594805-24-000007 |
| FY22 40-F (filed 16 Feb 2023) | FY21, FY22 income     | 0001594805-23-000011 |
| FY20 40-F (filed 17 Feb 2021) | FY19 (restated), FY20 | 0001594805-21-000008 |
| FY19 40-F (filed 12 Feb 2020) | FY18                  | 0001594805-20-000010 |
| FY17 40-F (filed 15 Feb 2018) | FY17                  | 0001594805-18-000009 |

Shareholders' equity, convertible note carrying values and diluted share
counts were cross-checked against the SEC EDGAR CompanyFacts API
(`CIK0001594805`).

## Derived figures

- Diluted EPS for FY17 to FY20 is the filed figure divided by ten for the
  June 2022 split; FY21 onward is as restated in later filings.
- Free cash flow is net cash provided by operating activities minus
  purchases of property and equipment, which matches Shopify's definition.
- ROE uses average shareholders' equity (FY16 year-end equity of $410.5M for
  FY17). ROIC is operating income taxed at the 26.5% Canadian statutory rate
  divided by year-end debt plus equity. Debt to equity uses the carrying value
  of the convertible senior notes and excludes operating leases.
- P/E is not shown for loss years (FY17 to FY19, FY22) or FY20 and FY23
  (above 400×). P/FCF is not shown for FY17, FY18 and FY22 (negative free
  cash flow) or FY19 (above 3,000×).
- Funds from operations is operating cash flow minus the filed changes in
  operating assets and liabilities, which include merchant cash advances.
- "Purchase/Sale of investments" nets purchases against maturities of
  marketable securities. "Merchant loans, net" nets purchases and
  originations of loans against repayments and sales. "Other investing" is
  the remainder of investing activities after business combinations,
  marketable securities, loans and capital expenditures.
- Non-operating "Losses (gains) on equity and other investments" sums the
  realized and unrealized lines, the equity method investment line and the
  FY25 realized loss on the embedded derivative.

## Stock prices

Fiscal year-end closing prices, split-adjusted, from the Yahoo Finance chart
API.

| FY   | End date    | Close   |
| ---- | ----------- | ------- |
| FY17 | 29 Dec 2017 | $10.10  |
| FY18 | 31 Dec 2018 | $13.85  |
| FY19 | 31 Dec 2019 | $39.76  |
| FY20 | 31 Dec 2020 | $113.19 |
| FY21 | 31 Dec 2021 | $137.74 |
| FY22 | 30 Dec 2022 | $34.71  |
| FY23 | 29 Dec 2023 | $77.90  |
| FY24 | 31 Dec 2024 | $106.33 |
| FY25 | 31 Dec 2025 | $160.97 |

The default page price of $144.57 is a Yahoo Finance intraday quote at
14:46 ET on 3 November 2026; the reference close is $156.22 on
2 November 2026.

## Forward estimates (FY26E)

- Consensus from stockanalysis.com (S&P Global Market Intelligence,
  accessed 3 Nov 2026, after Q3 results): revenue of $15.26B, net income of
  $2.10B, and free cash flow of $2.86B (49 analysts). The site's EPS of $1.91
  and operating income of $2.79B are non-GAAP and are not used.
- Management guidance from the Q3 2026 earnings release (8-K, filed
  3 Nov 2026, accession 0001594805-26-000067), for Q4 2026 only: revenue
  growth at a low-thirties percentage, gross profit growth at a high-twenties
  percentage, operating expenses at 29%–30% of revenue, and a free cash flow
  margin consistent with Q4 2025 (19.5%).
- Nine-month actuals from the Q3 2026 10-Q (accession
  0001594805-26-000068): revenue $10.495B, operating income $1.438B,
  operating cash flow $1.957B, capital expenditures $0.011B, and 1.2907B
  diluted shares in Q3.
- Derived: GAAP operating income of $2.199B, which is the nine-month actual
  plus a Q4 estimate of $0.761B (Q4 2025 gross profit of $1.693B grown 28%,
  minus operating expenses at 29.5% of Q4 revenue of $4.765B implied by
  consensus). Guidance also implies free cash flow of $2.87B, close to the
  consensus. GAAP EPS of $1.63 and free cash flow per share of $2.22 divide
  the consensus figures by Q3 2026 diluted shares.

## Reverse DCF

- Shares outstanding (1.2864B): 1,208.3M Class A and 78.1M Class B shares,
  Q3 2026 10-Q balance sheet, 30 Sep 2026.
- Net cash (5.251B): $1.868B of cash and equivalents, $2.859B of marketable
  securities and $0.524B of long-term investments, with no debt, Q3 2026
  10-Q. The $4.911B of equity and other investments and the $0.538B Flexport
  equity method investment are excluded.
- Starting value: FY26E consensus free cash flow of $2.86B.

## Share repurchases

From the Q3 2026 10-Q: the board authorized $2.0B of repurchases in the
first quarter of 2026 (effective 17 February 2026) and $3.0B more in the
second quarter. Through 30 September 2026 Shopify repurchased 21,145,824
Class A shares at an average of $117.09, for $2.476B, leaving $2.524B
authorized.
