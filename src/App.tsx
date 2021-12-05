import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <Body />
    </div>
  );
}

export default App;
