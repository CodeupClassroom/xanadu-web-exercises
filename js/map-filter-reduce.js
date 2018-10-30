"use strict";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write code that produces a new array of numbers with each number multiplied by 10

// ES5 way
// let output = [];
// numbers.forEach(number => {
//    output.push(number * 10);
// });

// ES5 syntax w/ .map method
// let output = numbers.map(function(number) {
//     return number * 10;
// });

// .map takes in an arrow function
// .map returns a new array of the same length
let output = numbers.map(number => number * 10);

// Given an array of strings, produce a new array with each string capitalized
let arrayOfStrings = ["npm", "pip", "brew", "apt"];

let capitalizedStrings = arrayOfStrings.map((string) => string.toUpperCase());

console.log(capitalizedStrings);


// Filtering returns a new array with the same or fewer elements
// the function you pass into .filter is your filtering function
// values that return true from that function are added to the new array
var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

let letters = ['R', 'y', 'a', 'n', 'L', 'o', 'v', 'e', 's', 'C', 'o', 'd', 'e'];

let vowels = letters.filter(function(letter) {
    return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
});

let notVowels = [];
letters.forEach(function(letter) {
   if(!['a', 'e', 'i', 'o', 'u'].includes(letter)) {
       notVowels.push(letter);
   }
});

console.log(notVowels);

// Reduce operates on a collection, applies a function to each element
// returns a single data type (even if that data type is a collection)
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// calculate the average of the following numbers
var average = sum / numbers.length;


// given an array of strings, use reduce to make a single string
var singleString = ['banana', 'orange', 'smoothie'].reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, "");

console.log(singleString);

// Exercise that uses map, filter, and reduce all together
// given an array of numbers
// step 1. multiply each number by 3 and create a new array
// step 2. filter out only the even numbers
// step 3. return the product of multiplying each even number by eachother
console.log("----------");

console.log(numbers);
var numbersTimesThree = numbers.map(number => number *3);
console.log(numbersTimesThree);

var evens = numbersTimesThree.filter(number => number % 2 === 0);
console.log(evens);

var productOfEvens = evens.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log(productOfEvens);


