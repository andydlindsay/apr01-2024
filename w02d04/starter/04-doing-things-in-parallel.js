// operation 1: 1000ms
// operation 2: 1500ms
// operation 3: 2500ms
// total: 5000ms

// in series

const promiseGenerator = require('./generators/generate-promise');

const promiseOne = promiseGenerator('promise one', false, 1000);
const promiseTwo = promiseGenerator('promise two', false, 1500);
const promiseThree = promiseGenerator('promise three', true, 2500);

const promises = [promiseThree, promiseOne, promiseTwo];

// async/await

// const resolvedValue = await myPromise;

// myPromise.then((resolvedValue) => {})

Promise.all(promises)
  .then((arrOfResolvedValues) => {
    console.log(arrOfResolvedValues);

    const promiseOneValue = arrOfResolvedValues[0];
    const promiseTwoValue = arrOfResolvedValues[1];
    const promiseThreeValue = arrOfResolvedValues[2];
  })
  .catch((errMessage) => {
    console.log(errMessage);
  })