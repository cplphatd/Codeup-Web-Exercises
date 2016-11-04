/**
 * Created by David on 11/4/16.
 */
"use strict";

var luckyNumber = Math.floor(Math.random()* 6)

var subtotal = 60;
var total;

console.log("The lucky number is " + luckyNumber);

switch (luckyNumber){
    case 1:
        total = subtotal * .9;
        console.log("Your total is $" + total);
        break;
    case 2:
        total = subtotal * .75;
        console.log("Your total is $" + total);
        break;
    case 4:
        total = subtotal * .5;
        console.log("Your total is $" + total);
        break;
    case 5:
        total = 0;
        console.log("Your purchase is free!");
        break;
    default:
        total = subtotal;
        console.log("Your total is $" + total);
}

var month = 5;

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Not a valid month.");
}