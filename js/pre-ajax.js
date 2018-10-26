$(function(){
    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function buildHtml(peopleObjects) {
        var totalHtml = "<ul>";

        peopleObjects.forEach(function(person) {
            totalHtml += "<li>";
            totalHtml += person.name;
            totalHtml += "</li>";
        });

        // for loop version
        // for (var i = 0; i < peopleObjects.length; i += 1) {
        //     totalHtml += "<li>";
        //     totalHtml += peopleObjects[i].name;
        //     totalHtml += "</li>";
        // }

        totalHtml += "</ul>";
        return totalHtml;
    }

    function colorBonus(peopleObjects) {
        $('li').each(function(i, e) {
            $(this).css('color', peopleObjects[i].favColor);
        });
    }

    $('#add-names-btn').click(function() {
        $('#names-list').html(buildHtml(people));
        colorBonus(people);
    });

});