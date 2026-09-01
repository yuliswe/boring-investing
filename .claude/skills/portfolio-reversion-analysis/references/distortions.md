# Anchor & multiple distortion catalog

The reversion math is trivial. The judgment is knowing when a historical anchor
or a current multiple is lying. Screen every position against this list in Step 3
before computing anything.

## Distortions that inflate the HISTORICAL anchor (overstate upside)

**Suppressed-earnings regime.** A company that deliberately or structurally ran
near-zero GAAP earnings for years carries a historical P/E median in the 70–100×+
range. Reverting to it is not a scenario — it's a return to an accounting regime
that has ended. Typical of businesses that reinvested everything, or ran at
breakeven by design, before margins scaled. Symptom: 10-year median P/E many
times the current P/E, and a history of negative or tiny EPS quarters. Response:
flag hard; cap the anchor or exclude the name; never let it silently drive the
total.

**Hypergrowth-era multiple on a now-mature business.** The historical median was
set when the company grew 60%+ a year on a tiny earnings base (P/E of 100+ on
$0.20 quarterly EPS is arithmetic, not exuberance). The mature business will
never re-earn that multiple. Common in semis and early-scale software. Same
response as above — this is why a universal cap sometimes makes sense, but say
so explicitly rather than assuming it.

## Distortions that inflate the P/E relative to cash economics

**Acquisition amortization (serial acquirers).** GAAP EPS is depressed by
amortization of acquired intangibles — a non-cash charge that recurs by design in
a roll-up. The P/E looks expensive; the business is better measured on **P/FCF**.
The gap between a serial acquirer's P/E median and its P/FCF median is often 2×+.
Response: offer to switch that position's basis to P/FCF. Caveat the FCF too:
conventional FCF (OCF − capex) excludes acquisition spend, which for a roll-up is
the actual capital-deployment engine — so P/FCF flatters in the other direction.
The honest range brackets both.

## Distortions in the CURRENT multiple (fake in either direction)

**Non-recurring items in TTM EPS.** The trailing multiple is computed on EPS that
includes one-time effects:

- Deferred-tax valuation-allowance release — inflates EPS, deflates P/E, makes a
  stock look cheap when it isn't.
- Mark-to-market gains/losses on equity stakes — swings net income unrelated to
  operations.
- Pension settlement charges, restructuring, litigation.
  Symptom: GuruFocus "P/E without NRI" diverges materially from TTM P/E. Response:
  quote both; use the cleaner one for the reversion or at least flag the gap.

**Post-IPO / short history.** A "10-year" median for a company public 4 years is
really a 4-year figure, often spanning losses. The reversion reads near-zero
("already at its historical multiple") which is meaningless. Flag that the anchor
isn't real history.

## Structural portfolio distortions (not per-stock, but affect interpretation)

- **Hedged CDRs/ADRs**: multiples belong to the underlying shares; the hedge cost
  sits in the instrument's ratio and drags realized return. The reversion % is
  roughly right for the underlying, not identical to what the user will realize.
- **Double-counting**: holding a parent and its listed subsidiary counts
  overlapping exposure twice; minority-interest leakage cuts the look-through.
- **Target vs actual weights**: if the user's table has target weights that don't
  sum to 100%, don't use them for the reversion — use actual weights.

## The meta-rule

When any single position supplies a large share of the portfolio total, that is
the finding — not the total. Decompose, name the position, name the distortion,
and give the total with and without it.
