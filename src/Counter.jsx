import React, { useState } from 'react';
import { Page } from './Navbar';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Page>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </Page>
  );
};
