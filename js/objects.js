(function() {
    "use strict";

/**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Justin",
        lastName: "Reich"
    };


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName;
    };

    // console.log(person.sayHello());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // EXAMPLE OUTPUT

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //
    // function calculateDiscount(amount) {
    //
    //     var finalAmount = 0;
    //     var amountOff = 0;
    //
    //     if (amount > 200) {
    //         amountOff = amount * .12;
    //         finalAmount = amount - amountOff;
    //     } else {
    //         finalAmount = amount;
    //     }
    //
    //     return {
    //         finalAmount: finalAmount,
    //         amountOff: amountOff
    //     };
    // }
    //
    // function displayShopperInfo(shoppers) {
    //     shoppers.forEach(function(shopper) {
    //         var amount = calculateDiscount(shopper.amount);
    //         var message = "";
    //         message += shopper.name + " bought $";
    //         message += shopper.amount.toFixed(2);
    //         message += " and got $" + amount.amountOff.toFixed(2);
    //         message += " off and will pay $";
    //         message += amount.finalAmount.toFixed(2) + ".";
    //         console.log(message);
    //     });
    // }
    // /*
    //     Cameron bought $180.00 and got $0.00 off and will pay $180.00.
    //     Ryan bought $250.00 and got $30.00 off and will pay $220.00.
    //     George bought $320.00 and got $38.40 off and will pay $281.60.
    //
    //  */
    //
    // displayShopperInfo(shoppers);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: "Book Title 1",
            author: {
                firstName: "Joe",
                lastName: "Smith"
            }
        },
        {
            title: "Book Title 2",
            author: {
                firstName: "Cathy",
                lastName: "Smith"
            }
        },
        {
            title: "Book Title 3",
            author: {
                firstName: "Karen",
                lastName: "Smith"
            }
        },
        {
            title: "Book Title 4",
            author: {
                firstName: "Fred",
                lastName: "Smith"
            }
        },
        {
            title: "Book Title 5",
            author: {
                firstName: "John",
                lastName: "Smith"
            }
        }
    ];





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (var i = 0; i < books.length; i += 1) {
    //     var message = "";
    //     message += "Book # " + (i + 1) + "\n";
    //     message += "Title: " + books[i].title + "\n";
    //     message += "Author: " + books[i].author.firstName + " ";
    //     message += books[i].author.lastName + "\n";
    //     message += "---";
    //     console.log(message);
    // }

    books.forEach(function (book, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // function createBook(title, author) {
    //     return {
    //         title: title,
    //         author: {
    //             firstName: author.split(" ")[0],
    //             lastName: author.split(" ")[1]
    //         }
    //     }
    // }
    //
    // function showBookInfo(book, number) {
    //     var message = "";
    //     message += "Book # " + number + "\n";
    //     message += "Title: " + book.title + "\n";
    //     message += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
    //     message += "---";
    //     console.log(message);
    // }
    //
    // var books = [];
    // books.push(createBook("Book 1", "Some Author1"));
    // books.push(createBook("Book 2", "Some Author2"));
    // books.push(createBook("Book 3", "Some Author3"));
    // books.push(createBook("Book 4", "Some Author4"));
    // books.push(createBook("Book 5", "Some Author5"));
    //
    // books.forEach(function(book, index) {
    //     showBookInfo(book, index + 1);
    // });

})();