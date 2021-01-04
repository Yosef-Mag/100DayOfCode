/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/


// I : array 
// O : first number that occurs an even number of times in an array
// C: none
// E: No even-occurrence items

var evenOccurrence=function(arr){
    var counter ={},i;

    for (i=0;i<arr.length;i++){
        counter[arr[i]]=!counter[arr[i]]
    } 
    for (i=0;i<arr.length;i++){
        if(!counter[arr[i]]) {
            return arr[i]
        } 
    }
    return null;
}