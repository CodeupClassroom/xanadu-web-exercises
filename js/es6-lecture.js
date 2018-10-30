"use strict";

// exponentiation

    // var x = 4**2;
    // console.log(x);


// let and const

    // function someFunction() {
    //     var x = 3;
    //     return x;
    // }

    // {
    //     const x = 3;
    // }
    //


    // const c = 30;
    //
    // c += 1;
    //
    // console.log(c);

    // const items = ['cat', 'dog', 'fish'];
    //
    // items.pop();
    //
    // items = items.toString();
    //
    // console.log(items);
    //
    //
    // const dog = {
    //     name: "Snickers",
    //     age: 12
    // };
    //
    // dog.color = "brown";
    //
    // console.log(dog);











// template strings

    // "You had me at 'meat tornado'" - Ron Swanson

    // let firstName = "Ron";
    // let lastName = "Swanson";

    // let quote = "";
    // quote += '"You had me at \'meat tornado\'"' + " - ";
    // quote += firstName + " " + lastName;
    //
    // console.log(quote);


    // let easierQuote = `"You had me at 'meat tornado'" - ${firstName} ${lastName}`;
    //
    // console.log(easierQuote);


    // let items = ['apple', 'grape', 'orange'];
    //
    // let itemsHtml = `
    //     <ul>
    //         <li>${items[0]}</li>
    //         <li>${items[1]}</li>
    //         <li>${items[2]}</li>
    //     </ul>
    // `;
    //
    // console.log(itemsHtml);

// for ..of loop (works on node lists!!!)

// const numbers = ['one', 'two', 'three'];
//
// // will this work on properties of an object
// // for...in
// for (let number of numbers) {
//     console.log(number);
// }



// arrow functions


    // function returnTwo() {
    //     return 2;
    // }

    // var returnTwo = function() {
    //     return 2;
    // };

    // const returnTwo = () => 2;
    // console.log(returnTwo());














    // original function expression
    //     let addOneA = function(arg1) {
    //         return arg1 + 1;
    //     };

    // refactor to use arrow functions
    //     let addOneB = (arg1) => {
    //         return arg1 + 1;
    //     };

    // removed curly braces (if only one statement)
    //     let addOneC = (arg1) => arg1 + 1;

    // removed parens if one input only
    //     let addOneD = arg1 => arg1 + 1;

        // console.log(addOneA(2));
        // console.log(addOneB(2));
        // console.log(addOneC(2));
        // console.log(addOneD(2));


// default parameter values

    // var addArgsA = (num1, num2) => {
    //     if (num1 === undefined) {
    //         num1 = 2;
    //     }
    //     if (num2 === undefined) {
    //         num2 = 2;
    //     }
    //     return num1 + num2;
    // };
    //
    // var addArgsB = function (num1, num2) {
    //     num1 = num1 || 2;
    //     num2 = num2 || 2;
    //     return num1 + num2;
    // };

    // let addArgsC = (num1 = 2, num2 = 2) => {
    //     return num1 + num2;
    // };
    //
    // console.log("\nA output...");
    // console.log(addArgsA());
    // console.log(addArgsA(1));
    // console.log(addArgsA(3, 3));
    //
    // console.log("\nB output...");
    // console.log(addArgsB());
    // console.log(addArgsB(1));
    // console.log(addArgsB(3, 3));
    //
    // console.log("\nC output...");
    // console.log(addArgsC());
    // console.log(addArgsC(1));
    // console.log(addArgsC(3, 3));


// object property variable assignment shorthand

    // let breed = "Pug";
    // let age = 3;
    // let name = "Lexie";
    // let isCute = true;

    // es5
    // const dog = {
    //     breed: breed,
    //     age: age,
    //     name: name,
    //     isCute: isCute
    // };

    // es6
    // const dog = {
    //    breed,
    //    age,
    //    name,
    //    isCute
    // };

    // console.log(dog.breed);





// object destructuring

    let puppy = {
        breed: "Lab",
        age: 10,
        name: "Sabrina",
        isCute: true
    };

    // es5 way
    // let breed = puppy.breed;
    // let age = puppy.age;
    // let name = puppy.name;
    // let isCute = puppy.isCute;

    // es6 way
    // assigning puppy property values to new variables
    // let { breed, age, name, isCute } = puppy;
    //
    //
    // console.log(breed);
    // console.log(age);
    // console.log(name);
    // console.log(isCute);


    // with arrays
    //     let cats = ["CJ", "Claude", "Max"];

        // let cat1 = cats[0];
        // let cat2 = cats[1];
        // let cat3 = cats[2];

        // let [ cat1, cat2, cat3 ] = cats;
        //
        //
        // console.log(cat1);
        // console.log(cat2);
        // console.log(cat3);


    // using with functions

        // var getArea = function (shapeObject) {
        //     return shapeObject.height * shapeObject.width;
        // };

        const getArea = ({ height, width }) => height * width;

        let shape = {
            height: 20,
            width: 10
        };

        // let testShape = {
        //   num1: 20,
        //   num2: 10
        // };

        // console.log(getArea(testShape));

    // or
        let height = 20;
        let width = 10;

        console.log(getArea({ height, width }));




