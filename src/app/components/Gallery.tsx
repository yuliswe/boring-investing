'use client';

import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  Accordion,
  Badge,
  Banner,
  BottomSheet,
  Button,
  Card,
  Checkbox,
  Dialog,
  FilterChip,
  Input,
  Link,
  ListRow,
  NavBar,
  Radio,
  Segmented,
  Select,
  SheetOption,
  SkeletonRow,
  SortHeader,
  StatusBadge,
  Table,
  Tabs,
  Tag,
  Textarea,
  Toast,
  ToastViewport,
  ToggleRow,
  RemovableTag,
  Text,
} from '@/design-system';

type Row = {
  sym: string;
  name: string;
  sector: string;
  price: number;
  pe: number;
  chg: string;
  dir: number;
};

const ROWS: Row[] = [
  {
    sym: 'ARC',
    name: 'Arcadia Mills',
    sector: 'Textiles',
    price: 142.6,
    pe: 11.4,
    chg: '+1.84%',
    dir: 1,
  },
  {
    sym: 'BDC',
    name: 'Brandt Chemical',
    sector: 'Materials',
    price: 58.14,
    pe: 9.2,
    chg: '−0.92%',
    dir: -1,
  },
  {
    sym: 'HVN',
    name: 'Haven Rail',
    sector: 'Transport',
    price: 311.05,
    pe: 17.8,
    chg: '+0.31%',
    dir: 1,
  },
  {
    sym: 'MRD',
    name: 'Meridian Press',
    sector: 'Publishing',
    price: 24.88,
    pe: 13.1,
    chg: '−2.40%',
    dir: -1,
  },
];

const SECTORS = ['Textiles', 'Materials', 'Transport', 'Publishing', 'Energy'];

const FAINT_BORDER_COLOR =
  'color-mix(in srgb, var(--color-text) 8%, transparent)';

function Section({
  n,
  title,
  blurb,
  children,
}: {
  n: string;
  title: string;
  blurb: string;
  children: ReactNode;
}) {
  return (
    <section className='pt-[30px] pb-2 border-t border-[var(--color-divider)]'>
      <div className='flex items-baseline gap-3'>
        <span
          className='ds-tnum text-xs tracking-[0.12em]'
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-accent)',
          }}
        >
          {n}
        </span>
        <Text variant='h3'>{title}</Text>
      </div>
      <p className='mt-2 mb-1.5 max-w-[62ch]'>
        <Text variant='small' as='span' muted>
          {blurb}
        </Text>
      </p>
      {children}
    </section>
  );
}

function Sub({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className='flex flex-col gap-3 py-[18px] border-t'
      style={{ borderColor: FAINT_BORDER_COLOR }}
    >
      <span className='ds-kicker'>{label}</span>
      {children}
    </div>
  );
}

const Wrap = ({ children }: { children: ReactNode }) => (
  <div className='flex flex-wrap gap-3 items-center'>{children}</div>
);

