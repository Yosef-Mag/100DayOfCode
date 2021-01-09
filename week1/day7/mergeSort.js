// I: array
// O: sorted array
// E: none
// C: none

function merger(left, right) {
    let result = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while(left.length) result.push(left.shift());
    
    while(right.length) result.push(right.shift());
    
    return result
}

function mergeSort(arr) {
    const middle = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, middle)
    const rightSide = arr.slice(middle, arr.length)
        if (arr.length < 2) return arr
        return merge(mergeSort(leftSide), mergeSort(rightSide))
}