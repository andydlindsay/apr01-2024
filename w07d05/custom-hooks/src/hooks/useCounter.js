import {useState} from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByN = (n) => {
    setCount(count + n);
  };

  // return [
  //   count,
  //   increment,
  //   decrement,
  //   incrementByN,
  // ];

  return {
    count,
    increment,
    decrement,
    incrementByN,
  };
};

export default useCounter;
