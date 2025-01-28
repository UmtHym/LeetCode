var inorderTraversal = function* (arr) {
  if (!arr.length) {
    return;
  }

  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element);
    } else if (typeof element === "number") {
      yield element;
    }
  }
};

// Input - Array of Integers or nested arrays, handle the empty arrays
// Output - A generator object that returns each element in the right order when its called .next() even when its deeply nested in the input array

// console.log(inorderTraversal([[[6]],[1,3],[]]), [6,1,3])
// const generator = inorderTraversal(arr);

// We create a base case if its an array or not
// Then we create a for loop to loop through the array itself
// Inside the loop we check if the type of the element is an integer,
// And if not we call the generator function once more,
// else if the element is an integer then we simply yield the element

// generator.next().value; // 6
// generator.next().value; // 1
// generator.next().value; // 3
// generator.next().done; // true
// console.log(inorderTraversal()

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
