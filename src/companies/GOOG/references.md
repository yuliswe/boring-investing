# GOOG — Data sources

## Primary filings

- [SEC EDGAR XBRL companyconcept API — CIK 0001652044](https://data.sec.gov/api/xbrl/companyconcept/CIK0001652044/us-gaap/) —
  the machine-readable 10-K figures behind `data/financials.json`: revenue
  (`Revenues`), cost of revenue (`CostOfRevenue`), R&D
  (`ResearchAndDevelopmentExpense`), selling and marketing
  (`SellingAndMarketingExpense`), general and administrative
  (`GeneralAndAdministrativeExpense`), operating income
  (`OperatingIncome`), income tax (`IncomeTaxExpenseBenefit`), net income
  (`NetIncomeLoss`), diluted EPS (`EarningsPerShareDiluted`), diluted shares
  (`WeightedAverageNumberOfDilutedSharesOutstanding`), share-based
  compensation (`AllocatedShareBasedCompensationExpense`), operating cash
  flow (`NetCashProvidedByUsedInOperatingActivities`), capital expenditure
  (`PaymentsToAcquirePropertyPlantAndEquipment`), cash taxes paid
  (`IncomeTaxesPaidNet`), depreciation (`Depreciation`, CY21–CY25 only),
  stockholders' equity (`StockholdersEquity`), long-term debt
  (`LongTermDebt`), dividends paid (`PaymentsOfDividends`), and share
  repurchases (`PaymentsForRepurchaseOfCommonStock`). Annual values are from
  10-K filings for calendar years CY16–CY25, with the latest filing
  (restatements) taking precedence.
- [SEC EDGAR — GOOG filings](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001652044&type=10-K&dateb=&owner=include&count=10) —
  filing dates for the Filings section come from the EDGAR submissions feed.
- Segment revenue in `data/segments.json` (CY16–CY25) is taken from the
  segment disclosures in the individual 10-K filings. Google Cloud was first
  broken out as a reporting segment in CY19 with figures restated to CY17;
  CY16 values are estimates. Segment data cannot be fetched through the
  XBRL aggregate API (it does not expose dimensional member data).

## Market data

- [Yahoo Finance — GOOG](https://finance.yahoo.com/quote/GOOG/) — calendar
  year-end closing prices (last trading day on or before 31 December each
  year), used for the hero price and the P/E and P/FCF ratios. All per-share
  figures are adjusted for the July 2022 20-for-1 stock split.

## Derived and approximate values

Ratios are computed from the filed figures: P/E = calendar year-end close ÷
diluted EPS; P/FCF = close × diluted shares ÷ free cash flow; FCF =
operating cash flow − capital expenditure; ROE = net income ÷ ending
equity; D/E = long-term debt ÷ equity. Model-dependent series: PEG = P/E ÷
trailing five-year EPS CAGR; ROIC = operating income × (1 − effective tax
rate) ÷ (equity + long-term debt); sustainable growth rate = ROE ×
(1 − dividend payout). Alphabet began paying dividends in CY24, so earlier
years' sustainable growth rate equals ROE.

### Approximate items

- **D&A CY16–CY20.** The XBRL "Depreciation" concept only has data for
  CY21–CY25. Earlier values are approximated as CapEx minus the
  year-over-year change in PP&E net (`PropertyPlantAndEquipmentNet`). These
  may differ from the actual filed D&A by up to ±$2 B because of disposals,
  acquisitions, and intangible amortisation that affect the balance sheet
  without flowing through operating depreciation.
- **Working capital change.** No single XBRL concept covers the aggregate
  working capital change on the cash flow statement. The values stored in
  `cashFlow.workingCapitalChange` are template-consistent residuals, derived
  so that the FCF chart's stacked bars sum correctly to the actual FCF
  margin (= OCF − CapEx as a percentage of revenue). This residual also
  absorbs non-cash non-operating income reversals and deferred-tax
  movements, so it is not equivalent to the filed "changes in assets and
  liabilities" line.
- **Non-operating income.** The `nonOperating` field in `expenses` is
  derived as NI + Taxes − OI to maintain internal consistency (the filed
  XBRL `NonoperatingIncomeExpense` differs slightly because it excludes
  minority interest).

## Free Cash Flow section

The cash-basis cost breakdown in `data/financials.json` under `cashFlow`
uses three values per year: cash taxes paid, working-capital change
(derived residual; see above), and capital expenditures. "Cash COGS",
"Cash SG&A", and "Cash R&D" in the chart are derived by stripping D&A and
SBC from the accrual operating lines proportionally.

In the Expenses section, "Total" is the sum of the displayed lines and is
marked ⚠️ because D&A and the dilution adjustment overlap the reported cost
lines.

## Notes

- All dollar figures in `data/financials.json` and `data/segments.json` are
  in billions of USD, rounded to one decimal.
- Figures are calendar-year values (Alphabet's fiscal year ends 31 December).
- CY26E values are estimates informed by filed H1 2026 10-Q data: revenue
  ($460B) annualises the H1 2026 total of $229.7B, and capex ($160B)
  annualises H1 2026 capex of $80.6B. CY26E EPS and net margin are null
  because Q2 2026 contains an outsized non-operating gain ($112.2B net
  income on $119.8B revenue) that makes annualisation unreliable.
- PEG is null for CY16–CY20 because computing the trailing five-year EPS
  CAGR requires pre-CY16 data that is outside the XBRL filing range for
  Alphabet's current CIK (0001652044).
