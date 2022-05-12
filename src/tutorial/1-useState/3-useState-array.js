import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = id => {
    // setPeople(people.filter(person => person.id !== id));
    // functional update form
    setPeople(prevState => prevState.filter(person => person.id !== id));
  };
  return (
    <>
      {people.map(person => (
        <div className='item' key={person.id}>
          <h4>{person.name}</h4>
          <button onClick={() => removeItem(person.id)}>remove</button>
        </div>
      ))}
      <button onClick={() => setPeople([])} className='btn'>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
