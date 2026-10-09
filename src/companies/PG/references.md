# PG — Data Sources

## SEC filings

- 10-K annual reports (consolidated statements of earnings, cash flows, and
  balance sheets, plus global segment results)
  <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000080424&type=10-K>
  - FY2026 10-K (filed 4 August 2026): FY24–FY26 segment net sales, Glad
    joint venture gain, brand list by segment
  - FY2023 10-K (filed 4 August 2023): FY21–FY23 segment net sales
  - FY2020 10-K (filed 6 August 2020): FY18–FY20 segment net sales, FY19
    Shave Care impairment, Merck KGaA OTC acquisition, FY20 investing activities
  - FY2018 10-K (filed 7 August 2018): FY18 Tax Cuts and Jobs Act net charge
- Fiscal 2026 fourth-quarter earnings release (8-K exhibit 99.1, filed
  29 July 2026): fiscal 2027 guidance
  <https://www.sec.gov/Archives/edgar/data/80424/000008042626000093/fy2526q4amj8-kexhibit991.htm>

## XBRL data

- SEC EDGAR XBRL companyfacts API (CIK 0000080424), the source for every
  income statement, cash flow and balance sheet figure: Revenues,
  CostOfGoodsAndServicesSold, SellingGeneralAndAdministrativeExpense,
  AssetImpairmentCharges,
  ImpairmentOfIntangibleAssetsIndefinitelivedExcludingGoodwill,
  OperatingIncomeLoss, InterestExpense / InterestExpenseNonoperating,
  InvestmentIncomeInterest, OtherNonoperatingIncomeExpense,
  IncomeTaxExpenseBenefit, ProfitLoss, NetIncomeLoss, EarningsPerShareDiluted,
  WeightedAverageNumberOfDilutedSharesOutstanding, the three cash flow
  totals, PaymentsToAcquirePropertyPlantAndEquipment,
  PaymentsToAcquireBusinessesNetOfCashAcquired, PaymentsOfDividends,
  PaymentsForRepurchaseOfCommonStock,
  StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest,
  MinorityInterest, DebtCurrent, LongTermDebtNoncurrent,
  AccountsReceivableNetCurrent,
  EffectiveIncomeTaxRateReconciliationNondeductibleExpenseImpairmentLosses

## Market data

- Fiscal-year-end closing prices and current price: Yahoo Finance chart API
  (query1.finance.yahoo.com/v8/finance/chart/PG)

## Estimates (FY27E)

- Revenue, GAAP EPS, adjusted free cash flow productivity, capital spending,
  dividends and repurchases: company guidance in the 29 July 2026 earnings
  release (midpoints, see `CLAUDE.md`)
- For reference, stockanalysis.com consensus as of 1 October 2026 was FY27
  revenue of $88.81B and EPS of $6.98, with no free cash flow consensus shown.

## Reverse DCF

- Shares outstanding (2.32B): stockanalysis.com, October 2026, <https://stockanalysis.com/stocks/pg/>
- Net cash (-24.2B): $34.14B of debt minus $9.94B of cash, FY26 10-K
- Starting value: FY27E free cash flow of $14.46B, derived from guidance of 85–90% adjusted free cash flow productivity on 1–5% EPS growth; consensus is higher at $15.49B.
