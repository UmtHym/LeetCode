// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

var repeatedCharacter = function (s) {
  let strArr = s.split("");
  let hashMap = {};

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] in hashMap) {
      return strArr[i];
    } else {
      hashMap[strArr[i]] = true;
    }
  }
  return false;
};
