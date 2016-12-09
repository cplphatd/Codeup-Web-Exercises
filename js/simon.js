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
    var currentRound;                //will hold the current round
    var timeoutLength = 2000;        //starts at 2000 then will decrease as difficulty increases

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
                console.log("Error :" + squareNumber);
        }
    };

    //Animates the correct sequence
    var animateSequence = function (sequenceArray, index) {
        setTimeout (function () {
            animateSquare(sequenceArray[index]);
            index += 1;

            //Ensures user cannot click while sequence is playing
            if(index == sequenceArray.length) {
                addEventListeners();
            }

            if(index <= sequenceArray.length - 1) {
                animateSequence(sequenceArray, index);
            }
        }, timeoutLength);
    };

    //Updates the user's input sequence
    var updateUserSequence = function (userNumber) {
        userSequenceArray.push(userNumber);
        console.log("user array: " + userSequenceArray);
    };

    //Clears the user's input sequence
    var clearUserSequence = function () {
        userSequenceArray = [];
    };

    //Takes user click and assigns value to userSquare
    var getUserSquare = function () {
        var squareID;
        squareID = this.getAttribute("id");
        switch (squareID) {
            case "red":
                userSquare = 0;
                updateUserSequence(userSquare);
                compareSequences(correctSequenceArray, userSequenceArray);
                break;
            case "blue":
                userSquare = 1;
                updateUserSequence(userSquare);
                compareSequences(correctSequenceArray, userSequenceArray);
                break;
            case "yellow":
                userSquare = 2;
                updateUserSequence(userSquare);
                compareSequences(correctSequenceArray, userSequenceArray);
                break;
            case "green":
                userSquare = 3;
                updateUserSequence(userSquare);
                compareSequences(correctSequenceArray, userSequenceArray);
                break;
            default:
                console.log("Error " + squareID);
        }
    };

    //Add event listeners for user sequence
    var addEventListeners = function () {
        $(".square").click(getUserSquare);
    };

    //Remove event listeners for user sequence
    var removeEventListeners = function () {
        $(".square").off();
    };

    //Compares correct sequence with user's sequence
    var compareSequences = function (generatedSequenceArray, inputtedSequenceArray) {
        inputtedSequenceArray.forEach(function (number, index) {
            if(number == generatedSequenceArray[index] && index == generatedSequenceArray.length - 1) {
                removeEventListeners();
                clearUserSequence();
                startNextRound();
            }
            if(number != generatedSequenceArray[index]) {
                alert("Wrong");
                resetGame();
            }
        });
    };

    //Starts next round
    var startNextRound = function () {
        currentSquare = generateRandomInteger(0, 3);
        console.log("current square: " + currentSquare);
        updateCorrectSequence(currentSquare);
        console.log("correct sequence: " + correctSequenceArray);
        animateSequence(correctSequenceArray, 0);
        trackRounds(correctSequenceArray);
        increaseDifficulty(currentRound);
    };

    //Keeps track of the rounds played and updates in DOM
    var trackRounds = function (sequenceArray) {
        currentRound = sequenceArray.length;
        $("#roundNumber").html(currentRound);
    };

    //Resets the game
    var resetGame = function () {
        correctSequenceArray = [];
        userSequenceArray = [];
        currentRound = correctSequenceArray.length;
        $("#round").addClass("hidden");
        $("#start").removeClass("hidden");
    };

    //Starts the game
    var startGame = function () {
        currentSquare = generateRandomInteger(0, 3);
        console.log("current square: " + currentSquare);
        updateCorrectSequence(currentSquare);
        console.log("correct sequence: " + correctSequenceArray);
        animateSequence(correctSequenceArray, 0);
        $("#round").removeClass("hidden");
        trackRounds(correctSequenceArray);
        $("#start").addClass("hidden");
    };

    //Increases difficulty every 5 rounds
    var increaseDifficulty = function (roundNumber) {
        if (roundNumber % 5 == 0) {
            timeoutLength /= 2;
            //Play a sound
        }
    };

    //Add event listener to start button
    $("#start").click(startGame);
})();
