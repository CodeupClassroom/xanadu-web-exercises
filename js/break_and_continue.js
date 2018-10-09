"use strict";

// prompt the user for an odd number between 1 and 50
// if they input something out of that range or non-numeric, prompt'm again

var userNumber;

do {
    userNumber = parseFloat(prompt("Please input an odd number between 1 and 50."));

    if(userNumber % 2 !== 0 && userNumber < 50 && userNumber > 1) {
        break;
    }

}while(true);


for(var i = 1; i < 50; i+=2) {
    if(i === userNumber) {
        console.log("Yikes! Skipping " + userNumber);
        continue;
    }

    console.log("Here is an odd number: " + i);
}




