// a letter is an instance of a letter of the random word, not the user guesses
// we want the user to play a word-guessing game. they only have to guess the letters. we will display any punctuation for them
class Letter {
  // describe Letter class
  // characters that are not digits or letters (symbols) should be visible (true)
  constructor(character) {
    this.character = character;

    // describe Visibility
    // visibility property is true when the character passes regex test
    // expects new Letter("L").visible = false; HIDE LETTERS/NUMS
    // expects new Letter("?").visible = true; SHOW SYMBOLS
    this.visibility = !/[0-9a-z]/i.test(character);
  }

  // describe toString
  // this function returns the letters in game-format ( _ _ _ _ _ ) so that the user can make guesses from a blank screen
  toString() {
    //toString returns "_" for letters
    //letters have a visibility property of false, that's how to distinguish the letters from the symbols
    if (!this.visibility) {
      // expects new Letter("L").toString() = "_"
      // expects new Letter("?").toString() = "?"
      return "_";
    } else {
      return this.character;
    }
  }

  // describe guess
  // takes in a user's guess
  // compares to this.character
  guess(userGuess) {
    if (userGuess === this.character) {
      //expects Letter.guess("L") = true
      //Correct guess makes character visible
      //Correct guess returns true
      this.visibility = true;
      return true;
    } else {
      //expects Letter.guess("L") = false
      //Incorrect guess does not make character visible
      //Incorrect guess returns false
      return false;
    }
  }

  // describe getSolution
  getSolution() {
    return this.character;
    //returns character
    //expects Letter.getSolution("L") = "L"
  }
}

module.exports = Letter;

// the letter class creates a letter object for each letter in the random word
