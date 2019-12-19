//Declare global variables
var btn1val = 0;
var btn2val = 0;
var btn3val = 0;
var btn4val = 0;
var total = 0;
var numToFind = 0;
var wins = 0;
var loss = 0;

//function to generate random values to each gems
function generatebtnVal() {
    return Math.floor(Math.random() * 12) + 1;
}

//function to compare the number to find with total and determinate if the user win or loss
function checkWinner() {
    if (total === numToFind) {
        wins++;
        alert("You Win!!!! You reach the number " + total)
        reset();
    } else if (total > numToFind) {
        loss++;
        alert("You loss your number " + total + " is greater than the number to guess");
        reset();
    }
}
// function reset to start a new game
function reset() {
    btn1val = generatebtnVal();
    btn2val = generatebtnVal();
    btn3val = generatebtnVal();
    btn4val = generatebtnVal();
    numToFind = Math.floor(Math.random() * 101) + 19;
    total = 0;
    $("#targetNumber").text(numToFind);
    $("#userTotal").text(total);
    $("#userWins").text(wins);
    $("#useLooses").text(loss);
}

reset();

console.log(numToFind);

$(document).ready(function () {

    $("#gem-1").on("click", function () {
        total = total + btn1val
        console.log(btn1val);
        $("#userTotal").text(total);
        checkWinner();

    });
    $("#gem-2").on("click", function () {
        total = total + btn2val
        console.log(btn2val);
        $("#userTotal").text(total);
        checkWinner();

    });
    $("#gem-3").on("click", function () {
        total = total + btn3val
        console.log(btn3val);
        $("#userTotal").text(total);
        checkWinner();

    });
    $("#gem-4").on("click", function () {
        total = total + btn4val
        console.log(btn4val);
        $("#userTotal").text(total);
        checkWinner();
    });

});