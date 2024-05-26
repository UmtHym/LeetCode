// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

//  Constraints:

//  1 <= s.length <= 104
//  s consists of only English letters and spaces ' '.
//  There will be at least one word in s.


var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ')
    return arr[arr.length - 1].length
};

// input - a string with words and spaces in between 
// output - an integer that represents the length of no spaces as the last word at the end 

// examples: 
//console.log(lengthOfLastWord("Hello World"), 5)
//console.log(lengthOfLastWord("   fly me to the moon   "), 4)
//console.log(lengthOfLastWord("luffy is still joyboy"), 6)

// trim the whitespace from the input 
// splitting the input from spaces to create an array of multiple small strings,
// then target the last sting and get its length and return it