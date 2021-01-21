// I : string
// O : the first non repeted char
// E : none
// C : none 


const firstNonRepeatedCharacter = function(string) {
    let mem = {};
    let c;
    for (let i = 0; i < string.length; i++) {
      c = string[i];
      if (!mem[c]) {
        mem[c] = 1;
      } else {
        mem[c]++;
      }
    }
    for (let i = 0; i < string.length; i++) {
      c = string[i];
      if (mem[c] === 1) { return c; }
    }
    return null;
    };