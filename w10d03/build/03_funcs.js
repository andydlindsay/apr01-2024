"use strict";
// 3 things we need to know: params, return type, name of the function
const sayHello = (name) => {
    return false;
};
const result = sayHello('alice');
const returningPromise = (numPages) => {
    return new Promise((resolve) => {
        resolve('hello world');
    });
};
returningPromise(42)
    .then((result) => { });
