(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = [
        "Kathy Sierra",
        "Jenn Schiffer",
        "Sandi Metz",
        "Admiral Grace Hopper"
    ];

    console.log("There are " + names.length + " names on the array");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    var languages = [];
    languages[0] = "HTML";
    languages[1] = "CSS";
    languages[2] = "JS";
    

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
       console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array) {
        return array[0];
    }

    function second(array) {
        return array[1];
    }

    function last(array) {
        return array[array.length - 1];
    }

    function secondToLast(array) {
        return array[array.length - 2];
    }


    var ticTacToe = [
        ["o", 1, 2],
        [0, "x", 2],
        [0, 1, 2]
    ];

    var middleRow = ticTacToe[1];

    middleRow[1] = "x";

    ticTacToe[0][0] = "o"





})();
