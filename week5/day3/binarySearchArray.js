/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 */

//I: sorted array and number
//O: indeex of the given number in the array
//C: none
//E: elem does not exist

const binarySearch = function (array, target) {

    const sub = function (low, high) {
      
      if (high === low) { return null }
  
      const mid = Math.floor((high - low) / 2) + low;
  
      if ( array[mid] === target ) { return mid } 
      else if ( low === high - 1 ) { return null }
       else if ( array[mid] > target ) { return sub(low, mid) } 
       else { return sub(mid, high) }
    };
    return sub(0, array.length);
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index02 = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index02); // null