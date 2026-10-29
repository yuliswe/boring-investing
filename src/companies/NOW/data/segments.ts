import type { SegmentData } from '@/templates/SoftwareTemplate';

export type NowSegmentRow = {
  year: string;
  subscription: number;
  professionalServices: number;
};

const segments: SegmentData<NowSegmentRow> = {
  segments: [
    { year: 'FY17', subscription: 1.74, professionalServices: 0.179 },
    { year: 'FY18', subscription: 2.421, professionalServices: 0.188 },
    { year: 'FY19', subscription: 3.255, professionalServices: 0.205 },
    { year: 'FY20', subscription: 4.286, professionalServices: 0.233 },
    { year: 'FY21', subscription: 5.573, professionalServices: 0.323 },
    { year: 'FY22', subscription: 6.891, professionalServices: 0.354 },
    { year: 'FY23', subscription: 8.68, professionalServices: 0.291 },
    { year: 'FY24', subscription: 10.646, professionalServices: 0.338 },
    { year: 'FY25', subscription: 12.883, professionalServices: 0.395 },
    { year: 'FY26E', subscription: 15.785, professionalServices: 0.435 },
  ],
};

export default segments;
