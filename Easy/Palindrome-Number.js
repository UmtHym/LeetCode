/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //reversed input
    let reversedX = x.toString().split('').reverse().join('')
    if(x.toString() === reversedX){
        return true
    }
    return false
};

//input = integer - not float, negatives included(minus gets to the other side - no palindrome), when the number ends with 0 it becomes no plaindrome

//output = boolean

//we want to check the integer from both sides if when we reverse it we see the same number

//or 
// var isPalindrome = function(x) {
//     if((x < 0) && x.length < 2){
//         return false
//     } 
//     return parseInt(x.toString().split('').reverse().join('')) === x
// }


console.log(isPalindrome(121, true), 'true')
console.log(isPalindrome(-121, false), 'false')
console.log(isPalindrome(10, false), 'false')















