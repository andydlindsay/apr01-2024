"use strict";
const author = {
    name: 'agatha christie',
    writeBook: (title) => { return false; },
};
const higherOrderFunc = (callback) => {
    return () => { return true; };
};
higherOrderFunc((num) => { return "hello"; });
