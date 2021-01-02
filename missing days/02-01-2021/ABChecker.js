// Write a function called ABCheck that takes a string parameter and return true
// if the characters a and b are separated by exactly 3 places anywhere
// in the string at least once (ie. "lane borrowed" would result in true
// because there is exactly three characters between a and b).
// Otherwise return false.

var ABCheck = function (str) {
    for (var i = 0; i < str.length; i++) {
      if (
        (str[i] === 'a' && str[i + 4] === 'b') ||
        (str[i] === 'b' && str[i + 4] === 'a')
      ) {
        return true
      }
    }
    return false
  }
  
  var ABCheck = function (str) {
    return str.match(/a...b/g) !== null
  }
  
  var ABCheck = function (str) {
    if (/a...b/.test(str) || /b...a/.test(str)) {
      return true
    } else {
      return false
    }
  }
  
  function ABCheck(str) {
    var newStr = str.toLowerCase()
    for (var i = 0; i < newStr.length; i++) {
      if (
        (newStr[i] === 'a' && newStr[i + 4] === 'b') ||
        (newStr[i] === 'a' && newStr[i - 4] === 'b') ||
        (newStr[i] === 'b' && newStr[i + 4] === 'a') ||
        (newStr[i] === 'b' && newStr[i - 4] === 'a')
      ) {
        return true
      }
    }
    return false
  }