/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Junior Lam Tiang


 class Game{
   constructor(){
     this.missed = 0;
     this.phrases = [{phrase: "Winner"},{phrase: "Easy"},{phrase: "Hard"}, {phrase: "Very Hard"}, {phrase: "Lucky"}];
     this.activePhrase = 'null';
   }

   getRandomPhrase() {
    let randomNum = Math.floor(Math.random() * 5);
    return this.phrases[randomNum];
   }
 }
