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
  the close of 30 October 2026 ($278.22, against $282.32 the day before),
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
- CY26E revenue ($476.4B), segment revenue (Services $374.0B, Cloud $100.7B,
  Other Bets $1.6B), operating income ($161.4B) and the expense lines are the
  nine months to 30 September 2026 annualised (× 4/3), from the Q3 2026 10-Q
  filed 29 Oct 2026
  <https://www.sec.gov/Archives/edgar/data/0001652044/000165204426000084/goog-20260930.htm>.
  CY26E capex ($200B) is the midpoint of the $195–205B guidance, which the
  Q3 2026 call left unchanged
  <https://www.cnbc.com/2026/10/28/alphabet-googl-earnings-q3-2026.html>.
  CY26E dividends ($10.9B) annualise the $8.2B paid in the first nine months.
  CY26E net margin is omitted because 2026 contains large non-operating
  gains. CY26E P/FCF is omitted because free cash flow is negative.
- CY26E free cash flow (-$17.95B) and revenue ($499.6B, used only for the FCF
  margin) are consensus figures from stockanalysis.com, accessed 2 Nov 2026
  <https://stockanalysis.com/stocks/goog/forecast/>.
- 2026 financing (no buybacks, $42.9B of common stock and $19.1B of
  mandatory convertible preferred issued, $85.2B of debt raised and $8.9B
  repaid) is from the nine-month cash flow statement in the Q3 2026 10-Q.
- Segment revenue excludes hedging gains and losses, which Alphabet reports
  only in total revenue, so segments do not sum exactly to total revenue.
- CY26E EPS ($14.14) is the average consensus analyst estimate from
  stockanalysis.com (46 analysts, accessed 2 Nov 2026); the high estimate is
  $19.70 and the low $11.26. Nine-month GAAP diluted EPS was $16.33, of which
  $8.06 came from net gains on equity securities ($2.35, $6.26 and -$0.55 in
  Q1–Q3 per the earnings-release footnotes), so analysts evidently differ on
  whether to include those gains. The forward P/E and
  PEG ratios use this consensus EPS with the default stock price, and
  recalculate reactively when the price adjuster changes.
- PEG is null for CY16–CY20 because computing the trailing five-year EPS
  CAGR requires pre-CY16 data that is outside the XBRL filing range for
  Alphabet's current CIK (0001652044).

## Reverse DCF

- Shares outstanding (12.29B): stockanalysis.com, November 2026, <https://stockanalysis.com/stocks/goog/>, matching the 12.294B on the Q3 2026 10-Q balance sheet
- Net cash (139.0B): $265.1B of cash, cash equivalents, and marketable securities (including $75.2B of SpaceX shares) minus $126.1B of debt, Q3 2026 10-Q; non-marketable stakes and the $18.0B of convertible preferred stock are excluded
- Starting value: nine-month 2026 operating income of $121.0B annualised to $161.4B, less 18% tax. Free cash flow is not used as a second path because consensus CY26E free cash flow is negative (-$17.95B), and the reverse DCF needs a positive starting value.

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
- CY26E revenue from Anthropic (~$27.2B): UBS estimates OpenAI and Anthropic
  make up 27% of Google Cloud revenue in 2026
  <https://247wallst.com/investing/2026/08/10/48-of-google-cloud-revenue-next-year-could-come-from-just-2-companies-that-have-still-never-turned-a-profit/>,
  applied to nine-month 2026 Cloud revenue of $75.5B annualised ($100.7B).
- Anthropic stake (~$115B): $128.2B of non-marketable securities under the
  measurement alternative at 30 September 2026, which "primarily consist of
  our investment in one private company" (Q3 2026 10-Q), less an estimated
  $13B of other holdings. Google's ~$13.3B invested
  <https://fortune.com/2026/07/22/anthropic-spacex-investments-google-earnings-biggest-ever-profit-quarter/>
  and $40B commitment
  <https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html>.
- Anthropic's ~$200B Google Cloud commitment (over a third of the $560.8B
  Google Cloud backlog at 30 September 2026):
  <https://finance.yahoo.com/sectors/technology/articles/anthropic-commits-spending-200-billion-204952501.html>.
- Diluted shares (12.22B): CY25 net income of $132.1B divided by diluted EPS
  of $10.81. CY26E uses the 12.32B nine-month weighted diluted shares from the
  Q3 2026 10-Q.

## Off-balance-sheet commitments (30 September 2026)

From the Q3 2026 10-Q: material purchase commitments of $924.4B, of which
$802.1B are multi-year and $213.4B are due within 12 months (MD&A, Future
Cash Commitments); leases not yet commenced of $130.5B (Note 4); credit
derivative notional of $48.0B and the $20.0B milestone-based equity
derivative (Note 3); and financial guarantees of $16.2B for power equipment
plus $6.6B of TPU repurchase obligations (Note 10).
