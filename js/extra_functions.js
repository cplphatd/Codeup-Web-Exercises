/**
 * Created by David on 11/8/16.
 */
"use strict";

//Create four functions that take two numbers as input and produce an output that is the result of the operation:
//Add, subtract, divide, multiply

var result = 0;     //This will hold the end result

function add (num1, num2) {
    return num1 + num2;
}

function sub (num1, num2) {
    return num1 - num2;
}

function mult (num1, num2) {
    return num1 * num2;
}

function div (num1, num2) {
    return num1 / num2;
}

//Functions to prompt for user input and verifying inputs
var userNum1;
var userNum2;

function input() {
    do {
        userNum1 = prompt("What is the first number?");
        userNum1 = parseFloat(userNum1); //converts string from prompt into a number
    } while (userNum1 / userNum1 != 1);
    do {
        userNum2 = prompt("What is the second number?");
        userNum2 = parseFloat(userNum2);
    } while (userNum2 / userNum2 != 1);
}

//Allow the user to choose what operation they want to perform
var operation = prompt ("Which operation would you like to perform? (+, -, *, /)");
switch (operation) {
    case "+" :
        input();
        result = add(userNum1, userNum2);
        break;
    case "-" :
        input();
        //sub(userNum1, userNum2);
        result = add(userNum1, -(userNum2));
        break;
    case "*" :
        input();
        var i;
        var altMult = userNum1;
        for (i = 1; i < userNum2; i += 1) {
            altMult = add(userNum1, altMult);
        }
        result = altMult;
        //mult(userNum1, userNum2);
        break;
    case "/" :
        input();
        result = div(userNum1, userNum2);
        break;
    default:
        alert("Reload page and please make a valid selection");
}

console.log(userNum1 + " " + operation + " " + userNum2 + " = " + result);