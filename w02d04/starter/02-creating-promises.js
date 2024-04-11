const myPromise = new Promise((resolve, reject) => {
  // resolve is called happy path
  // reject is called unhappy path
  // resolve(['contents of the file']); // tied to the .then
  reject('something went wrong :(((('); // tied to the .catch
});

console.log(myPromise);

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('end of file');
