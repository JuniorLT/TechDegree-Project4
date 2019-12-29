/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// Junior Lam Tiang

var game = new Game();
var button = document.getElementById('btn__reset');
button.addEventListener('click', event => {
  game.startGame();
});
