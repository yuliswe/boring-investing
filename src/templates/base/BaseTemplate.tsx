'use client';

import { Tag, Text } from '@/design-system';
import type { ReactNode } from 'react';
import type { Navbar, Hero, Footer, SectionData } from './types';
import {
  ProseSection,
  TrendsSection,
  MetricsSection,
  ChartSection,
  StackSection,
  TableSection,
  RowsSection,
  PeersSection,
} from './sections';

function SectionContent({ section }: { section: SectionData }) {
  switch (section.kind) {
    case 'prose':
      return <ProseSection paragraphs={section.paragraphs} />;
    case 'trends':
      return (
        <TrendsSection panels={section.panels} chartNote={section.chartNote} />
      );
    case 'metrics':
      return <MetricsSection metrics={section.metrics} />;
    case 'chart':
      return (
        <ChartSection
          bars={section.bars}
          points={section.points}
          hasRef={section.hasRef}
          refBottom={section.refBottom}
          refLabel={section.refLabel}
          chartNote={section.chartNote}
        />
      );
    case 'stack':
      return <StackSection bars={section.bars} chartNote={section.chartNote} />;
    case 'table':
      return (
        <TableSection
          firstColumn={section.firstColumn}
          columns={section.columns}
          rows={section.rows}
          tableNote={section.tableNote}
        />
      );
    case 'rows':
      return <RowsSection entries={section.entries} />;
    case 'peers':
      return (
        <PeersSection panels={section.panels} chartNote={section.chartNote} />
      );
  }
}

function Nav({ navbar }: { navbar: Navbar }) {
  return (
    <nav className='flex items-center gap-4 min-h-14 px-5 bg-[var(--color-bg)] border-b border-[var(--color-divider)]'>
      <span className='flex-none font-[var(--font-heading)] font-[var(--font-heading-weight,500)] text-5 leading-none'>
        {navbar.brand}
      </span>
      <div className='flex flex-1 min-w-0 gap-4 overflow-x-auto'>
        {navbar.links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`flex-none text-3.25 no-underline ${
              l.active
                ? 'text-[var(--color-accent)]'
                : 'text-[color-mix(in_srgb,var(--color-text)_60%,transparent)]'
            }`}
            style={{ fontFamily: 'var(--font-click, var(--font-body))' }}
          >
            {l.label}
          </a>
        ))}
      </div>
      {navbar.action && (
        <a
          href={navbar.action.href}
          className='btn btn-secondary flex-none text-xs whitespace-nowrap'
          style={{
            fontFamily: 'var(--font-click, var(--font-body))',
            padding: '0.3125rem 0.6875rem',
          }}
        >
          {navbar.action.label}
        </a>
      )}
    </nav>
  );
}

function HeroSection({ hero }: { hero: Hero }) {
  const arrow =
    hero.changeDir === 'up' ? '↑' : hero.changeDir === 'down' ? '↓' : '—';

  return (
    <section className='py-7 pb-5.5'>
      <div className='flex items-center gap-2.5 flex-wrap'>
        <span className='ds-kicker'>{hero.symbol}</span>
        <Tag tone='neutral'>{hero.sector}</Tag>
        {hero.tags?.map(t => (
          <Tag key={t} tone='outline'>
            {t}
          </Tag>
        ))}
      </div>
      <div className='flex flex-wrap items-baseline gap-2 gap-x-5 mt-2'>
        <Text variant='h2'>{hero.name}</Text>
        <div className='flex items-baseline gap-2.5'>
          <span className='font-[var(--font-heading)] font-[var(--font-heading-weight,500)] text-7 leading-none ds-tnum'>
            {hero.price}
          </span>
          <span className='text-sm ds-tnum'>
            {arrow} {hero.change}
            {' †'}
          </span>
          {hero.priceNote && (
            <span className='text-2.75 text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
              {hero.priceNote}
            </span>
          )}
        </div>
      </div>
      <p className='mt-2.5 max-w-[64ch] text-sm leading-[1.55] text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]'>
        {hero.summary}
      </p>
    </section>
  );
}

