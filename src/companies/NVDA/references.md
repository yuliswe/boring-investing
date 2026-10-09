# NVDA — Data Sources

## SEC filings

- 10-K annual reports FY2017 through FY2026
  <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001045810&type=10-K>
- 10-Q quarterly reports
  <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001045810&type=10-Q>
- CFO commentary (8-K) for Q4 results with annual cash flow summaries
  <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001045810&type=8-K>

## XBRL data

- SEC EDGAR XBRL companyconcept API (CIK 0001045810) for:
  RevenueFromContractWithCustomerExcludingAssessedTax, OperatingIncomeLoss,
  NetIncomeLoss, EarningsPerShareDiluted, GrossProfit, CostOfRevenue,
  ResearchAndDevelopmentExpense, SellingGeneralAndAdministrativeExpense,
  IncomeTaxExpenseBenefit, InterestExpense, StockholdersEquity, Assets,
  AllocatedShareBasedCompensationExpense, DepreciationDepletionAndAmortization,
  Depreciation

## Market data

- Stock price, historical year-end adjusted close: digrin.com/stocks/detail/NVDA/price
- Current price, shares outstanding, forward estimates: stockanalysis.com/stocks/nvda/
- P/E ratio cross-check: wisesheets.io/pe-ratio/NVDA

## Consensus estimates (FY27E)

- Revenue, EPS, net income, FCF: stockanalysis.com/stocks/nvda/forecast/
  (53 analysts as of September 2026)

## Segment revenue

- FY17-FY18: Q4 FY2018 CFO Commentary (SEC 8-K filing)
- FY18-FY26: lambdafin.com/articles/nvidia-revenue-by-segment-over-time,
  cross-checked with bullfincher.io for FY24-FY26

## Cash flow

- FY22-FY26: stockanalysis.com/stocks/nvda/financials/cash-flow-statement/
- FY17-FY21: Q4 CFO Commentary 8-K filings (annual summaries)
- FY20 capex ($489M): from SEC 10-K filing search results

## Off-balance-sheet commitments and guarantees

- Q2 FY27 10-Q (quarter ended July 26, 2026), Note 10, Commitments and
  Contingencies, including the SB Energy Corp. guarantees signed in August 2026
  <https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm>
- 8-K of August 17, 2026, describing the SB Energy / OpenAI residual value
  guarantees
  <https://www.sec.gov/Archives/edgar/data/1045810/000104581026000069/nvda-20260817.htm>

## Debt-funded demand

- SpaceX $40B financing (October 2026, proposed):
  <https://thenextweb.com/news/spacex-40bn-debt-nvidia-chips-apollo>,
  <https://www.fool.com/investing/2026/10/07/spacex-reportedly-wants-to-borrow-usd40-billion-for-nvidia-chips-despite-a-usd100-billion-cash-pile/>
- SpaceX credit ratings (June 18, 2026):
  <https://www.investing.com/news/stock-market-news/spacex-gets-investmentgrade-ratings-with-stable-outlook-from-top-agencies-4750942>
- NVIDIA's $21B SpaceX stake (13F, August 2026):
  <https://www.cnbc.com/2026/08/14/nvidia-discloses-21-billion-stake-in-spacex-at-end-of-second-quarter.html>
- Apollo / Valor Compute Infrastructure $3.5B (January 7, 2026):
  <https://finance.yahoo.com/news/apollo-backs-5-4-billion-130000749.html>
- Apollo $3.4B xAI chip-leasing loan (February 2026):
  <https://techfundingnews.com/apollo-3-4b-loan-xai-nvidia-chips/>
- CoreWeave $2.3B H100-collateralized facility (August 3, 2023):
  <https://finance.yahoo.com/news/coreweave-raises-2-3-billion-130901488.html>
- CoreWeave $7.5B facility (May 17, 2024):
  <https://www.prnewswire.com/news-releases/coreweave-secures-7-5-billion-debt-financing-facility-led-by-blackstone-and-magnetar-302148876.html>

## Circular financing

- FY23–FY26 equity purchases, acquisitions, and the Groq payment: SEC XBRL
  company facts (`PaymentsToAcquireEquitySecuritiesFvNi`,
  `PaymentsToAcquireBusinessesNetOfCashAcquired`,
  `PaymentsToAcquireBusinessTwoNetOfCashAcquired`)
  <https://data.sec.gov/api/xbrl/companyfacts/CIK0001045810.json>
- FY21–FY22 "Investments and other, net": FY23 10-K cash flow statement
  <https://www.sec.gov/Archives/edgar/data/1045810/000104581023000017/nvda-20230129.htm>
