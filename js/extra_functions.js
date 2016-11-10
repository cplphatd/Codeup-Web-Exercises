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

//Re-perform the exercises for 3.3.1, 3.3.2, 3.3.3 using functions

//3.3.1

//Knowing that a student's grades are 70, 80, 95. Write a JS program, using conditionals that logs to the console
//"You're awesome" if the average of her grades is greater than 80, otherwise the message should be "You need to practice more".

function calculateAverage(num1, num2, num3) {
    var avg = (num1 + num2 + num3) / 3;
    return avg;
}

var grade1 = 70;
var grade2 = 80;
var grade3 = 95;

if (calculateAverage (grade1, grade2, grade3) > 80) {
    console.log("You're awesome.");
} else {
    console.log("You need to study more.");
}

//HEB has an offer for the clients that buy products amounting more than $200 Write a JS program, using conditionals,
//that logs to the browser, how much does Ryan, Cameron and George need to pay. We know that Cameron bought $180,
//Ryan $250 and George $320. Your program will have to display a line with the name of the person, the amount before
//the discount, if any, and the amount after the discount.

function calculateDiscount (name, total) {
    var discountAmount;
    var message = "";
    if (total > 200) {
        discountAmount = total * .2;
        message = name + "'s Total: $" + total + " - $" + discountAmount + " = $" + (total - discountAmount);
        return message;
    } else {
        message = name + "'s Total: $" + total;
        return message;
    }
}

console.log(calculateDiscount("Cameron", 180));     //Aim to have functions return values and use logs outside of the function
console.log(calculateDiscount("Ryan", 250));
console.log(calculateDiscount("George", 320));

//3.3.2

//Now, suppose there's a promotion in Walmart, If your lucky number is 0 you have no discount,
// if your lucky number is 1 you'll get a 10% discount, if it's 2, discount is 25%, if it's 4, 50%, and if it's 5
// you'll get all for free!. Write a JS program that logs to the console, how much you will have to pay if your
// receipt is for $60. Every time you reload your page you should see a different result. Use a switch statement for this exercise.

var luckyNumber = Math.floor(Math.random()* 6);

function applyDiscount(randomNumber, subtotal) {
    var total;
    switch (randomNumber) {
        case 1 :
            total = subtotal * .9;
            console.log("Your lucky number is 1.  You got a 10% discount!  Your total is: $" + total);
            break;
        case 2 :
            total = subtotal * .8;
            console.log("Your lucky number is 2.  You got a 25% discount!  Your total is: $" + total);
            break;
        case 4 :
            total = subtotal * .5;
            console.log("Your lucky number is 4.  You got a 50% discount!  Your total is: $" + total);
            break;
        case 5 :
            total = 0;
            console.log("Your lucky number is 5.  Your purchase is free!");
            break;
        default :
            total = subtotal;
            console.log("Your number is " + randomNumber + ".  Sorry, you did not win.  Your total is: $" + total);
    }
}

applyDiscount(luckyNumber, 100);

//Suppose you have been assigned a task and you need to convert a number to the name of a month. 1 should be shown as
// January, 2 as February and so on. Using a switch statement write the JS code that shows the names of the months in the console.

function convertToMonthName(num) {
    switch (num) {
        case 1 :
            console.log("January");
            break;
        case 2 :
            console.log("February");
            break;
        case 3 :
            console.log("March");
            break;
        case 4 :
            console.log("April");
            break;
        case 5 :
            console.log("May");
            break;
        case 6 :
            console.log("June");
            break;
        case 7 :
            console.log("July");
            break;
        case 8 :
            console.log("August");
            break;
        case 9 :
            console.log("September");
            break;
        case 10 :
            console.log("October");
            break;
        case 11 :
            console.log("November");
            break;
        case 12 :
            console.log("December");
            break;
        default :
            console.log("Please enter a valid month.");
    }
}

convertToMonthName(5);

//3.3.3

//An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number
// between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of
// cones sold to each person.

var allCones = Math.floor(Math.random() * 50) + 50;

function sellCones(total) {
    var cones;
    var conesLeft = total;
    console.log(total + " cones to sell.");
    do {
        cones = Math.floor(Math.random() * 5) + 1;
        if (cones <= conesLeft) {
            conesLeft -= cones;
            console.log("Selling " + cones + " cones. " + conesLeft + " cones left.");
        } else {
            console.log("Cannot sell " + cones + " cones. Only " + conesLeft + " cones left.");
        }
    } while (conesLeft > 0);
}

sellCones(allCones);

//3.3.4
//Write the JS code to log to the console the multiplication table for a random number between 1 and 10.

var randomNumber = Math.floor(Math.random() * 10) + 1;

function multiplyTable(num) {
    for (i = 1; i <= 10; i += 1)
    {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

multiplyTable(randomNumber);


// will count down from the start number to the stop number
// by step

function countDown(start, stop, step) {
    for (i = start; i >= stop; i -= step) {
        console.log(start);
        start -= step;
    }
}

countDown(100, 0, 5);

//From now on, work on having functions return values rather than using console.log

//Write a function that takes an array as a parameter and picks a random element from array and returns it

var myArray = ["Xray", "Charlie", "Oscar", "Tango"];
var randomElement;

function getRandomElement (array) {
    var randomNumber = Math.floor(Math.random() * (array.length - 1)) + 1;
    return randomElement = array[randomNumber];
}

console.log(getRandomElement(myArray));