"use strict";

// var names = [];
//
// // we use .push to add an element to the end of an array
//
// var name;
// console.log("Let's add 10 names to the list!");
//
// do {
//     name = prompt("Please add a new name");
//     names.push(name);
// }while(names.length < 10);
//
// // here are all the names
// names.forEach(function(name) {
//     console.log(name);
// });
//


// Create a function that returns the longest string
// in a given array of string elements

var arrayOfStrings = [
    "hello",
    "everybody",
    "javascript",
    "is",
    "rad",
    "ZOMG arrays of strings"
];


function longestStringOfArrayOfStrings(arrayOfStrings) {
    var longestString = "";

    arrayOfStrings.forEach(function(string) {
       if(string.length > longestString.length) {
           longestString = string;
       }
    });

    return longestString;
}

console.log(longestStringOfArrayOfStrings(arrayOfStrings));