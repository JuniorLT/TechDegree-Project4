/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Junior Lam Tiang


 class Game{
   constructor(){
     this.missed = 0;
     this.phrases = [{phrase: "Have Fun"},
     {phrase: "Phrase"},
     {phrase: "Terrific"},
     {phrase: "Well Done"},
     {phrase: "Hunter"}];

     this.activePhrase = 'null';
   }

   // gets a random phrase from the array above
   getRandomPhrase() {
    let randomNum = Math.floor(Math.random() * 5);
    return this.phrases[randomNum];
   }

   // Begins Game by selecting a random phrase and displaying
   startGame() {
     var startScreen = document.getElementById('overlay');
     var keys = document.getElementsByClassName('key');
     startScreen.style.display = 'none';

     var randomPhrase = this.getRandomPhrase();
     var phrase = new Phrase(randomPhrase.phrase);
     phrase.addPhraseToDisplay();
     this.activePhrase = phrase.phrase;
     console.log(this.activePhrase);

     for (let i = 0; i < keys.length; i++){
       var key = keys[i];
       key.addEventListener('click', event =>{
         this.handleInteraction(event.target, this.activePhrase);
       })
     }
   }

   //captures the clicked letter
   handleInteraction(keys, activePhrase){
    keys.classList.add('chosen');
    // var letter = keys.innerHTML;
    var phrase = new Phrase();
    phrase.checkLetter(keys, activePhrase);
    // console.log(keys);
  }

  // checks for winning move
  // returns (boolean value) true
   checkForWin() {
     var hiddenChars = document.getElementsByClassName("hide");
     var isLetter = (/[\w\S]/);
     var letters = 0;

     for (let i = 0; i < hiddenChars.length; i++){
       if(isLetter.test(hiddenChars[i].innerHTML) == true){
         letters += 1;
       }
     }
     console.log(hiddenChars);
     console.log(hiddenChars.length);
     console.log(letters);
     if(letters == 0){
       this.gameOver(true);
     }else{
       this.gameOver(false);
     }
   }

   //removes a life from the game board
   // increases the missed property
   // checks if out of lives and ends the game when lives run out
   removeLife() {
     var show = document.getElementById('overlay');
     var lose = document.getElementById('game-over-message');
     var win = document.getElementById('win');

     var button = document.getElementById('btn__reset');

     var keysWrong = document.getElementsByClassName('wrong');

     var heart1 = document.getElementById('1');
     var heart2 = document.getElementById('2');
     var heart3 = document.getElementById('3');
     var heart4 = document.getElementById('4');
     var heart5 = document.getElementById('5');

     this.missed = keysWrong.length;

     console.log(this.missed);

     if(this.missed == 5){
       show.style.display = "block";
       lose.style.display = "block";
       win.style.display = "none";

       button.innerHTML = "Restart?";
       button.addEventListener('click', event => {
         location.reload();;
       });
     } else if (this.missed == 4){
       heart4.src = "file:///E:/Treehouse/FullStack%20JavaScript%20TechDegree/TechDegree-Project4/images/lostHeart.png";
     } else if (this.missed == 3){
       heart3.src = "file:///E:/Treehouse/FullStack%20JavaScript%20TechDegree/TechDegree-Project4/images/lostHeart.png";
     } else if (this.missed == 2){
       heart2.src = "file:///E:/Treehouse/FullStack%20JavaScript%20TechDegree/TechDegree-Project4/images/lostHeart.png";
     } else if (this.missed == 1){
       heart1.src = "file:///E:/Treehouse/FullStack%20JavaScript%20TechDegree/TechDegree-Project4/images/lostHeart.png";
       console.log(heart1.src);
     }
   }

   gameOver(gameWon) {
    var show = document.getElementById('overlay');
    var lose = document.getElementById('game-over-message');
    var win = document.getElementById('win');

    var button = document.getElementById('btn__reset');

    if(gameWon == true){
      show.style.display = 'block';
      win.style.display = 'block';
      lose.style.display = 'none';

      button.innerHTML = "Restart?";
      button.addEventListener('click', event => {
        location.reload();;
      });
    }
   }
 }
