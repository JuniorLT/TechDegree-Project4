/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
// Junior Lam Tiang

 class Phrase{
   constructor(phrase){
     this.phrase = phrase;
   }
   // Displays phrase on gameboard
  addPhraseToDisplay() {
    var phrase = this.phrase;
    var isLetter = (/[\w]/);
    var phraseList = document.getElementById("list");

    for(let i = 0; i < phrase.length; i++){

      if (isLetter.test(phrase[i]) == true){
        let letter = phrase[i].toLowerCase();
        let hiddenLetter = document.createElement('li');

        hiddenLetter.innerHTML = letter;
        hiddenLetter.classList.add('hide', 'letter', letter);
        phraseList.appendChild(hiddenLetter);
        // console.log(letter);

      }else{
        let hiddenSpace = document.createElement('li');

        hiddenSpace.classList.add('hide','space');
        phraseList.appendChild(hiddenSpace);
        // console.log('space');
      }
    }
  }

  // checks if passed letter is in phrase
  checkLetter(letter, phrase) {
    var game = new Game();
    var isLetter = (/[\w]/);
    var missed = 0;
    var letters = 0;

    for(let i = 0; i < phrase.length; i++){
      var phraseLetter = phrase[i].toLowerCase();

      if(isLetter.test(phraseLetter) == true){
        letters += 1;
        if(phraseLetter == letter.innerHTML){
          this.showMatchedLetter(phraseLetter);
        }else{
          missed += 1;
        }

      }
    }

    if(letters == missed){
      letter.classList.add('wrong');
      game.removeLife(letter);

    }
  }

  // displays letter on screen after match is found
  showMatchedLetter(letter) {
    console.log(letter);
    var game = new Game();
    var hiddenLetter = document.getElementsByClassName("hide");
    for (let i = 0; i< hiddenLetter.length; i++){
      if(hiddenLetter[i].innerHTML == letter){
        hiddenLetter[i].classList.add('show');
        hiddenLetter[i].classList.remove('hide');
        game.checkForWin();
      }
    }
  }
}
