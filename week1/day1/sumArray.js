/*
 * Given an array of numbers, calculate the greatest 
    contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6   
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7     6-4=2+5=7   
 * example 4: sumArray([4, -1, 5]); // => 8        4-1=3+5=8
 * example 5: sumArray([10, -11, 11]); // 11
 */


// I : array of numbers
// O : sum of numbers
//C: Linear time complexity O(n)
//   Constant Space Complexity O(1)
//E: Greatest possible sum in negative 

var sumArray= function(array){
    var maxSum = Number.NEGATIVE_INFINITY;
    var currentSum = 0;
    for (var i = 0; i < array.length; i++) {
        currentSum += array[i];
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0)  currentSum = 0
    } 
    return maxSum;
}