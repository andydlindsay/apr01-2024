import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'pan'
  });

  const onAddClick = () => {
    const pizzaCopy = {
      ...pizza,
      toppings: [
        ...pizza.toppings,
        newTopping
      ]
    };
    setPizza(pizzaCopy);

    // const copy = [...toppings, newTopping];
    // setToppings(copy);

    // setToppings([...toppings, newTopping]);
  };
  
  const updateCrustType = (event) => {
    const pizzaCopy = {
      ...pizza,
      crustType: event.target.value,
    };
    setPizza(pizzaCopy);

    // setCrustType(event.target.value)
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own pizza!!!</h2>

      <div>
        <label>Crust type:</label>
        <input 
          value={pizza.crustType}
          onChange={updateCrustType}
        />
        <h3>Current crust type: {pizza.crustType}</h3>
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

export default Pizza;
