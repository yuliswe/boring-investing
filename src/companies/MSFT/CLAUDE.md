# MSFT — Microsoft Corporation

Analytical method: [software](../../methods/software.md)

## Company-specific notes

- **Segments.** Microsoft reports three segments: Productivity & Business
  Processes (Office, LinkedIn, Dynamics), Intelligent Cloud (Azure, server
  products, GitHub), and More Personal Computing (Windows, devices, gaming). All
  three are tracked in `data/segments.json`.

- **Fiscal year.** Microsoft's fiscal year ends 30 June, so "FY24" covers
  July 2023 through June 2024. All figures in the data files use fiscal-year
  labels.

- **Recurring revenue.** The majority of revenue is now contractually recurring
  (Microsoft 365 subscriptions, Azure consumption, enterprise agreements), though
  Microsoft does not break out a single "recurring revenue" line. The shift from
  licence to subscription is largely complete.

- **Stress test.** The stress test removes OpenAI and Anthropic from FY25
  to FY27E. Revenue loses the $24.1B of FY26 OpenAI revenue disclosed in the
  10-K, reused as an FY27E floor, and an ~$8.5B FY25 estimate from leaked
  OpenAI figures. EPS also drops investment gains and, in FY27E, write-offs
  of both stakes, with no tax shield. Inputs are in `stressTest` in
  `data/financials.ts`, and sources are in `references.md`.
