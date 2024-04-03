// looping through arrays

const myArr = ['hello', 'world', 'jello'];

// c-style loop
// for (let i = 0; i < myArr.length; i++) {
//   const element = myArr[i];
//   console.log(element);
// }

// for..in loop
// for (const index in myArr) {
//   const element = myArr[index];
//   console.log(element);
// }

// for..of loop
// for (const element of myArr) {
//   console.log(element);
// }

// objects
const user = {
  firstName: 'alice',
  lastName: 'wonderland',
  fullName: 'alice wonderland'
};

// Object.keys(user); // ['firstName', 'lastName', 'fullName']

// for..in
for (const key in user) {
  console.log('key', key);
  const value = user[key];
  console.log('value', value);
}
