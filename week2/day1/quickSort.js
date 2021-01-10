// I: array
// O: sorted array
// C: none
// E: none

function quickSort(array) {
    if (array.length === 0) {
        return [];
    } else {
        const pivotValue = array[0];
        // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
        for (let e of array) {
            if (e < pivotValue) {
                lesser.push(e);
        } else if (e > pivotValue) {
            greater.push(e);
        } else {
            equal.push(e);
        }
    }
        return [...quickSort(lesser), ...equal, ...quickSort(greater)];
    }
}