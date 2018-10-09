"use strict";

// showMultiplicationTable
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(number) {
   for(var i = 1; i <= 10; i++) {
       console.log(number + " x " + i + " = " + (number * i));
   }
}

showMultiplicationTable(9);

// generate 10 random numbers between 20 and 200
// and output to the console
// whether each number is odd or even. For example:

function isEven(num) {
    return num % 2 === 0;
}

var randomNumber;
for(var i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * 180) + 20;

    if(isEven(randomNumber)) {
        console.log(randomNumber + " is even!");
    } else {
        console.log(randomNumber + " is odd!");
    }
}

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for(var i = 1; i <= 9; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}

var output = "";
for(var i = 1; i <= 9; i++) {
    output = "";
    for(var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

for(var i = 100; i > 0; i -= 5) {
    console.log(i);
}



