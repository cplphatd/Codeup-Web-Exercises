/**
 * Created by David on 11/7/16.
 */
"use strict";

//Desired output
/*
100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
*/

//For loop to create desired output
for (var i = 100; i >= 5; i -= 5){
    console.log(i);
}

//Using a for loop and the code to generate a random number from the previous lessons, generate 10 random numbers
//between 20 and 200 and output to the console whether each number is odd or even.

var random; //Declare variable for random number

for (var j = 1; j <= 10; j +=1){
    random = Math.floor(Math.random() * 180) + 20;  //Generates random number between 20-200
    if (random % 2 > 0){                            //Determine even or odd; can also use ternary operator
        console.log(random + " is an odd number.");
    } else {
        console.log(random + " is an even number.");

    }
}

//Write the JS code to log to the console the multiplication table for a random number between 1 and 10.

var randomTable = Math.floor(Math.random() * 10) + 1;  //Generates random number between 1-10;
console.log("Random number is " + randomTable);

for (var k = 1; k <= 10; k += 1){
    console.log(randomTable + " x " + k + " = " + (randomTable*k));
}