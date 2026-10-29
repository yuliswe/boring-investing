# CNQ — Data sources

Historical figures come from Canadian Natural's annual reports on Form 40-F,
read through the rendered XBRL statements on
[EDGAR](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001017413&type=40-F)
and the SEC's XBRL company facts
([CIK 0001017413](https://data.sec.gov/api/xbrl/companyfacts/CIK0001017413.json)).
Where a later filing restates a year, the later figure is used.

| Filing    | Accession            | Years used                  |
| --------- | -------------------- | --------------------------- |
| 2025 40-F | 0001017413-26-000018 | FY24, FY25                  |
| 2023 40-F | 0001017413-24-000015 | FY22, FY23                  |
| 2021 40-F | 0001017413-22-000028 | FY20, FY21                  |
| 2019 40-F | 0001017413-20-000013 | FY17 (restated), FY18, FY19 |
| 2017 40-F | 0001017413-18-000017 | FY16 balance sheet          |

## Financial statements

Product sales, royalties, revenue, every expense line, earnings before
taxes, current and deferred income tax, net earnings and diluted EPS come
from the consolidated statements of earnings. The cash flow lines come from
the consolidated statements of cash flows. Shareholders' equity, cash, long-term
debt (the XBRL `Borrowings` total, which includes the current portion, bank
facilities and commercial paper) and lease liabilities come from the balance
sheets. Diluted weighted average shares are the XBRL
`AdjustedWeightedAverageShares` facts. The statutory tax rate used in ROIC is
the `ApplicableTaxRate` from the tax reconciliation note.

## Segments and production

- Segmented revenue (product sales less royalties) for North America, North
  Sea, Offshore Africa, Oil Sands Mining and Upgrading, Midstream and
  Refining, and inter-segment elimination and other comes from the segmented
  information note in each 40-F. Each year's segments sum to consolidated
  revenue.
- Average daily production before royalties (BOE/d) comes from the
  "Total … production before royalties averaged" sentences in the annual
  MD&A: 2019 40-F (FY17–FY19), 2021 40-F (FY20–FY21), 2023 40-F (FY22–FY23)
  and 2025 40-F (FY24–FY25).
- Dividends declared per common share come from the selected annual
  information table in each annual MD&A. WTI averages and the 2022 special
  dividend come from the same MD&As.
- FY25 one-off items (the AOSP asset swap gain, North Sea, Espoir and Kossipo
  depletion charges) come from notes 5 and 6 and the depletion footnote of
  the segment note in the 2025 40-F. Non-operating items used for adjusted
  net earnings come from the 2025, 2023, 2021, 2019 and 2017 MD&As.

## Prices

- Year-end TSX closes are Yahoo Finance's `close` for CNQ.TO
  (<https://query1.finance.yahoo.com/v8/finance/chart/CNQ.TO>), accessed
  29 October 2026. Yahoo adjusts for the 2:1 split of 11 June 2024 and also
  applies a 1.021 factor on 22 August 2022 for the CA$1.50 special dividend;
  that factor is removed so prices are as traded divided by two before the
  split. FY17 22.46, FY18 16.47, FY19 21.00, FY20 15.295, FY21 26.725, FY22
  37.595, FY23 43.405, FY24 44.38, FY25 46.49.
- Current price: CA$76.78, TSX close on 28 October 2026; previous close
  CA$75.95.

## Forward estimates

- Consensus FY26 adjusted EPS (CA$6.55, 12 analysts), revenue (CA$49.18B,
  7 analysts) and free cash flow (CA$13.31B) from
  [stockanalysis.com](https://stockanalysis.com/quote/tsx/CNQ/forecast/)
  (S&P Global data; financial currency CAD), accessed 29 October 2026.
- 2026 guidance from the second-quarter release
  ([6-K, 6 August 2026](https://www.sec.gov/Archives/edgar/data/1017413/000101741326000043/a06302026q2pressrelease.htm)):
  production of 1,637–1,682 MBOE/d, operating capital of CA$5.99B plus
  CA$0.125B for carbon capture, and net acquisitions of CA$1.526B. The
  original budget was released on 16 December 2025 and revised on
  5 March 2026.
- Quarterly dividend of CA$0.625 from the
  [6-K of 6 August 2026](https://www.sec.gov/Archives/edgar/data/1017413/000101741326000045/a08062026dividend.htm),
  raised from CA$0.5875 on 5 March 2026.
- Reserve life index (about 40 years proved plus probable at the end of 2025) from the
  [Q4 2025 release](https://www.sec.gov/Archives/edgar/data/1017413/000101741326000006/a12312025q4pressrelease.htm).

## Reverse DCF

- Shares outstanding (2.0615B): 2,061,500,000 common shares at 4 August
  2026, from the Q2 2026 MD&A.
- Net cash (−17.565B): CA$17.144B of long-term debt (CA$2.214B current and
  CA$14.930B non-current) plus CA$3.039B of lease liabilities, minus
  CA$2.618B of cash, at 30 June 2026
  ([Q2 2026 interim statements](https://www.sec.gov/Archives/edgar/data/1017413/000101741326000043/a06302026q2fs.htm)).
- Actual value: FY25 free cash flow of CA$8.315B (CA$15.106B of operating
  cash flow less CA$6.791B of net capital expenditures), 2025 40-F.
- Starting value: consensus FY26E free cash flow of CA$13.31B
  (stockanalysis.com, 29 October 2026).
