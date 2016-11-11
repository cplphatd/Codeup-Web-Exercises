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
    var newArray = [];      //will hold split string

    //splits string into separate words
    function splitString (string) {
        var array;
        array = string.split(" ");
        return array;
    }

    newArray = splitString(myString);  //stores split words into new array
    console.log("state after splitting string: " + newArray);      //verify results

    var wordsSplitIntoLettersArray = [];      //will hold the split letters

    //splits each word into letters and pushes onto wordsSplitIntoLettersArray
    function splitIntoLetters (array) {
        var wordSplitIntoLetters;
        array.forEach(function (word) {
            wordSplitIntoLetters = word.split("");
            wordsSplitIntoLettersArray.push(wordSplitIntoLetters);
        })
    }

    splitIntoLetters(newArray);                   //split the words into letters
    console.log("state after split into letters: " + wordsSplitIntoLettersArray);        //verify results

    var sortedLettersArray = [];                  //will hold the sorted letters

    //sorts each array of letters
    function sortLetters (array) {
        var sortedWord;
        array.forEach(function (splitWord) {
            sortedWord = splitWord.reverse();
            sortedLettersArray.push(sortedWord);
        })
    }

    sortLetters(wordsSplitIntoLettersArray);    //sort the letters
    console.log("state after sort: " + sortedLettersArray);    //verify results

})();
