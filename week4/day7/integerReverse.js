/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

// I : number
// O : reversed number
// E : one digite number
// C : not convert the number use math only

const reverseInteger = function(number) {
  
  let result = 0;
  let place  = 10;

  while(number) {
    result *= 10;
    result += (number % place) / (place / 10); 
    number -= number % place;
    place  *= 10; 
  }
  return result;
}

console.log(reverseInteger(539))