# Financial companies — analytical method

This method applies to companies that lend or take credit risk on their own
balance sheet and are regulated on their capital: banks, card issuers and
consumer lenders, including card networks that also issue and fund their own
cards. It takes a **franchise-quality** approach rather than a
discounted-cash-flow model. The goal is to judge whether the business earns a
return on equity well above its cost of equity through a full credit cycle, and
whether the price already assumes that it does.

## Why the usual metrics break

For a lender, debt and deposits are raw material rather than financing, so the
tools built for industrial companies mislead:

- **Free cash flow is not earning power.** Operating cash flow swings with the
  growth of loans and deposits, and investing cash flow is mostly new lending
  rather than capital expenditure. P/FCF and FCF margin move with the size of
  the loan book, not with profitability.
- **Enterprise value does not apply.** Cash is funded by deposits and debt
  funds loans, so neither is surplus capital or a claim to subtract. The
  company is valued on its equity alone, and the reverse DCF sets net cash to
  zero and runs on net income.
- **Capital is the constraint.** Regulators require equity in proportion to
  risk-weighted assets, so part of every year's earnings must be retained to
  fund loan growth. Only what is left over can be paid out.

The metrics are grouped into five sections, in the order a reader should take
them.

## 1. Valuation

| Metric              | Calculation                                                                | What to watch for                                                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P/E ratio           | Year-end price ÷ diluted EPS                                               | Compare it with the stock's own history. Reserve builds depress EPS in a downturn and reserve releases inflate it in a recovery, so read it against normalized earnings rather than one year. |
| Price-to-book (P/B) | Year-end price ÷ book value per share                                      | Only meaningful beside ROE. A high multiple of book is justified when ROE is far above the cost of equity, and is fragile when ROE is at a cyclical peak.                                     |
| Justified P/B       | (ROE − g) ÷ (cost of equity − g), with g the long-run growth of book value | The gap between this and the actual P/B shows what ROE the price assumes. Use a full-cycle ROE, not the latest year.                                                                          |

## 2. Returns on equity

| Metric                           | Calculation                                                      | What to watch for                                                                                                                                            |
| -------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Return on equity (ROE)           | Net income ÷ average of opening and closing shareholders' equity | A level sustained well above the cost of equity, including through recessions, points to a real franchise. Buybacks shrink equity and lift ROE on their own. |
| Return on tangible common equity | Net income to common ÷ average tangible common equity            | Strips goodwill and preferred stock, so it compares cleanly across acquirers and across years.                                                               |
| Pretax, pre-provision income     | Revenue net of interest expense − non-credit expenses            | Earning power before credit costs. It should grow steadily; provisions are the cyclical part and are judged separately below.                                |

## 3. Credit quality

Credit losses are the main risk to a lender's earnings, and they arrive late in
a cycle. These metrics show whether the loan book is deteriorating before the
income statement does.

| Metric                     | Calculation                                                    | What to watch for                                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Net write-off rate         | Net write-offs ÷ average loans, as reported                    | Compare it with the company's own history and with its pre-recession level. A steady rise over several quarters signals loosening underwriting or a weakening borrower. |
| 30+ days past due          | Loans 30 or more days delinquent ÷ total loans, as reported    | The earliest warning, since delinquencies turn into write-offs within a few quarters.                                                                                   |
| Reserve ratio              | Allowance for credit losses ÷ loans                            | Shows how much loss the company has already provisioned for. A falling ratio while write-offs rise means earnings are borrowing from the reserve.                       |
| Provisions as % of revenue | Provisions for credit losses ÷ revenue net of interest expense | The cyclical line. Average it across a full cycle to normalize earnings, and do not capitalize either a reserve-build year or a reserve-release year.                   |

## 4. Capital and distributions

| Metric                 | Calculation                                                                                | What to watch for                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| CET1 ratio             | Common equity tier 1 capital ÷ risk-weighted assets, as reported                           | Compare it with management's target range and the regulatory minimum. Capital above the target is what funds buybacks.               |
| Distributable earnings | Net income − equity retained to hold the CET1 ratio at target as risk-weighted assets grow | The lender's equivalent of free cash flow: what can be paid out without weakening the balance sheet.                                 |
| Payout ratio           | (Dividends + net share repurchases) ÷ net income                                           | A sustained ratio near 100% means loan growth is being funded by retained capital elsewhere or by a falling CET1 ratio. Check which. |
| Diluted share count    | Diluted weighted average shares                                                            | Buybacks should shrink the count. Diluted EPS growth above net income growth comes from the shrinking count.                         |

## 5. Business drivers

These depend on the company's business model, and each company page records the
ones it tracks in its own notes. For a card issuer that runs its own network
they are:

- **Spending volume** (billed business or purchase volume) and its growth, the
  base for merchant discount revenue.
- **Card fee growth**, which shows whether customers keep paying for the
  product as fees are raised.
- **Rewards and services cost as % of revenue.** Rising faster than revenue
  means the company is buying growth with richer benefits, which erodes the
  moat.
- **Net interest income** and the growth of the loan book, which add earnings
  but also add credit risk and capital requirements.

## Stress testing

A credit cycle is the scenario that matters. A stress test applies a
recession-level net write-off rate to the current loan book, adds the reserve
build that would accompany it, and shows the effect on EPS, on P/E at the
current price and on the CET1 ratio. The company's own worst years (2009 and
2020 for most US lenders) are the reference points, scaled to today's loan
book.

## What we do not do

- **No target price.** The reverse DCF shows what the price implies; the page
  does not present a valuation or a buy/sell recommendation.
- **No quarterly tracking.** Figures are fiscal-year snapshots, and quarterly
  noise is left out on purpose.
- **No peer comparison.** Each company is assessed on its own merits.
  Cross-company comparison belongs to a screen, not to a company page.
