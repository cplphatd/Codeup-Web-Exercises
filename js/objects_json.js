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
            author : {
                firstName: "Alexander",
                lastName: "Dumas"
            }
        },
        {
            title : "The Old Man and the Sea",
            author : {
                firstName: "Ernest",
                lastName: "Hemingway"
            }
        },
        {
            title : "1984",
            author : {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title : "Heart of Darkness",
            author : {
                firstName: "Joseph",
                lastName: "Conrad"
            }
        },
        {
            title : "The Great Gatsby",
            author : {
                firstName: "F Scott",
                lastName: "Fitzgerald"
            }
        }
    ];

// log out the books array
    console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    books.forEach(function(book, index) {
        console.log("Book #" + (index+1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    })
// end loop here



})();
