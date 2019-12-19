// Variable declarations

let chip_values = [1, 2, 4, 8, 16, 32, 64, 128];
let total_values = [384, 512, 768, 1024, 1280, 1536];

let chip1 = 0;
let chip2 = 0;
let chip3 = 0;
let chip4 = 0;
let chip5 = 0;
let chip6 = 0;
let chip7 = 0;
let chip8 = 0;

let total = 0;
let goal = 0;
let score = 0;

let wins = 0;
let loss = 0;

function reset() {

    random_chip1();
    random_chip2();
    random_chip3();
    random_chip4();
    random_chip5();
    random_chip6();
    random_chip7();
    random_chip8();

    goal = random_total();
    total = 0;

    $("#goal").text(`Target Score: ${goal}`);
    $("#total").text(`Your Score: ${total}`);
    $("#wins").text(`Wins: ${wins} , Losses: ${loss}`);
    $("#losses").text(`Points: ${score}`);
};


// Functions to assign a value within the chip_values array to each chip while doing so without replacement to obtain unique values.
// Dynamic variable naming could be used here to do this all in one function.  However, this works properly.
function random_chip1() {
    chip_values = [1, 2, 4, 8, 16, 32, 64, 128, 256];
    chip1 = chip_values[Math.floor(Math.random()*8)];
    chip_values = chip_values.filter(function(x){
    return x !== chip1;
    });
};

function random_chip2() {
    chip2 = chip_values[Math.floor(Math.random()*7)];
    chip_values = chip_values.filter(function(x){
    return x !== chip2;
    });
};

function random_chip3() {
    chip3 = chip_values[Math.floor(Math.random()*6)];
    chip_values = chip_values.filter(function(x){
    return x !== chip3;
    });
};

function random_chip4() {
    chip4 = chip_values[Math.floor(Math.random()*5)];
    chip_values = chip_values.filter(function(x){
    return x !== chip4;
    });
};

function random_chip5() {
    chip5 = chip_values[Math.floor(Math.random()*4)];
    chip_values = chip_values.filter(function(x){
    return x !== chip5;
    });
};

function random_chip6() {
    chip6 = chip_values[Math.floor(Math.random()*3)];
    chip_values = chip_values.filter(function(x){
    return x !== chip6;
    });
};

function random_chip7() {
    chip7 = chip_values[Math.floor(Math.random()*2)];
    chip_values = chip_values.filter(function(x){
    return x !== chip7;
    });
};

function random_chip8() {
    chip8 = chip_values[Math.floor(Math.random()*1)];
    chip_values = chip_values.filter(function(x){
    return x !== chip8;
    });
};

function random_total() {
    return total_values[Math.floor(Math.random()*6)];
};

function results() {
    if (total === goal) {
        wins++;
        score = score + 100;
        alert("Good Work! You Hit " + goal + " bytes!");
        reset();
    }
    else if (total > goal) {
        loss++;
        score =  score - 150;
        alert("You have exceeded " + goal + " bytes!  You fried the chip!");
        reset();
    };
};

reset();


$(document).ready(function () {
    $("#chip-1").on("click", function () {
        total = total + chip1;
        $("#total").text(`Your Score: ${total}`);
        results();
    });

    $("#chip-2").on("click", function () {
        total = total + chip2;
        $("#total").text(`Your Score: ${total}`);
        results();
    });

    $("#chip-3").on("click", function () {
        total = total + chip3;
        $("#total").text(`Your Score: ${total}`);
        results();
    });

    $("#chip-4").on("click", function () {
        total = total + chip4;
        $("#total").text(`Your Score: ${total}`);
        results();
    });

    $("#chip-5").on("click", function () {
        total = total + chip5;
        $("#total").text(`Your Score: ${total}`);
        results();
    });

    $("#chip-6").on("click", function () {
        total = total + chip6;
        $("#total").text(`Your Score: ${total}`);
        results();
    });

    $("#chip-7").on("click", function () {
        total = total + chip7;
        $("#total").text(`Your Score: ${total}`);
        results();
    });

    $("#chip-8").on("click", function () {
        total = total + chip8;
        console.log(chip8);
        $("#total").text(`Your Score: ${total}`);
        results();
    });
});