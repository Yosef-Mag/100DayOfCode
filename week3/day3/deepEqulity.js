// I : Two Objects
// O : true or false
// C : none
// E : none

const deepEquals = function(apple, orange) {

    if (apple === orange) { return true; }
    if (apple && !orange || !apple && orange) { return false; }
    if (!(apple instanceof Object) || !(orange instanceof Object)) { return false; }
    const appleKeys = Object.keys(apple);
    const orangeKeys = Object.keys(orange);
    if (appleKeys.length !== orangeKeys.length) { return false; }
    if (appleKeys.length === 0) { return true; } // two empty objects are equal
    for (let i = 0; i < appleKeys.length; i++) {
      if (!orange.hasOwnProperty(appleKeys[i])) { return false; }
      if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) { return false; }
    }
    return true;
    };