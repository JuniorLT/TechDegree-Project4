/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// Junior Lam Tiang

// const phrase = new Phrase();
// const game = new Game();

// var word = 'how are you';
// var regex = (/[\w]/);
// for(let i = 0; i < word.length; i++){
//   // console.log(word[i]);
//   if (regex.test(word[i]) == true){
//     console.log(word[i]);
//   }else{
//     console.log('space');
//   }
// }

const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();
