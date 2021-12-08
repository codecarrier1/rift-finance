import React, { useState, useCallback } from 'react';
import { Balance, NetworkCard, ProgressDays } from './components';

import { NETWORKS } from './constants';

const initialUserState: {
  [key: string]: { deposited: number; interest: number };
} = {
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

  const handleProgressDays = (days: number) => {
    NETWORKS.forEach((network) => {
      const interest =
        (network.apy * days * userState[network.name].deposited) / 365 / 100;
      console.log({ interest });
      setUserState((prevState) => ({
        ...prevState,
        [network.name]: {
          ...prevState[network.name],
          interest: prevState[network.name].interest + interest,
        },
      }));
    });
  };

  const handleDeposit = useCallback(
    (networkIndex: number, amount: number) => {
      if (balance >= amount) {
        const network = NETWORKS[networkIndex];
        const newUserState = { ...userState };
        newUserState[network.name].deposited += amount;
        setUserState(newUserState);
        setBalance(balance - amount);
      } else {
        alert('Not enough balance');
      }
    },
    [balance, userState, setUserState, setBalance]
  );

  const handleWithdraw = useCallback(
    (networkIndex: number) => {
      const network = NETWORKS[networkIndex];
      const amount =
        userState[network.name].deposited + userState[network.name].interest;
      const newUserState = { ...userState };
      newUserState[network.name].deposited = 0;
      newUserState[network.name].interest = 0;
      setUserState(newUserState);
      setBalance(balance + amount);
    },
    [balance, userState, setUserState, setBalance]
  );

  return (
    <div id='body' className='px-6 py-4 flex-grow max-w-5xl w-full m-auto'>
      <div className='flex justify-between items-center mb-8'>
        <Balance balance={balance} />
        <ProgressDays handleProgressDays={handleProgressDays} />
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {NETWORKS.map((network, index) => (
          <NetworkCard
            key={network.name}
            deposited={userState[network.name].deposited}
            interest={userState[network.name].interest}
            handleDeposit={handleDeposit}
            handleWithdraw={handleWithdraw}
            networkIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
