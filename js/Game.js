/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Junior Lam Tiang


 class Game{
   constructor(){
     this.missed = 0;
     this.phrases = [{phrase: "Have Fun"},
     {phrase: "How are you"},
     {phrase: "Nice Job"},
     {phrase: "The Force is Strong With This One"},
     {phrase: "I am Your Father"}];

     this.activePhrase = 'null';
   }
   // gets a random phrase from the array above
   getRandomPhrase() {
    let randomNum = Math.floor(Math.random() * 5);
    return this.phrases[randomNum];
   }
 }
