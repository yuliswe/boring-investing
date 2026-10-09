# AMD — Data Sources

## SEC filings

- 10-K annual reports FY2017 through FY2025
  <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000002488&type=10-K>
- 10-Q quarterly reports
  <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000002488&type=10-Q>

## Income statement, cash flow and segments

Taken from the rendered financial statements (`R<n>.htm`) of each 10-K, using
the latest filing that presents a given year:

- FY2025 10-K (0000002488-26-000018): income statement and cash flow
  FY23–FY25; segments FY23–FY25.
- FY2023 10-K (0000002488-24-000012): segments FY21–FY23.
- FY2022 10-K (0000002488-23-000047): income statement and cash flow
  FY20–FY22.
- FY2021 10-K (0000002488-22-000016): legacy two-segment revenue FY19–FY21.
- FY2020 10-K (0001628280-21-001185): income statement FY18–FY20.
- FY2019 10-K (0000002488-20-000008): income statement and cash flow
  FY17–FY19; legacy two-segment revenue FY17–FY18.

## XBRL data

- SEC EDGAR companyfacts API (CIK 0000002488) for year-end balances:
  StockholdersEquity, AccountsReceivableNetCurrent, LongTermDebt,
  LongTermDebtNoncurrent, LongTermDebtCurrent, ShortTermBorrowings,
  DebtCurrent; plus CashAcquiredFromAcquisition (FY22),
  IncomeTaxReconciliationChangeInDeferredTaxAssetsValuationAllowance (FY20),
  and WeightedAverageNumberOfDilutedSharesOutstanding (Q2 2026 10-Q, 1.659B).

## Market data

- Year-end and current closing prices: Yahoo Finance chart API
  (query1.finance.yahoo.com/v8/finance/chart/AMD). Current price $633.91,
  close on 2 October 2026.
- Shares, trailing P/E cross-check: stockanalysis.com/stocks/amd/statistics/

## Consensus estimates (FY26E)

- Revenue $50.88B, net income $9.35B, free cash flow $7.56B, non-GAAP EPS
  $7.58: stockanalysis.com/stocks/amd/forecast/ (49 analysts, as of
  30 September 2026).

## Reverse DCF

- Shares outstanding (1.63B): stockanalysis.com, October 2026, <https://stockanalysis.com/stocks/amd/>
- Net cash (9.89B): $13.11B of cash, cash equivalents, and short-term investments minus $3.23B of debt, Q2 2026 10-Q
- Starting value: Consensus FY26E free cash flow of $7.56B, as in the Cash Flow section.