- First-half FY27 equity purchases, acquisitions, and Groq payment: Q2 FY27
  10-Q cash flow statement (link above)
- Intel $5.0B stake, completed December 26, 2025:
  <https://www.investing.com/news/sec-filings/intel-completes-5-billion-private-stock-sale-to-nvidia-93CH-4423685>
- Third-party debt, FY24–FY27 (GPU-backed loans and AI cloud and AI lab
  corporate debt; deal sizes as announced):
  - CoreWeave: DDTL 1.0 <https://www.prnewswire.com/news-releases/coreweave-secures-2-3-billion-debt-financing-facility-led-by-magnetar-capital-and-blackstone-to-meet-surging-demand-and-ongoing-expansion-of-specialized-cloud-infrastructure-to-power-ai-301892706.html>,
    DDTL 2.0 <https://www.blackstone.com/news/press/coreweave-secures-7-5-billion-debt-financing-facility-led-by-blackstone-and-magnetar/>,
    DDTL 3.0 <https://www.sec.gov/Archives/edgar/data/1769628/000176962825000033/ddtl30pressrelease-ex991x6.htm>,
    DDTL 4.0 <https://investors.coreweave.com/news/news-details/2026/CoreWeave-Closes-Landmark-8-5-Billion-Financing-Facility-Achieving-First-Investment-Grade-Rated-GPU-backed-Financing/default.aspx>,
    DDTL 5.0 <https://www.businesswire.com/news/home/20260518337916/en/CoreWeave-Closes-$3.1-Billion-Loan-Facility-Expanding-Access-to-Public-Markets-for-GPU-Backed-Financing>,
    DDTL 5.5 <https://www.sec.gov/Archives/edgar/data/1769628/000176962826000357/ex991pr.htm>,
    2025 notes <https://www.tipranks.com/news/company-announcements/coreweave-issues-2-billion-in-senior-notes>,
    <https://www.businesswire.com/news/home/20250728330303/en/CoreWeave-Announces-Closing-of-$1750-million-of-Senior-Notes-Offering>,
    convertibles <https://www.davispolk.com/experience/coreweave-26-billion-convertible-senior-notes-offering>,
    <https://www.lw.com/en/news/latham-advises-on-coreweave-debt-offerings>,
    <https://www.kirkland.com/news/press-release/2026/04/kirkland-advises-coreweave-on-2-75-billion-notes-offerings>,
    <https://investors.coreweave.com/news/news-details/2026/CoreWeave-Prices-Upsized-3-7-Billion-Convertible-Senior-Notes-Offering/default.aspx>
  - Lambda: <https://www.theregister.com/2024/04/05/lambda_500m_loan/>,
    <https://lambda.ai/blog/lambda-closes-1-billion-senior-secured-credit-facility>,
    <https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility>,
    <https://convergedigest.com/lambda-1-008b-fixed-rate-loan-gpu-deployments/>
  - Crusoe: <https://www.crusoe.ai/resources/newsroom/upper90-closes-usd225m-credit-facility-to-crusoe-to-expand-ai-cloud>,
    <https://www.globenewswire.com/news-release/2025/06/11/3097837/0/en/crusoe-secures-750-million-credit-facility-from-brookfield-to-accelerate-the-development-of-energy-first-ai-factories.html>
  - xAI: <https://www.investing.com/news/economy-news/morgan-stanley-markets-5-billion-for-elon-muskowned-xai-in-loans-bonds-sources-say-4087899>,
    Valor <https://finance.yahoo.com/news/apollo-backs-5-4-billion-130000749.html>,
    <https://techfundingnews.com/apollo-3-4b-loan-xai-nvidia-chips/>
  - Nebius: <https://nebius.com/newsroom/nebius-provides-financing-update>,
    <https://www.sec.gov/Archives/edgar/data/1513845/000110465926029863/tm268409d3_ex99-1.htm>,
    <https://www.sec.gov/Archives/edgar/data/0001513845/000110465926098590/tm2623513d1_ex99-1.htm>,
    <https://thenextweb.com/news/nebius-775-million-gpu-backed-debt-financing>
  - Firmus: <https://www.techpartner.news/news/firmus-secures-us10-billion-in-financing-623486>
  - Nscale: <https://www.nscale.com/press-releases/nscale-signs-1-4bn-delayed-draw-term-loan>,
    <https://www.unite.ai/nscale-closes-3b-in-term-loans/>
  - IREN: <https://www.globenewswire.com/news-release/2026/06/01/3304211/0/en/iren-closes-3-65bn-investment-grade-gpu-financing.html>
  - Zankore: <https://cryptobriefing.com/zankore-3b-loan-nvidia-chips/>
