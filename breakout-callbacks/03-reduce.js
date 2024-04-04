const nums = [1,2,3,4,5];

// let total = 0;

// for (const num of nums) {
//   total += num;
// }

// console.log('total', total);

const initialValue = 0;
const callback = function(total, num) {
  return total + num; // 10
};

// const finalAnswer = nums.reduce(callback, initialValue);
// console.log('finalAnswer', finalAnswer);

const ourReduce = function(arr, callback, initialValue) {
  let accumulator = initialValue; // []

  for (const element of arr) {
    accumulator = callback(accumulator, element); // ['hello there alice', 'hello there bob']
  }

  return accumulator;
};

// const result = ourReduce(nums, callback, initialValue);
// console.log('result', result);

const names = ['alice', 'bob', 'carol'];
const namesCallback = function(accumulator, currentElement) {
  accumulator.push(`hello there ${currentElement}`);

  return accumulator;
};
const namesInitialValue = [];
const result = ourReduce(names, namesCallback, namesInitialValue);
console.log('result', result);
