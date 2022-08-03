const Letter = require("./Letter");

class Word {
  // describe Word class
  // from looking at Game.js, I know that my Word class needs to accept a word in its constructor
  constructor(word) {
    // it creates an array of Letter objects
    // take the word and split each character into its own element, then map to create an instance of Letter for each index
    this.characterArray = word
      .split("")
      .map((character) => new Letter(character));
  }

  getSolution() {
    return this.characterArray

      .map((character) => character.getSolution())
      .join("");
  }
  // describe guessLetter
  // expects new Word("fish").guessLetter("f") = true;

  toString() {
    return this.characterArray.join(" ");
  }
  // this method is going to take the user's guess as an arg
  // then it's going to take the characterArray and for each index of the array, check if the userGuess matches the character
  guessLetter(userGuess) {
    let inWord = false;
    this.characterArray.forEach((character) => {
      if (character.guess(userGuess)) {
        // exists in the characterArray
        //Correct guess returns true for each matching instance of the userGuess in the letterArray
        inWord = true;
      }
      //Incorrect guess returns false
    });
    return inWord;
  }

  // describe guessedCorrectly
  guessedCorrectly() {
    //returns true if all letters are correct
    //returns false if at least one letter is incorrect
    this.characterArray.every((character) => character.visibility);
  }
}

module.exports = Word;
