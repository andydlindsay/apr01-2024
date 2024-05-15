import {useState, useReducer} from 'react';

import reducer, {ADD_TOPPING, SET_CRUST} from '../reducers/pizza-reducer';

const PizzaReducer = () => {
  const [newTopping, setNewTopping] = useState('');

  const [state, dispatch] = useReducer(reducer, {
    toppings: [],
    crustType: 'pan'
  });

  const onAddClick = () => {
    dispatch({ type: ADD_TOPPING, payload: newTopping });
  };
  
  const updateCrustType = (event) => {
    dispatch({ type: SET_CRUST, payload: event.target.value });
  };

  const mappedToppings = state.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own pizza!!!</h2>

      <div>
        <label>Crust type:</label>
        <input 
          value={state.crustType}
          onChange={updateCrustType}
        />
        <h3>Current crust type: {state.crustType}</h3>
      </div>

      <div>
        <label>New Topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={onAddClick}>Add!</button>
      </div>
      
      <div>
        <h2>Toppings!</h2>
        { mappedToppings }
      </div>
    </div>
  );
};

export default PizzaReducer;
