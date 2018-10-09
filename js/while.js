"use strict";

// define your starting point
// define the ending point
// each time through the loop we print out the variable
// then reassign the variable to be its last value * 2
// loop over again

// starting point
var number = 2;
while(number <= 65536) {
    console.log(number);

    // reassigning a variable to hold the value
    // produced by operating on the variable's last value
    number = number * 2;
}


// generate random number between 50 and 100 as the inventory (conesToSell)
// Each new client orders between 1 and 5 cones.
// Use a do-while loop to log to the console the amount of cones sold to each person.
console.log("It's a great day at the ice cream selling stand!");

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " number of cones to sell everybody!");

var conesOrdered;

do {
    // simulate a customer ordering between 1 - 5 cones
    // if I have enough cones for them, I sell them that many cones
    // if I don't have enough cones for that customer, I move on to the next customer.
    conesOrdered = Math.ceil(Math.random() * 5);
    console.log("The next customer ordered " + conesOrdered + " number of cones");
    if(conesOrdered <= allCones) {
        allCones = allCones - conesOrdered;
        console.log("I now have " + allCones + " left.");
    } else {
        console.log("Not enough for you. Next customer, please!");
    }

} while(allCones > 0);

console.log("Yay! I sold all the cones and get to go home!");




