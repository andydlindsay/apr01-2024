// import {useState} from 'react';
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, incrementByN } = useCounter();

  return (
    <div>
      <h2>Counter Component</h2>

      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => incrementByN(5)}>+5</button>
      <button onClick={() => incrementByN(-10)}>-10</button>
    </div>
  );
};

export default Counter;
