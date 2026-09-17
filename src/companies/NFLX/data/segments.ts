export type NflxSegmentRow = {
  year: string;
  ucan: number;
  emea: number;
  latam: number;
  apac: number;
};

const segments: { segments: NflxSegmentRow[] } = {
  segments: [
    { year: 'FY17', ucan: 6.66, emea: 2.36, latam: 1.64, apac: 0.58 },
    { year: 'FY18', ucan: 8.28, emea: 3.96, latam: 2.24, apac: 0.95 },
    { year: 'FY19', ucan: 10.05, emea: 5.54, latam: 2.8, apac: 1.47 },
    { year: 'FY20', ucan: 11.46, emea: 7.77, latam: 3.16, apac: 2.37 },
    { year: 'FY21', ucan: 12.97, emea: 9.7, latam: 3.58, apac: 3.27 },
    { year: 'FY22', ucan: 14.09, emea: 9.75, latam: 4.07, apac: 3.57 },
    { year: 'FY23', ucan: 14.87, emea: 10.56, latam: 4.45, apac: 3.76 },
    { year: 'FY24', ucan: 17.36, emea: 12.39, latam: 4.84, apac: 4.42 },
  ],
};

export default segments;
