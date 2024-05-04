import { useState, useEffect } from 'react';
export const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 40,
        fontSize: 40,
      }}
    >
      {value}
      <p>You clicked {value} times</p>
      <button type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>
      <button type="button" onClick={() => setValue(value - 1)}>
        Decrement value by 1
      </button>
    </div>
  );
};
