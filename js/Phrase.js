/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
// Junior Lam Tiang

// phrase class that controls what happens to the phrase
 class Phrase{
   constructor(phrase){
     this.phrase = phrase;
   }

   // Displays phrase on gameboard
  addPhraseToDisplay() {
    // variable that holds the phrase from the phrase class
    var phrase = this.phrase;

    // regex that will be used to check if its a word
    var isLetter = (/[\w]/);

    // variable that holds the list html element
    var phraseList = document.getElementById("list");

    // loop that will cycle through the phrase
    for(let i = 0; i < phrase.length; i++){
      // conditional that checks if the phrase character is a letter
      if (isLetter.test(phrase[i]) == true){
        // change letter to lowercase
        let letter = phrase[i].toLowerCase();

        // variable that creates a list item element
        let hiddenLetter = document.createElement('li');

        // list item is set to the letter
        hiddenLetter.innerHTML = letter;
        // hides the letter
        hiddenLetter.classList.add('hide', 'letter', letter);
        // appends the hiddenletter list item element to the list element
        phraseList.appendChild(hiddenLetter);

      }else{
        // else conditional for anything other than a letter
        // creates a list item element
        let hiddenSpace = document.createElement('li');

        // hides the element but is not a letter
        hiddenSpace.classList.add('hide','space');
        // appends the list item as well to the list element
        phraseList.appendChild(hiddenSpace);
      }
    }
  }

  // checks if passed letter is in phrase
  // parameters are the active phrase
  checkLetter(key, phrase) {
    // variable that holds the clicked key
    var activeKey = key.innerHTML;
    // variable that holds the active phrase
    var activePhrase = phrase;

    // regex used to check if something is a word
    var isLetter = (/[\w]/);

    // boolean value that will change if the letter is in the phrase
    var letterInPhrase = false

    // loop that goes through active phrase
    for(let i = 0; i < activePhrase.length; i++){
      // variable that holds the each character in the phrase
      var phraseLetter = activePhrase[i].toLowerCase();

      // conditional that returns true if letter is in the phrase
      if(phraseLetter == activeKey){
        letterInPhrase = true
        return true
      }
    }

    if(letterInPhrase == false){
      // return the boolean value false
      return false
    }
  }

  // displays letter on screen after match is found
  showMatchedLetter(keys) {
    // regex used to check if something is a word
    var isLetter = (/[\w]/);
    // variable that holds the hidden elements
    var hiddenChars = document.getElementsByClassName("hide");

    // loop that will go through each hidden element
    for (let i = 0; i< hiddenChars.length; i++){
      // variable that holds the hidden letters
      var hiddenLetter = hiddenChars[i].innerHTML;
      // conditional that makes sure that the letter is an actual letter
      if(isLetter.test(hiddenLetter) == true){
        var hiddenElement = hiddenChars[i];

        // conditional that checks if the hidden element is the same as the letter clicked
        if(hiddenLetter.toLowerCase() == keys){
          // add the class show and remove the class hide
          hiddenElement.classList.add('show');
          hiddenElement.classList.remove('hide');
        }
      }
    }
  }
}
