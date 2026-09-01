---
name: portfolio-reversion-analysis
description: >-
  Run a value-investor's multiple-reversion and risk pass over an entire equity
  portfolio (not one stock). From a holdings table with weights, pull each
  position's current and historical P/E (or P/FCF), compute the implied price
  change if every multiple reverts to its historical anchor with earnings held
  constant, and weight those into one portfolio expected return. Also does
  weighted portfolio P/E (harmonic), weighted beta, per-holding sensitivity, and
  reallocation swap tables. Use this WHENEVER the user wants to analyze a whole
  portfolio's valuation, asks for its expected return, average P/E, or beta,
  wants a P/E- or mean-reversion model across holdings, wants to cap or normalize
  multiples across a book, wants to know which holdings are cheap or expensive
  versus their own history, or asks how reallocating weight changes the outcome —
  even if they just paste a brokerage export and say "analyze this."
  Companion to value-investing-tutor. Educational only; no buy/sell/hold advice.
---

# Portfolio Reversion Analysis

Run a whole-portfolio valuation and risk pass in the value-investing tradition.
The output is always a decision _aid_ the user reasons over, never a
recommendation. The most important thing this skill teaches is where the numbers
come from and how fragile they are — a reversion model is a function of the
analyst's assumptions about anchors, not a measurement of the future.

## The prime directive: honesty over tidiness

Every reversion number is only as good as its historical anchor. A large share
of this skill's value is flagging where an anchor is an accounting artifact
rather than a valuation signal. **Never present a clean-looking portfolio total
without decomposing what drives it and stress-testing the drivers.** A single
position with a distorted anchor routinely supplies 40–90% of a portfolio
"expected return," and surfacing that is the whole job.

Refuse to convert this into buy/sell/trim advice. State that plainly if asked,
and redirect to what the analysis shows. This mirrors value-investing-tutor:
educational, not advisory.

## Workflow

Follow these steps in order. Do the arithmetic in a script (see
`scripts/reversion.py` as a starting point), not in your head — the harmonic
mean and swap matrices are easy to get subtly wrong by hand.

### Step 1 — Parse the holdings table

Accept whatever the user pastes: a brokerage export, a markdown table, a
screenshot. Extract per position: ticker, name, **actual weight** (use the real
current weight, not target weight, unless the user says otherwise), and market
value. Note the total balance and any cash. If weights don't sum to ~100%, say
so and say what you're doing about it (usually: use actual weights, which
renormalize implicitly).

Watch for structure that changes interpretation: hedged vs unhedged, CDRs or
ADRs vs direct listings, dual holdings that double-count exposure (e.g. a parent
and a subsidiary), currency of denomination.

### Step 2 — Retrieve current and historical multiples

For each position, search for the current multiple and a historical anchor.

- **Default anchor: 10-year MEDIAN, not mean.** Means are wrecked by single
  quarters where EPS collapsed (a tax charge, a one-time write-down) and the P/E
  spiked to triple digits. Medians are robust to exactly that. If you can only
  get a mean, say so and treat the result as noisier.
- **Primary source: GuruFocus** term pages (`gurufocus.com/term/pettm/<TICKER>`
  for current TTM P/E, and the same page carries the 10-year median). Fullratio
  is a secondary cross-check. `stockanalysis.com/stocks/<ticker>/statistics/`
  carries current P/E and beta (sourced from S&P Global Market Intelligence).
- Record the **as-of date** for every figure. They will not all be the same day,
  and they usually won't match the prices in the user's brokerage table. Say so.
- For non-US listings use the right venue: SEDAR+/TSX tickers for Canadian names,
  the local exchange page for European names.

See `references/data-sources.md` for URL patterns and per-market notes.

### Step 3 — Screen every anchor for distortion BEFORE computing

This is the step that separates this skill from a spreadsheet. For each
position, ask whether the historical anchor and current multiple describe the
same economic reality. Common distortions (see `references/distortions.md` for
the full catalog):

- **Suppressed-earnings history** (e.g. a company that ran near-zero GAAP margins
  for years then scaled) — its historical P/E median is astronomically high and
  reverting to it is a fantasy, not a scenario. Flag and consider capping or
  excluding.
- **Acquisition amortization** depressing GAAP EPS (serial acquirers) — the P/E
  looks too high; the business is better measured on **P/FCF**. Offer to switch
  the basis for that position.