export function Gallery() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') || 'light'
      : 'light'
  );
  const pickTheme = (t: string) => {
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem('boring-investing.theme', t);
    } catch {}
  };

  const [filters, setFilters] = useState<string[]>(['Textiles', 'Transport']);
  const [tags, setTags] = useState(['Dividend', 'Small cap', 'Value']);
  const [email, setEmail] = useState('anna@ledger.co');
  const [search, setSearch] = useState('');
  const [bio, setBio] = useState('Twelve-year record of rising book value.');
  const [period, setPeriod] = useState('Annual');
  const [segPeriod, setSegPeriod] = useState('Annual');
  const [checks, setChecks] = useState<string[]>(['Cash flow']);
  const [cadence, setCadence] = useState('Annual report');
  const [switches, setSwitches] = useState<Record<string, boolean>>({
    'Price alerts': true,
    'Weekly digest': false,
    'Earnings reminders': true,
  });
  const [sort, setSort] = useState<{ by: 'name' | 'price'; dir: 1 | -1 }>({
    by: 'name',
    dir: 1,
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [toasts, setToasts] = useState<
    { id: number; mark: string; msg: string }[]
  >([]);
  const toastId = useRef(0);

  const toggleFilter = (s: string) =>
    setFilters(f => (f.includes(s) ? f.filter(x => x !== s) : [...f, s]));
  const toggleCheck = (s: string) =>
    setChecks(c => (c.includes(s) ? c.filter(x => x !== s) : [...c, s]));

  const pushToast = (mark: string, msg: string) => {
    const id = ++toastId.current;
    setToasts(t => [...t, { id, mark, msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
  };

  const sorted = [...ROWS].sort((a, b) => {
    const v =
      sort.by === 'price' ? a.price - b.price : a.name.localeCompare(b.name);
    return v * sort.dir;
  });
  const toggleSort = (by: 'name' | 'price') =>
    setSort(s =>
      s.by === by ? { by, dir: (s.dir * -1) as 1 | -1 } : { by, dir: 1 }
    );
  const dirOf = (by: 'name' | 'price') =>
    sort.by === by ? (sort.dir === 1 ? 'asc' : 'desc') : null;

  return (
    <main className='ds min-h-screen pb-20'>
      <div className='mx-auto w-full max-w-[900px] px-5'>
        <header className='pt-10 pb-2'>
          <Text variant='display'>Component library</Text>
          <p className='mt-2 max-w-[62ch]'>
            <Text variant='small' as='span' muted>
              Every component in the Boring Investing design system, with its
              variations and live states. Newsreader headings over Lora body,
              Archivo on the interactive labels.
            </Text>
          </p>
          <div className='mt-3.5 flex items-center justify-between flex-wrap gap-3'>
            <Link href='/'>&#8592; Back to companies</Link>
            <Segmented
              name='theme'
              options={['light', 'dark']}
              value={theme}
              onChange={pickTheme}
            />
          </div>
        </header>

        {/* 01 Text */}
        <Section
          n='01'
          title='Text'
          blurb='Newsreader for headings, Lora for body. Weight and italics carry emphasis; figures set tabular wherever they stand as data.'
        >
          <Sub label='Scale'>
            <Text variant='display'>Display, 42px</Text>
            <Text variant='h2'>Heading two, 32px</Text>
            <Text variant='h3'>Heading three, 25px</Text>
            <Text variant='h4'>Heading four, 20px</Text>
            <Text variant='h5'>Heading five, 16px</Text>
            <Text variant='overline'>Overline, 12px</Text>
          </Sub>
          <Sub label='Body and de-emphasis'>
            <Text variant='body'>
              Body copy sets at 15px on 1.55 leading, with <em>italics</em> and{' '}
              <strong>semibold</strong> doing the work a second typeface would.
            </Text>
            <Text variant='small'>
              Small, 13px — card bodies and help text.
            </Text>
            <Text variant='small' muted>
              Muted, 13px — 55% ink, for de-emphasised runs.
            </Text>
            <Text variant='caption'>
              Caption, 11px — figure captions and timestamps.
            </Text>
          </Sub>
          <Sub label='Figures & deltas'>
            <Wrap>
              <Text variant='h3' as='span' tabular>
                142.60
              </Text>
              <Text variant='body' as='span' tabular>
                &#8593; +1.84%
              </Text>
              <Text variant='body' as='span' tabular className='italic'>
                &#8595; −0.92%
              </Text>
              <Text variant='body' as='span' tabular muted>
                &#8212; 0.00%
              </Text>
            </Wrap>
          </Sub>
        </Section>

        {/* 02 Link */}
        <Section
          n='02'
          title='Link'
          blurb='Accent, underlined, offset 3px. Inline links keep the underline; standalone links drop it and take the accent on hover.'
        >
          <Sub label='Inline · default, disabled'>
            <Text variant='body'>
              A sentence with an <Link href='#'>ordinary inline link</Link> and
              a{' '}
              <Link href='#' disabled>
                disabled link
              </Link>{' '}
              that no longer resolves.
            </Text>
          </Sub>
          <Sub label='Standalone · 44px tap target'>
            <Wrap>
              <Link href='#' variant='standalone'>
                Read the full note &#8594;
              </Link>
              <Link href='#' variant='standalone'>
                All sectors &#8594;
              </Link>
            </Wrap>
          </Sub>
        </Section>

        {/* 03 Button */}
        <Section
          n='03'
          title='Button'
          blurb='Outlined, never filled. Primary carries the accent border, secondary a hairline, ghost no border at all.'
        >
          <Sub label='Variants · default size'>
            <Wrap>
              <Button
                variant='primary'
                onClick={() => pushToast('✓', 'Added to watchlist')}
              >
                Add to watchlist
              </Button>
              <Button variant='secondary'>Compare</Button>
              <Button variant='ghost'>Skip</Button>
              <Button variant='secondary' icon aria-label='More'>
                &#8943;
              </Button>
            </Wrap>
          </Sub>
          <Sub label='Small · toolbars and table rows'>
            <Wrap>
              <Button variant='primary' size='small'>
                Add
              </Button>
              <Button variant='secondary' size='small'>
                Compare
              </Button>
              <Button variant='ghost' size='small'>
                Skip
              </Button>
              <Button variant='secondary' size='small' icon aria-label='More'>
                &#8943;
              </Button>
            </Wrap>
          </Sub>
          <Sub label='States · disabled, loading, block'>
            <Wrap>
              <Button variant='primary' disabled>
                Disabled
              </Button>
              <Button variant='primary' loading>
                Loading
              </Button>
            </Wrap>
            <Button variant='primary' block>
              Full-width action
            </Button>
          </Sub>
        </Section>

        {/* 04 Chip */}
        <Section
          n='04'
          title='Chip'
          blurb='Static tags tint from the ramps; filter chips are outlined and toggle to an accent stroke; removable chips carry a dismiss control.'
        >
          <Sub label='Tags · static'>
            <Wrap>
              <Tag tone='accent'>Accent</Tag>
              <Tag tone='neutral'>Neutral</Tag>
              <Tag tone='outline'>Outline</Tag>
            </Wrap>
          </Sub>
          <Sub label='Filter chips · live, multi-select'>
            <div className='flex gap-2 overflow-x-auto pb-1'>
              {SECTORS.map(s => (
                <FilterChip
                  key={s}
                  selected={filters.includes(s)}
                  onToggle={() => toggleFilter(s)}
                >
                  {s}
                </FilterChip>
              ))}
            </div>
          </Sub>
          <Sub label='Removable · live'>
            <div className='flex flex-wrap gap-2 items-center min-h-[34px]'>
              {tags.map(t => (
                <RemovableTag
                  key={t}
                  onRemove={() => setTags(x => x.filter(v => v !== t))}
                >
                  {t}
                </RemovableTag>
              ))}
              {tags.length === 0 ? (
                <Text variant='small' as='span' muted>
                  All removed —{' '}
                  <Button
                    variant='ghost'
                    size='small'
                    onClick={() => setTags(['Dividend', 'Small cap', 'Value'])}
                  >
                    restore
                  </Button>
                </Text>
              ) : null}
            </div>
          </Sub>
        </Section>

        {/* 05 Badge */}
        <Section
          n='05'
          title='Badge'
          blurb='Counts set tabular in a hairline pill; status reads as a small stroked dot plus a word. Never a filled block of colour.'
        >
          <Sub label='Count, dot and anchored'>
            <Wrap>
              <Badge tone='accent'>7</Badge>
              <Badge tone='neutral'>24</Badge>
              <StatusBadge status='open'>Open</StatusBadge>
              <StatusBadge status='closed'>Closed</StatusBadge>
              <span className='relative inline-flex'>
                <Button variant='secondary' icon aria-label='Alerts'>
                  &#9737;
                </Button>
                <span className='absolute -top-[5px] -right-[5px]'>
                  <Badge tone='accent'>3</Badge>
                </span>
              </span>
            </Wrap>
          </Sub>
        </Section>

        {/* 06 Input */}
        <Section
          n='06'
          title='Input'
          blurb='Transparent field on a hairline border; the accent appears only on focus. Fields fill their column, minimum 44px tall.'
        >
          <div
            className='grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Input label='Default' placeholder='Search companies' />
            <Input
              label='Filled · live'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              label='Error'
              defaultValue='anna@ledger'
              error='Enter a complete address.'
            />
            <Input label='Disabled' defaultValue='Locked value' disabled />
            <Input
              label='With affix'
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder='Ticker or name'
              affixStart={
                <span style={{ color: 'var(--color-neutral-500)' }}>
                  &#9906;
                </span>
              }
              affixEnd={
                <span
                  className='ds-tnum text-[11px]'
                  style={{ color: 'var(--color-neutral-500)' }}
                >
                  {ROWS.length}
                </span>
              }
            />
            <Input
              label='Small · 36px'
              size='default'
              placeholder='Compact field'
            />
          </div>
        </Section>

        {/* 07 Textarea */}
        <Section
          n='07'
          title='Textarea'
          blurb="The input's border and focus behaviour at a 90px minimum, resizable vertically only. Counter sits under the right edge, tabular."
        >
          <div
            className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Textarea
              label='Filled · live, with counter'
              value={bio}
              onChange={e => setBio(e.target.value)}
              count={{ value: bio.length, max: 240 }}
            />
            <Textarea label='Default' placeholder='Notes on this position…' />
            <Textarea
              label='Error'
              defaultValue='Too short.'
              error='At least 40 characters.'
            />
            <Textarea
              label='Disabled'
              defaultValue='Read-only thesis.'
              disabled
            />
          </div>
        </Section>

        {/* 08 Select */}
        <Section
          n='08'
          title='Select'
          blurb='A native select carrying the input shell. Two or three short options become a segmented control instead.'
        >
          <div
            className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Select
              label='Default · live'
              options={['Annual', 'Quarterly', 'Trailing twelve months']}
              value={period}
              onChange={e => setPeriod(e.target.value)}
            />
            <Select label='Disabled' options={['Annual']} disabled />
            <div className='field'>
              <label>Segmented alternative · live</label>
              <Segmented
                name='seg-period'
                options={['Annual', 'Quarterly']}
                value={segPeriod}
                onChange={setSegPeriod}
                block
              />
            </div>
          </div>
          <Text variant='small' muted>
            Selected: {period} / {segPeriod}
          </Text>
        </Section>

        {/* 09 Checkbox & radio */}
        <Section
          n='09'
          title='Checkbox & radio'
          blurb='Both sit inside a 44px label so the whole row is tappable. Checked state is an accent stroke with an inset ground.'
        >
          <div
            className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[22px] py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <div className='flex flex-col'>
              <span className='ds-kicker mb-1.5'>Checkbox · live</span>
              {['Cash flow', 'Dividends', 'Buybacks'].map(c => (
                <Checkbox
                  key={c}
                  label={c}
                  checked={checks.includes(c)}
                  onChange={() => toggleCheck(c)}
                />
              ))}
              <Checkbox label='Disabled option' disabled />
            </div>
            <div className='flex flex-col'>
              <span className='ds-kicker mb-1.5'>Radio · live</span>
              {['Annual report', 'Quarterly update'].map(r => (
                <Radio
                  key={r}
                  name='cadence'
                  label={r}
                  checked={cadence === r}
                  onChange={() => setCadence(r)}
                />
              ))}
              <Radio name='cadence' label='Weekly digest' disabled />
            </div>
          </div>
        </Section>

        {/* 10 Toggle */}
        <Section
          n='10'
          title='Toggle'
          blurb='For settings that take effect immediately. Label left, control right-aligned, hairline between rows.'
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            {Object.keys(switches).map(k => (
              <ToggleRow
                key={k}
                label={k}
                hint={switches[k] ? 'On' : 'Off'}
                checked={switches[k]}
                onChange={v => setSwitches(s => ({ ...s, [k]: v }))}
              />
            ))}
            <ToggleRow label='Disabled setting' disabled />
          </div>
        </Section>

        {/* 11 Card */}
        <Section
          n='11'
          title='Card'
          blurb='Bordered, unfilled. An auto-fit grid at a 240px minimum handles one, two and three columns without a breakpoint.'
        >
          <div
            className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5 py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Card
              kicker='Sector'
              title='Arcadia Mills'
              body='Textiles, listed 1974. Twelve-year record of rising book value per share.'
              meta={
                <>
                  <span>ARC</span>
                  <span>&middot;</span>
                  <span className='ds-tnum'>142.60</span>
                </>
              }
            />
            <Card
              elevation='sm'
              kicker='Elev-sm'
              title='Raised a whisper'
              body='Elevation is a hairline of shadow, not a lift.'
            />
            <Card
              href='#'
              kicker='Interactive'
              title='Whole card is the link'
              body='Border takes the accent on hover; the focus ring wraps the card.'
              meta={
                <span style={{ color: 'var(--color-accent)' }}>
                  Open &#8594;
                </span>
              }
            />
            <Card
              disabled
              kicker='Disabled'
              title='Unavailable'
              body='Dropped to 45%, as every disabled control.'
            />
          </div>
        </Section>

        {/* 12 List row */}
        <Section
          n='12'
          title='List row'
          blurb='Hairline-separated rows, 56px tall, primary text left and figures right. What a table becomes below 640px.'
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            {ROWS.map(r => (
              <ListRow
                key={r.sym}
                href='#'
                primary={r.name}
                secondary={`${r.sym} · ${r.sector}`}
                trailing={
                  <>
                    <div className='ds-tnum text-sm'>{r.price.toFixed(2)}</div>
                    <div
                      className={`ds-tnum text-[11px] ${r.dir < 0 ? 'italic' : ''}`}
                    >
                      {r.dir > 0 ? '↑' : '↓'} {r.chg}
                    </div>
                  </>
                }
              />
            ))}
          </div>
        </Section>

        {/* 13 Table */}
        <Section
          n='13'
          title='Table'
          blurb='Uppercase hairline header, row rules, tabular figures right-aligned. Company and Price headers sort live.'
        >
          <div
            className='py-[18px] overflow-x-auto border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Table>
              <thead>
                <tr>
                  <th>
                    <SortHeader
                      label='Company'
                      direction={dirOf('name')}
                      onSort={() => toggleSort('name')}
                    />
                  </th>
                  <th>Sector</th>
                  <th className='text-right'>
                    <SortHeader
                      label='Price'
                      direction={dirOf('price')}
                      onSort={() => toggleSort('price')}
                    />
                  </th>
                  <th className='text-right'>P/E</th>
                  <th className='text-right'>Change</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(r => (
                  <tr key={r.sym}>
                    <td>
                      <span className='table-name'>{r.name}</span>{' '}
                      <span
                        className='text-[11px]'
                        style={{ color: 'var(--color-neutral-500)' }}
                      >
                        {r.sym}
                      </span>
                    </td>
                    <td className='text-[13px]'>{r.sector}</td>
                    <td className='table-num'>{r.price.toFixed(2)}</td>
                    <td className='table-num'>{r.pe.toFixed(1)}</td>
                    <td className={`table-num ${r.dir < 0 ? 'italic' : ''}`}>
                      {r.dir > 0 ? '↑' : '↓'} {r.chg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Section>

        {/* 14 Tabs */}
        <Section
          n='14'
          title='Tabs'
          blurb='A hairline baseline with the active tab underlined in accent. The strip scrolls horizontally when labels outrun the width.'
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Tabs
              items={[
                {
                  label: 'Overview',
                  content: (
                    <Text variant='body'>
                      A tab panel holds one coherent view, not a scrolling
                      report. Keep it short enough that the strip stays in
                      sight.
                    </Text>
                  ),
                },
                {
                  label: 'Financials',
                  content: (
                    <Text variant='body'>
                      Figures inside a panel set tabular so columns align down
                      the page.
                    </Text>
                  ),
                },
                {
                  label: 'Filings',
                  content: (
                    <Text variant='body'>
                      Lists inside panels use the list row: hairline separators,
                      56px rows, the date right-aligned.
                    </Text>
                  ),
                },
              ]}
            />
          </div>
        </Section>

        {/* 15 Accordion */}
        <Section
          n='15'
          title='Accordion'
          blurb='One open at a time. Rule above each row, 52px minimum header, a rotating hairline marker.'
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Accordion
              defaultOpen={0}
              items={[
                {
                  question: 'How current are the figures?',
                  answer:
                    'Figures are delayed by fifteen minutes and marked with a dagger throughout.',
                },
                {
                  question: 'Where does the data come from?',
                  answer:
                    'Filings and exchange feeds, reconciled nightly into the static data files each company page reads.',
                },
                {
                  question: 'Can I export a company?',
                  answer:
                    'Every company page is a static document; use the browser print dialog to save a PDF.',
                },
              ]}
            />
          </div>
        </Section>

        {/* 16 Dialog */}
        <Section
          n='16'
          title='Dialog'
          blurb='Centred, 440px maximum, on the surface tone at the top elevation. Escape and backdrop both dismiss.'
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Button variant='primary' onClick={() => setDialogOpen(true)}>
              Open dialog
            </Button>
          </div>
          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title='Remove from watchlist?'
            actions={
              <>
                <Button
                  variant='secondary'
                  onClick={() => setDialogOpen(false)}
                >
                  Keep
                </Button>
                <Button
                  variant='primary'
                  onClick={() => {
                    setDialogOpen(false);
                    pushToast('✓', 'Removed from watchlist');
                  }}
                >
                  Remove
                </Button>
              </>
            }
          >
            Arcadia Mills and its three saved notes will be removed. This cannot
            be undone.
          </Dialog>
        </Section>

        {/* 17 Bottom sheet */}
        <Section
          n='17'
          title='Bottom sheet'
          blurb="The dialog's mobile form: docked to the bottom edge, rounded at the top only, rising on open."
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <Button variant='secondary' onClick={() => setSheetOpen(true)}>
              Open bottom sheet
            </Button>
          </div>
          <BottomSheet
            open={sheetOpen}
            onClose={() => setSheetOpen(false)}
            title='Sort companies'
          >
            <SheetOption selected onClick={() => setSheetOpen(false)}>
              Name, A–Z
            </SheetOption>
            <SheetOption onClick={() => setSheetOpen(false)}>
              Price, high to low
            </SheetOption>
            <SheetOption onClick={() => setSheetOpen(false)}>
              Earnings multiple
            </SheetOption>
            <Button
              variant='secondary'
              block
              onClick={() => setSheetOpen(false)}
            >
              Cancel
            </Button>
          </BottomSheet>
        </Section>

        {/* 18 Toast & banner */}
        <Section
          n='18'
          title='Toast & banner'
          blurb='Toasts rise from the bottom edge and dismiss themselves; banners sit in the flow and stay until acted on.'
        >
          <Sub label='Toasts · live'>
            <Wrap>
              <Button
                variant='secondary'
                onClick={() => pushToast('✓', 'Watchlist saved')}
              >
                Confirmation toast
              </Button>
              <Button
                variant='secondary'
                onClick={() => pushToast('!', 'Could not reach the server')}
              >
                Failure toast
              </Button>
            </Wrap>
          </Sub>
          <Sub label='Inline banner'>
            <Banner tone='accent' onDismiss={() => undefined}>
              Figures are delayed by fifteen minutes. Delayed data is marked
              with a dagger † throughout.
            </Banner>
            <Banner tone='neutral'>
              Neutral notice, for information that needs no action.
            </Banner>
          </Sub>
        </Section>

        {/* 19 Nav bar */}
        <Section
          n='19'
          title='Nav bar'
          blurb='Brand left, links right, one hairline beneath. Below 768px the links collapse behind a menu button.'
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <NavBar
              brand='Ledger'
              links={[
                { label: 'Companies', href: '#', current: true },
                { label: 'Screens', href: '#' },
                { label: 'Watchlist', href: '#' },
              ]}
              action={
                <Button variant='primary' size='small'>
                  Sign in
                </Button>
              }
            />
          </div>
        </Section>

        {/* 20 Skeleton */}
        <Section
          n='20'
          title='Skeleton'
          blurb='Placeholders mirror the shape of what is loading, at the same heights, so nothing jumps when content lands.'
        >
          <div
            className='py-[18px] border-t'
            style={{ borderColor: FAINT_BORDER_COLOR }}
          >
            <div className='mb-4'>
              <Button
                variant='secondary'
                size='small'
                onClick={() => setLoaded(v => !v)}
              >
                {loaded ? 'Show skeleton' : 'Show loaded'}
              </Button>
            </div>
            {loaded ? (
              <>
                <ListRow
                  primary='Arcadia Mills'
                  secondary='ARC · Textiles'
                  trailing={<span className='ds-tnum text-sm'>142.60</span>}
                />
                <ListRow
                  primary='Brandt Chemical'
                  secondary='BDC · Materials'
                  trailing={<span className='ds-tnum text-sm'>58.14</span>}
                />
              </>
            ) : (
              <>
                <SkeletonRow />
                <SkeletonRow />
              </>
            )}
          </div>
        </Section>

        <footer className='pt-[34px] border-t border-[var(--color-divider)]'>
          <Text variant='caption'>
            Twenty components on the Classical tokens. Every interactive element
            carries a themed hover, a pressed state and the 2px accent focus
            ring — tab through the page to see it.
          </Text>
        </footer>
      </div>

      <ToastViewport>
        {toasts.map(t => (
          <Toast
            key={t.id}
            mark={t.mark}
            onDismiss={() => setToasts(x => x.filter(v => v.id !== t.id))}
          >
            {t.msg}
          </Toast>
        ))}
      </ToastViewport>
    </main>
  );
}
