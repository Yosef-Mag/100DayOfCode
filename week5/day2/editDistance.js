// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

const editDistance = function (str1, str2) {

    if (str1.length === 0) return str2.length;
    if (str2.length === 0) return str1.length;

    let matrix = [], i, j;

    for (i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }

    for (j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    for (i = 1; i <= str2.length; i++) {
      for (j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) == str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
};
  
  console.log(editDistance("yosef", "mohammed"));
  