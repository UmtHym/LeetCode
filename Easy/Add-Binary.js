// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

var addBinary = function(a, b) {
    
    let arrA = a.split('');
    let arrB = b.split('');
    let temp = 0;
    let result = [];

    let i = arrA.length -1;
    let j = arrB.length -1; 

    while (i >= 0 || j >= 0 || temp >0 ){
        let value = (i >= 0 ? Number(arrA[i]) : 0) + (j >= 0 ? Number(arrB[j]) : 0) + temp;

        if(value === 0){
            result.push(0);
            temp = 0;
        }
        else if(value === 1){
            result.push(1);
            temp = 0;
        }
        else if (value === 2){
            result.push(0);
            temp = 1;
        }
        else if (value === 3){
            result.push(1);
            temp = 1
        }
        i--;
        j--;
    }

    if (temp === 1){
        result.push(temp)
    }
    return result.reverse().join('');
};