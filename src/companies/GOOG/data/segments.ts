import type { SegmentData } from '@/templates/SoftwareTemplate';

export type GoogSegmentRow = {
  year: string;
  googleServices: number;
  googleCloud: number;
  otherBets: number;
};

const segments: SegmentData<GoogSegmentRow> = {
  segments: [
    { year: 'CY16', googleServices: 87.4, googleCloud: 2.5, otherBets: 0.4 },
    { year: 'CY17', googleServices: 106.3, googleCloud: 4.1, otherBets: 0.5 },
    { year: 'CY18', googleServices: 130.5, googleCloud: 5.8, otherBets: 0.6 },
    { year: 'CY19', googleServices: 151.8, googleCloud: 8.9, otherBets: 0.7 },
    { year: 'CY20', googleServices: 168.6, googleCloud: 13.1, otherBets: 0.7 },
    { year: 'CY21', googleServices: 237.5, googleCloud: 19.2, otherBets: 0.8 },
    { year: 'CY22', googleServices: 253.5, googleCloud: 26.3, otherBets: 1.1 },
    { year: 'CY23', googleServices: 272.5, googleCloud: 33.1, otherBets: 1.5 },
    { year: 'CY24', googleServices: 304.9, googleCloud: 43.2, otherBets: 1.6 },
    { year: 'CY25', googleServices: 342.7, googleCloud: 58.7, otherBets: 1.5 },
  ],
};

export default segments;
