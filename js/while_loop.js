/**
 * Created by David on 11/4/16.
 */
"use strict";

//Generates random number of cones to sell
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones + " to sell.");

//Declare variable for cones sold
var cones;

//Run until cones are sold out
while (allCones > 0) {
    cones = Math.floor(Math.random() * 5) + 1;
    if (cones <= allCones) {
        console.log(cones + " cones sold.");
        allCones = allCones - cones;
        console.log(allCones + " cones left.");
    } else {
        console.log("Cannot sell " + cones + ". I only have " + allCones + " left.");
    }
}

//Once all cones sold
console.log("Yay! All cones sold.");


//Loop for outputting values

//Declare counter and base
var i = 0;
var base = 1;

//While loop
while (i<16){
    base = base * 2;
    console.log(base);
    i += 1;
}

//Variable for  random number

var random;

//Loop until a random even number is displayed

do {
    random = Math.floor(Math.random() * 20) + 1;
    if (random % 2 == 0){
        console.log("Random even number: " + random);
    }
} while (random % 2 > 0);