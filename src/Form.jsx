import React, { useState } from 'react';

export const Form = () => {
  const [input, changeInput] = useState('');
  const [display, changeDisplay] = useState('');
  const inputRef = React.createRef();

  return (
    <div>
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
    </div>
  );
};
