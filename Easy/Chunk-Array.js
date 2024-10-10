// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

var chunk = function (arr, size) {
  let result = [];
  let element = [];
  for (let i = 0; i < arr.length; i++) {
    element.push(arr[i]);
    if (element.length === size) {
      result.push(element);
      element = [];
    } else if (i === arr.length - 1) {
      result.push(element);
    }
  }
  return result;
};

//An array and a number representing length of the each elements in arr.
// array of arrays in sizes of size. If the length of the main array is not divisable to size than last element is not gonna be the length of size.

// console.log(chunk([1,2,3,4,5], 1), [[1],[2],[3],[4],[5]])
// console.log(chunk([1,2,3,4,5], 1), [[1],[2],[3],[4],[5]])
// console.log(chunk([[], 1), [])
