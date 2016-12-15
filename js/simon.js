/**
 * Created by David on 12/8/16.
 */
"use strict";
(function () {

    //Global variables
    var currentSquare;               //will hold the number of the current square of the pattern
    var userSquare;                  //will hold the number of the square that the user clicks
    var correctSequenceArray = [];   //will hold the correct number sequence
    var index;                       //will be used to iterate through correctSequenceArray as user clicks
    var currentRound;                //will hold the current round
    var timeoutLength = 1000;        //starts at 1000 then will decrease as difficulty increases
    var backgroundMusic = new Audio ("audio/simonFFBackground.mp3");
    var gameOverMusic = new Audio ("audio/simonWrong.mp3");
    var levelUpMusic = new Audio ("audio/simonLevelUp.mp3");
    var correctSequenceMusic = new Audio ("audio/simonButtonZero.mp3");
    var hardMode = null;

    //Adjust volumes
    $(levelUpMusic).prop("volume", .5);
    $(gameOverMusic).prop("volume", .25);
    $(backgroundMusic).prop("volume", .25);
    $(correctSequenceMusic).prop("volume", .5);

    //Generates random integer to select block to add to pattern (min and max included)
    var generateRandomInteger = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min + 1)) + min;
    };

    //Updates the correct sequence
    var updateCorrectSequence = function (newNumber) {
        correctSequenceArray.push(newNumber);

        //Must choose which index to start from at this point
        setDifficultyIndex(hardMode);
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
                console.log("Error @ animateSquare :" + squareNumber);
        }
    };

    //Animates the correct sequence
    var animateSequence = function (sequenceArray, index) {
        setTimeout (function () {
            animateSquare(sequenceArray[index]);
            index += 1;

            //Ensures user cannot click while sequence is playing
            if(index == sequenceArray.length) {

                //Adds delay to ensure last animation finishes before user can click
                setTimeout (function () {
                    addEventListeners();
                }, 1000);
            }

            if(index <= sequenceArray.length - 1) {
                animateSequence(sequenceArray, index);
            }
        }, timeoutLength);
    };

    //Takes user click and assigns value to userSquare
    var getUserSquare = function () {
        var squareID;
        squareID = this.getAttribute("id");
        switch (squareID) {
            case "red":
                userSquare = 0;
                animateSquare(userSquare);
                compareSequences(correctSequenceArray, userSquare);
                break;
            case "blue":
                userSquare = 1;
                animateSquare(userSquare);
                compareSequences(correctSequenceArray, userSquare);
                break;
            case "yellow":
                userSquare = 2;
                animateSquare(userSquare);
                compareSequences(correctSequenceArray, userSquare);
                break;
            case "green":
                userSquare = 3;
                animateSquare(userSquare);
                compareSequences(correctSequenceArray, userSquare);
                break;
            default:
                console.log("Error @ getUserSquare: " + squareID);
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

    //Sets the difficulty starting index
    var setDifficultyIndex = function (difficulty) {
        if (hardMode == false) {
            index = 0;
        } else {
            index = correctSequenceArray.length - 1;
        }
    };

    //Compares the user's sequence with the correct sequence (switch selects which comparison method to use)
    var compareSequences = function (generatedSequenceArray, userClickedSquare) {
        switch (hardMode) {
            case false:
                if (userClickedSquare == generatedSequenceArray[index] && index == generatedSequenceArray.length - 1) {
                    correctSequenceMusic.play();
                    index = 0;  //reset the counter
                    removeEventListeners();

                    //Delays start of next round by 1 second
                    setTimeout(function () {
                        startNextRound();
                    }, 1000);
                } else if (userClickedSquare == generatedSequenceArray [index]) {
                    index += 1;
                } else {
                    removeEventListeners();
                    backgroundMusic.pause();
                    gameOverMusic.play();
                    $("#start").removeClass("invisible").off().click(resetGame);
                    $("#difficulty").show();
                    index = 0;
                    hardMode = null;
                    $("#warning").addClass("hidden");
                }
                break;
            case true:
                if (userClickedSquare == generatedSequenceArray[index] && index == 0) {
                    correctSequenceMusic.play();
                    index = generatedSequenceArray.length - 1;  //reset the counter
                    removeEventListeners();

                    //Delays start of next round by 1 second
                    setTimeout(function () {
                        startNextRound();
                    }, 1000);
                } else if (userClickedSquare == generatedSequenceArray [index]) {
                    index -= 1;
                } else {
                    removeEventListeners();
                    backgroundMusic.pause();
                    gameOverMusic.play();
                    $("#start").removeClass("invisible").off().click(resetGame);
                    $("#difficulty").show();
                    index = 0;
                    hardMode = null;
                    $("#warning").addClass("hidden");
                }
                break;
            default:
                console.log("Error @ switch on hardMode");
        }
    };

    //Starts next round
    var startNextRound = function () {
        currentSquare = generateRandomInteger(0, 3);
        updateCorrectSequence(currentSquare);
        animateSequence(correctSequenceArray, 0);
        trackRounds(correctSequenceArray);
        increaseDifficulty(currentRound);
    };

    //Keeps track of the rounds played and updates in DOM
    var trackRounds = function (sequenceArray) {
        currentRound = sequenceArray.length - 1;
        var currentXP = currentRound * 100;
        var nextLevelXP = 500;
        $("#roundNumber").html(currentXP);
        if(currentRound % 5 == 0 && currentRound != 0) {
            nextLevelXP += 500;
            $("#nextLevel").html(nextLevelXP);
        }

    };

    //Resets the game
    var resetGame = function () {
        removeEventListeners();
        correctSequenceArray = [];
        timeoutLength = 1000;
        currentRound = correctSequenceArray.length;
        $("#start").removeClass("invisible");
        if (hardMode != null) {
            $("#round").addClass("invisible");
            backgroundMusic.currentTime = 0;
            gameOverMusic.pause();
            gameOverMusic.currentTime = 0;
            $("#nextLevel").html("500");
            startGame();
        }
    };

    //Starts the game
    var startGame = function () {
        if (hardMode != null) {
            playBackgroundMusic();
            currentSquare = generateRandomInteger(0, 3);
            updateCorrectSequence(currentSquare);
            animateSequence(correctSequenceArray, 0);
            $("#round").removeClass("invisible");
            trackRounds(correctSequenceArray);
            $("#start").addClass("invisible");
            $("#difficulty").hide();
        }
    };

    //Increases difficulty every 5 rounds
    var increaseDifficulty = function (roundNumber) {
         if (roundNumber % 5 == 0) {
            timeoutLength *= .75;
            levelUpMusic.play();
            $("#levelUp").removeClass("invisible");
            setTimeout(function () {
                // $("#levelUp").fadeOut().fadeIn();
                $("#levelUp").addClass("bounce");
                setTimeout(function () {
                    $("#levelUp").removeClass("bounce").addClass("invisible");
                }, 2000);
            }, 1000);
         }
    };

    //Sets hard mode
    var setHardMode = function () {
        hardMode = true;
        $("#warning").removeClass("hidden");
    };

    //Sets normal mode
    var setNormalMode = function () {
        hardMode = false;
        $("#warning").addClass("hidden");
    };

    //Plays the background music
    var playBackgroundMusic = function () {
        backgroundMusic.loop = true;
        backgroundMusic.play();
    };

    //Add event listeners
    $("#start").click(startGame);
    $("#hard").click(setHardMode);
    $("#normal").click(setNormalMode);
})();
