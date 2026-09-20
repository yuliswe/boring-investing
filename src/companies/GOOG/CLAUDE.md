# GOOG — Alphabet Inc.

Analytical method: [software](../../methods/software.md)

## Company-specific notes

- **Segments.** Alphabet reports three segments: Google Services (Search,
  YouTube, Android, Chrome, hardware, Google Play, Maps, Gmail), Google Cloud
  (GCP infrastructure, Google Workspace), and Other Bets (Waymo, Verily,
  Calico, and other early-stage ventures). Google Cloud was first disclosed
  as a separate segment in CY19 with figures restated back to CY17; CY16
  values in `data/segments.json` are estimates.

- **Fiscal year.** Alphabet uses the calendar year, so "CY25" covers
  January through December 2025. All figures in the data files use
  calendar-year labels.

- **Share structure.** Alphabet has three share classes: Class A (GOOGL,
  one vote), Class B (ten votes, held by founders), and Class C (GOOG, no
  vote). The ticker used throughout is GOOG (Class C). A 20-for-1 stock
  split took effect in July 2022; all per-share figures are split-adjusted.

- **EU fines.** The European Commission imposed antitrust fines of €2.4 B
  in CY17 (Google Shopping), €4.3 B in CY18 (Android), and €1.5 B in CY19
  (AdSense). These appear in `otherOperating` in the expenses data and
  significantly reduced operating income in each of those years.

- **CY17 tax charge.** The $14.5 B income-tax expense in CY17 includes a
  one-time transition tax under the Tax Cuts and Jobs Act, which depressed
  net income and EPS well below operating income that year.

- **CY22–CY23 restructuring.** Alphabet took $3.9 B in restructuring charges
  in CY23 (primarily the January 2023 layoff of approximately 12,000
  employees and office-consolidation costs). In the XBRL filings these
  charges are allocated across functional expense lines (COGS, G&A) rather
  than appearing as a separate `otherOperating` line, so `otherOperating` is
  zero for CY22–CY23.

## Data sourcing

All income-statement, cash-flow, and balance-sheet figures in
`data/financials.json` come from the SEC EDGAR XBRL companyconcept API
(CIK 0001652044). Year-end stock prices come from Yahoo Finance. Key
exceptions and approximations:

- **D&A CY16–CY20.** The XBRL "Depreciation" tag only covers CY21–CY25.
  Earlier values are derived from CapEx minus the year-over-year change in
  PP&E net (PropertyPlantAndEquipmentNet) and may be off by ±$2 B because
  of disposals and acquisitions that affect the balance sheet without
  flowing through depreciation.
- **Working capital change.** No single XBRL concept for aggregate working
  capital change exists. The values in `cashFlow` are template-consistent
  residuals derived so that the FCF chart's bars sum to the actual FCF
  margin. They absorb non-cash non-operating income reversals and deferred
  tax movements in addition to true working capital changes.
- **SBC.** The XBRL AllocatedShareBasedCompensationExpense values round
  differently across filings; the values used are from the income-statement
  compilation and are internally consistent to ±$0.2 B.
- **PEG CY16–CY20.** Set to null because computing trailing five-year EPS
  CAGR requires pre-CY16 EPS data that is outside the XBRL filing range
  for Alphabet's current CIK.
- **Segments.** Segment revenue in `data/segments.json` comes from the
  10-K narrative disclosures, not from the XBRL aggregate API (which does
  not expose dimensional member data). CY16 segment values are estimates.
- **CY26E.** Revenue ($460B) and capex ($160B) are annualised from filed
  H1 2026 10-Q data (H1 revenue $229.7B, H1 capex $80.6B). EPS and net
  margin are null because Q2 2026 contains a large non-operating gain
  that distorts annualisation. H1 2026 FCF was barely positive at $4.3B
  (OCF $84.9B minus CapEx $80.6B), and Q2 2026 standalone FCF was
  negative (-$5.9B).
