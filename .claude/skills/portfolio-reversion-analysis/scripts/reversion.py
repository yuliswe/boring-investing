#!/usr/bin/env python3
"""
Calculation core for portfolio-reversion-analysis.

Do the arithmetic here rather than by hand — the harmonic mean and swap matrix
are easy to get subtly wrong. Import these functions or copy the ones you need.

A "holding" is a dict:
    {"ticker","weight" (fraction, e.g. 0.1432),
     "current" (current multiple), "anchor" (historical median),
     "basis" ("P/E" or "P/FCF"), "beta" (optional)}
Weights are fractions of the whole book; cash (if any) has current/anchor = None
and contributes 0 to reversion.
"""
from __future__ import annotations
from typing import Iterable


def applied(anchor: float, cap: float | None) -> float:
    """Anchor after an optional universal cap."""
    return min(anchor, cap) if cap is not None else anchor


def current_multiple(today_price: float, eps_or_fcf: float) -> float:
    """Current = Today's Price / EPS-without-NRI (or FCF-per-share for P/FCF
    names). Keep price and earnings as separate inputs rather than a single
    pre-computed 'current' figure — this is what lets the table's Today's
    Price and As-of (EPS) columns carry two different dates honestly instead
    of collapsing them into one."""
    return today_price / eps_or_fcf


def reversion(holdings: Iterable[dict], balance: float, cap: float | None = None):
    """Per-holding implied %, contribution, and portfolio total.

    implied% = applied_anchor / current - 1   (earnings held constant)
    contribution(pp) = implied% * weight
    """
    rows, total_pp, total_dollar = [], 0.0, 0.0
    for h in holdings:
        if h.get("current") is None or h.get("anchor") is None:
            rows.append({**h, "applied": None, "implied": 0.0,
                         "contrib": 0.0, "dollar": 0.0})
            continue
        a = applied(h["anchor"], cap)
        implied = a / h["current"] - 1.0
        contrib = implied * h["weight"]
        dollar = balance * h["weight"] * implied
        total_pp += contrib
        total_dollar += dollar
        rows.append({**h, "applied": a, "implied": implied,
                     "contrib": contrib, "dollar": dollar,
                     "capped": cap is not None and a < h["anchor"]})
    return rows, total_pp, total_dollar


def harmonic_pe(holdings: Iterable[dict]) -> float:
    """Correct weighted-average portfolio P/E = totalValue / totalEarnings.
    Only positions with a P/E basis and a current multiple count."""
    num = sum(h["weight"] for h in holdings
              if h.get("current") and h.get("basis", "P/E") == "P/E")
    den = sum(h["weight"] / h["current"] for h in holdings
              if h.get("current") and h.get("basis", "P/E") == "P/E")
    return num / den if den else float("nan")


def arithmetic_pe(holdings: Iterable[dict]) -> float:
    """Shown only to demonstrate how wrong it is versus harmonic."""
    num = sum(h["weight"] * h["current"] for h in holdings
              if h.get("current") and h.get("basis", "P/E") == "P/E")
    den = sum(h["weight"] for h in holdings
              if h.get("current") and h.get("basis", "P/E") == "P/E")
    return num / den if den else float("nan")


def earnings_share(holdings: Iterable[dict]) -> list[tuple[str, float]]:
    """Each holding's share of total portfolio earnings (harmonic weights)."""
    pes = [h for h in holdings if h.get("current") and h.get("basis", "P/E") == "P/E"]
    tot = sum(h["weight"] / h["current"] for h in pes)
    return sorted(((h["ticker"], (h["weight"] / h["current"]) / tot) for h in pes),
                  key=lambda x: -x[1])


def portfolio_beta(holdings: Iterable[dict]) -> float:
    """Weighted beta. Cash / missing beta treated as 0."""
    return sum(h["weight"] * h.get("beta", 0.0) for h in holdings)


def swap_matrix(holdings: Iterable[dict], cap: float | None = None):
    """Change in portfolio total (pp) from moving 1pp of weight FROM row TO col.
    Value = (implied_to - implied_from) / 100 expressed in pp-of-total per pp-of-weight.
    Returns {from_ticker: {to_ticker: delta_pp}}."""
    impl = {}
    for h in holdings:
        if h.get("current") and h.get("anchor"):
            impl[h["ticker"]] = applied(h["anchor"], cap) / h["current"] - 1.0
    out = {}
    for a in impl:
        out[a] = {b: (impl[b] - impl[a]) * 0.01 for b in impl if b != a}
    return out


if __name__ == "__main__":
    # tiny smoke test
    hs = [
        {"ticker": "AAA", "weight": 0.50, "current": 12.0, "anchor": 35.0, "basis": "P/E", "beta": 1.4},
        {"ticker": "BBB", "weight": 0.30, "current": 50.0, "anchor": 35.0, "basis": "P/E", "beta": 0.7},
        {"ticker": "CASH", "weight": 0.20, "current": None, "anchor": None, "beta": 0.0},
    ]
    rows, tot, dol = reversion(hs, balance=100000, cap=35.0)
    for r in rows:
        print(r["ticker"], None if r["applied"] is None else round(r["implied"] * 100, 1),
              round(r["contrib"] * 100, 2))
    print("total %", round(tot * 100, 2), "harmonic P/E", round(harmonic_pe(hs), 2),
          "beta", round(portfolio_beta(hs), 3))
