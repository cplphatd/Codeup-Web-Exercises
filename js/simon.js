/**
 * Created by David on 12/8/16.
 */
"use strict";
(function () {

    //Global variables
    var currentSquare;               //will hold the number of the current square of the pattern
    var userSquare;                  //will hold the number of the square that the user clicks
    var correctSequenceArray = [];   //will hold the correct number sequence
    var userSequenceArray = [];      //will hold the user's inputted sequence

    //Generates random integer to select block to add to pattern (min and max included)
    var generateRandomInteger = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min + 1)) + min;
    };

    //Updates the correct sequence
    var updateCorrectSequence = function (newNumber) {
        correctSequenceArray.push(newNumber);
    };

    //Animates the corresponding square
    var animateSquare = function (squareNumber) {
        switch (squareNumber) {
            case 0:
                $("#red").fadeOut().fadeIn();
                break;
            case 1:
                $("#blue").fadeOut().fadeIn();
                break;
            case 2:
                $("#yellow").fadeOut().fadeIn();
                break;
            case 3:
                $("#green").fadeOut().fadeIn();
                break;
            default:
                console.log("Error")
        }
    };

    //Animates the correct sequence
    var animateSequence = function (sequenceArray, index) {
        setTimeout (function () {
            animateSquare(sequenceArray[index]);
            index += 1;
            if(index <= sequenceArray.length -1) {
                animateSequence(sequenceArray, index);
            }
        }, 1000);
    };

    //Testing random number generator
    $("#start").click(function () {
        currentSquare = generateRandomInteger(0, 3);
        console.log(currentSquare);
        updateCorrectSequence(currentSquare);
        console.log(correctSequenceArray);
        animateSequence(correctSequenceArray, 0);
    });

})();
