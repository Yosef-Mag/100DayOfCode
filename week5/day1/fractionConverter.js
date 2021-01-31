/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

// I : number
// O : simplified fraction of that number
// C : none
// E : none

const toFraction = function(number) {
    
    const reduce = function(numerator, denominator) {
      const lowNum = Math.min(numerator, denominator);
      for (let i = lowNum; i > 0; i--) {
        if ( i > numerator || i > denominator) {
          return [numerator, denominator];
        }
        if ( numerator % i === 0 && denominator % i === 0 ) {
          numerator /= i;
          denominator /= i;
        }
      }
      return [numerator, denominator];
    };
  
    let isNegative = number < 0;
    let string = number.toString();
    let split = string.split('.');
    if (isNegative) { number = number * -1; }
    let denominator;
    if (split[1]) {
      denominator = Math.pow(10, split[1].length);
    } else {
      denominator = 1;
    }
    let numerator = Math.round(number * denominator);
    return (isNegative ? '-' : '') + reduce(numerator, denominator).join('/');
};

console.log(toFraction(3.0))