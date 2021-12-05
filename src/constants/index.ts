type INetwork = {
  name: string;
  apy: number;
  type: 'COMPOUND' | 'AVAE' | 'CURVE';
};

export const NETWORKS: INetwork[] = [
  {
    name: 'COMPOUND',
    apy: 5,
    type: 'COMPOUND',
  },
  {
    name: 'AAVE',
    apy: 3,
    type: 'AVAE',
  },
  {
    name: 'CURVE',
    apy: 2.5,
    type: 'CURVE',
  },
];
