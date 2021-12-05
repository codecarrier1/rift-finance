import React, { useState } from 'react';
import { Balance, OptionCard, ProgressDays } from './components';

import { options } from './constants';

const Body: React.FC = () => {
  const [balance, setBalance] = useState(1000);

  const handleProgressDays = (days: number) => {};

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
