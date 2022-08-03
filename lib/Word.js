const Letter = require("./Letter");

class Word {
  // describe Word class
  // from looking at Game.js, I know that my Word class needs to accept a word in its constructor
  constructor(word) {
    this.letters = word.split("").map((eachLetter) => new Letter(eachLetter));
  }
  //Creates an array of Letter objects

  // describe guessLetter
  //Correct guess returns true
  //Incorrect guess returns false

  // describe guessedCorrectly
  //returns true if all letters are correct
  //returns false if at least one letter is incorrect
}

module.exports = Word;
