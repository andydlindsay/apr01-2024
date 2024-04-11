# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Parallelizing async things (Promise.all)
- [x] Creating our own Promises

### Callback Hell

```js
funcThatAcceptsACb((err, dataOne) => {
  if (err) {
    return err;
  }
  anotherFunc((err, dataTwo) => {
    if (err) {
      return err;
    }
    anotherFunc((dataThree) => {
      // do something
    })
  })
});
```

### What is a Promise
* object that represents a future value
* always for async
* three states:
  * pending
  * succeed
  * fail


























