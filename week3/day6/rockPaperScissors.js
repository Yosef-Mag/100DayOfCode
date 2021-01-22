// I : play throw
// O : player throw 'array'
// E : none
// C : none

const rockPaperScissors = function (rounds) {
    let rounds = rounds || 3;
    let combos = [];
  
    const playRounds = function (playedSoFar) {
      playedSoFar = playedSoFar || '';
      
      if (playedSoFar.length === rounds) {
        combos.push(playedSoFar);
        return;
      }
      
      ['R', 'P', 'S'].forEach(function(currentPlay) {
        playRounds(playedSoFar + currentPlay);
      });
    };
  
    playRounds();
    return combos;
};