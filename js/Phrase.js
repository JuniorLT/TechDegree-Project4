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

    // variable used to store how many letters in the phrase
    // didn't match with letter clicked
    var missed = 0;

    // variable that stores the amount of actual letters
    var letters = 0;

    // loop that goes through active phrase
    for(let i = 0; i < activePhrase.length; i++){
      // variable that holds the each character in the phrase
      var phraseLetter = activePhrase[i].toLowerCase();

      // conditional that checks if character is actually a letter
      if(isLetter.test(phraseLetter) == true){
        // amount of letter increase
        letters += 1;

        // conditional that checks if actual letter matches with letter clicked
        if(phraseLetter == activeKey){
          // if it does return the boolean value true
          key.classList.remove('wrong');
          return true
        }else{
          // if it does not match the letter in the phrase misses increases
          missed += 1;
        }
      }
    }

    // conditional that checks if the amount of misses is equal to the amount of letters in the phrase
    // basically if the clicked letter didn't match with any of the letters
    if(letters == missed){
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

    // variable that holds the shown elements
    var shownChars = document.getElementsByClassName('show');

    // loop that will go through each hidden element
    for (let i = 0; i< hiddenChars.length; i++){
      // variable that holds the hidden letters
      var hiddenLetter = hiddenChars[i].innerHTML;
      // conditional that makes sure that the letter is an actual letter
      if(isLetter.test(hiddenLetter) == true){
        // conditional that checks if the hidden element is the same as the letter clicked
        if(hiddenLetter.toLowerCase() == keys){
          // displays the hidden letter on the gameboard
          hiddenChars[i].classList.add('show');
        }
      }
    }

    // for every shown character remove the class 'hide'
    for(let i = 0; i < shownChars.length; i++){
      shownChars[i].classList.remove('hide');
    }

  }
}
