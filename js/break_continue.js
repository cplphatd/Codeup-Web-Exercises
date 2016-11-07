/**
 * Created by David on 11/7/16.
 */
"use strict";

//Use console.log to log all the odd numbers from 1 to 50, except the random odd number you generated,
//by using break and continue. Try to match the output shown below (your random number will be different).

var random; //declare variable for random value

//Loop to select random odd number; can also use do while loop
for (var j = 0; j < 100; j += 1) {
    random = Math.floor((Math.random() * 50) + 1); //Generate random number between 1-50
    if (random % 2 > 0) {
        break;
    }
}

console.log("Random odd number to skip: " + random);

//For loop for output generation (initial attempt)
/*for (var i = 1; i<=50; i += 1) {
    if (i == random) {      //Evaluates if i is the number to skip
        console.log("Yikes! Skipping number: " + random);
    } else if (i % 2 > 0) {     //Evaluates if i is odd
        console.log("Here is an odd number: " + i);
    }
}*/

//Ideal method (without checking for even numbers and not using breaks or continues)
for (var i = 1; i<=50; i += 2) {
    if (i == random) {      //Evaluates if i is the number to skip
        console.log("Yikes! Skipping number: " + random);
    } else {
        console.log("Here is an odd number: " + i);
    }
}

//This is an attempt to use the switch structure instead of if & if else statements
//Not recommended method for performing this
/*for (var i = 1; i <= 50; i += 1) {
    switch (true) {
        case (i == random):
            console.log("Yikes! Skipping number " + random);
            continue;
        case (i % 2 > 0):
            console.log("Here is an odd number: " + i);
            continue;
        default:
            continue;
    }
}*/

//Output multiplication tables for 1-12, multiplied by 1-10

var base = 0;
var multiplier;

for (var k = 1; k <= 12; k +=1) {
    base += 1;
    multiplier = 0;
    while (multiplier < 10) {
        multiplier += 1;
        console.log(base + "x" + multiplier + "=" + (base * multiplier));
        if (multiplier == 10) {
            continue;
        }
    }
}