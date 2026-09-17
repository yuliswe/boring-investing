'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import financials from './data/financials.json';
import segments from './data/segments.json';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'ADBE',
  name: 'Adobe Inc.',
  sector: 'Software',
  tags: ['Large Cap'],
  price: '$320.13',
  changePct: -1.42,
  priceNote: 'close, 28 November',
  summary:
    'Creative and document software leader whose subscription-based Creative Cloud, Document Cloud, and Experience Cloud serve creative professionals, enterprises, and marketers worldwide.',
};

const adbeSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by segment in billions, with year-on-year growth rates. Digital Experience was called Digital Marketing through FY17.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all three reporting segments.',
        values: segments.segments.map(
          s => s.digitalMedia + s.digitalExperience + s.publishing
        ),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'Digital Media',
        desc: 'Creative Cloud (Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom) and Document Cloud (Acrobat, Adobe Sign).\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.digitalMedia),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Digital Experience',
        desc: 'Experience Cloud analytics, marketing automation, commerce, content management, and customer data platform solutions.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.digitalExperience),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Publishing',
        desc: 'Legacy print publishing products (FrameMaker, RoboHelp) and advertising-related revenue. Declining segment.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.publishing),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'FY16–FY17 segment names were Digital Media, Digital Marketing, and Print and Publishing; the segments were renamed but not restated.',
  },
  {
    rank: 450,
    id: 'arr',
    title: 'Digital Media ARR',
    kicker:
      'Annualized recurring revenue for the Digital Media segment (Creative Cloud and Document Cloud), a management metric disclosed in earnings press releases. Revalued to year-end currency rates each fiscal year.',
    kind: 'trends',
    panels: [
      {
        label: 'Digital Media ARR',
        desc: 'Sum of Creative Cloud ARR and Document Cloud ARR exiting the fiscal year, as reported in the quarterly earnings press release. Not a GAAP line item.',
        years: segments.segments.map(s => s.year),
        values: [
          4.01, 5.39, 6.83, 8.33, 10.18, 12.24, 13.97, 15.33, 17.33, 19.2,
        ],
        format: { prefix: '$', suffix: 'B', decimals: 2 },
      },
    ],
    chartNote:
      'Sourced from earnings press releases, not SEC filings. Adobe revalues ARR to the most recent December exchange rates, so year-end figures are not strictly comparable across currency regimes.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '10-K',
        note: 'Annual report for fiscal year 2025',
        date: 'Jan 15 2026',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 29 August',
        date: 'Sep 25 2025',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 30 May',
        date: 'Jun 25 2025',
      },
      {
        kind: '10-Q',
        note: 'Quarterly report, three months to 28 February',
        date: 'Mar 26 2025',
      },
      {
        kind: 'DEF 14A',
        note: 'Proxy statement and compensation tables',
        date: 'Feb 21 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.adobe.com/investor-relations.html',
    },
    {
      label: 'Annual Reports',
      href: 'https://www.adobe.com/investor-relations/annual-reports.html',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000796343',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/ADBE/',
    },
  ],
};

export function AdbePage() {
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={hero}
      financials={financials as SoftwareFinancials}
      extraSections={adbeSections}
      figuresDate='28 November'
      footer={footer}
    />
  );
}
