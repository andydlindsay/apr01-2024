const generatePromise = require('./generators/generate-promise');

const promise = generatePromise('promise one', false, 5000);

console.log(promise);

// our promise generator waits 1s 1000ms

// setTimeout(() => {
//   console.log(promise);
// }, 2000);

// .then => is called when the promise succeeds
// .catch => is called when the promise fails
// .finally => is called once everything is done (success or failure)
// every .then and .catch returns a new promise

promise
  .then((dataFromThePromise) => {
    console.log('the promise succeeded!!', dataFromThePromise);
    // return 42;
    const promiseTwo = generatePromise('promise two');
    return promiseTwo;
  })
  .catch((errMessage) => {
    console.log('the promise failed :(', errMessage);
    return 'please try again in 5 mins';
  })
  .then((dataFromThePromise) => {
    console.log('the second promise', dataFromThePromise);
  })
  .catch((errMessage) => {
    console.log('the promise failed :(', errMessage);
    return 'please try again in 5 mins';
  })
  .finally(() => {
    console.log('called in success or failure');
  });
