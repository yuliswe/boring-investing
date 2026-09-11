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
        values: segments.segments.map(
          s => s.digitalMedia + s.digitalExperience + s.publishing
        ),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
        total: true,
      },
      {
        label: 'Digital Media',
        values: segments.segments.map(s => s.digitalMedia),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Digital Experience',
        values: segments.segments.map(s => s.digitalExperience),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
      {
        label: 'Publishing',
        values: segments.segments.map(s => s.publishing),
        format: { prefix: '$', suffix: 'B', decimals: 0 },
      },
    ],
    chartNote:
      'FY16–FY17 segment names were Digital Media, Digital Marketing, and Print and Publishing; the segments were renamed but not restated.',
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
