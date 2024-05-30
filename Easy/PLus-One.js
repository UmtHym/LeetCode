// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
    for(let i = digits.length -1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
}

// intput - Array of integers split a number into indices representing an actual whole number
// output - array of integers represents the same number but incremented by 1
//console.log(plusOne([1,2,3]), [1,2,4])
//console.log(plusOne([4,3,2,1]), [4,3,2,2])
//console.log(plusone([9]),[1,0])

//target the last element of the array using and add 1 to it and return it
//but insert a condition if the last element is 9 then we set it to 0 and look at the next element
//loop continues until and increment is done or if all numbers consists of 9 then we add a digit at the beggining (1)



