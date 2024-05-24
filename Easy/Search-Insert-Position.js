// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

//O(logn)
var searchInsert = function(nums, target) {
    min = 0;
    max = nums.length -1;
    let guess;

    while(min <= max){
        guess = Math.floor((min + max) / 2)
        if(nums[guess] === target){
            return guess;

        } else {
            if (nums[guess] < target) {
                min = guess + 1;
            } else {
                max = guess - 1;
            }
        }
    }
    return min
}

//O(nlogn)
//  var searchInsert = function(nums, target) {
//     if (nums.includes(target)){
//     return nums.indexOf(target)
//     }

//     let newNums = nums.slice(0);
//     newNums.push(target);
//     newNums.sort((a,b)=> a - b);

//     return newNums.indexOf(target)   
// }