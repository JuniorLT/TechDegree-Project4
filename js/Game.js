/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Junior Lam Tiang

// game class that controls how the game interacts and functions
 class Game{
   constructor(){
     // holds how many misses there are
     this.missed = 0;

     // array that holds the phrases
     this.phrases = [{phrase: "Have Fun"},
     {phrase: "Phrase"},
     {phrase: "Terrific"},
     {phrase: "Well Done"},
     {phrase: "Hunter"}];

     // holds the current phrase being used
     this.activePhrase = 'null';
   }

   // gets a random phrase from the array above
   getRandomPhrase() {
     // create a random whole number and select from the array using
     // the random number as the index
    let randomNum = Math.floor(Math.random() * 5);
    return this.phrases[randomNum];
   }

   // Begins Game by selecting a random phrase and displaying
   startGame() {
     // variable that selects the overlay
     var startScreen = document.getElementById('overlay');

     // variable that will hold the random phrase
     var randomPhrase = this.getRandomPhrase();

     // variable that will hold the random phrase after it has been sent to the phrase class
     var phrase = new Phrase(randomPhrase.phrase);

     // hide the overlay
     startScreen.style.display = 'none';

     // display phrase
     phrase.addPhraseToDisplay();

     // random phrase is set to the current one being used
     this.activePhrase = phrase.phrase;

     // loop that restores every key on the gameboard to default
     for(let i = 0; i < keys.length; i ++){
       var key = keys[i];
       key.classList.remove('chosen');
       key.classList.remove('wrong');
       key.disabled = false;
     }

     // return current phrase to the constructor
     return this.activePhrase
   }

   //captures the clicked letter
   // parameters are the clicked key letter
   handleInteraction(keys){
     // variable that holds the phrase class
     var phrase = new Phrase();

     // gives the keys clicked the class chosen so that user knows it has been clicked
    keys.classList.add('chosen');

    keys.classList.add('wrong');

    // disables clicked key so that it can't be clicked anymore
    keys.disabled = true;

    // calls the checkletter method from the phrase class
    var check = phrase.checkLetter(keys, this.activePhrase);

    // conditional that checks if checkLetter method is returned with a true or not
    if(check == true){
      // if true then show matched letter and check for win
      phrase.showMatchedLetter(keys.innerHTML);
      // variable that holds the value returned from check for win
      var win = this.checkForWin();

      // conditional that checks if the check for win method returned with either true/false
        if (win == true){
          // if true call gameOver method using true
          this.gameOver(true);
        }else{
          // if true call gameOver method using false
          this.gameOver(false);
        }
    }else if (check == false){
      // if false remove a life
      this.removeLife();
    }
  }

  // checks for winning move
  // returns (boolean value) true
   checkForWin() {
     // variable that selects all of the hidden elements
     var hiddenChars = document.getElementsByClassName("hide");

     // regex used to look for words or non-whitespace
     var isLetter = (/[\w\S]/);

     // variable that holds the amount of actual letters still hidden
     var letters = 0;

     // loop that will go through hidden elements
     for (let i = 0; i < hiddenChars.length; i++){
       // conditional that checks if hidden element is actually a letter
       if(isLetter.test(hiddenChars[i].innerHTML) == true){
         letters += 1;
       }
     }

     // conditional that checks if hidden letters are still hidden
     // if none are hidden that means player has found them all
     if(letters == 0){
       // returns true
       return true;
     }else{
       // returns false
       return false;
     }
   }

   //removes a life from the game board
   // increases the missed property
   // checks if out of lives and ends the game when lives run out
   removeLife() {
     // variables that select the overlay nad the win/game over message
     var show = document.getElementById('overlay');
     var lose = document.getElementById('game-over-message');
     var win = document.getElementById('win');

     // variable that selects the button to reset the game
     var button = document.getElementById('btn__reset');

     // variable that stores all the keys with the class wrong
     // keys with the class wrong did not match with the phrase
     var keysWrong = document.getElementsByClassName('wrong');

     // variable that holds every key
     var keys = document.getElementsByClassName('key');

     // var phraseList = document.getElementsByClassName('letter');
     var phraseList = document.getElementById('list');


     // variables that hold the players lives
     var heart1 = document.getElementById('1');
     var heart2 = document.getElementById('2');
     var heart3 = document.getElementById('3');
     var heart4 = document.getElementById('4');
     var heart5 = document.getElementById('5');

     // amount of misses is equal to amount of keys with the class wrong
     this.missed = keysWrong.length;

     // conditional that checks the amount of misses
     if(this.missed == 5){
       // if all misses eaual 5 then player loses
       // because there are only 5 hearts

       // displays game over display with losing messages
       // hides winning message

         // display winning message and hide losing message
         show.style.display = 'block';
         win.style.display = 'none';
         lose.style.display = 'block';

         // loops over list that contains the phrase and removes all the list items
         while (phraseList.hasChildNodes()){
           phraseList.removeChild(phraseList.firstChild);
         }

         // restores hearts to default
         heart4.src = "images/liveHeart.png";
         heart3.src = "images/liveHeart.png";
         heart2.src = "images/liveHeart.png";
         heart1.src = "images/liveHeart.png";

         // loop that restores every key on the gameboard to default
         for(let i = 0; i < keys.length; i ++){
           var key = keys[i];
           key.classList.remove('chosen');
           key.classList.remove('wrong');
           key.disabled = false;
         }

     } else if (this.missed == 4){
       // if misses equal 4 lose a heart by changing source of img
       heart4.src = "images/lostHeart.png";
     } else if (this.missed == 3){
       // if misses equal 3 lose a heart by changing source of img
       heart3.src = "images/lostHeart.png";
     } else if (this.missed == 2){
       // if misses equal 2 lose a heart by changing source of img
       heart2.src = "images/lostHeart.png";
     } else if (this.missed == 1){
       // if misses equal 1 lose a heart by changing the source of img
       heart1.src = "images/lostHeart.png";
     }
   }

   // method that will display winning message if the parameter (boolean value)
   // is returned with either true or false
   gameOver(gameWon) {
     // variables that select the overlay nad the win/game over message
     var show = document.getElementById('overlay');
     var lose = document.getElementById('game-over-message');
     var win = document.getElementById('win');

     // variable that selects the button to reset the game
     var button = document.getElementById('btn__reset');

     var keys = document.getElementsByClassName('key');

     // var phraseList = document.getElementsByClassName('letter');
     var phraseList = document.getElementById('list');

     // variables that hold the players lives
     var heart1 = document.getElementById('1');
     var heart2 = document.getElementById('2');
     var heart3 = document.getElementById('3');
     var heart4 = document.getElementById('4');
     var heart5 = document.getElementById('5');

    //conditional that checks if the method is returned with true
    if(gameWon == true){

      // display winning message and hide losing message
      show.style.display = 'block';
      win.style.display = 'block';
      lose.style.display = 'none';

      // loops over list that contains the phrase and removes all the list items
      while (phraseList.hasChildNodes()){
        phraseList.removeChild(phraseList.firstChild);
      }

      // restores hearts to default
      heart4.src = "images/liveHeart.png";
      heart3.src = "images/liveHeart.png";
      heart2.src = "images/liveHeart.png";
      heart1.src = "images/liveHeart.png";

      // loop that restores every key on the gameboard to default
      for(let i = 0; i < keys.length; i ++){
        var key = keys[i];
        key.disabled = false;
        key.classList.remove('chosen');
        key.classList.remove('wrong');
      }
    }
   }
 }
