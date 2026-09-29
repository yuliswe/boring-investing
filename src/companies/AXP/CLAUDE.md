# AXP — American Express Company

Analytical method: [software](../../methods/software.md)

## Company-specific notes

- **Business model.** American Express operates a closed-loop payment network,
  acting as both the card issuer and the payment processor. Revenue comes from
  merchant discount fees (a percentage of each transaction), annual card member
  fees, interest on card member loans, and service fees. Unlike open-loop
  networks (Visa, Mastercard), AXP takes credit risk on its own card member
  loans and funds those loans through customer deposits and debt issuance.

- **Revenue metric.** AXP reports "total revenues net of interest expense" as
  its top-line revenue metric. This nets interest income (earned on card member
  loans) against interest expense (paid on customer deposits and long-term debt)
  before adding non-interest revenue (discount revenue, card fees, service fees).
  This is different from most non-financial companies, which report gross revenue
  before interest costs.

- **Operating income.** AXP does not report a separate operating income line.
  The income statement goes directly from total revenues net of interest expense
  to total expenses to pretax income. The `operatingIncome` field in the revenue
  data is populated with pretax income as the closest equivalent.

- **Fiscal year.** Calendar fiscal year ending 31 December, so "FY25" covers
  January through December 2025.

- **FY17 TCJA charge.** GAAP net income and EPS for FY17 were depressed by a
  $2.6 billion charge for the Tax Cuts and Jobs Act (transition tax on
  accumulated foreign earnings and revaluation of deferred tax assets). This
  pushed FY17 income tax expense to $4.7B (12.7% of revenue) versus a normal
  run rate of $1.7-2.1B (4-5% of revenue), compressing net margin from a
  typical 15-17% to 7.5%.

- **COVID-19 impact.** FY20 revenue fell 17% as card member spending declined
  sharply, and provisions for credit losses spiked to $4.7B (13.1% of revenue).
  In FY21, AXP released $1.4B of COVID-era reserves (negative provision) as
  credit performance improved faster than expected, boosting pretax income to
  25.2% of revenue.

- **Expense categories.** AXP reports these expense lines between total revenues
  and pretax income: card member rewards, card member services, marketing and
  business development, salaries and employee benefits, other (net), and
  provisions for credit losses. The page combines "card member rewards" and
  "card member services" into a single line because both are direct costs of the
  card member value proposition. The expense section starts from FY2018 because
  the FY2017 expense line items were restated under ASC 606 and the restated
  breakdown by category is not available from the filings.

- **Cash flow structure.** AXP's cash flow statement differs from non-financial
  companies. Investing activities are dominated by growth in the card member loan
  portfolio (not capital expenditures), and financing activities include large
  swings in customer deposits. Free cash flow (operating minus capex) remains
  meaningful because capex is a relatively small $1-2.4B per year.
