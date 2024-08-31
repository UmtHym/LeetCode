// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    let count = [...args].length
    return count
};


//input - An array of elements, possibly different type of data structures, empty objects, null etc are accepted as 1

//output - an integer epresenting the number of arguments

//console.log(argumentsLength(1, 2, 3), 3);
//console.log(argumentsLength([5]), 1);
 