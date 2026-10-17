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
  year), used for the historical P/E and P/FCF ratios. The hero price is
  the close of 16 October 2026 ($336.91, against $344.91 the day before),
  which also drives the forward P/E, PEG and reverse DCF. All per-share
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
- CY26E revenue ($459B), segment revenue (Services $368.4B, Cloud $89.6B,
  Other Bets $1.6B) and operating income ($160.9B) are annualised from the
  H1 2026 10-Q. CY26E capex ($200B) is the midpoint of the $195–205B guidance
  given on the Q2 2026 call
  <https://www.cnbc.com/2026/07/22/google-earnings-q2-goog-live-updates.html>.
  CY26E net margin is omitted because 2026 contains large non-operating
  gains. CY26E P/FCF is omitted because free cash flow is depressed by the
  capex ramp.
- CY26E free cash flow ($7.07B) and revenue ($499.6B, used only for the FCF
  margin) are consensus figures from stockanalysis.com, accessed 17 Oct 2026.
- Segment revenue excludes hedging gains and losses, which Alphabet reports
  only in total revenue, so segments do not sum exactly to total revenue.
- CY26E EPS ($13.14) is the average consensus analyst estimate from
  stockanalysis.com (52 analysts, accessed 17 Oct 2026). It is non-GAAP and
  excludes investment gains; the high estimate is $20.65. The forward P/E and
  PEG ratios use this consensus EPS with the default stock price, and
  recalculate reactively when the price adjuster changes.
- PEG is null for CY16–CY20 because computing the trailing five-year EPS
  CAGR requires pre-CY16 data that is outside the XBRL filing range for
  Alphabet's current CIK (0001652044).

## Reverse DCF

- Shares outstanding (12.23B): stockanalysis.com, October 2026, <https://stockanalysis.com/stocks/goog/>
- Net cash (142.3B): $242.5B of cash, cash equivalents, and marketable securities minus $100.2B of debt, Q2 2026 10-Q; non-marketable stakes are excluded
- Starting value: Consensus CY26E free cash flow of $7.07B, crushed by $195–205B of guided capital spending, and H1 2026 operating income annualised to $160.9B, less 18% tax.

## Stress test

The scenario removes Anthropic from CY25 and CY26E. Alphabet's filings never
name Anthropic, so the Anthropic figures are estimates.

- Gains on equity securities by quarter and their EPS effect (CY25: $0.62,
  $0.08, $0.68, $0.15): footnotes to Alphabet's quarterly earnings releases.
  Q1 2025 gains are tied to SpaceX
  <https://www.bloomberg.com/news/articles/2025-04-24/alphabet-s-profit-gets-8-billion-boost-from-spacex-investment>,
  and Q3 2025 gains partly to Anthropic
  <https://www.bloomberg.com/news/articles/2025-10-31/alphabet-amazon-stakes-in-anthropic-boost-profit-by-billions>.
- CY25 revenue from Anthropic (≤ $7.3B): Anthropic's reported 2025 compute and
  infrastructure costs from its S-1
  <https://finance.yahoo.com/technology/ai/articles/anthropic-ipo-prospectus-2025-revenue-120505564.html>.
- CY26E revenue from Anthropic (~$24.2B): UBS estimates OpenAI and Anthropic
  make up 27% of Google Cloud revenue in 2026
  <https://247wallst.com/investing/2026/08/10/48-of-google-cloud-revenue-next-year-could-come-from-just-2-companies-that-have-still-never-turned-a-profit/>,
  applied to H1 2026 Cloud revenue of $44.8B annualised.
- Anthropic stake (~$110B): $124.3B of non-marketable securities at
  30 June 2026, "primarily" one private company (Q2 2026 10-Q), less an
  estimated $6–20B of other holdings. Google's ~$13.3B invested
  <https://fortune.com/2026/07/22/anthropic-spacex-investments-google-earnings-biggest-ever-profit-quarter/>
  and $40B commitment
  <https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html>.
- Anthropic's ~$200B Google Cloud commitment (>40% of backlog):
  <https://finance.yahoo.com/sectors/technology/articles/anthropic-commits-spending-200-billion-204952501.html>.
- Diluted shares (12.22B): CY25 net income of $132.1B divided by diluted EPS
  of $10.81.
