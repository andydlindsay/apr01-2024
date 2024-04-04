// functions are values (objects)
// first-class

// const myFunc = function() { console.log('did this run??'); };

// const another1 = myFunc(); // calling the function
// // console.log(another1);

// const another2 = myFunc;
// console.log(String(another2));

// myFunc();
// another2();

// callback => is a function that we pass to another function to be invoked/called by that function
// higher order function (HOF) => function that accepts another function as an argument
// alternate def => a function that returns a function
const higherOrderFunc = function(callback) {
  console.log(callback.toString());
  callback(dataFromTheServer); // addTwo() / sayHello()
};

const addTwo = function(num) {
  console.log(num + 2);
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

higherOrderFunc(addTwo);
higherOrderFunc(sayHello);
