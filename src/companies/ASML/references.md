# ASML — Data sources

## Primary filings

- [SEC EDGAR XBRL companyconcept API — CIK 0000937966](https://data.sec.gov/api/xbrl/companyconcept/CIK0000937966/us-gaap/) —
  net sales (`RevenueFromContractWithCustomerExcludingAssessedTax`), cost of
  sales, gross profit, R&D, SG&A, operating income, income tax, net income,
  diluted EPS, diluted shares, D&A, stock-based compensation, equity-method
  income and cash taxes paid (`IncomeTaxesPaidNet`) for FY16–FY25.
- Q4 6-K financial statements, for the cash flow statement:
  [FY24–25](https://www.sec.gov/Archives/edgar/data/937966/000162828026003701/financialstatementsusgaa.htm),
  [FY22–23](https://www.sec.gov/Archives/edgar/data/937966/000093796624000003/financialstatementsusgaapq.htm),
  [FY20–21](https://www.sec.gov/Archives/edgar/data/937966/000093796622000004/financialstatementsusgaapq.htm),
  [FY18–19](https://www.sec.gov/Archives/edgar/data/937966/000093796620000003/financialstatementsusgaapq.htm),
  [FY16–17](https://www.sec.gov/Archives/edgar/data/937966/000093796618000003/financialstatementsusgaapq.htm).
- 20-F XBRL pages for sales by technology, end use and region:
  [FY23–25](https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/R66.htm),
  [FY21–23](https://www.sec.gov/Archives/edgar/data/937966/000093796624000008/R62.htm),
  [FY18–20](https://www.sec.gov/Archives/edgar/data/937966/000093796621000007/R66.htm),
  [FY16–18](https://www.sec.gov/Archives/edgar/data/937966/000093796619000007/R132.htm).
  Installed Base Management is net sales minus net system sales.
- [FY25 20-F](https://www.sec.gov/Archives/edgar/data/0000937966/000162828026011378/asml-20251231.htm) —
  purchase obligations (€12.7B, €9.6B within one year), contract liabilities
  (€19.4B), customer concentration (four customers above 10%, 61.2% of sales)
  and the Mistral AI investment.
- [Q3 2026 6-K financial statements](https://www.sec.gov/Archives/edgar/data/937966/000162828026065813/financial_statementsxusx.htm)
  and [press release](https://www.sec.gov/Archives/edgar/data/0000937966/000162828026065813/pressreleasefinancialresul.htm) —
  quarterly results, the €509.7M gain on equity investments, the €2.24B
  equity-investment balance, cash and short-term investments of €12.74B, and
  FY26 guidance of €44–45B of sales at about 56% gross margin.
- [SEC EDGAR filing index](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000937966&type=&dateb=&owner=include&count=40) —
  filing dates.

## Market data and consensus

- [Yahoo Finance — ASML.AS](https://finance.yahoo.com/quote/ASML.AS/history/) —
  Euronext year-end closes for the historical P/E and P/FCF. The FY25 close
  of €921.40 came from a search result and matches stockanalysis's
  dividend-adjusted €915.81.
- [stockanalysis.com — AMS:ASML history](https://stockanalysis.com/quote/ams/ASML/history/) —
  the hero price, €1,236.80 at the 17 November 2026 close against €1,306.60
  on 16 November.
- [stockanalysis.com — ASML forecast](https://stockanalysis.com/stocks/asml/forecast/) —
  FY26E revenue of €44.48B, EPS of €41.33 (35 analysts) and free cash flow of
  €15.74B, as of 16 October 2026. The site labels them in dollars, but they
  match ASML's euro guidance and are treated as euros.

## Derived values

- ROE uses average equity, and ROIC is operating income after tax over
  average equity plus debt minus cash and short-term investments.
  Stockanalysis's ROE matches; its ROIC differs by 2–3 points.
- Sustainable growth rate is ROE times one minus dividends paid over net
  income.
- FY26E net income is consensus EPS times 384M diluted shares, and FY26E FCF
  per share is consensus free cash flow over the same share count.
- Net cash for the reverse DCF is €12.74B of cash and short-term investments
  minus an estimated €2.70B of debt. The current portion of debt at
  27 September 2026 is not disclosed, so debt is the €4.39B at year-end 2025
  less €1.69B repaid in the first nine months of 2026.

## Stress test

The scenario removes AI hype and circular financing from FY25 and FY26E.
ASML does not split its sales into AI and non-AI, so every deduction is an
estimate built from the inputs below.

- **Baseline.** ASML's [November 2022 Investor Day](https://www.asml.com/en/news/press-releases/2022/asml-investor-day-2022),
  held on 11 November, three weeks before ChatGPT, guided to €30–40B of 2025
  sales and €44–60B in 2030. The low path runs from €30B in 2025 at 8% a year
  towards €44B in 2030, which gives €30.0B for FY25 and €32.4B for FY26E. The
  [November 2024 Investor Day](https://www.sec.gov/Archives/edgar/data/937966/000093796624000024/pressreleaseinvestorday2024.htm)
  kept the 2030 range.
- **AI-driven sales.** An estimated €8.5B in FY25 and €17.6B in FY26E, taken
  as 30% and 45% of system sales plus half those shares of service sales. The
  shares are sized from the AI share of wafer fab equipment, which multiplies
  [Lam Research's estimate](https://ca.investing.com/news/stock-market-news/lam-research-at-citis-2026-global-tmt-conference-ai-demand-lifts-outlook-93CH-4833097)
  of $9–10B of equipment per $100B of AI data center capex by hyperscaler
  capex, against [SEMI's WFE totals](https://bits-chips.com/article/semi-equipment-spending-edges-up-in-2025-before-jumping-in-2026/),
  and scaled down because China, treated as non-AI, made up 33% and about 20%
  of ASML's sales. Supporting context comes from
  [TSMC's AI accelerator share](https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-01/51d09df96cd89ac19d65af39032b038dc2896a24/TSMC%204Q25%20Transcript.pdf)
  (high-teens percent of 2025 revenue) and ASML's FY25 annual report, which
  attributes logic growth to "leading-edge foundry growth in support of strong
  AI demand".
- **Circular share.** An estimated 10% of AI-driven sales in FY25 and 20% in
  FY26E, the upper ends of ranges of 5–15% and 10–25%, which count vendor
  guarantees and backstops as well as equity. The deals behind it are
  NVIDIA's investments in OpenAI and its data center guarantees
  ([NVIDIA 10-Q](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000069/nvda-20260817.htm)),
  and hyperscaler and vendor stakes in OpenAI and Anthropic
  ([summary](https://en.wikipedia.org/wiki/AI_build-out_financing)).
- **Split.** The circular line is the circular share times AI-driven sales
  (€0.85B and €3.52B), and the other AI line is the rest of the revenue above
  the baseline (€1.85B and €8.58B), so the two do not overlap.
- **Lost profit.** 55% of lost sales comes out of operating income, the
  middle of 33–65% in the 2008, 2009 and 2012 downturns and 52% on the way up
  from FY24 to FY25 ([FY09 20-F](https://www.sec.gov/Archives/edgar/data/937966/000095012310006383/u08158e20vf.htm),
  [FY13 20-F](https://www.sec.gov/Archives/edgar/data/0000937966/000119312514046822/d546896d20f.htm)),
  taxed at ASML's expected 17% rate for 2026.
- **Mistral AI.** The €1.33-per-share Q3 2026 revaluation gain is removed
  from FY26E consensus on the assumption that consensus includes it, and the
  €2.24B stake is written off in the year of the collapse
  ([Series D](https://www.techzine.eu/news/applications/144205/asml-maintains-stake-in-mistral-with-400-million/)).
- **Not modelled.** The scenario keeps the €12.7B of purchase obligations
  and does not unwind any of the €19.4B of customer down payments, so a real
  collapse would hurt cash flow more than the stressed reverse DCF path shows.
  A more severe variant that removes all AI-driven sales with no substitute
  demand would cut FY26E EPS to about €18.
