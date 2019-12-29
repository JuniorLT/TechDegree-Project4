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
 }