function Header({
  sections,
  figuresDate,
}: {
  sections: SectionData[];
  figuresDate?: string;
}) {
  return (
    <header className='sticky top-14 z-10 flex flex-wrap items-center gap-2 gap-x-4 py-3 bg-[var(--color-bg)] border-y border-[var(--color-divider)]'>
      <span className='ds-kicker'>On this page</span>
      <div className='flex flex-1 gap-1 gap-x-3.5 overflow-x-auto pb-0.5'>
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className='flex-none text-xs no-underline text-[color-mix(in_srgb,var(--color-text)_60%,transparent)] hover:text-[var(--color-accent)]'
            style={{ fontFamily: 'var(--font-click, var(--font-body))' }}
          >
            {s.title}
          </a>
        ))}
      </div>
      {figuresDate && (
        <span className='text-2.75 ds-tnum text-[color-mix(in_srgb,var(--color-text)_45%,transparent)]'>
          Figures dated {figuresDate}
        </span>
      )}
    </header>
  );
}

function FooterSection({ footer }: { footer: Footer }) {
  return (
    <footer className='flex flex-wrap gap-3.5 gap-x-8 mt-5 py-6.5 pb-11 border-t border-[var(--color-divider)]'>
      <div className='flex-1 min-w-55'>
        <div className='font-[var(--font-heading)] font-[var(--font-heading-weight,500)] text-5'>
          Ledger
        </div>
        <p className='mt-2 max-w-[44ch] text-xs text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]'>
          {footer.disclaimer ||
            'Figures traced to filed statements and dated where they appear. Delayed data marked †'}
        </p>
      </div>
      {footer.links && footer.links.length > 0 && (
        <div className='flex flex-col gap-1.5'>
          <span className='ds-kicker'>Company</span>
          {footer.links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className='text-xs no-underline text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]'
              style={{ fontFamily: 'var(--font-click, var(--font-body))' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      {footer.externalLinks && footer.externalLinks.length > 0 && (
        <div className='flex flex-col gap-1.5'>
          <span className='ds-kicker'>Elsewhere</span>
          {footer.externalLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className='text-xs no-underline text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]'
              style={{ fontFamily: 'var(--font-click, var(--font-body))' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </footer>
  );
}

export type BaseTemplateProps = {
  navbar?: Navbar;
  hero: Hero;
  sections: SectionData[];
  childSections?: SectionData[];
  figuresDate?: string;
  footer?: Footer;
  children?: ReactNode;
};

export function BaseTemplate({
  navbar,
  hero,
  sections,
  childSections,
  figuresDate,
  footer,
  children,
}: BaseTemplateProps) {
  const merged = [...sections, ...(childSections || [])].sort(
    (a, b) => a.rank - b.rank
  );

  return (
    <div className='ds min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]'>
      {navbar && (
        <div className='sticky top-0 z-20'>
          <Nav navbar={navbar} />
        </div>
      )}

      <div className='mx-auto max-w-280 px-5'>
        <HeroSection hero={hero} />
        <Header sections={merged} figuresDate={figuresDate} />

        {merged.map(sec => (
          <section
            key={sec.id}
            id={sec.id}
            className='pt-7.5 pb-2 border-t border-[var(--color-divider)] scroll-mt-42.5'
          >
            <div className='flex flex-wrap items-baseline gap-2 gap-x-3'>
              <span className='ds-tnum text-xs tracking-[0.12em] font-[var(--font-heading)] text-[var(--color-accent)]'>
                {sec.rank}
              </span>
              <Text variant='h3'>{sec.title}</Text>
              {sec.origin && sec.origin !== 'Base' && (
                <Tag tone='accent'>{sec.origin}</Tag>
              )}
            </div>
            <p className='mt-2 max-w-[62ch] text-3.25 text-[color-mix(in_srgb,var(--color-text)_60%,transparent)]'>
              {sec.kicker}
            </p>
            <div className='py-4.5'>
              <SectionContent section={sec} />
            </div>
          </section>
        ))}

        {children}

        <FooterSection
          footer={
            footer || {
              links: [
                { label: 'Method', href: '#method' },
                { label: 'Sources', href: '#' },
              ],
              externalLinks: [
                { label: 'SEC EDGAR', href: '#' },
                { label: 'Annual letters', href: '#' },
              ],
            }
          }
        />
      </div>
    </div>
  );
}
