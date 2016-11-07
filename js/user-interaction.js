"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
do {
    var response = prompt("What is your name?");
} while (response == "");

// TODO: Show an alert message that welcomes the user based on their input.
alert("Hello " + response + "!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var pizza = confirm("Do you like pizza?");

if (pizza == 1) {
    alert("I like pizza too!");
} else {
    alert("How can you not like pizza?");
}
