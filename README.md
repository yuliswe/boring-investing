# Boring Investing

**[Open the site →](https://yuliswe.github.io/boring-investing/)**

Boring Investing is a free library of one-page company analyses written for
long-term, value-oriented investors. Each page takes about ten years of a
company's reported financials and lays them out as charts and tables, so that
you can judge two things quickly: whether the business is a good one, and how
much of that quality the current share price already assumes.

The name is deliberate. The site does not cover price momentum, earnings-day
surprises, or price targets. It covers the slow-moving facts that decide
long-run returns, such as margins, returns on capital, cash generation, and
what management does with the cash.

## Who it is for

The site is meant for anyone who reads annual reports, or who would like to
without opening a 10-K for every company. That includes individual investors
building a watchlist, analysts who want a quick second view on a name, and
students learning how a value investor looks at a business. Every page assumes
you know what P/E and free cash flow are, but nothing more.

## What is covered

The library covers large, well-known businesses across several industries.

| Industry                    | Companies                                                 |
| --------------------------- | --------------------------------------------------------- |
| Software and internet       | Microsoft, Alphabet, Adobe, Amazon, Netflix               |
| Vertical-market software    | Constellation Software, Topicus.com                       |
| Semiconductors              | NVIDIA, AMD, Micron                                       |
| Payments and financial data | Mastercard, American Express, S&P Global, Thomson Reuters |
| Consumer brands             | Coca-Cola, PepsiCo, McDonald's                            |
| Apparel retail              | Lululemon, Aritzia, Groupe Dynamite                       |
| Healthcare                  | Eli Lilly, Johnson & Johnson                              |
| Homebuilding                | Lennar                                                    |
| Other                       | Berkshire Hathaway, Uber                                  |

New companies are added over time, and the site's home page always has the
current list.

## What a company page shows

Each page opens with a short description of the business and three thesis
points that summarize the case for owning it. The sections below that follow
the same order on every page, so that once you have read one, you can scan the
rest quickly.

- **Valuation.** P/E, price to free cash flow, and PEG for each year, including
  a forward estimate. You can type a different share price at the top of the
  page, and the forward ratios update to show what the stock looks like at your
  price. A Reset button restores the last close.
- **Profitability and returns.** Earnings and free cash flow per share, return
  on equity, return on invested capital, margins, and debt to equity.
- **Revenue by segment.** Each reporting segment is charted separately, so that
  a slowdown in one part of the business cannot hide behind growth in another.
- **Expenses.** Every cost line as a share of revenue, using the company's own
  categories from its income statement rather than a one-size-fits-all
  template.
- **Cash flow.** Operating, investing, and financing cash flows and free cash
  flow, which show whether reported earnings turn into cash.
- **Filings.** Links to the annual and quarterly reports the figures came from.

Most metrics have a small popover that explains how each is calculated and what to
watch for. You can also pin your own notes anywhere on a page. Those notes stay
in your browser and are never shared or uploaded.

## How companies are judged

Different businesses need different yardsticks, so each industry has a written
method that decides which metrics a page emphasizes.

- **Most companies**, including software, semiconductors, payments, and
  healthcare, are judged on franchise quality. The question is whether the
  business has a durable advantage that keeps returns on capital high, rather
  than what a discounted-cash-flow model says it is worth to the dollar.
- **Retailers and store-based consumer brands**, such as Lululemon, PepsiCo,
  and McDonald's, are judged on six things: valuation, brand health, pricing
  power and inventory discipline, store economics, margins, and capital
  allocation. A brand can fade within a few years, so the method looks for
  early signs of weakness before they reach the income statement.
- **Homebuilders** are valued on price to tangible book and on return on equity
  across a full housing cycle. P/E misleads for builders, because their
  earnings look cheapest at the peak of the cycle and most expensive at the
  bottom.

## Where the numbers come from

Every historical figure is transcribed from a company's own filings, such as
its 10-K, its 10-Q, or the equivalent annual report for a Canadian company.
Share prices come from public market data. Forward-year estimates come from
management guidance where a company gives it, and from analyst consensus
otherwise. When no credible estimate exists, the page leaves a gap instead of
filling in a guess, and nothing on the site is filled in from memory or
approximation.

## Important note

Boring Investing is an educational research notebook. It does not give buy,
sell, or hold recommendations, and nothing on the site is investment advice.
The figures are transcribed by hand and may contain errors, so check the linked
filings before relying on any number.

## For developers

The site is open source. See [docs/DEV.md](docs/DEV.md) for how it is built,
how to run it locally, and how to add a company.
