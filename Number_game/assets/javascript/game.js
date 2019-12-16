// var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//                        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Generates an array of increasing numbers to use
// let computerLetters = Array.from({length: 10}, (v, k) => k++);  Looks like event.key only works for chars, not numbers
var computerLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(computerLetters);

var numbersGuessed = [];
var found = false;
var wins = 0;
var looses = 0;
var guesses = 2;

let rando = Math.floor(Math.random() * computerLetters.length);
console.log(rando);
var computerSelection = computerLetters[rando];


function print() {
    document.getElementById("line-1").innerHTML = "Wins: " + wins;
    document.getElementById("line-2").innerHTML = "Looses: " + looses;
    document.getElementById("line-3").innerHTML = "Guess Left: " + guesses;
    document.getElementById("line-4").innerHTML = "Numbers Guessed: " + numbersGuessed;
}

function reset() {
    guesses = 2;
    computerSelection = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    numbersGuessed = [];
    console.log(rando);
    print();
}

print();

document.onkeyup = function (event) {
    var keyPressed = event.key;
    found = false;

    for (var i = 0; i < computerLetters.length; i++) {
        if (keyPressed === computerLetters[i]) {
            console.log(keyPressed);
            console.log(computerSelection);

            for (var j = 0; j < numbersGuessed.length; j++) {
                if (keyPressed === numbersGuessed[j]) {
                    alert("The Number " + keyPressed + " has already been tried. Please select another number.");
                    found = true;
                }
            }
           
            if (found == false) {
                console.log(found);
                guesses--;
                numbersGuessed.push(keyPressed);
                print();

                if (keyPressed === computerSelection) {
                    alert("You Win! The Number "+ keyPressed + " Is Correct!");
                    wins = wins + 1;
                    reset();

                } else if (guesses === 0) {
                    alert("Your Guesses Are Incorrect.  The Correct Number was " + computerSelection);
                    looses = looses + 1;
                    reset();
                }
            }
        }
    }
}