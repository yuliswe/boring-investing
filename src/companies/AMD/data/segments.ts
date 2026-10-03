// Revenue by market in billions. AMD reported Data Center, Client, Gaming and
// Embedded as four segments from FY22 to FY24 (recast back to FY21), then
// merged Client and Gaming into one segment in FY25 while still disclosing
// each market's revenue.
const segments = {
  segments: [
    {
      year: 'FY21',
      dataCenter: 3.694,
      client: 6.887,
      gaming: 5.607,
      embedded: 0.246,
    },
    {
      year: 'FY22',
      dataCenter: 6.043,
      client: 6.201,
      gaming: 6.805,
      embedded: 4.552,
    },
    {
      year: 'FY23',
      dataCenter: 6.496,
      client: 4.651,
      gaming: 6.212,
      embedded: 5.321,
    },
    {
      year: 'FY24',
      dataCenter: 12.579,
      client: 7.054,
      gaming: 2.595,
      embedded: 3.557,
    },
    {
      year: 'FY25',
      dataCenter: 16.635,
      client: 10.64,
      gaming: 3.91,
      embedded: 3.454,
    },
  ],
};

export default segments;
