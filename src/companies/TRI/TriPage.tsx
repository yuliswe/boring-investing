'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import financials from './data/financials';
import segments from './data/segments';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'TRI',
  name: 'Thomson Reuters Corporation',
  sector: 'Information Services',
  tags: ['Large Cap', 'Dividend'],
  price: '$106.35',
  changePct: -0.52,
  priceNote: 'close, 19 September',
  summary:
    'AI-powered information services and workflow software for legal, tax, and compliance professionals. More than eighty percent of revenue is recurring, drawn from subscriptions across research platforms, analytics tools, and workflow automation.',
};

const triSections: SectionData[] = [
  {
    rank: 400,
    id: 'revenue',
    title: 'Revenue',
    kicker:
      'Revenue by segment in billions, with year-on-year growth rates. The current segment structure dates from FY19 after the Refinitiv divestiture.',
    kind: 'multi',
    mode: 'absolute',
    years: segments.segments.map(s => s.year),
    series: [
      {
        label: 'Total revenue',
        desc: 'Sum of all five reporting segments.',
        values: segments.segments.map(
          s =>
            s.legal +
            s.corporates +
            s.taxAccounting +
            s.reutersNews +
            s.globalPrint
        ),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
        total: true,
      },
      {
        label: 'Legal Professionals',
        desc: 'Westlaw, Practical Law, and other research and workflow tools for law firms and corporate legal departments.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.legal),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Corporates',
        desc: 'Compliance, trade management, and indirect tax solutions for corporations and the seven largest global accounting firms.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.corporates),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Tax, Audit & Accounting',
        desc: 'ONESOURCE, UltraTax, and practice management tools for tax, audit, and accounting firms outside the Big Seven.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.taxAccounting),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Reuters News',
        desc: 'Business, financial, and global news supplied to professional and agency customers, including the LSEG news agreement.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.reutersNews),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
      {
        label: 'Global Print',
        desc: 'Print-based legal and regulatory information products, a legacy segment in structural decline.\nShown as a percentage of total revenue.',
        values: segments.segments.map(s => s.globalPrint),
        format: { prefix: '$', suffix: 'B', decimals: 1 },
      },
    ],
    chartNote:
      'Current segment structure applies from FY19 onward. Corporates grew fastest as indirect tax and compliance products gained traction; Global Print continues its structural decline as customers shift to digital.',
  },
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: '6-K',
        note: 'Quarterly report, three months to 30 June',
        date: 'Aug 5 2026',
      },
      {
        kind: '6-K',
        note: 'Quarterly report, three months to 31 March',
        date: 'May 6 2026',
      },
      {
        kind: '40-F',
        note: 'Annual report for fiscal year 2025',
        date: 'Feb 26 2026',
      },
      {
        kind: '6-K',
        note: 'Quarterly report, three months to 30 September',
        date: 'Nov 4 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://ir.thomsonreuters.com/',
    },
    {
      label: 'Annual Reports',
      href: 'https://ir.thomsonreuters.com/financial-information/annual-reports',
    },
  ],
  externalLinks: [
    {
      label: 'SEC EDGAR',
      href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001075124',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/TRI/',
    },
  ],
};

export function TriPage() {
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={hero}
      financials={financials}
      extraSections={triSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
