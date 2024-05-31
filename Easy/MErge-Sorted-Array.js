// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function(nums1, m, nums2, n) {
for (let i=0; i<nums2.length; i++){
    if(nums1[m]=== 0){
        nums1[m]=nums2[i]
    }else{
        m+=1
        nums1[m]=nums2[i]
    }
}
nums1.sort((a,b)=>a-b)
};

// Input - two arrays of integers in a ascending order,
// m and n represents number of elements inside those arrays respectively
// output - arr1 returned as merged with arr2 in an ascending order


// since m is the number of elements inside arr1, we can simply replace arr1 0's in such manner: arr1[m]===arr2[i] so im looping through arr2
//in order to replace next element, we increment m each loop