"use strict";

// wait .8 seconds and then resolve
// var promiseExample = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Promise is resolved");
//     }, 800);
// });
//
// console.log(promiseExample);
//
// setTimeout(function() {
//     console.log(promiseExample);
// }, 1100);

// Flip a coin after 1 second
// if heads, resolve else if tails reject

let delay = Math.random() * 1000 + 500;
// producing a promise
let coinFlip = new Promise((resolve, reject) => {
    setTimeout(function() {
        if(Boolean(Math.random() > .5)) {
            resolve("HEADS!");
        } else {
            reject("Tails!");
        }
    }, delay);
});

// consuming promises
// happy (resolve) path
coinFlip.then((data) => {
    console.log(data);
});

// sad path (rejected path)
coinFlip.catch((error) => {
    console.log(error);
});


