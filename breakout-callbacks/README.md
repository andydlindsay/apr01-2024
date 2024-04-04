# BREAKOUT - Callbacks

### To Do
- [x] Functions are values
- [x] Callbacks and higher order functions
- [x] Create our own array method (.map, .filter, .reduce, etc)
- [x] Questions?

forEach => runs the callback once for each element
map => makes a copy of the array, transforms the elements in some way
filter => makes a copy of the array, filtered based on some criteria
reduce => takes in an array of values and returns a single value

### Functions are Values
- Just like everything else in JavaScript, functions are values
- As a result, they can be stored in variables just like any other value

```js
const myFunction = function() {
  // do something
};
```

- They can also be passed around just like any other variable

```js
const myFunction = function() {
  // do something
}

const myVar = myFunction;

myVar(); // equivalent to calling myFunction()
```

- And they can be passed to other functions as arguments

```js
const myFunction = function() {
  // do something
}

const myHigherOrderFunction = function(callback) {
  callback(); // equivalent to myFunction()
}

myHigherOrderFunction(myFunction);
```

### Callbacks and Higher Order Functions
* A callback is a function that gets passed to another function to be executed by that function
* Callback functions are used all over the place in JavaScript
* They encapsulate reusable code that can be passed around like any other JS variable
* We call the function that accepts another function as an argument a **higher order function**

### Useful Links
* [Wikipedia: Callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
