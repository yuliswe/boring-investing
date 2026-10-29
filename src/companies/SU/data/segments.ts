export const segmentRevenue = [
  { year: 'FY17', oilSands: 9.723, ep: 3.487, rm: 19.612, corporate: 0.063 },
  { year: 'FY18', oilSands: 12.039, ep: 3.869, rm: 23.655, corporate: 0.029 },
  { year: 'FY19', oilSands: 13.948, ep: 3.675, rm: 22.216, corporate: 0.027 },
  { year: 'FY20', oilSands: 7.792, ep: 1.899, rm: 15.18, corporate: 0.029 },
  { year: 'FY21', oilSands: 15.319, ep: 2.978, rm: 22.808, corporate: 0.028 },
  { year: 'FY22', oilSands: 21.905, ep: 4.331, rm: 36.622, corporate: 0.049 },
  { year: 'FY23', oilSands: 18.569, ep: 2.689, rm: 30.959, corporate: -0.011 },
  { year: 'FY24', oilSands: 20.818, ep: 2.798, rm: 31.266, corporate: -0.001 },
  { year: 'FY25', oilSands: 19.298, ep: 2.509, rm: 30.569, corporate: 0.001 },
];

export const royalties = [
  0.931, 1.05, 1.522, 0.238, 2.001, 4.571, 3.114, 4.192, 3.469,
];

export const operating = {
  years: [
    'FY17',
    'FY18',
    'FY19',
    'FY20',
    'FY21',
    'FY22',
    'FY23',
    'FY24',
    'FY25',
  ],
  upstreamProduction: [
    685.3, 732.0, 777.2, 695.1, 731.7, 743.2, 745.7, 827.6, 860.2,
  ],
  upstreamProductionGuidance: 855,
  oilSandsCashCost: [23.8, 25.25, 28.2, 28.2, 25.9, 29.95, 29.7, 26.9, 26.55],
  oilSandsCashCostGuidance: 27.5,
  fortHillsCashCost: [null, 31.2, 26.15, 32.8, 41.35, 30.0, 34.4, 32.8, 33.1],
  fortHillsCashCostGuidance: 34.5,
  syncrudeCashCost: [
    44.05, 47.25, 37.95, 33.8, 35.2, 36.65, 37.15, 35.15, 33.7,
  ],
  syncrudeCashCostGuidance: 35.5,
  refineryThroughput: [
    441.2, 430.8, 438.9, 407.0, 415.5, 433.2, 420.7, 465.0, 480.3,
  ],
  refineryThroughputGuidance: 467.5,
  refineryUtilization: [96, 93, 95, 88, 89, 93, 90, 100, 103],
  wti: [50.95, 64.8, 57.05, 39.4, 67.95, 94.25, 77.6, 75.7, 64.75],
};

export const sensitivities = [
  {
    label: 'WTI crude oil +US$1/bbl',
    desc: 'All crude benchmarks (WTI, Brent, SCO, WCS, condensate) rise by US$1/bbl together.',
    affo: 215,
  },
  {
    label: 'New York Harbor 2-1-1 crack +US$1/bbl',
    desc: 'The benchmark margin for refining crude into gasoline and diesel.',
    affo: 180,
  },
  {
    label: 'SYN-WTI differential +US$1/bbl',
    desc: 'A higher premium for synthetic crude over WTI.',
    affo: 60,
  },
  {
    label: 'WCS-WTI differential +US$1/bbl',
    desc: 'A narrower discount for heavy Canadian crude. Suncor refines enough heavy crude that the effect nets to about zero.',
    affo: 0,
  },
  {
    label: 'Alberta power +CA$20/MWh',
    desc: 'Suncor sells surplus power from cogeneration units at its oil sands sites.',
    affo: 140,
  },
  {
    label: 'AECO natural gas +CA$1/GJ',
    desc: 'Natural gas is a major input cost for oil sands extraction and upgrading.',
    affo: -250,
  },
  {
    label: 'Canadian dollar +US$0.01',
    desc: 'A stronger Canadian dollar lowers the Canadian-dollar value of US-dollar-priced crude and products.',
    affo: -270,
  },
];
