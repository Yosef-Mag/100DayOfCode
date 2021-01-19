// I : array of ordered cards
// O : array of shuffled cards
// E : none
// C : none

const shuffleDeck = function(deck) {
    const swap = function (a, b) {
      let temp = deck[a];
      deck[a] = deck[b];
      deck[b] = temp;
    };
   
    for (let i = 0; i < deck.length; i++) {
      let pick = i + Math.floor(Math.random() * (deck.length - i));
      swap(i, pick);
    }
    return deck;
    };
  
  const orderedDeck = function() {
    const suits = [ '♥', '♣', '♠', '♦' ];
    const values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    let deck = [];
  
    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deck.push(value + suit);
      });
    });
    return deck;
  };

  console.log(shuffleDeck(orderedDeck()));