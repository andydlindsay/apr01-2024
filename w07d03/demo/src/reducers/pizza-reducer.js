export const ADD_TOPPING = 'add-topping';
export const SET_CRUST = 'set-crust';

const reducer = (state, action) => {
  if (action.type === ADD_TOPPING) {
    const stateCopy = {
      ...state,
      toppings: [
        ...state.toppings,
        action.payload,
      ]
    };

    return stateCopy;
  }

  if (action.type === SET_CRUST) {
    const copyState = {
      ...state,
      crustType: action.payload,
    };

    return copyState;
  }

  throw new Error(`${action.type} is not supported`);
  // return state;
};

export default reducer;
