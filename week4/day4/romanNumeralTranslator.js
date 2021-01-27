/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

// I : string
// O : number
// C : none
// E : invalid input


const DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  const translateRomanNumeral = function(romanNumeral) {
 
    if (typeof romanNumeral !== 'string') {
      return null;
    }
    if (romanNumeral === '') {
      return 0;
    }
    
    let total = 0;
    
    const romanNumerals = romanNumeral.split('');
    
    for (let i = 0; i < romanNumerals.length; i++) {
     
      let singleRomanNumeral = romanNumerals[i];
      let nextSingleRomanNumeral = romanNumerals[i + 1];
      
      const numberFromRomanNumeral = DIGIT_VALUES[singleRomanNumeral];
      const nextNumberFromRomanNumeral = DIGIT_VALUES[nextSingleRomanNumeral];
     
      if (numberFromRomanNumeral < nextNumberFromRomanNumeral && i !== romanNumerals.length - 1) {
      
        total -= numberFromRomanNumeral;
      } else {
        
        total += numberFromRomanNumeral;
      }
    }
    return total;
};

console.log(translateRomanNumeral("IV"));