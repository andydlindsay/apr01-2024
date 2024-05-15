// should I rerender? old state vs new state; ===
// make a copy and update the copy

// const nums = [1,2,3];
// const another = [4,5,6];

// // const copy = JSON.parse(JSON.stringify(nums));
// // const copy = nums.map(element => element);
// // const copy = nums.filter(element => true);
// // const copy = nums;

// // spread operator ...

// const copy = [...another, 42, ...nums];

// // copy.push(4);

// console.log(nums);
// console.log(copy);



// const state = {
//   count: 0,
//   toppings: [],
//   crustType: 'stuffed',
//   glutenFree: false
// };

// const copyState = {
//   ...state,
//   crustType: state.crustType,
//   count: state.count + 1
// };

const obj = {
  a: 1,
  b: 2,
  faveNums: [42, 142],
  leastFaveNums: [4,5,6],
};

const copy = {
  ...obj,
  a: 3,
  faveNums: [
    400,
    ...obj.faveNums,
  ],
};

// copy.faveNums.push(400);

// copy.a = 3;

console.log(obj);
console.log(copy);
