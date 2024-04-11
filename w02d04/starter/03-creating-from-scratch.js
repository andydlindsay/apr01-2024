const promiseOne = new Promise((resolve, reject) => {
  // happy path or unhappy path?
  const users = [
    {
      id: 1,
      username: 'alice',
    },
    {
      id: 2,
      username: 'bob',
    }
  ];

  resolve('192.168.8.8');
  // reject('wrong username or password');
});

promiseOne
  .then((resolvedValue) => {
    console.log('success!', resolvedValue);

    const promiseTwo = new Promise((resolve, reject) => {
      resolve({ lat: 127.8, lon: 0.0 });
      // reject('cannot find the product you are looking for');
    });

    return promiseTwo;
  })
  .then((resolvedValue) => {
    console.log('success!', resolvedValue);

    const promiseThree = new Promise((resolve, reject) => {
      resolve([17, 19, 21]);
    });

    return promiseThree;
  })
  .then((passTimes) => {
    console.log('pass times for the ISS', passTimes);
  })
  .catch((failureMessage) => {
    console.log('failure!', failureMessage);
  })

// find out your ip address
// use the ip to find out your lat and long
// find out when the iss passes over our lat and long
