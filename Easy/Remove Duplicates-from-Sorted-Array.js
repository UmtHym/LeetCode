var removeDuplicates = function(nums) {

   let k = 1;

    for(let i=0; i < nums.length - 1; i++) {
        if(nums[i] !== nums[i+1]){
            nums[k] = nums[i+1]
            k++;
        }
    }
    return k;
};

//params - array of integers in ascending order, with possibility of negative
//return - sorted array of unique elements in ascending order and rest of the elements(duplicates) represented in "_".()
//the explanatio: The two pointer soluton tricky part; if we have array [1,2,3,4,4,4,4,8] the function is going to keep the second pointer (k) at the 3 (working as the second index) until actual i reaches to the 6th index where it compares 4 to 8, it will assign 8 ( [i+1] ) to the k since they are different.