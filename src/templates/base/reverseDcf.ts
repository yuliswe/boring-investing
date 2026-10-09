import type { SectionData } from './types';

export type ReverseDcfPath = {
  label: string;
  column?: string;
  phrase?: string;
  actual: number;
  forward: number;
};

export type ReverseDcfData = {
  companyName: string;
  actualYear: string;
  forwardYear: string;
  paths: ReverseDcfPath[];
  metric?: string;
  metricShort?: string;
  startNote: string;
  forwardNote: string;
  actualNote?: string;
  impliedNoteSuffix?: string;
  assumptionNote?: string;
  sharesOutstanding: number;
  sharesSource: string;
  netCash: number;
  netCashSource: string;
  reportingCurrency?: string;
  fxRate?: number;
  fxSource?: string;
  discountRate?: number;
  terminalGrowth?: number;
  explicitYears?: number;
  scenarioGrowthRates?: number[];
};

const MAX_GROWTH = 2;
const NUMBER_WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];

function parsePrice(text: string): { currency: string; price: number } {
  const i = text.search(/\d/);
  return {
    currency: i > 0 ? text.slice(0, i) : '$',
    price: parseFloat(text.slice(Math.max(i, 0)).replace(/,/g, '')),
  };
}

function nextYear(label: string, step: number): string {
  const m = label.match(/^([A-Z]+)(\d{2})/);
  if (!m) return `${label}+${step}`;
  return `${m[1]}${String(+m[2] + step).padStart(2, '0')}E`;
}

