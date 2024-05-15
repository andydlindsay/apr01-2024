import {useState} from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Visitor Counter Component</h2>

      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default VisitorCounter;
