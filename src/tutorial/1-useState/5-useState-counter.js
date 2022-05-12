import React, { useState } from 'react';


const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const complexIncrease = () => {
    setTimeout(() => {
      setValue(prev => prev + 1)
    }, 2000)
  }
  return <>
    <section style={{ margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(prev => prev - 1)} className="btn">decrease</button>
      <button onClick={() => setValue(0)} className="btn">reset</button>
      <button onClick={() => setValue(prev => prev + 1)} className="btn">increase</button>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button onClick={complexIncrease} className="btn">increase later</button>
      </section>
    </section>
  </>;
};

export default UseStateCounter;
