"use strict";
//
// alert("Welcome to the Cake Place! Please enter colors for cake:");
//
// var colors = [];
// var enterMorecolors = true;
//
// while (enterMorecolors) {
//     colors.push(prompt("Enter another color"));
//     enterMorecolors = confirm("Enter more colors?");
// }
//
// var color1 = prompt("Enter color 1:");
// var color2 = prompt("Enter color 2:");
//
//
// alert("Your cake will have: " + color1 + " " + color2 + " in it");
//
//
//





















// ============================= Arrays Definition

/*
    In JS, an array is a special object data type that may contain
    a collection of multiple data types at numeric indices.

    In other words, an array allows us to store and access multiple values (elements)
    through one variable name (array name) and a specific index number.

    Arrays may contain no defined elements, one, or many.

    Arrays in JS may contain elements of mixed types.

    Several array methods and properties are built in to JS to work with arrays.
*/

// ============================= Declaring/Initializing an Array with Array Literal Syntax

    // empty arrays may be declared
    // var pies = [];







    //              element   element  element     element
    // var pies = ["apple", "cherry", "key lime", "huckleberry"];
    //
    // console.log(pies);






// declaring and initializing a large array

    // var sequoia = [
    //     "Abby",
    //     "Alishia",
    //     "Ashley",
    //     "Cory",
    //     "Damion",
    //     "Greg",
    //     "Johanna",
    //     "Juan",
    //     "Luke",
    //     "Mary",
    //     "Michael",
    //     "Nichole",
    //     "Paul",
    //     "Po",
    //     "Stephen",
    //     "Sukari",
    //     "Terrell",
    //     "Terry",
    //     "Tito",
    //     "Tony",
    //     "Washington"
    // ];


// separate declaration and initialization

    // var pies = [];
    // pies[0] = "apple";
    // pies[1] = "cherry";

    // console.log(pies);



// declaring and initializing a high index number

    // pies[10] = "huckleberry";
    //
    // console.log(pies);




// ============================= Counting Array Items

    // var pies = ["apple", "cherry", "key lime", "huckleberry"];
    //
    // var addPies = true;
    // while (addPies) {
    //     pies[pies.length] = prompt("Add another pie: ");
    //     addPies = confirm("Add another pie?");
    // }
    //
    // console.log(pies);

    // //
    // var numberOfPies = pies.length;
    // //
    // console.log(numberOfPies);





// ============================= Accessing Array Elements

    // console.log(pies[100]);
    //
    // console.log(pies[3]);
    //
    // console.log(pies);





// ============================= For Loop

/* SYNTAX

    for (var i = 0; i < someArray.length; i += 1) {
        console.log(someArray[i]);
    }

    - in the above context "someArray[i]" will access the next array element in each iteration

    - PROS: variety of traversals
    - CONS: more complicated syntax
    -  USE: when you need to iterate partially or backwards through an array

 */

var pies = ["apple", "cherry", "key lime", "huckleberry"];


// for (var i = 0; i < pies.length; i += 1) {
//     console.log(pies[i]);
// }


// going backwards
// for (var i = pies.length - 1; i >= 0; i -= 1) {
//     console.log(pies[i]);
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//
// for (var i = 1; i < numbers.length; i += 2) {
//     console.log(numbers[i]);
// }

// for (var i = 1; i < numbers.length - 5; i += 2) {
//     console.log(numbers[i]);
// }
//









// ============================= Foreach Loop

/* SYNTAX

    someArray.forEach(function(element, index, array){
        console.log(element);
        console.log(index);
    });

    - PROS: simpler syntax
    - CONS: can only increment through entire array
    -  USE: when you need to iterate through entire array

    REMINDERS...
    - the parameters are optional to pass in to the anonymous function
    - parameters may be semantically named but order matters

    EXAMPLE OF HOW JS CODE MIGHT DEFINE THE FOREACH METHOD...
    Adapted from https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264

    Array.prototype.forEach = function(callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    };

 */

// standard syntax
// var pies = ["apple", "cherry", "key lime", "huckleberry", "blueberry"];
//
// pies.forEach(function(element, index, array) {
//     console.log(element);
//     // console.log(index);
//     // console.log(array);
// });
//
// pies.forEach(function(element) {
//     console.log(element);
// });
//
// pies.forEach(function(element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// });
//
// pies.forEach(function(element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// });


/*
On an array of pie strings, call the forEach method and console log each pie in the pies array and each index number in the array and the entire array.
*/





var names = ["John", "Sally", "Fred"];
//


// for (var i = 0; i < names.length; i += 1) {
//     console.log(names[i]);
// }

// annon function version of forEach
// names.forEach(function(name){
//     console.log(name);
// });

// callback function for forEach

function logName(name, index, bob) {
    console.log(name);
    console.log(index);
    console.log(bob);
}

names.forEach(logName);
























    // // with different parameter names
    // pies.forEach(function(pie, index, array){
    //
    //     console.log("Element " + pie + " is at index " + index);
    //     console.log(pies);
    //     console.log(array);
    //
    // });







// with only one parameter

    // pies.forEach(function(element){
    //     console.log("Element " + element);
    // });
    //
    //
    // console.log("----------------");
    //

// callback function syntax

    // function logElements(element) {
    //     console.log("Element " + element);
    // }
    //
    // pies.forEach(logElements);



