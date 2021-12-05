import React, { useState } from 'react';
import { Button, Input } from '../';

type IProgressDaysProps = {
  handleProgressDays: (days: number) => void;
};

export const ProgressDays: React.FC<IProgressDaysProps> = ({
  handleProgressDays,
}) => {
  const [days, setDays] = useState('365');

  return (
    <div className='px-4 py-2 text-white text-xl text-center border-2 border-white rounded-sm flex items-center gap-2'>
      <span>Days to Progress</span>
      <div className='w-32'>
        <Input type='number' value={days} onChange={(v) => setDays(v)} />
      </div>
      <Button onClick={() => handleProgressDays(+days)} variant='primary'>
        {' '}
        Enter{' '}
      </Button>
    </div>
  );
};
