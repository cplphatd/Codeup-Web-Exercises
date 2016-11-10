/**
 * Created by David on 11/10/16.
 */
"use strict";
(function () {
    // Create a function alphabet_soup($str) that accepts a string and will
    // +return the string in alphabetical order. E.g. "hello world" becomes
    // +"ehllo dlorw". So make sure your function separates and alphabetizes
    // +each word separately.

    var myString = "Hello World";

function alphabetSoup (string) {
    var array;
    array = string.split(" ");
    array.forEach(function ())
    array.sort();
    return array;
}

console.log(alphabetSoup(myString));


})();
