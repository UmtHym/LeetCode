// The trim() method removes whitespace from both sides of a string. w3schools

// In this kata we are going to extend the trim method to be able to remove any character(upper and lower cases) from both sides of a string.
// Task:

// Create a method called trim which removes the passed parameter c(upper and lower cases) from the leading and tailing of the string.

// Note:

// 1- If no parameter is being passed you need to remove the leading and tailing spaces.
// 2- The passed parameter will only be alphabet(upper and lower cases) characters.
// Examples:

// string = "LLLHello Worldlll" and c = "l" => "Hello World"

// string = "Visca ElbarcaXxX" and c = "X" => "Visca Elbarca"

String.prototype.trim = function (c) {
  if (!c) {
    return this.trimStart().trimEnd();
  }

  let arr = this.split("");

  while (
    arr.length > 0 &&
    (arr[0] === c.toUpperCase() || arr[0] === c.toLowerCase())
  ) {
    arr = arr.slice(1);
  }

  while (
    arr.length > 0 &&
    (arr[arr.length - 1] === c.toUpperCase() ||
      arr[arr.length - 1] === c.toLowerCase())
  ) {
    arr = arr.slice(0, -1);
  }

  return arr.join("");
};
