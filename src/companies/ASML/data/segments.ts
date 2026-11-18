import type { SegmentData } from '@/templates/SoftwareTemplate';

export type AsmlSegment = {
  year: string;
  euv: number;
  arfi: number;
  arfDry: number;
  krf: number;
  iLine: number;
  metrology: number;
  installedBase: number;
};

export type AsmlRegion = {
  year: string;
  china: number;
  taiwan: number;
  korea: number;
  usa: number;
  japan: number;
  other: number;
};

const segments: SegmentData<AsmlSegment> & { regions: AsmlRegion[] } = {
  segments: [
    {
      year: 'FY16',
      euv: 0.331,
      arfi: 3.54,
      arfDry: 0.113,
      krf: 0.553,
      iLine: 0.071,
      metrology: 0.111,
      installedBase: 2.156,
    },
    {
      year: 'FY17',
      euv: 1.084,
      arfi: 4.029,
      arfDry: 0.186,
      krf: 0.744,
      iLine: 0.1,
      metrology: 0.282,
      installedBase: 2.538,
    },
    {
      year: 'FY18',
      euv: 1.88,
      arfi: 4.807,
      arfDry: 0.274,
      krf: 0.86,
      iLine: 0.099,
      metrology: 0.339,
      installedBase: 2.685,
    },
    {
      year: 'FY19',
      euv: 2.8,
      arfi: 4.708,
      arfDry: 0.401,
      krf: 0.68,
      iLine: 0.134,
      metrology: 0.274,
      installedBase: 2.824,
    },
    {
      year: 'FY20',
      euv: 4.464,
      arfi: 3.917,
      arfDry: 0.427,
      krf: 1.012,
      iLine: 0.146,
      metrology: 0.35,
      installedBase: 3.662,
    },
    {
      year: 'FY21',
      euv: 6.284,
      arfi: 4.96,
      arfDry: 0.432,
      krf: 1.321,
      iLine: 0.142,
      metrology: 0.514,
      installedBase: 4.958,
    },
    {
      year: 'FY22',
      euv: 7.045,
      arfi: 5.237,
      arfDry: 0.624,
      krf: 1.654,
      iLine: 0.212,
      metrology: 0.66,
      installedBase: 5.743,
    },
    {
      year: 'FY23',
      euv: 9.124,
      arfi: 9.017,
      arfDry: 0.78,
      krf: 2.203,
      iLine: 0.278,
      metrology: 0.536,
      installedBase: 5.62,
    },
    {
      year: 'FY24',
      euv: 8.321,
      arfi: 9.667,
      arfDry: 0.774,
      krf: 1.991,
      iLine: 0.369,
      metrology: 0.646,
      installedBase: 6.494,
    },
    {
      year: 'FY25',
      euv: 11.603,
      arfi: 10.311,
      arfDry: 0.427,
      krf: 1.001,
      iLine: 0.307,
      metrology: 0.825,
      installedBase: 8.193,
    },
  ],
  regions: [
    {
      year: 'FY16',
      china: 0.758,
      taiwan: 2.14,
      korea: 1.594,
      usa: 1.088,
      japan: 0.415,
      other: 0.88,
    },
    {
      year: 'FY17',
      china: 0.92,
      taiwan: 2.097,
      korea: 3.031,
      usa: 1.418,
      japan: 0.404,
      other: 1.094,
    },
    {
      year: 'FY18',
      china: 1.843,
      taiwan: 1.99,
      korea: 3.725,
      usa: 1.962,
      japan: 0.568,
      other: 0.858,
    },
    {
      year: 'FY19',
      china: 1.378,
      taiwan: 5.357,
      korea: 2.202,
      usa: 1.98,
      japan: 0.463,
      other: 0.441,
    },
    {
      year: 'FY20',
      china: 2.324,
      taiwan: 4.731,
      korea: 4.152,
      usa: 1.657,
      japan: 0.543,
      other: 0.572,
    },
    {
      year: 'FY21',
      china: 2.741,
      taiwan: 7.328,
      korea: 6.223,
      usa: 1.583,
      japan: 0.459,
      other: 0.277,
    },
    {
      year: 'FY22',
      china: 2.916,
      taiwan: 8.096,
      korea: 6.046,
      usa: 1.991,
      japan: 1.009,
      other: 1.117,
    },
    {
      year: 'FY23',
      china: 7.252,
      taiwan: 8.075,
      korea: 6.949,
      usa: 3.151,
      japan: 0.614,
      other: 1.518,
    },
    {
      year: 'FY24',
      china: 10.195,
      taiwan: 4.354,
      korea: 6.409,
      usa: 4.522,
      japan: 1.156,
      other: 1.628,
    },
    {
      year: 'FY25',
      china: 9.52,
      taiwan: 8.338,
      korea: 8.16,
      usa: 4.089,
      japan: 1.421,
      other: 1.14,
    },
  ],
};

export default segments;