- **Non-recurring items in TTM EPS** (deferred-tax valuation-allowance releases,
  mark-to-market swings on equity stakes, pension settlements) — the current P/E
  is fake in both directions. Note GuruFocus "P/E without NRI" when it diverges
  materially from TTM P/E.
- **Post-IPO names** with no real 10-year history — the "10-year" figure is
  actually 3–5 years and often spans a period of losses.

When an anchor is distorted, the honest move is to say which direction it biases
the answer and by how much, then offer alternatives — not to launder it through
the formula.

### Step 4 — Compute the reversion

For each holding: `implied % = applied_multiple / current_multiple − 1`, with
earnings/FCF held constant. `contribution (pp) = implied % × weight`.
Portfolio expected return = sum of contributions. Positions whose current
multiple exceeds the anchor produce **downside** — include it, don't drop it.

If the user asks for normalization (a cap on anchors), apply
`applied = MIN(anchor, cap)` and be explicit about which positions the cap
actually binds on versus which were already below it. A cap on the _anchor_ does
nothing about a distorted _current_ multiple — a very cheap current P/E still
produces a huge implied gain against any anchor, so keep flagging that.

### Step 5 — Decompose and stress-test

Never stop at the single total. Always show:

- **Contribution ranking** — which positions supply the answer. Call out
  concentration explicitly ("X of the Y-point total comes from N positions =
  Z% of the answer from W% of the book").
- **A scenario ladder** — recompute the total under 3–5 defensible variations
  (raw anchors, cap applied, distorted names excluded or switched to P/FCF). The
  _spread_ across scenarios is the honest headline, not any single number.
- **What survives every scenario** — the conclusions that hold regardless of
  assumptions (usually: a couple of names expensive against their own history).
  These are worth more than the point estimate.

### Step 6 — Optional deeper cuts (only if asked)

- **Weighted-average portfolio P/E**: use the **HARMONIC** mean
  (`W / Σ(wᵢ/PEᵢ)`), which equals total value ÷ total earnings. The arithmetic
  weighted average overweights expensive names and is wrong; show both only to
  demonstrate the gap. Also useful: each holding's share of portfolio earnings.
- **Weighted beta**: `Σ(wᵢ × βᵢ)`. Note the source and lookback (betas vary a
  lot by provider and window — quote a range, not false precision). Show each
  holding's contribution to beta. Always add the value-investor's caveat that
  beta measures volatility, not risk of permanent capital loss.
- **Per-1%-weight sensitivity**: the marginal contribution of +1pp of weight to
  a holding is just its implied % ÷ 100. Because weights sum to 100%, the useful
  object is the **swap matrix**: moving 1pp from holding A to B changes the total
  by `(impliedB − impliedA)/100`. Point out that a linear objective with no risk
  term always says "put everything in the highest-implied name" — and that this
  is the model's failure, not advice.

### Step 7 — Optional Excel export (only if asked)

Read `/mnt/skills/public/xlsx/SKILL.md` first, then build the workbook to this
exact spec so the user gets the same artifact every time without rebuilding it:

**Tab 1 — "Reversion Model":**

- Title and a one-line educational-only disclaimer at the top.
- **Input block** with the cap as a LIVE cell (label it clearly; put the cap in a
  single referenced cell, e.g. `C4`) and the portfolio balance in another
  (e.g. `C5`). These are the scenario levers — every row formula references the
  cap cell so changing it recomputes the whole model. A legend states the color
  convention.
- **Color coding:** blue font = hardcoded input (weights, current multiple, own
  median), yellow fill = scenario lever cells (cap, balance), black font =
  formula (applied, status, implied %, contribution, dollar columns).
- **The canonical holdings table** (same column set as the chat table below),
  sorted by implied % descending, with `Applied = MIN(own_median, $cap)` and
  `Status = IF(applied < own_median, "CAP", "keep")` as live formulas.
- A **TOTAL row** summing weights, contribution (= weighted expected return), and
  dollar impact, with `SUM` formulas.
- A **methodology / assumptions block** below the table covering: the reversion
  formula, which positions the cap binds on, the basis exceptions (CSU on P/FCF),
  the distortion flags per the screen, and the scenario ladder of totals.

**Tab 2 — "Sources":** per-ticker metric, value, source URL, and as-of date, plus
rows marking weights/balance/cap as user-supplied.

Recalculate with the xlsx skill's `recalc.py` and verify the computed TOTAL
matches the chat table before presenting. See `scripts/reversion.py` for the
calculation core to mirror in formulas.

## Output format

Lead with the **canonical holdings table**, a markdown table with exactly these
columns in this order:

| Column           | Contents                                                                  |
| ---------------- | ------------------------------------------------------------------------- |
| Symbol           | Ticker                                                                    |
| Weight %         | Actual portfolio weight                                                   |
| Basis            | "P/E" or "P/FCF" (marks the CSU-style exceptions inline)                  |
| Today's Price    | Current market price of the holding, in its native listing currency       |
| Current          | Current multiple (`Today's Price / EPS-without-NRI` or `/ FCF-per-share`) |
| Own 10-yr median | The historical anchor before any cap                                      |
| Applied          | `MIN(own median, cap)` — the figure actually used                         |
| Status           | "CAP" if the cap bound on this row, else "keep"                           |
| Implied %        | `Applied / Current − 1`                                                   |
| Contribution     | `Implied % × Weight`                                                      |
| As-of (EPS)      | The date of the earnings/FCF figure the multiple is built on              |

**Today's Price is always a live quote** — pull it fresh for every run, in the
holding's native currency (flag non-USD listings, e.g. CSU on TSX in CAD, since
mixing currencies in one column means the raw prices aren't directly
comparable across rows even though each ratio is internally consistent).

