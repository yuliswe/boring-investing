'use client';

import { SoftwareTemplate } from '@/templates/SoftwareTemplate';
import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';
import type { HeroData, FooterData, SectionData } from '@/templates/base';
import financials from './data/financials.json';

const navbar = {
  brand: 'Ledger',
  links: [
    { label: 'Companies', href: '/', active: true },
    { label: 'Screens', href: '#' },
    { label: 'Watchlist', href: '#' },
  ],
};

const hero: HeroData = {
  symbol: 'CSU',
  name: 'Constellation Software Inc.',
  sector: 'Software',
  tags: ['Large Cap'],
  price: 'CA$3,297.78',
  changePct: -0.63,
  priceNote: 'TSX close, 31 December',
  summary:
    'Serial acquirer of vertical market software businesses, operating a decentralized portfolio of hundreds of companies across diverse industries. Constellation Software generates the majority of its revenue from recurring maintenance and subscription fees, deploying free cash flow into disciplined acquisitions.',
};

const csuSections: SectionData[] = [
  {
    rank: 600,
    id: 'filings',
    title: 'Filings',
    kicker: 'Everything filed in the last twelve months, newest first.',
    kind: 'rows',
    entries: [
      {
        kind: 'Interim',
        note: 'Shareholder report, six months to 30 June',
        date: 'Aug 8 2026',
      },
      {
        kind: 'Interim',
        note: 'Shareholder report, three months to 31 March',
        date: 'May 12 2026',
      },
      {
        kind: 'Annual',
        note: 'Annual financial statements for fiscal year 2025',
        date: 'Mar 9 2026',
      },
      {
        kind: 'Interim',
        note: 'Shareholder report, nine months to 30 September',
        date: 'Nov 7 2025',
      },
      {
        kind: 'AIF',
        note: 'Annual Information Form for fiscal year 2024',
        date: 'Mar 12 2025',
      },
    ],
  },
];

const footer: FooterData = {
  links: [
    {
      label: 'Investor Relations',
      href: 'https://www.csisoftware.com/investor-relations/',
    },
    {
      label: 'Annual Reports',
      href: 'https://www.csisoftware.com/category/stat-filings',
    },
  ],
  externalLinks: [
    {
      label: 'SEDAR+',
      href: 'https://www.sedarplus.ca/landingpage/',
    },
    {
      label: 'Yahoo Finance',
      href: 'https://finance.yahoo.com/quote/CSU.TO/',
    },
  ],
};

export function CsuPage() {
  return (
    <SoftwareTemplate
      navbar={navbar}
      hero={hero}
      financials={financials as SoftwareFinancials}
      extraSections={csuSections}
      figuresDate='31 December'
      footer={footer}
    />
  );
}
