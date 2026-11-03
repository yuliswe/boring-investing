import type { SegmentData } from '@/templates/SoftwareTemplate';

export type ShopSegmentRow = {
  year: string;
  subscription: number;
  merchant: number;
};

const segments: SegmentData<ShopSegmentRow> = {
  segments: [
    { year: 'FY17', subscription: 0.31, merchant: 0.363 },
    { year: 'FY18', subscription: 0.465, merchant: 0.608 },
    { year: 'FY19', subscription: 0.642, merchant: 0.936 },
    { year: 'FY20', subscription: 0.909, merchant: 2.021 },
    { year: 'FY21', subscription: 1.342, merchant: 3.27 },
    { year: 'FY22', subscription: 1.488, merchant: 4.112 },
    { year: 'FY23', subscription: 1.837, merchant: 5.223 },
    { year: 'FY24', subscription: 2.35, merchant: 6.53 },
    { year: 'FY25', subscription: 2.752, merchant: 8.804 },
  ],
};

export default segments;
