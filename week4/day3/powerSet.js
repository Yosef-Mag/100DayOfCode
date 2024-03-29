/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */


// I : string
// O : array of strings *all possible subsets including the empty set*
// C : none
// E : no str provided 

const powerSet = function(str) {

  let set = [];
  let hash = {};
  if (!str) { str = ''; }
  str = str.split('').sort();

  // remove duplicates
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      str.splice(i, 1);
      i--;
    }
  }

  // recursive through the sub sets
  const recurse = function(strSet) {
    const joined = strSet.join('');

    // check if we have visited this combo
    if (hash[joined]) { return; }
    hash[joined] = true;
    set.push(joined);

    // don't recurse to empty set - add it once at the end
    if (strSet.length === 1) { return; }

    // recurse all subsets
    for (let i = 0; i < strSet.length; i++) {
      let subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  };
  recurse(str);
  set.push(''); // the power set, by definition, includes the empty set

  return set;
};