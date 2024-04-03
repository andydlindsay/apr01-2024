// method => function inside an object

// const num = 42;
// const myFunc = function() {
//   console.log(num);
// };

// `this` is used in Object Oriented Programming (OOP) W2D5

let user = {
  firstName: 'alice',
  lastName: 'wonderland',
  fullName: function() {
    // console.log(`${user['firstName']}`);
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

const copy = user;
user = null;
const another = copy;
const yetAnother = another;

yetAnother.fullName();

// console.log
// console.log();

console.log('copy', copy);
copy.fullName();

// console.log('user', user);
// user.fullName();
