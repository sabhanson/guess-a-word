class Letter {
  constructor(letter) {
    this.letter = letter;
    // describe Visibility
    //   this.visibility =
    //Characters that are digits or letters should not be visible
    //Correct guess makes character visible
    //Incorrect guess does not make character visible
    //Should return the guessed character when using toString
  }

  // describe Letter class
  //Characters that aren't digits or letters are instantly visible

  // describe toString
  toString() {
    //toString returns _ for letters
  }

  // describe guess
  guess() {
    //Correct guess returns true
    //expects Letter.guess("L") = true
    //Incorrect guess returns false
    //expects Letter.guess("L") = false
  }

  // describe getSolution
  getSolution() {
    //returns character
    //expects Letter.getSolution("L") = "L"
  }
}

module.exports = Letter;

// the letter class creates a letter object for each letter in the random word
