export type SegmentRevenue = {
  year: string;
  northAmerica: number;
  northSea: number;
  offshoreAfrica: number;
  oilSands: number;
  midstream: number;
  other: number;
};

const segments: SegmentRevenue[] = [
  {
    year: 'FY17',
    northAmerica: 8.352,
    northSea: 0.783,
    offshoreAfrica: 0.591,
    oilSands: 6.905,
    midstream: 0.102,
    other: 0.609,
  },
  {
    year: 'FY18',
    northAmerica: 7.787,
    northSea: 0.891,
    offshoreAfrica: 0.647,
    oilSands: 11.042,
    midstream: 0.102,
    other: 0.558,
  },
  {
    year: 'FY19',
    northAmerica: 9.837,
    northSea: 0.92,
    offshoreAfrica: 0.665,
    oilSands: 10.865,
    midstream: 0.088,
    other: 0.496,
  },
  {
    year: 'FY20',
    northAmerica: 8.26,
    northSea: 0.431,
    offshoreAfrica: 0.362,
    oilSands: 7.45,
    midstream: 0.285,
    other: 0.105,
  },
  {
    year: 'FY21',
    northAmerica: 15.387,
    northSea: 0.61,
    offshoreAfrica: 0.437,
    oilSands: 13.025,
    midstream: 0.759,
    other: -0.161,
  },
  {
    year: 'FY22',
    northAmerica: 21.985,
    northSea: 0.635,
    offshoreAfrica: 0.686,
    oilSands: 17.711,
    midstream: 0.986,
    other: 0.295,
  },
  {
    year: 'FY23',
    northAmerica: 17.317,
    northSea: 0.441,
    offshoreAfrica: 0.58,
    oilSands: 16.3,
    midstream: 1.002,
    other: 0.328,
  },
  {
    year: 'FY24',
    northAmerica: 17.285,
    northSea: 0.477,
    offshoreAfrica: 0.456,
    oilSands: 16.327,
    midstream: 0.895,
    other: 0.216,
  },
  {
    year: 'FY25',
    northAmerica: 18.952,
    northSea: 0.337,
    offshoreAfrica: 0.187,
    oilSands: 17.449,
    midstream: 0.761,
    other: 1.076,
  },
];

export default segments;

export const productionYears = [
  'FY17',
  'FY18',
  'FY19',
  'FY20',
  'FY21',
  'FY22',
  'FY23',
  'FY24',
  'FY25',
  'FY26E',
];

export const totalProduction = [
  962264, 1078813, 1098957, 1164136, 1234906, 1281434, 1332105, 1363496,
  1570757, 1659500,
];
