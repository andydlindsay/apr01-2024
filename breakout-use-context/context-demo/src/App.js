import './App.css';

import CounterContext from './context/CounterContext';
// import Count from './components/Count';
import InBetween from './components/InBetween';

import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CounterContext.Provider value={{ count, setCount }}>
        <h2>useContext Demo</h2>
        <InBetween />
      </CounterContext.Provider>
    </div>
  );
};

export default App;
