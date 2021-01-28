/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

 // I: string
 // O: array of the starting index of longest run and the last index
 // E: empty str
 // C: none

const longestRun = function (string) {
    if (!string) { return null; }
  
    let currentCount = 1;
    let topCount = 0;
    let currentStart = 0;
    let topStart = 0;
    let topEnd = 0;

  
    for (let i = 1; i < string.length; i++) {
      if (string[i] === string[i - 1]) {
        currentCount++;
        if (currentCount > topCount) {
          topCount = currentCount;
          topStart = currentStart;
          topEnd = i;
        }
      } else {
        currentCount = 1;
        currentStart = i;
      }
    }
  
    return [topStart, topEnd];
};
  

console.log(longestRun("abbbcc"));