# CSU — Data sources

## Revenue

Annual revenue figures (FY16–FY25) in billions USD are taken from
[companiesmarketcap.com](https://companiesmarketcap.com/constellation-software/revenue/)
and cross-checked against the company's annual press releases on
[GlobeNewsWire](https://www.globenewswire.com/). Values match the consolidated
revenue reported in CSU's annual shareholder reports filed on SEDAR+.

## Operating income

Operating income for FY21–FY25 is taken from
[Stock Analysis](https://stockanalysis.com/quote/tsx/CSU/financials/) and
[Investing.com](https://www.investing.com/equities/constellation-software-inc-income-statement).
Values for FY16–FY19 are from Eulerpool and financial data aggregators. The
FY20 figure ($630M) is an estimate derived by interpolating between FY19 and
FY21 operating margins; it should be replaced when the filed figure is
confirmed.

## Net income and EPS

Diluted EPS for FY16–FY25 is from
[companiesmarketcap.com](https://companiesmarketcap.com/constellation-software/eps/).
Net income figures are confirmed by the annual press releases:

- [FY25 results](https://www.csisoftware.com/constellation-software-inc-announces-results-for-the-fourth-quarter-and-year-ended-december-31-2025-and-declares-quarterly-dividend/)
- [FY20 results](https://www.globenewswire.com/news-release/2021/02/12/2175170/0/en/)
- [FY19 results](https://www.globenewswire.com/news-release/2020/02/13/1984977/0/en/)
- [FY18 results](https://www.globenewswire.com/news-release/2019/02/14/1725078/0/en/)

The diluted share count is stable at approximately 21.2 million throughout the
period.

## Cash flow

Operating cash flow and free cash flow for FY21–FY25 are from
[Stock Analysis](https://stockanalysis.com/quote/tsx/CSU/financials/?p=cash-flow-statement).
Earlier years (FY16–FY20) are from the annual press releases. Capital
expenditures for FY16–FY20 are estimates based on CSU's historically low
capital intensity ($15–30M annually).

## Market data

Year-end closing prices (last trading day on or before 31 December) in
Canadian dollars are from
[digrin.com](https://www.digrin.com/stocks/detail/CSU.TO/price):

| Fiscal year | TSX close (CAD) | Est. USD price |
| ----------- | --------------- | -------------- |
| FY16        | CA$526.00       | ~US$392        |
| FY17        | CA$661.85       | ~US$525        |
| FY18        | CA$763.20       | ~US$561        |
| FY19        | CA$1,133.39     | ~US$872        |
| FY20        | CA$1,601.82     | ~US$1,261      |
| FY21        | CA$2,280.27     | ~US$1,810      |
| FY22        | CA$2,059.41     | ~US$1,514      |
| FY23        | CA$3,272.87     | ~US$2,479      |
| FY24        | CA$4,434.16     | ~US$3,079      |
| FY25        | CA$3,297.78     | ~US$2,390      |

USD prices are estimated using approximate year-end USD/CAD exchange rates for
ratio calculations.

## Derived series

P/E = estimated USD year-end price ÷ diluted EPS. P/FCF = estimated USD
year-end price ÷ free cash flow per share. FCF = operating cash flow − capital
expenditures. FCF per share = FCF ÷ 21.2M diluted shares. Net margin = net
income ÷ revenue. FCF margin = FCF ÷ revenue.

## Notes

- All dollar figures in `data/financials.json` are in billions of USD, rounded
  to two decimals.
- Figures are calendar-year values (Constellation's fiscal year ends
  31 December).
- CSU reports under IFRS. Amortization of acquired intangible assets is a
  material non-cash charge that depresses reported net income and EPS; the
  P/FCF ratio better reflects the company's cash economics.
- The FY20 operating income is an estimate and should be verified against the
  filed financial statements.
