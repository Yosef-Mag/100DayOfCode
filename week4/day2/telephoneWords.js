//I: string number
//O: sreing letters
//C: 4 digits number/str
//E: none


const phoneDigitsToLetters = {
    0: "0",
    1: "1",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ"
};
  
  const telephoneWords = function (digitString) {
    let words = [];
  
    const lettersForDigits = (word, digits) =>
      !digits.length
        ? words.push(word)
        : [...phoneDigitsToLetters[digits[0]]].forEach((letter) =>
            lettersForDigits(word + letter, digits.slice(1))
          );
  
    lettersForDigits("", [...digitString]);
  
    return words;
  };
  
  console.log(telephoneWords("2745"));