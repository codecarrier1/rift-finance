import React from 'react';

type IBalanceProps = {
  balance: number;
};

export const Balance: React.FC<IBalanceProps> = ({ balance }) => {
  return (
    <div className='px-4 py-2 text-white text-xl text-center border-2 border-white rounded-sm'>
      USDC Balance
      <br /> <strong>{balance}&nbsp;</strong>USDC
    </div>
  );
};
