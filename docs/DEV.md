# Developer guide

This guide explains how Boring Investing is built, how to run it locally, and
how to add a company. For what the site is and who it is for, see the
[README](../README.md).

## Architecture

The site is a Next.js App Router project exported to static HTML with
`output: 'export'`, so it runs without a server and is hosted on GitHub Pages.
It is styled with Tailwind CSS v4 and the "Ledger" design system, and its
charts are drawn by Recharts. Charts and anything interactive, such as the
price adjuster and the note layer, are client components.

```
src/
  methods/          One analytical method per company type, in Markdown
  templates/        One page layout per company type
    base/           BaseTemplate, section components, and data types
  companies/<SYM>/  Data, sources, notes, and page code for one company
  app/<SYM>/        Thin route files that render the company page
  app/components/   Living gallery of the design system (/components)
  app/preview/      Sample page with placeholder data (/preview)
  design-system/    Tokens, CSS, and shared UI components
  charts/           Shared chart components
  lib/              Stock registry, base-path helper, price hook
```

## How a page is assembled

A company is registered in `src/lib/stocks.ts`, where it is assigned one
template. The templates are currently `software` and `retail`, and most
non-retail companies use `software`. The route file at
`src/app/<SYMBOL>/page.tsx` renders the company's page component from
`src/companies/<SYMBOL>/`, which passes its data to that template.

Data files hold plain values only, and section components derive everything
visual at render time. A page is a list of `SectionData` objects, a
discriminated union on `kind` (`metrics`, `multi`, `table`, `rows`, and so on)
whose `rank` sets the display order. The types live in
`src/templates/base/types.ts`, and `src/companies/CLAUDE.md` describes each
kind.

Forward-year P/E, P/FCF, and PEG recalculate when a reader types a new price.
The page reads `price` from `usePriceHero` (`src/lib/usePriceHero.tsx`) and
overrides the forward-year values at render time, and `TRI` is the reference
for this pattern.

Reader notes live in `src/app/NoteLayer.tsx`, which stores them in
`localStorage` for each page.

## Data rules

The rules in `src/companies/CLAUDE.md` are binding, and these are the
essentials:

- Every figure must come from a filing (SEC EDGAR XBRL, 10-K, 10-Q) or a
  verifiable market-data source. Never fill in values from memory.
- Each series covers the last nine completed fiscal years plus one forward
  estimate year, taken from management guidance or analyst consensus. The last
  data point must not be null, so drop the forward year from a series when no
  estimate exists.
- The Expenses section (rank 500, `multi` in `share` mode) and the Cash Flow
  section (rank 560, `multi` in `absolute` mode) are built as custom
  `extraSections` that follow the company's own line items. `MA` is the
  reference implementation. Older pages that pass `expenses` and `cashFlow`
  through `SoftwareFinancials` use a deprecated path and should be migrated.
- Record sources in `src/companies/<SYMBOL>/references.md`.

## Running locally

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

The `next dev` and `next build` commands share the `.next` cache, so stop the
dev server before building, or clear `.next` if pages render stale output.

## Adding a company

1. Register the company in `src/lib/stocks.ts` and choose a template.
2. Parse its filed figures into `src/companies/<SYMBOL>/data/`, typed
   against the template's data shape and exported with `export default`.
3. Write the page component in `src/companies/<SYMBOL>/`, and put any sections
   unique to that company under its `components/` folder.
4. Add the route file at `src/app/<SYMBOL>/page.tsx`.
5. Add `references.md` and a company `CLAUDE.md` that names the method it
   follows.

If a new kind of business needs a different layout, add a method in
`src/methods/` and a template in `src/templates/`, and add the template's name
to the `CompanyTemplate` union in `src/lib/stocks.ts`.

## Working with Claude Code

Most pages are written with Claude Code, so the `CLAUDE.md` files are the
authoritative conventions. Read the root one before changing code, and the ones
under `src/companies/` and `src/templates/` before touching data or sections.

## Deployment

`.github/workflows/deploy.yml` builds the export and publishes it to GitHub
Pages on every push to `release`. The site is served from `/boring-investing`,
and `next.config.mjs` sets the matching `basePath` in production. `next/link`
and `next/image` add the base path automatically, but hand-built URLs to files
in `public/` must be wrapped with `withBasePath` from `src/lib/basePath.ts`.
