// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//SOLUTION 1

// O(n) time complexity
var maxProfit = function(prices) {
    let buy = prices[0]
    let profit = 0
    for (let i=1; i<prices.length; i++){
        if (prices[i] < buy){
            buy = prices[i]
        }else if (prices[i] - buy > profit){
            profit = prices[i] - buy
        }
    }  
    return profit
};


// SOLUTION 2

// Brute Force with O(n^2) time complexity

var maxProfit = function(prices) {
    
    let difference = 0

    for (let i=0; i<prices.length; i++){
        for(let j= i+1; j<prices.length; j++){
            if(prices[i]<prices[j] && (prices[j] - prices[i]) > difference){
                difference = prices[j] - prices[i]
            }
        } 
    }
    return difference
};


// input: an Array of integers (it can be 0, whole numbers)
// the indeces of input represent the days

// output: an integer (which represents the highest difference between two numbers)

// console.log([7,1,5,3,6,4], 5) 
// console.log([7,6,4,3,1], 0)

// We loop through each number and compare the number with the rest(to the right) of the array and see if it is greater than all of it. 
// If it is less than the comparison than we simply compare the next element. 
// If it is greater than the compared one than we thake their difference. and we save that value and if something similar happens we simply compare it and if its bigger we re-assign it.

// finally if there are no difference we return 0
