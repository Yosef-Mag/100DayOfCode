// I : array
// O : sorted array
// C: none
// E : none

function swap(a, b, arr) {
    let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
}

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[min] > array[j]) min = j;
    }
        swap(i, min, array);
    }
        return array;
}