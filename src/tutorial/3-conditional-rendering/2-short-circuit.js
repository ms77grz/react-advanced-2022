import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>first value: {firstValue}</h1>
      <h1>second value: {secondValue}</h1>
      <h1>{text || 'john doe'}</h1>
      {text && <h1>hello world</h1>}
      {!text && <h1>hello world</h1>}
      <button onClick={() => setIsError(!isError)} className='btn'>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there's an error...</p>
      ) : (
        <div>
          <h2>there's no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