**As-of (EPS) dates the earnings input, never the price.** Once Today's Price
exists as its own column, every Current multiple is by construction a hybrid
of a live price and a not-necessarily-live EPS/FCF figure — so the As-of
column always answers "how old is the earnings number," not "how old is the
row." Retrieval dates differ by ticker, routinely by weeks; report each one
individually rather than one caption for the whole table.

**Date format: `YYYY/MM/DD`, no exceptions.** Not "Aug 22, 2026," not a
relative phrase like "2 weeks ago" — relative phrasing goes stale the moment
the response is read.

**Flag every row with ⚠ directly appended to the date with no space**
(`2026/08/22⚠`, not `2026/08/22 ⚠`) — every row in this schema is a derived
hybrid (live price × dated earnings), so every row earns the flag; the
no-space form also resists mid-token wrapping in narrow renderers. Use **⚠⚠**
for a row where the company has reported new earnings _after_ the EPS figure
in the table was retrieved — that row isn't just aging, it's provably
superseded, and deserves a note calling out that it should be re-pulled before
being trusted. If two figures for one ticker (e.g. the multiple and its
median) have different as-of dates, use the multiple's date for the column and
note the median's date in prose if it matters to the finding.

**ALWAYS emit this table in full, in every response that runs the model — no
exceptions.** Never write "table unchanged from my last message," never refer the
user back to an earlier table, never abbreviate to only the rows that moved, and
never replace it with a deltas-only or changes-only summary. This holds even when
the figures are identical to the previous run, when only one input changed, when
the user asked a narrow follow-up, and when the response also contains a
distortion screen, scenario ladder, rebalance, or aggregates. The table is the
deliverable; everything else is supplement. If a re-run produces identical
numbers, print them again in full and note that the data did not move.

Default sort: **by implied % descending**. Include a Cash row (0 contribution).
Bold the Applied/Status cells on rows where the cap binds so the normalization is
visible at a glance. State the portfolio total (the summed Contribution column)
in both percent and dollars, on its own line right after the table.

**Render as a plain markdown pipe table.** Not a fenced code block, not an
embedded HTML `<table>` — those were tried and reverted; plain markdown is the
default that degrades gracefully across viewers. Only deviate if the person
explicitly asks for a different rendering, and revert once they say so.

When the user asks to add or change a column (sensitivity, dollar impact,
per-1%-weight delta, beta), append it to this same schema rather than starting a
new table — carry the prior columns forward. When they re-sort or re-cap, keep
the identical column set and re-emit the whole table; do not switch to a
prose summary.

After the table: the decomposition (contribution ranking + concentration call-
out), the scenario ladder, and the "what survives every scenario" paragraph.
Use markdown tables for the financials. Keep mentor commentary distinct from raw
facts if the user has that convention. Never bury the fragility of the answer
beneath a confident total.

## Hard rules

- Educational only. No buy/sell/hold, no personalized allocation advice. If the
  user pushes, name the boundary and give the analysis instead.
- Every retrieved figure gets an as-of date and a source.
- Harmonic mean for P/E aggregation. Median for historical anchors.
- Always decompose; never present a portfolio total as a standalone finding.
- Follow copyright limits when quoting sources — paraphrase, attribute, don't
  reproduce.
