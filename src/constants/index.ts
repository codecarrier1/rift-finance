type IOption = {
  name: string;
  apy: number;
  type: 'COMPOUND' | 'AVAE' | 'CURVE';
};

export const options: IOption[] = [
  {
    name: 'Compound',
    apy: 5,
    type: 'COMPOUND',
  },
  {
    name: 'Aave',
    apy: 3,
    type: 'AVAE',
  },
  {
    name: 'Curve',
    apy: 2.5,
    type: 'CURVE',
  },
];
