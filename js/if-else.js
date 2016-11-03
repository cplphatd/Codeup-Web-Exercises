/**
 * Created by David on 11/3/16.
 */
"use strict";
var grade_one = 70;
var grade_two = 80;
var grade_three = 95;

var avg = (grade_one + grade_two + grade_three) / 3;

if (avg > 80){
    console.log("You're awesome.")
} else {
    console.log("You need more practice.")
}

var ryan = 250;
var george = 320;
var cameron = 180;

if (ryan > 200){
    console.log("Ryan -  " + "Before discount: $" + ryan + " After discount: $" + ryan*.8)
} else {
    console.log("Ryan - " + "Total: $" + ryan)
}

if (george > 200){
    console.log("George -  " + "Before discount: $" + george + " After discount: $" + george*.8)
} else {
    console.log("George - " + "Total: $" + george)
}

if (cameron > 200){
    console.log("Cameron -  " + "Before discount: $" + cameron + " After discount: $" + cameron*.8)
} else {
    console.log("Cameron - " + "Total: $" + cameron)
}

var flipACoin = Math.floor(Math.random()* 2);

var decision = (flipACoin) ? "Buy a house" : "Buy a car";
console.log(flipACoin);
console.log(decision);