export function buildReverseDcfSections(
  data: ReverseDcfData,
  priceText: string
): SectionData[] {
  const {
    discountRate = 0.1,
    terminalGrowth = 0.025,
    explicitYears = 10,
    scenarioGrowthRates = [0.05, 0.1, 0.15, 0.2],
    fxRate = 1,
    reportingCurrency = '$',
    metric = 'free cash flow',
    metricShort = 'FCF',
  } = data;
  const { currency, price } = parsePrice(priceText);
  if (!(price > 0) || data.paths.some(p => !(p.forward > 0))) return [];

  const dcfEnterpriseValue = (firstYear: number, growth: number) => {
    let pv = 0;
    let cf = firstYear;
    for (let t = 1; t <= explicitYears; t++) {
      if (t > 1) cf *= 1 + growth;
      pv += cf / (1 + discountRate) ** t;
    }
    const terminal =
      (cf * (1 + terminalGrowth)) / (discountRate - terminalGrowth);
    return pv + terminal / (1 + discountRate) ** explicitYears;
  };

  const enterpriseValue =
    (price * data.sharesOutstanding) / fxRate - data.netCash;

  const impliedGrowth = (firstYear: number) => {
    let lo = -0.5;
    let hi = MAX_GROWTH;
    if (dcfEnterpriseValue(firstYear, hi) < enterpriseValue) return Infinity;
    for (let i = 0; i < 100; i++) {
      const mid = (lo + hi) / 2;
      if (dcfEnterpriseValue(firstYear, mid) > enterpriseValue) hi = mid;
      else lo = mid;
    }
    return (lo + hi) / 2;
  };

  const pct = (v: number) =>
    Number.isFinite(v)
      ? `${(v * 100).toFixed(1)}%`
      : `over ${MAX_GROWTH * 100}%`;
  const scale = Math.max(...data.paths.map(p => Math.abs(p.forward)));
  const decimals = scale < 1 ? 2 : scale < 10 ? 1 : 0;
  const money = (v: number, d = decimals) =>
    `${v < 0 ? '-' : ''}${reportingCurrency}${Math.abs(v).toFixed(d)}B`;
  const shares =
    data.sharesOutstanding < 0.1
      ? `${(data.sharesOutstanding * 1000).toFixed(1)}M`
      : `${data.sharesOutstanding}B`;

  const growths = data.paths.map(p => impliedGrowth(p.forward));
  const pathYears = [
    data.actualYear,
    data.forwardYear,
    ...Array.from({ length: explicitYears - 1 }, (_, t) =>
      nextYear(data.forwardYear, t + 1)
    ),
  ];
  const lastYear = pathYears.at(-1)!;
  const paths = data.paths.map((p, s) => [
    p.actual,
    ...Array.from({ length: explicitYears }, (_, t) =>
      Number.isFinite(growths[s])
        ? +(p.forward * (1 + growths[s]) ** t).toFixed(3)
        : null
    ),
  ]);

  const single = data.paths.length === 1;
  const rateList = data.paths
    .map((p, s) => {
      const rate = s === 0 ? `${pct(growths[s])} a year` : pct(growths[s]);
      return p.phrase ? `${rate} ${p.phrase}` : rate;
    })
    .reduce((acc, part, i, all) =>
      i === all.length - 1 && all.length > 1
        ? `${acc}${all.length > 2 ? ',' : ''} and ${part}`
        : `${acc}, ${part}`
    );

  const cashPhrase =
    data.netCash >= 0
      ? `${money(data.netCash, 2)} of net cash`
      : `${money(-data.netCash, 2)} of net debt`;
  const fxPhrase =
    fxRate !== 1
      ? ` Cash flows are converted at ${currency}${fxRate} per ${reportingCurrency}1${data.fxSource ? ` (${data.fxSource})` : ''}.`
      : '';
  const assumptions = `Discount rate ${pct(discountRate)}, terminal growth ${pct(terminalGrowth)} after ${lastYear}, ${shares} shares (${data.sharesSource}), and ${cashPhrase} (${data.netCashSource}).${fxPhrase}${data.assumptionNote ? ` ${data.assumptionNote}` : ''}`;
  const perShare = (forward: number, g: number) =>
    `${currency}${(((dcfEnterpriseValue(forward, g) + data.netCash) * fxRate) / data.sharesOutstanding).toFixed(0)}`;
  const impliedEnd = paths
    .map(p => (p.at(-1) == null ? 'n/a' : money(p.at(-1)!, 0)))
    .join(', ');

  return [
    {
      rank: 700,
      id: 'reverse-dcf',
      title: `Reverse DCF at ${discountRate * 100}%`,
      kicker: `The ${metric} growth that today’s ${currency}${price.toFixed(2)} share price requires at a ${pct(discountRate)} discount rate: ${rateList}. ${single ? 'The path starts' : 'Each path starts'} from ${data.startNote} and grows at ${single ? 'the' : 'its'} implied rate for ${NUMBER_WORDS[explicitYears - 1] ?? explicitYears - 1} more years.`,
      kind: 'multi',
      years: pathYears,
      mode: 'absolute',
      guidanceCount: explicitYears,
      yearNotes: {
        [data.actualYear]:
          data.actualNote ??
          `Actual ${data.actualYear} ${metric} of ${money(data.paths[0].actual, 2)}.`,
        [data.forwardYear]: data.forwardNote,
        [lastYear]: `The ${lastYear} ${metric} that the current price implies: ${impliedEnd}.${data.impliedNoteSuffix ? ` ${data.impliedNoteSuffix}` : ''}`,
      },
      series: data.paths.map((p, s) => ({
        label: p.label,
        desc: `Grows at ${pct(growths[s])} a year after ${data.forwardYear}, the rate at which the discounted cash flows equal today’s enterprise value of ${money(enterpriseValue, 0)}.`,
        values: paths[s],
        format: { prefix: reportingCurrency, suffix: 'B', decimals },
        bold: s === 0,
      })),
      chartNote: `${assumptions} The implied ${single ? 'rate recalculates' : 'rates recalculate'} when the price is adjusted.`,
    },
    {
      rank: 710,
      id: 'reverse-dcf-values',
      title: `Value per Share at ${discountRate * 100}%`,
      kicker: `What one ${data.companyName} share is worth at a ${pct(discountRate)} discount rate for a range of ${metric} growth rates, compared with the current price of ${currency}${price.toFixed(2)}.`,
      kind: 'table',
      firstColumn: `${metricShort} growth, ${pathYears[2]}–${lastYear}`,
      columns: data.paths.map(p => p.column ?? 'Value per share'),
      rows: [
        ...scenarioGrowthRates.map(g => ({
          label: `${(g * 100).toFixed(0)}% a year`,
          values: data.paths.map(p => perShare(p.forward, g)),
        })),
        {
          label: `Growth implied by ${currency}${price.toFixed(2)}`,
          desc: 'The growth rate at which the value per share equals the current price.',
          values: growths.map(pct),
        },
      ],
      tableNote: assumptions,
    },
  ];
}
