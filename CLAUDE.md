# Boring Investing

A static Next.js site that showcases stock analysis for a handful of companies.
It is built with the Next.js App Router, styled with Tailwind CSS v4, exported to
static HTML, and deployed to GitHub Pages.

## Tech stack

- **Next.js (App Router)** with `output: 'export'` for a fully static site.
- **Tailwind CSS v4**, configured from CSS (`src/app/globals.css`); there is no
  `tailwind.config.js`.
- **Recharts** for charts (client components).
- **TypeScript**, type-checked with `tsc --noEmit`.
- **GitHub Pages** for hosting, published by GitHub Actions.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000.
- `npm run build` — produce the static export in `out/`.
- `npm run typecheck` — run `tsc --noEmit`.
- `npm run lint` — run ESLint (`eslint .`) over the flat config.

## Folder structure

Routing uses the App Router, so a route exists only where there is a `page.tsx`.
Everything else in a route folder (a `components/` or `data/` subfolder) is
colocated and never becomes a route.

```
src/
  design-system/
    classical.css                 Tokens, base type and component classes (see Design system)
    index.ts                      Barrel re-exports
    components/<Component>.tsx    Reusable UI primitives
  charts/<Chart>.tsx              Reusable chart components (LineChart, BarChart)
  templates/<template>.tsx        Layout templates, one per company type (software.tsx)
  lib/                            Shared helpers (stocks registry, base path)
  companies/
    <SYMBOL>/
      CLAUDE.md                   Analytical method for this company
      references.md               External data sources
      components/<Component>.tsx  Helper components used only by this stock
      data/<data>.json            Data for this stock
  app/
    layout.tsx                    Root layout and global styles
    page.tsx                      Home page: directory of all stocks
    <SYMBOL>/
      page.tsx                    Thin route file; imports from src/companies/<SYMBOL>
public/
  .nojekyll                       Stops GitHub Pages from processing `_next/`
```

### Where code goes

- **Shared across stocks** → `src/design-system/` (UI primitives) or
  `src/charts/` (charts). Import from the barrels, for example
  `import { Card } from '@/design-system'`.
- **A layout shared by companies of one type** → `src/templates/<type>.tsx`. Each
  stock page renders exactly one template. Add a new template (for example
  `bank.tsx`) when a company type needs a different layout, and add its name to
  the `CompanyTemplate` union in `src/lib/stocks.ts`.
- **Specific to one stock** → `src/companies/<SYMBOL>/components/` and
  `src/companies/<SYMBOL>/data/`. The route file at `src/app/<SYMBOL>/page.tsx`
  is a thin wrapper that imports from `src/companies/<SYMBOL>/`.

## Adding a new stock

1. Register it in `src/lib/stocks.ts` (`STOCKS` array), choosing a `template`.
2. Create `src/companies/<SYMBOL>/data/*.json` matching the template's data type
   (for the software template, `SoftwareFinancials` in
   `src/templates/software.tsx`).
3. Create `src/app/<SYMBOL>/page.tsx` that reads the JSON and renders the chosen
   template. Use `MSFT` as the reference implementation.
4. Add any stock-only sections under `src/companies/<SYMBOL>/components/`.

## Imports and paths

- `@/*` maps to `src/*` (see `tsconfig.json`).
- `next/link` and `next/image` prepend the base path automatically. For URLs you
  build by hand (files in `public/`), wrap them with `withBasePath` from
  `src/lib/basePath.ts`.

## GitHub Pages deployment

- The site is a Pages **project** site, served from `/<repo>`
  (`/boring-investing`). `next.config.mjs` sets `basePath`/`assetPrefix`
  accordingly in production; local development is served from the root.
- If the repository is renamed, update `repository` in `next.config.mjs`, or set
  `NEXT_PUBLIC_BASE_PATH` to override it.
- `.github/workflows/deploy.yml` builds the export and publishes it on every push
  to `release`. Enable Pages once in the repository settings with
  **Source: GitHub Actions**.

## Design system

- The design system is the "Ledger" system from Claude Design, configured with
  Newsreader headings, Karla body and interactive labels, Regular (500) heading
  weight and Compact (0.9) density. All sizes use `rem`; spacing is driven by a
  `--density` multiplier.
- `src/design-system/classical.css` holds the tokens (`--color-*`, `--font-*`,
  `--text-*`, `--space-*`, `--radius-*`, `--tap`, `--motion`), semantic aliases
  (`--text-primary`, `--surface-page`, `--state-hover`, etc.), base type and
  every component class. It is loaded once from `src/app/layout.tsx`. Take
  colors, fonts and spacing from the tokens rather than hard-coding values.
- Components render on the design-system palette when placed inside a `.ds`
  container (the page `<main>` carries it); the component classes themselves are
  global.
- `/components` (`src/app/components/`) is a living gallery that demos every
  component and its variations; update it when adding or changing a component.

## Conventions

- Charts use Recharts and must be client components (`'use client'`), since the
  static export has no server at runtime.
- JSON data files are the source of truth for a stock's figures; keep TypeScript
  data shapes next to the template that consumes them.
