// primitives are passed to functions by value (copy of the value)

// const doubleIt = function(num) {
//   num = num * 2;
//   console.log('inside the function', num);
// };

// const numberVar = 4;

// doubleIt(numberVar);

// console.log('bottom of file', numberVar); // 4 || 8

// objects are passed by reference (the function gets the original)
const modifyMyObj = function(obj) {
  obj.firstName = 'dean';
  console.log('inside the func', obj);
};

const myObj = {
  firstName: 'alice'
};

modifyMyObj(myObj);

console.log('outside the func', myObj); // alice || dean
