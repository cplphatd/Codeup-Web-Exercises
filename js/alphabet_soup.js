/**
 * Created by David on 11/10/16.
 */
"use strict";
(function () {
    // Create a function alphabet_soup($str) that accepts a string and will
    // +return the string in alphabetical order. E.g. "hello world" becomes
    // +"ehllo dlorw". So make sure your function separates and alphabetizes
    // +each word separately.

    //User's string (will change to prompt)
    var userString = prompt("Please enter your favorite phrase. (You will get a console message with each word sorted alphabetically)");

    //Array to hold individual words of string
    var splitIntoWordsArray = [];

    //Splits string into words
    var splitIntoWords = function (string) {
        splitIntoWordsArray = string.split(" ");
    };

    splitIntoWords(userString);

    //Array to hold individual letters from array
    var resultsArray = [];

    //Sorts the individual letters of the array alphabetically
    var sortLetters = function (splitWord) {
        return splitWord.sort();
    };

    //Joins the letters to create the sorted word
    var joinLetters = function (sortedLetters) {
        return sortedLetters.join("");
    };

    //Splits each word into letters, calls sort function, calls join function, and pushes onto resultsArray
    var createSortedWord = function (wordsArray) {
        var splitWord;
        var sortedWord;
        var joinedWord;
        wordsArray.forEach(function (word) {
            splitWord = word.split("");
            sortedWord = sortLetters(splitWord);
            joinedWord = joinLetters(sortedWord);
            resultsArray.push(joinedWord);
        });
    };

    createSortedWord(splitIntoWordsArray);

    //Holds the sorted letters
    var showResults = function (results) {
        console.log("Your results: ");
        results.forEach(function (sortedWord) {
            console.log(sortedWord);
        });
    };

    showResults (resultsArray);

})();
