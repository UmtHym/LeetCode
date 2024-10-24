// Hint
// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

//  Solution 1
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined) return false;
  if (obj.constructor === classFunction) return true;
  return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction);
};

// Input - an Object and a class Function
// value of the class cna be anything (indefined, null,..etc)

// Output - Boolean

//(First line) First we check if the object is null or undefined or if the classFunction is not a function, than we return false
//(Second line) Then we write our base condition for the recursion of checking each prototyal constructor of the obj until it finds one and then return it true
//(Third line) Finally we call the function itself but within it we call the objects constructor matches the class or constructor function(classFunction) we are testing. if it doesnt match it will call it again with this line 'Object.getPrototypeOf(obj)' being the new property of the function and this way, it'll go up the ladder till all prototype constructors checked. If we reach at the end of prototypal chain, it'll hit null anyway.

//console.log(checkInstanceOf(new Date(), Date), true)
//console.log(checkInstanceOf(new Animal(), Dog), true)
//console.log(checkInstanceOf(Date, Date), false)
//console.log(checkInstanceOf(5, number), true)

// Solution 2

// var checkIfInstanceOf = function (obj, classFunction) {
//   if (obj === null || obj === undefined || typeof classFunction !== "function")
//     return false;

//   const objPrototype = Object.getPrototypeOf(obj);

//   if (objPrototype === classFunction.prototype) {
//     return true;
//   }

//   return checkIfInstanceOf(objPrototype, classFunction);
// };
