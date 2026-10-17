import type { SectionData, TrendScenarioData } from './types';

export type StressTestData = {
  subject: string;
  revenueKicker: string;
  revenueNote: string;
  gainsDesc: string;
  tableNote: string;
  actualYears: string[];
  forwardYear: string;
  deductions: {
    label: string;
    desc: string;
    values: Record<string, number | null>;
  }[];
  dilutedShares: Record<string, number>;
  investmentGainsPerShare: Record<string, { label: string; value: number }[]>;
  writeOffs: { label: string; value: number }[];
  yearNotes: Record<string, string>;
};

type TrendMetric = {
  label: string;
  values: (number | null)[];
  yearNotes?: Record<string, string>;
  scenario?: TrendScenarioData;
};

type StressableFinancials = {
  revenue: { year: string; revenue: number }[];
  criticalMetrics: TrendMetric[];
  keyMetrics: TrendMetric[];
};

const billionFormat = { prefix: '$', suffix: 'B', decimals: 1 };
const billions = (v: number | null) =>
  v === null ? 'not disclosed' : `$${v.toFixed(1)}B`;

export function applyStressTest<T extends StressableFinancials>(
  financials: T,
  data: StressTestData,
  price: number
): { financials: T; sections: SectionData[] } {
  const years = financials.revenue.map(r => r.year);
  const stressYears = [...data.actualYears, data.forwardYear];
  const metricAt = (label: string, year: string): number =>
    [...financials.criticalMetrics, ...financials.keyMetrics].find(
      m => m.label === label
    )!.values[years.indexOf(year)]!;
  const lost = (year: string) =>
    data.deductions.reduce((sum, d) => sum + (d.values[year] ?? 0), 0);

  const earnings = (year: string) => {
    const isForward = year === data.forwardYear;
    const shares = data.dilutedShares[year];
    const reported = metricAt('Diluted EPS', year);
    const gains = data.investmentGainsPerShare[year].reduce(
      (sum, g) => sum + g.value,
      0
    );
    const writeOffs = isForward
      ? data.writeOffs.reduce((sum, w) => sum + w.value, 0)
      : 0;
    const lostRevenueEps = lost(year) / shares;
    const writeOffEps = writeOffs / shares;
    const beforeWriteOffs = reported - gains - lostRevenueEps;
    return {
      shares,
      reported,
      gains,
      writeOffs,
      lostRevenueEps,
      writeOffEps,
      beforeWriteOffs,
      eps: beforeWriteOffs - writeOffEps,
      price:
        year === data.forwardYear
          ? price
          : metricAt('P/E ratio', year) * reported,
    };
  };
  const stressedPe = (year: string) => {
    const e = earnings(year);
    return e.price / e.beforeWriteOffs;
  };

  const reportedRevenue = financials.revenue.map(r => r.revenue);
  const stressedRevenue = years.map((y, i) =>
    stressYears.includes(y)
      ? +(reportedRevenue[i] - lost(y)).toFixed(1)
      : years[i + 1] === stressYears[0]
        ? reportedRevenue[i]
        : null
  );
  const revenueNote = (year: string) => {
    const i = years.indexOf(year);
    return [
      `${year === data.forwardYear ? 'Forward' : 'Reported'} revenue ${billions(reportedRevenue[i])}`,
      ...data.deductions.map(d => `− ${d.label} ${billions(d.values[year])}`),
      `= stressed revenue ${billions(stressedRevenue[i])}, a cut of ${((lost(year) / reportedRevenue[i]) * 100).toFixed(1)}%.`,
      ...(data.yearNotes[year] ? [data.yearNotes[year]] : []),
    ].join('\n');
  };
  const wholeBillions = { ...billionFormat, decimals: 0 };
  const revenueSection: SectionData = {
    rank: 410,
    id: 'stress-test',
    title: 'Stress Test Scenario',
    kicker: data.revenueKicker,
    kind: 'multi',
    years,
    mode: 'absolute',
    guidanceCount: 1,
    yearNotes: Object.fromEntries(stressYears.map(y => [y, revenueNote(y)])),
    series: [
      {
        label: 'Revenue',
        desc: `Revenue as reported. ${data.forwardYear} is the forward estimate.`,
        values: reportedRevenue,
        format: wholeBillions,
      },
      {
        label: 'Stressed',
        desc: `Revenue minus the deductions listed below. Starts from reported ${years[years.indexOf(stressYears[0]) - 1]} revenue, which is not adjusted.`,
        values: stressedRevenue,
        format: wholeBillions,
        bold: true,
      },
      ...data.deductions.map(d => ({
        label: `− ${d.label}`,
        desc: d.desc,
        values: years.map(y => d.values[y] ?? null),
        format: billionFormat,
        indent: 1,
      })),
    ],
    chartNote: data.revenueNote,
  };

  const rows = stressYears.map(earnings);
  const eps = (v: number) => `$${v.toFixed(2)}`;
  const signed = (v: number) =>
    v === 0 ? '—' : `${v > 0 ? '−' : '+'}${eps(Math.abs(v))}`;
  const pe = (p: number, v: number) =>
    v > 0 ? `${(p / v).toFixed(1)}x` : 'n/m';
  const pair = (
    reported: (r: (typeof rows)[number]) => string,
    stressed: (r: (typeof rows)[number]) => string
  ) => rows.flatMap(r => [reported(r), stressed(r)]);
  const forward = rows.at(-1)!;
  const epsSection: SectionData = {
    rank: 411,
    id: 'stress-test-eps',
    title: 'Stress Test EPS and P/E',
    kicker: `Diluted EPS and the P/E ratio without ${data.subject}, beside the reported and consensus figures.`,
    kind: 'table',
    firstColumn: 'Line',
    columns: stressYears.flatMap(y =>
      y === data.forwardYear
        ? [`${y} consensus`, `${y} stressed`]
        : [`${y} reported`, `${y} stressed`]
    ),
    rows: [
      {
        label: 'Diluted EPS',
        desc: `Reported years are GAAP diluted EPS and ${data.forwardYear} consensus is the analyst estimate. Each stressed figure subtracts the lines below it.`,
        values: pair(
          r => eps(r.reported),
          r => eps(r.eps)
        ),
      },
      {
        label: '− Investment gains',
        desc: data.gainsDesc,
        values: pair(
          () => '—',
          r => signed(r.gains)
        ),
      },
      {
        label: '− Lost revenue',
        desc: 'The revenue removed in the Stress Test Scenario chart, divided by diluted shares. It is taken out in full with no tax shield, on the view that the datacenter costs of serving these customers remain after their revenue stops.',
        values: pair(
          () => '—',
          r => signed(r.lostRevenueEps)
        ),
      },
      {
        label: '− One-time write-offs',
        desc: `${data.writeOffs.map(w => `${w.label} ${billions(w.value)}`).join(', ')}, a total of ${billions(forward.writeOffs)} divided by ${forward.shares.toFixed(2)}B diluted shares, with no tax shield. They occur only in the year of the collapse.`,
        values: pair(
          () => '—',
          r => signed(r.writeOffEps)
        ),
      },
      {
        label: 'EPS before write-offs',
        desc: 'Diluted EPS without the one-time write-offs, which shows the earning power that remains. The P/E and Diluted EPS charts plot this figure.',
        values: pair(
          r => eps(r.reported),
          r => eps(r.beforeWriteOffs)
        ),
      },
      {
        label: 'P/E ratio',
        desc: `Price divided by diluted EPS. Reported years use the fiscal year-end price, as in the P/E chart, and ${data.forwardYear} uses $${price.toFixed(2)}.`,
        values: pair(
          r => pe(r.price, r.reported),
          r => pe(r.price, r.eps)
        ),
      },
      {
        label: 'P/E before write-offs',
        desc: 'Price divided by EPS before write-offs, on the same prices as the row above.',
        values: pair(
          r => pe(r.price, r.reported),
          r => pe(r.price, r.beforeWriteOffs)
        ),
      },
    ],
    tableNote: data.tableNote,
  };

  const atStressYears = (toValue: (year: string) => number) =>
    years.map(y => (stressYears.includes(y) ? toValue(y) : null));
  const withNotes = (notes?: Record<string, string>) => ({
    ...notes,
    ...Object.fromEntries(
      data.actualYears
        .filter(y => data.yearNotes[y])
        .map(y => [y, `Stress test: ${data.yearNotes[y]}`])
    ),
  });
  const scenarioDesc = `Without ${data.subject}, before the one-time write-offs in ${data.forwardYear}. Click the stressed years for caveats; the Stress Test EPS and P/E section shows the calculation.`;
  const forwardEarnings = earnings(data.forwardYear);
  const forwardPe = stressedPe(data.forwardYear).toFixed(1);

  return {
    financials: {
      ...financials,
      criticalMetrics: financials.criticalMetrics.map(m =>
        m.label === 'P/E ratio'
          ? {
              ...m,
              yearNotes: withNotes({
                ...m.yearNotes,
                [data.forwardYear]:
                  `${m.yearNotes?.[data.forwardYear] ?? ''} The stress test P/E of ${forwardPe} divides the same price by stressed EPS before write-offs of $${forwardEarnings.beforeWriteOffs.toFixed(2)}.`.trim(),
              }),
              scenario: {
                label: 'Stress test',
                desc: `${scenarioDesc} Reported years keep their fiscal year-end price.`,
                values: atStressYears(y => +stressedPe(y).toFixed(1)),
              },
            }
          : m
      ),
      keyMetrics: financials.keyMetrics.map(m =>
        m.label === 'Diluted EPS'
          ? {
              ...m,
              yearNotes: withNotes(m.yearNotes),
              scenario: {
                label: 'Stress test',
                desc: scenarioDesc,
                values: atStressYears(
                  y => +earnings(y).beforeWriteOffs.toFixed(2)
                ),
              },
            }
          : m
      ),
    },
    sections: [revenueSection, epsSection],
  };
}
