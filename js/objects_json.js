/**
 * Created by David on 11/10/16.
 */
"use strict";
(function () {

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
    var books = [
        {
            title : "Count of Monte Cristo",
            author : "Alexander Dumas"
        },
        {
            title : "The Old Man and the Sea",
            author : "Ernest Hemingway"
        },
        {
            title : "1984",
            author : "George Orwell"
        },
        {
            title : "Heart of Darkness",
            author : "Joseph Conrad"
        },
        {
            title : "The Great Gatsby",
            author : "F Scott Fitzgerald"
        }
    ];

// log out the books array
    console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    books.forEach(function(element, index, array) {
        console.log("Book #" + (index+1));
        console.log("Title: " + array[index].title);
        console.log("Author: " + array[index].author);
        console.log("---");
    })
// end loop here



})();
