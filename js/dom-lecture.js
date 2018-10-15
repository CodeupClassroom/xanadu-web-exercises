"use strict";

// ========== Retrieve elements by id, class, tag name

// id
//
// var header = document.getElementById("main-title");
//
// console.log(header);


// class - will return an HTMLCollection

    // var cards = document.getElementsByClassName("card");
    //
    // console.log(cards);
    //
    // cards.pop();
    //
    // console.log(cards[0]);
    //
    // var cardsArr = Array.from(cards); // convert HTMLCollection to array
    //
    // var firstCard = cardsArr.shift();
    //
    // console.log(firstCard);

    // var cowboy = document.getElementsByClassName("cowboy");
    // console.log(cowboy[0]);



// tag

    // var sections = document.getElementsByTagName('section');
    //
    // console.log(sections);
    //

// ========== Query Selector and Query Selector All

// querySelector()

    // var headerTitle = document.querySelector('header h1');

    // var headerTitle = document.querySelector('#main-title');


    // console.log(headerTitle);

// querySelectorAll()

    // var cards = document.querySelectorAll('.card');
    //
    // cards.forEach(function(card) {
    //     console.log(card);
    // });



// ========== Direct access to form inputs

    // var feedbackForm = document.forms['feedback-form'];
    //
    // console.log(feedbackForm.feedback.value);



// ========== Accessing and modifying elements and properties

// get value of innerHTML

    // var title = document.getElementById("main-title");
    // console.log(title.innerHTML);


// set value of innerHTML

    // title.innerHTML = "Hi <em>MOM<em>!";


// set value of innerText

    // var title = document.getElementById("main-title");
    // console.log(title.innerText);
    //
    //
    // title.innerText = "Hi <em>Mom</em>!";




// append value to innerText (works the same with innerHTML)

     // title.innerHTML += " hi mom...";


// ========== Accessing and modifying attributes

// check if attribute exists

// var form = document.forms['feedback-form'];
    //
    // console.log(form);
    //
    // console.log(form.hasAttribute('action'));

// get an attribute value

    // console.log(form.getAttribute('method'));


// create a new attribute or change a value of an existing attribute

    // form.setAttribute("id", "feedback-form");
    //
    // form.setAttribute("method", "GET");


// remove attribute

    // form.removeAttribute("action");
    //
    // console.log(form);



// ========== Accessing and modifying styles

// single style

    // var jumbotron = document.querySelector('.jumbotron');
    // jumbotron.style.display = "none";

    // jumbotron.style.fontFamily = "times";
    // jumbotron.style['font-family'] = "times";

// apply multiple style changes

    // Object.assign(jumbotron.style, {
    //     border: "10px solid black",
    //     fontFamily: "times",
    //     textDecoration: "underline"
    // });


// styling node list

    // var tableRows = document.getElementsByTagName("tr");
    //
    // console.log(tableRows);
    //
    // // for (var i = 0; i < tableRows.length; i += 1) {
    // //     tableRows[i].style.background = "red";
    // // }
    //
    // var tableRowArr = Array.from(tableRows);
    //
    // tableRowArr.forEach(function(tableRow) {
    //     tableRow.style.background = "red";
    // });



// ========== Add / Remove Elements

// see curriculum links