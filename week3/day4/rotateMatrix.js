// I : 2D array
// O : 2D array rotated 90 deg
// C : none
// E : rows != colmns


const rotateMatrix = function(matrix, direction ) {  
    direction = direction || 1;
    let m = matrix.length;
    let n = (matrix[0] && matrix[0].length);
    let output = [];
        for (let i = 0; i < n; i++) {
        output[i] = [];
        for (let j = 0; j < m; j++) {
            if (direction > 0) { 
            output[i][j] = matrix[m - j - 1][i];
            } else if (direction < 0) { 
            output[i][j] = matrix[j][n - i - 1];
            }
        }}
    return output;
};