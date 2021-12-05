import React, { useState } from 'react';
import { Balance, OptionCard, ProgressDays } from './components';

import { options } from './constants';

const initialUserState: { [key: string]: {} } = {
  COMPOUND: {
    deposited: 0,
    interest: 0,
  },
  AAVE: {
    deposited: 0,
    interest: 0,
  },
  CURVE: {
    deposited: 0,
    interest: 0,
  },
};

const Body: React.FC = () => {
  const [balance, setBalance] = useState(1000);
  const [userState, setUserState] = useState(initialUserState);

  const handleProgressDays = (days: number) => {};

  const handleDeposit = (network: string, amount: number) => {};

  const handleWithdraw = (network: string) => {};

  return (
    <div id='body' className='px-6 py-4 flex-grow max-w-7xl w-full m-auto'>
      <div className='flex justify-between items-center mb-8'>
        <Balance balance={balance} />
        <ProgressDays handleProgressDays={handleProgressDays} />
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {options.map((option) => (
          <OptionCard key={option.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
