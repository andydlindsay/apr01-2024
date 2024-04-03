const firstName = 'alice';
const cohort = 'apr 01 2024';
const hasGraduated = false;

const studentOneArr = ['alice', 'apr 01 2024', false];

const studentOneObj = {
  firstName: 'alice',
  cohort: 'apr 01 2024',
  hasGraduated: false
};

studentOneObj['grade'] = 80;
studentOneObj['firstName'] = 'bob';

studentOneObj.grade = 90;
studentOneObj.firstName = 'carol';

const keyWeWant = 'grade';

studentOneObj[keyWeWant]
studentOneObj.keyWeWant; // undefined

console['log']('hello world');
console.log(studentOneObj);

// if (studentOneObj['doesNotExist'] === undefined) {
//   // the key doesn't exist
// }

// const arrTwo = [];
// arrTwo[42];

// arrays => collections of things
// objects => describe a thing

// objects => collections of key/value pairs
// dictionaries, hashes, associative arrays


