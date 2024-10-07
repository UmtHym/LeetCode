// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

var filter = function (arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

// Input - arr of integers and a function of filtering action
// No floats, no empty spaces, negative integers included

// Output - an array

//console.log(filter([1,2,3], fn(n, i) {return i===0}), [1])
//console.log(filter([0,10,20,30], fn(n) { return n > 10; }, [10,30])
//console.log(filter([-2,-1,0,1,2], fn(n) { return n + 1; }, [-2,0,1,2])

// Loop through the arr that is been provided,
//and for each element check for the filtering function is truthy or not
// if its true then we push it to the filteredArr and if its not we dont.
//We return finteredArr.
