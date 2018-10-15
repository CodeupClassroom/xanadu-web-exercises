"use strict";

//    https://developer.mozilla.org/en-US/docs/Web/Events

// ==========================  Simple Example

// create variable to hold DOM reference to button element
    // var testBtn = document.getElementById("testBtn");
    //
    // console.log(testBtn);



// add event listener using anonymous function

    // testBtn.addEventListener("click", function() {
    //     // if (document.body.style.background === "red") {
    //     //     document.body.style.background = "white";
    //     // } else {
    //     //     document.body.style.background = "red";
    //     // }
    //     console.log("test");
    // });

// add event listener from a previously defined function
//     function toggleBackgroundColor() {
//         if (document.body.style.background === "red") {
//             document.body.style.background = "white";
//             testBtn.removeEventListener("click", toggleBackgroundColor);
//         } else {
//             document.body.style.background = "red";
//         }
//     }
//
//     testBtn.addEventListener("click", toggleBackgroundColor);




// remove event listener

    // testBtn.removeEventListener("click", toggleBackgroundColor);


























// ==========================  Register Additional Events

// when a cursor hovers over a paragraph, change the text color, font-family, and make font larger

    // element reference to paragraph
    // var paragraph = document.getElementsByTagName('p')[0];


    // change font-size of whatever "this" refers to
    // function makeCoolText() {
    //     paragraph.style.color = "red";
    //     paragraph.style.fontFamily = "arial";
    //     paragraph.style.fontSize = "32px";
    // }

    // adding a mouse over event to the paragraph that fires the changeColor function

    // paragraph.addEventListener("mouseover", makeCoolText);


// when double clicking the restore text button, make the font size 1em

    // element reference to shrink button
    // var shrinkBtn = document.getElementById("shrinkBtn");
    // shrinkBtn.addEventListener("dblclick", function() {
    //     paragraph.style.fontSize = "1em";
    // });


// ==========================  Event Object

document.addEventListener("click", function(e) {

   var red = e.screenX % 256;
   var green = e.screenY % 256;
   var blue = "ff";

   console.log(e.screenX);
   console.log(e.screenY);

   red = red.toString(16);
   green = green.toString(16);
   blue = blue.toString(16);
   document.body.style['background-color'] = "#" + red + green + blue;
});


// ==========================  Prevent Default
// document.addEventListener("keypress", function(e) {
//    if (e.code === "Space") {
//       e.preventDefault();
//    }
// });



// ==========================  Remove Event Listener

// element reference to loginBtn button

    // var loginBtn = document.getElementById("loginBtn");

// Log in user function

    // function logUserIn () {
    //
    //     // removing the click event on the loginBtn button once it is clicked
    //     loginBtn.removeEventListener("click", logUserIn);
    //
    //     alert("Welcome to a site for people with strange ideas.");
    //
    //     var age = prompt("You must be 18 or older to continue. Please enter your age.");
    //
    //     if (age >= 18) {
    //         var answer = confirm("You are about to be re-directed to intense images. Do you wish to continue?");
    //         if (answer) {
    //             window.location.replace("https://www.catgifpage.com/where-is-the-ball");
    //         } else {
    //             alert("You made the right choice.");
    //         }
    //     } else if (age === null) {
    //         alert("Well I can't let you in if you don't tell me how old you are!");
    //         userInteraction();
    //     } else if (isNaN(parseInt(age))) {
    //         alert("What a troll.");
    //         userInteraction();
    //     } else {
    //         alert("Wait until you grow up.");
    //     }
    //
    // }

// adding a click event to the login button that fires the logUserIn function

// var loginBtn = document.getElementById("loginBtn");
// loginBtn.addEventListener("click", logUserIn);

// ==========================  This Keyword

// *** see additional example