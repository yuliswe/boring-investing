'use client';

import { Tag, Text } from '@/design-system';
import type { ReactNode } from 'react';
import type { NavbarData, HeroData, FooterData, SectionData } from './types';
import {
  ProseSection,
  TrendsSection,
  MetricsSection,
  ChartSection,
  StackSection,
  MultiSection,
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
          format={section.format}
          refValue={section.refValue}
          refLabel={section.refLabel}
          chartNote={section.chartNote}
        />
      );
    case 'stack':
      return (
        <StackSection
          bars={section.bars}
          legend={section.legend}
          format={section.format}
          chartNote={section.chartNote}
        />
      );
    case 'multi':
      return (
        <MultiSection
          series={section.series}
          years={section.years}
          mode={section.mode}
          invert={section.invert}
          baseLabel={section.baseLabel}
          chartNote={section.chartNote}
        />
      );
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

function Nav({ navbar }: { navbar: NavbarData }) {
  return (
    <nav className='flex items-center gap-[var(--space-4)] min-h-14 px-[var(--space-5)] bg-[var(--color-bg)] border-b border-[var(--color-divider)]'>
      <span className='flex-none font-[family-name:var(--font-heading)] font-[var(--font-heading-weight)] text-xl leading-none'>
        {navbar.brand}
      </span>
      <div className='flex flex-1 min-w-0 gap-[var(--space-4)] overflow-x-auto'>
        {navbar.links.map(l => (
          <a
            key={l.label}
            href={l.href}
            className={`flex-none font-[family-name:var(--font-interactable)] text-xs no-underline ${
              l.active
                ? 'text-[var(--color-accent)]'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
      {navbar.action && (
        <a
          href={navbar.action.href}
          className='btn btn-secondary btn-sm flex-none whitespace-nowrap'
        >
          {navbar.action.label}
        </a>
      )}
    </nav>
  );
}

function HeroSection({ hero }: { hero: HeroData }) {
  const arrow = hero.changePct > 0 ? '↑' : hero.changePct < 0 ? '↓' : '—';

  return (
    <section className='pt-[var(--space-7)] pb-[var(--space-5)]'>
      <div className='flex items-center gap-[var(--space-2)] flex-wrap'>
        <span className='ds-kicker'>{hero.symbol}</span>
        <Tag tone='neutral'>{hero.sector}</Tag>
        {hero.tags?.map(t => (
          <Tag key={t} tone='outline'>
            {t}
          </Tag>
        ))}
      </div>
      <div className='flex flex-wrap items-baseline gap-[var(--space-2)] gap-x-[var(--space-5)] mt-[var(--space-2)]'>
        <Text variant='h2'>{hero.name}</Text>
        <div className='flex items-baseline gap-[var(--space-2)]'>
          <span className='font-[family-name:var(--font-heading)] font-[var(--font-heading-weight)] text-3xl leading-none ds-tnum'>
            {hero.price}
          </span>
          <span className='text-sm ds-tnum'>
            {arrow} {Math.abs(hero.changePct).toFixed(2)}%{' †'}
          </span>
          {hero.priceNote && (
            <span className='text-xs text-[var(--text-muted)]'>
              {hero.priceNote}
            </span>
          )}
        </div>
      </div>
      <p className='mt-[var(--space-2)] max-w-[var(--measure)] text-sm leading-[1.55] text-[var(--text-secondary)]'>
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
    <header className='sticky top-14 z-10 flex flex-wrap items-center gap-[var(--space-2)] gap-x-[var(--space-4)] py-[var(--space-3)] bg-[var(--color-bg)] border-y border-[var(--color-divider)]'>
      <span className='ds-kicker'>On this page</span>
      <div className='flex flex-1 gap-[var(--space-1)] gap-x-[var(--space-3)] overflow-x-auto pb-[var(--space-1)]'>
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className='flex-none font-[family-name:var(--font-interactable)] text-xs no-underline text-[var(--text-secondary)] hover:text-[var(--color-accent)]'
          >
            {s.title}
          </a>
        ))}
      </div>
      {figuresDate && (
        <span className='text-xs ds-tnum text-[var(--text-muted)]'>
          Figures dated {figuresDate}
        </span>
      )}
    </header>
  );
}

function FooterSection({ footer }: { footer: FooterData }) {
  return (
    <footer className='flex flex-wrap gap-[var(--space-3)] gap-x-[var(--space-8)] mt-[var(--space-5)] pt-[var(--space-6)] pb-[var(--space-8)] border-t border-[var(--color-divider)]'>
      <div className='flex-1 min-w-55'>
        <div className='font-[family-name:var(--font-heading)] font-[var(--font-heading-weight)] text-xl'>
          Ledger
        </div>
        <p className='mt-[var(--space-2)] max-w-[44ch] text-xs text-[var(--text-secondary)]'>
          {footer.disclaimer ||
            'Figures traced to filed statements and dated where they appear. Delayed data marked †'}
        </p>
      </div>
      {footer.links && footer.links.length > 0 && (
        <div className='flex flex-col gap-[var(--space-1)]'>
          <span className='ds-kicker'>Company</span>
          {footer.links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className='font-[family-name:var(--font-interactable)] text-xs no-underline text-[var(--text-secondary)]'
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      {footer.externalLinks && footer.externalLinks.length > 0 && (
        <div className='flex flex-col gap-[var(--space-1)]'>
          <span className='ds-kicker'>Elsewhere</span>
          {footer.externalLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className='font-[family-name:var(--font-interactable)] text-xs no-underline text-[var(--text-secondary)]'
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
  navbar?: NavbarData;
  hero: HeroData;
  sections: SectionData[];
  childSections?: SectionData[];
  figuresDate?: string;
  footer?: FooterData;
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
    <div className='min-h-screen'>
      {navbar && (
        <div className='sticky top-0 z-20'>
          <Nav navbar={navbar} />
        </div>
      )}

      <div className='mx-auto max-w-[var(--page-max)] px-[var(--space-5)]'>
        <HeroSection hero={hero} />
        <Header sections={merged} figuresDate={figuresDate} />

        {merged.map(sec => (
          <section
            key={sec.id}
            id={sec.id}
            className='pt-[var(--space-7)] pb-[var(--space-2)] border-t border-[var(--color-divider)] scroll-mt-42.5'
          >
            <div className='flex flex-wrap items-baseline gap-[var(--space-2)] gap-x-[var(--space-3)]'>
              <span className='ds-tnum text-xs tracking-[0.12em] font-[family-name:var(--font-heading)] text-[var(--color-accent)]'>
                {sec.rank}
              </span>
              <Text variant='h3' className='text-3xl'>
                {sec.title}
              </Text>
              {sec.origin && sec.origin !== 'Base' && (
                <Tag tone='accent'>{sec.origin}</Tag>
              )}
            </div>
            <p className='mt-[var(--space-2)] max-w-[62ch] text-xs text-[var(--text-secondary)]'>
              {sec.kicker}
            </p>
            <div className='py-[var(--space-4)]'>
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
                { label: 'Corrections', href: '#' },
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
