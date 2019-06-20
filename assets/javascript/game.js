
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];
var compChoice;

// ===============================================================================

resetGame();
// winOrLose();

// ===============================================================================

function resetGame() {
    computerLetter();
    guessesLeft = 9;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    guessChoices = [];
    document.getElementById("lettersTyped").textContent = guessChoices;
};

function computerLetter() {
    compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Computer Letter: ", compChoice)
};

document.onkeypress = function (event) {
    var userGuess = event.key;

    console.log("User Guess: ", userGuess);

    if (userGuess === compChoice) {
        wins++;
        document.getElementById("wins").textContent = wins;
        resetGame();

    } else {
        if (!guessChoices.includes(userGuess)) {
            guessesLeft--;
            guessChoices.push(userGuess);
            document.getElementById("guessesLeft").textContent = guessesLeft;
            document.getElementById("lettersTyped").textContent = guessChoices;
        }
    }
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").textContent = losses;
        resetGame();
    }
}
