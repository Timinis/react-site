import React, { useState } from 'react';
import { Page } from './Navbar';

export const Form = () => {
  const [input, changeInput] = useState('');
  const [display, changeDisplay] = useState('');
  const inputRef = React.createRef();

  return (
    <Page>
      <p>{display}</p>
      <input
        onChange={event => {
          changeInput(event.target.value);
        }}
        ref={inputRef}
      />
      <button
        onClick={() => {
          changeDisplay(input);
          inputRef.current.value = '';
        }}
      >
        Submit
      </button>
    </Page>
  );
};
