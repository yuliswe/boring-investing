# Companies — data rules

Never populate financial data files from memory or training knowledge. Every
number in `data/financials.ts` and `data/segments.ts` must come from an
actual filing (SEC EDGAR XBRL, 10-K, 10-Q) or a verifiable market-data source
(Yahoo Finance for prices). When adding or updating a company, fetch the filed
figures first and transcribe them; do not fill in values that "seem about right."
