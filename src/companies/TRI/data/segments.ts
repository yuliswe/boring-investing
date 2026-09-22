import type { SegmentData } from '@/templates/SoftwareTemplate';

export type TriSegmentRow = {
  year: string;
  legal: number;
  corporates: number;
  taxAccounting: number;
  reutersNews: number;
  globalPrint: number;
};

const segments: SegmentData<TriSegmentRow> = {
  segments: [
    {
      year: 'FY20',
      legal: 2.535,
      corporates: 1.367,
      taxAccounting: 0.836,
      reutersNews: 0.628,
      globalPrint: 0.62,
    },
    {
      year: 'FY21',
      legal: 2.712,
      corporates: 1.44,
      taxAccounting: 0.915,
      reutersNews: 0.694,
      globalPrint: 0.609,
    },
    {
      year: 'FY22',
      legal: 2.803,
      corporates: 1.536,
      taxAccounting: 0.986,
      reutersNews: 0.733,
      globalPrint: 0.592,
    },
    {
      year: 'FY23',
      legal: 2.807,
      corporates: 1.62,
      taxAccounting: 1.058,
      reutersNews: 0.769,
      globalPrint: 0.562,
    },
    {
      year: 'FY24',
      legal: 2.922,
      corporates: 1.844,
      taxAccounting: 1.165,
      reutersNews: 0.832,
      globalPrint: 0.519,
    },
    {
      year: 'FY25',
      legal: 2.868,
      corporates: 1.987,
      taxAccounting: 1.302,
      reutersNews: 0.853,
      globalPrint: 0.49,
    },
    {
      year: 'FY26E',
      legal: 3.15,
      corporates: 2.18,
      taxAccounting: 1.43,
      reutersNews: 0.88,
      globalPrint: 0.45,
    },
  ],
};

export default segments;
