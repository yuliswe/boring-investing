# Companies — data rules

Never populate financial data files from memory or training knowledge. Every
number in `data/financials.ts` and `data/segments.ts` must come from an
actual filing (SEC EDGAR XBRL, 10-K, 10-Q) or a verifiable market-data source
(Yahoo Finance for prices). When adding or updating a company, fetch the filed
figures first and transcribe them; do not fill in values that "seem about right."

## Forward-year estimates

Each company page covers the last nine completed fiscal years plus one forward
fiscal-year estimate (the "E" year, such as FY26E), for a total of ten data
points per series. The forward estimate must come from a verifiable source, not
from memory. Prefer management guidance when the company provides it; fall back
to consensus analyst estimates otherwise. If neither management guidance nor
analyst consensus is available for a metric, fill the forward-year slot with
`null`.

Forward-year critical metrics that depend on the stock price (P/E, P/FCF, and
PEG) must recalculate reactively when the user adjusts the price through the
price adjuster. The page component should destructure `price` from
`usePriceHero`, store the per-share consensus estimates (EPS, FCF per share) as
constants, and override the forward-year values in the financials object at
render time. The data file holds the default values for the initial price; the
page component replaces them dynamically. See `src/companies/TRI/TriPage.tsx`
for the reference implementation.
