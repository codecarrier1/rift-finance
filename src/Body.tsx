import React, { useState } from 'react';
import { Balance, OptionCard, ProgressDays } from './components';

import { options } from './constants';

const Body: React.FC = () => {
  return (
    <div id='body' className='px-6 py-4 flex-grow max-w-7xl'>
      <div className='flex justify-between items-center mb-8'>
        <Balance />
        <ProgressDays />
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
