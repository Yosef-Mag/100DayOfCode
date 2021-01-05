/**
 * Write a function f(a, b) which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in a. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// I : Two strings
// O: Strings which is the intersection of input strings
// C: none
// E: Spaces and duplicate letters 

var  commonCharacters = function(str1, str2) {

    var str1 = str1.split('');
    var str2 = str2.split('');

    //store each character in the string in an object
    var letters = string1.reduce(function (obj, letter) {
        if(letter.match(/[a-z]/i)){
            obj[letter] = 1;
    }
        return obj;
},{})

    // iterate through each string. Increment letter count if exist in letter object
    for(var i = 0; i< str2.length; i++){
        var letter = str2[i];
            if (letters[letter] === 1){
                letters[letter]=letters[letter] + 1
    }
}

    // if the letter is included in all strings, reduce a return
return str1.reduce(function(soFar, letter){
    if (letters[letter] === 2){
        soFar += letter;
        letters[letter] = letters[letter] - 1;
}
    return soFar
},'');
};