import React, { useEffect, useState } from 'react';

import { Button, Input } from '..';
import { NETWORKS } from '../../constants';

type INetworkCardProps = {
  deposited: number;
  interest: number;
  networkIndex: number;
  handleDeposit: (networkIndex: number, amount: number) => void;
  handleWithdraw: (networkIndex: number) => void;
};

export const NetworkCard: React.FC<INetworkCardProps> = ({
  deposited,
  interest,
  networkIndex,
  handleDeposit,
  handleWithdraw,
}) => {
  const { name, apy } = NETWORKS[networkIndex];

  const [tab, setTab] = useState<'DEPOSIT' | 'WITHDRAW'>('DEPOSIT');
  const [amount, setAmount] = useState(deposited);

  useEffect(() => {
    if (tab === 'DEPOSIT') {
      setAmount(deposited);
    } else {
      setAmount(deposited + interest);
    }
  }, [tab]);

  return (
    <div
      className='px-4 py-6 text-white text-center border-2 border-white'
      key={name}
    >
      <h1 className='text-3xl font-semibold'>{name}</h1>
      <div className='flex justify-between mt-6'>
        <span className='text-base'>Current APY:</span>
        <span>
          <strong className='text-lg'>{apy}</strong>%
        </span>
      </div>
      <div className='flex justify-between mt-2'>
        <span className='text-base'>Amount Deposited:</span>
        <span>
          <strong className='text-lg'>{deposited}&nbsp;</strong>USDC
        </span>
      </div>
      <div className='flex justify-between mt-2'>
        <span className='text-base'>Accured Interest:</span>
        <span>
          <strong className='text-lg'>{interest}&nbsp;</strong>USDC
        </span>
      </div>
      <div className='flex justify-center mt-6 gap-2 text-xl'>
        <div
          className={`inline-block px-4 py-2 hover:border-primary border-b-2 ${
            tab === 'DEPOSIT' && 'border-primary'
          } cursor-pointer`}
          onClick={() => setTab('DEPOSIT')}
        >
          Deposit
        </div>
        <div
          className={`inline-block px-4 py-2 hover:border-primary border-b-2 ${
            tab === 'WITHDRAW' && 'border-primary'
          } cursor-pointer`}
          onClick={() => setTab('WITHDRAW')}
        >
          Withdraw
        </div>
      </div>
      <div className='mt-5 h-10'>
        <div className='flex justify-between items-center px-4'>
          <label>Amount:</label>
          <div className='w-32'>
            <Input
              type='number'
              value={amount.toString()}
              onChange={(v) => setAmount(+v)}
              disabled={tab === 'WITHDRAW'}
            />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Button
          onClick={() => {
            if (tab === 'DEPOSIT') {
              handleDeposit(networkIndex, amount);
              setAmount(0);
            } else {
              handleWithdraw(networkIndex);
              setAmount(0);
            }
          }}
          variant='primary'
        >
          {' '}
          Cofirm{' '}
        </Button>
      </div>
    </div>
  );
};
