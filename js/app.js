/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// Junior Lam Tiang

var game = new Game();
var button = document.getElementById('btn__reset');

var lose = document.getElementById('game-over-message');
var win = document.getElementById('win');

win.style.display = 'none';
lose.style.display = 'none';

button.addEventListener('click', event => {
  game.startGame();
});
