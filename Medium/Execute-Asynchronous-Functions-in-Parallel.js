// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

// Example 1:

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation:
// promiseAll(functions).then(console.log); // [5]

// The single function was resolved at 200ms with a value of 5.
// Example 2:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]
// Output: {"t": 100, "rejected": "Error"}
// Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
// Example 3:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]
// Output: {"t": 150, "resolved": [4, 10, 16]}
// Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.

var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    let results = new Array(functions.length);
    let count = 0;
    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          results[i] = val;
          count++;
          if (count === functions.length) resolve(results);
        })
        .catch((reason) => reject(reason));
    });
  });
};

// Input- Array of functions with promises that return values in different time individually
// Output- An Array of values or a reject depending on the value. All promises has to be resolved before returning the values

// Since we are asked to return a promise we wrap everything inside a promise
// inside the promise we need to loop through the functions and add the results inside an array
// We need to keep track of the number of values we store if they match with the length of the number of
// the functions in the input and so we can make sure we get the right result
