/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// Junior Lam Tiang

// variable that selects the class game
var game = new Game;

// variable that selects the button that will start and restart the game
var button = document.getElementById('btn__reset');

// variables that select the game over message and win message
var lose = document.getElementById('game-over-message');
var win = document.getElementById('win');

// variable that selects all the keys on the game board
var keys = document.getElementsByClassName('key');

// on load win/game over messages are hidden
win.style.display = 'none';
lose.style.display = 'none';


// event listener that will wait until button is clicked
button.addEventListener('click', event => {
  // calls the start game function to begin
  game.startGame();

  // event listener that will listen for any of the keys to be clicked
  for (let i = 0; i < keys.length; i++){
    // variable that holds the keys
    var key = keys[i];
    key.addEventListener('click', event =>{
      // calls the interaction method using the clicked key
      game.handleInteraction(event.target);
    })
  }
});
