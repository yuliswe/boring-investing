# Boring Investing

Boring Investing is a personal research notebook for long-term, value-oriented
stock analysis, published as a static website on GitHub Pages. Each company gets
one page that lays out roughly a decade of its filed financials as charts and
tables, so that a reader can judge the quality of the business and what the
current price assumes about it. The site makes no buy or sell recommendations.

The site currently covers 26 companies, from software and semiconductors (MSFT,
GOOG, ADBE, CSU, NVDA, AMD) to payments (MA, AXP), retail (LULU, ATZ, GRGD),
consumer brands (PEP, MCD), healthcare (LLY, JNJ), homebuilding (LEN), and
Berkshire Hathaway. The home page lists all of them.

## How the analysis works

Every page follows a written method for its kind of business, and those methods
live in `src/methods/`. The software and retail methods take a
franchise-quality approach rather than a discounted-cash-flow model, which means
they ask whether the business has a durable advantage that sustains high returns
on capital instead of trying to compute a precise intrinsic value. The
homebuilder method anchors on price-to-tangible-book instead, because a
builder's earnings swing with the housing cycle far more than its assets do.

A typical page covers the last nine completed fiscal years plus one forward
estimate year, and it contains these sections:

- an investment thesis of three points;
- valuation ratios (P/E, P/FCF, and PEG), which recalculate as you drag the
  price adjuster in the page header;
- profitability and return metrics such as ROE, ROIC, margins, and free cash
  flow per share;
- revenue by segment, so that weakness in one segment cannot hide behind
  strength in another;
- expenses as a share of revenue, following whatever line items the company
  itself reports;
- the cash flow statement; and
- links to the filings the numbers came from.

Every figure must come from an actual filing (SEC EDGAR, 10-K, 10-Q) or a
verifiable market-data source, and forward estimates must come from management
guidance or analyst consensus. Nothing is filled in from memory. Most company
folders keep a `references.md` that lists their sources, and the full data rules
are in `src/companies/CLAUDE.md`.

Readers can also pin notes anywhere on a page. Those notes are stored in the
browser's local storage, so they stay private to the reader and are not
published.

## How the code is organized

The site is a Next.js App Router project exported to static HTML, styled with
Tailwind CSS v4 and the "Ledger" design system, with charts drawn by Recharts.

```
src/
  methods/         One analytical method per company type, in Markdown
  templates/       One page layout per company type (software, retail)
  companies/<SYM>/ Data, sources, and page code for a single company
  app/<SYM>/       Thin route files that render the company page
  design-system/   Tokens, CSS, and shared UI components
  charts/          Shared chart components
  lib/stocks.ts    Registry of every company and its template
```

The `/components` route is a living gallery of the design system, and
`/preview` renders a sample page with placeholder data.

Most pages are written with Claude Code, so the project instructions in
`CLAUDE.md` files double as the contributor guide. The root `CLAUDE.md`
explains where code belongs and how to add a stock, and the `CLAUDE.md` files
under `src/companies/` and `src/templates/` define the data rules and the
section types.

## Development

### First-time setup on macOS

The repository provisions its own Node.js into `.nodevenv` through Poetry and
nodeenv, so only Python 3.10 or later, Poetry, and Homebrew need to be
installed globally.

1. Add these lines to `~/.zshrc` so that the project's own `.zshrc` loads when
   you enter the directory:

   ```
   # Source .zshrc from current directory if it exists
   [ "$PWD" != "$HOME" ] && [ -f "$PWD/.zshrc" ] && source "$PWD/.zshrc"
   ```

2. Run `./initenv.bash` once.
3. Open a new terminal session.

### Commands

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Starts the dev server at http://localhost:3000 |
| `npm run build`     | Builds the static export into `out/`           |
| `npm run typecheck` | Type-checks the project with `tsc --noEmit`    |
| `npm run lint`      | Runs ESLint over the flat config               |
| `npm test`          | Runs the Jest test suite                       |

### Adding a company

Register the company in `src/lib/stocks.ts` and choose a template. Then
transcribe its filed figures into `src/companies/<SYMBOL>/data/`, and add a
route file at `src/app/<SYMBOL>/page.tsx`. `MA` is the reference implementation
for the expense and cash flow sections, and `TRI` is the reference for
price-reactive valuation metrics.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the export and publishes
it to GitHub Pages on every push to the `release` branch. The site is served
from `/boring-investing`, and `next.config.mjs` sets the matching base path for
production builds.
