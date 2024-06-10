import CounterContext from "../context/CounterContext";
import { useContext } from "react";

const Count = () => {
  const {count, setCount} = useContext(CounterContext);

  return (
    <div>
      <h2>Count Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Count;
