// I : n number
// O : the nth number of the sequence
// E : num 0 and 1
// C : none 

const nFib = function(n) {
    // using memoization
    const mem = [0, 1];
    while (n > 1) {
        mem.push(mem.shift() + mem[0]);
        n--;
    }
    return mem[n]
}