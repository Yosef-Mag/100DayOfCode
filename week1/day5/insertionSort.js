// I: Array
// O: Sorted array
// C: None
// E: None

function insertionSort(array) {
    let temp 
        for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array [i] < array [j]) {
                temp = array.splice(i, 1)
                array.splice(j, 0, temp[0])
            }  
        }
    }
    return array;
}