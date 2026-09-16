# ADBE — Data Sources

## Financial statements

All income-statement, balance-sheet, and cash-flow figures are from Adobe's
audited annual reports filed with the SEC on Form 10-K. Values in
`financials.json` are in billions of US dollars, rounded to one decimal
place.

| Source filing                 | Covers           | Accession number     |
| ----------------------------- | ---------------- | -------------------- |
| FY25 10-K (filed 15 Jan 2026) | FY23, FY24, FY25 | 0000796343-26-000003 |
| FY22 10-K (filed 17 Jan 2023) | FY20, FY21, FY22 | 0000796343-23-000007 |
| FY19 10-K (filed 25 Jan 2020) | FY17, FY18, FY19 | 0000796343-20-000013 |
| FY17 10-K (filed 22 Jan 2018) | FY16             | 0000796343-18-000015 |

The raw XBRL data was extracted from the SEC EDGAR CompanyFacts API
(`CIK0000796343`).

## Segment revenue

Segment revenue in `segments.json` comes from the "Segment Information"
notes in the same four 10-K filings listed above. Adobe's three segments
are Digital Media, Digital Experience (called Digital Marketing through
FY17), and Publishing and Advertising (called Print and Publishing through
FY17).

## Stock prices

Fiscal year-end closing prices (used for P/E, P/FCF, and PEG in
`financials.json`) are from Yahoo Finance historical data for each fiscal
year-end date. Adobe's fiscal year ends the Friday nearest 30 November.

| FY   | End date    | Close   |
| ---- | ----------- | ------- |
| FY16 | 2 Dec 2016  | $99.73  |
| FY17 | 1 Dec 2017  | $179.52 |
| FY18 | 30 Nov 2018 | $250.89 |
| FY19 | 29 Nov 2019 | $309.53 |
| FY20 | 27 Nov 2020 | $477.03 |
| FY21 | 3 Dec 2021  | $616.53 |
| FY22 | 2 Dec 2022  | $341.53 |
| FY23 | 1 Dec 2023  | $612.47 |
| FY24 | 29 Nov 2024 | $515.93 |
| FY25 | 28 Nov 2025 | $320.13 |
