// why?? scoping
// single responsibility principle (SRP) => our code should only be responsible for one thing
// forEach

const loopOverAnArray = function(arr, callback) {
  for (const element of arr) {
    // console.log(element);
    callback(element);
  }
};

loopOverAnArray([1,2,3,4], function(num) { console.log(num * 2); });
loopOverAnArray([1,2,3,4], num => console.log(num * 2));

// using 'this' w2d5

const names = ['alice', 'bob', 'carol'];
const doOnEachLoop = function(name) {
  console.log(`hello there ${name}`);
};
loopOverAnArray(names, doOnEachLoop);

names.forEach(doOnEachLoop);
