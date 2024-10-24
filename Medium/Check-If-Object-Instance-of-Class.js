// Hint
// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

//  Solution 1
// var checkIfInstanceOf = function(obj, classFunction) {
//     if(obj === null || obj === undefined) return false;
//     if(obj.constructor === classFunction) return true;
//     return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction)
// };

// Solution 2

var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  const objPrototype = Object.getPrototypeOf(obj);

  if (objPrototype === classFunction.prototype) {
    return true;
  }

  return checkIfInstanceOf(objPrototype, classFunction);
};

// Input - an Object and a class Function
// value of the class cna be anything (indefined, null,..etc)

// Output - Boolean

//we would check if the obj includes classFunction

//console.log(checkInstanceOf(new Date(), Date), true)
//console.log(checkInstanceOf(new Animal(), Dog), true)
//console.log(checkInstanceOf(Date, Date), false)
//console.log(checkInstanceOf(5, number), true)
