/**
 * Created by David on 11/9/16.
 */
"use strict";

(function () {

//Create a script to convert units of measure for recipes. It should take in an amount and a unit
// (using either $argv or fgets(STDIN)) and output that amount converted to another unit of measure.
// You can either output the converted amount in all the relevant units, or ask the user what unit they would like to convert it to.
//Full readme at:  https://github.com/gocodeup/codeup_challenges/tree/master/unit_conversion
    var unit1;
    var amount1;
    var unit2;
    var amount2;

    //User input function
    function userInput() {
        //verify valid unit selected
        do {
            unit1 = prompt("Enter the unit you have: (tsp, tbsp, fl oz, cp, pt, qt, gal)");
        } while (unit1 != "tsp" && unit1 != "tbsp" && unit1 != "fl oz" && unit1 != "cp" && unit1 != "pt" && unit1 != "qt"
        && unit1 != "gal");
        //verify valid amount entered
        do {
            amount1 = prompt("Enter the amount: ");
        } while (amount1 / amount1 != 1);
        do {
            unit2 = prompt("Enter the unit you want to convert to: (tsp, tbsp, fl oz, cp, pt, qt, gal)");
        } while (unit2 != "tsp" && unit2 != "tbsp" && unit2 != "fl oz" && unit2 != "cp" && unit2 != "pt" && unit2 != "qt"
        && unit2 != "gal");
    }

    //Conversion functions for each unit
    function convertFromTsp (tspAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tbsp" :
                return amount2 = tspAmount * .333;
                break;
            case "fl oz" :
                return amount2 = tspAmount * .167;
                break;
            case "cp" :
                return amount2 = tspAmount * .021;
                break;
            case "pt" :
                return amount2 = tspAmount * .010;
                break;
            case "qt" :
                return amount2 = tspAmount * .005;
                break;
            case "gal" :
                return amount2 = tspAmount * .001;
            default :
                return amount2 = tspAmount;
        }
    }

    function convertFromTbsp (tbspAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tsp" :
                return amount2 = tbspAmount * 3;
                break;
            case "fl oz" :
                return amount2 = tbspAmount * .5;
                break;
            case "cp" :
                return amount2 = tbspAmount * .062;
                break;
            case "pt" :
                return amount2 = tbspAmount * .031;
                break;
            case "qt" :
                return amount2 = tbspAmount * .016;
                break;
            case "gal" :
                return amount2 = tbspAmount * .004;
                break;
            default:
                return amount2 = tbspAmount;
        }
    }

    function convertFromFlOz (flOzAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tsp" :
                return amount2 = flOzAmount * 6;
                break;
            case "tbsp" :
                return amount2 = flOzAmount * 2;
                break;
            case "cp" :
                return amount2 = flOzAmount * .123;
                break;
            case "pt" :
                return amount2 = flOzAmount * .063;
                break;
            case "qt" :
                return amount2 = flOzAmount * .031;
                break;
            case "gal" :
                return amount2 = flOzAmount * .008;
                break;
            default :
                return amount2 = flOzAmount;
        }
    }

    function convertFromCp (cpAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tsp" :
                return amount2 = cpAmount * 48.692;
                break;
            case "tbsp" :
                return amount2 = cpAmount * 16.231;
                break;
            case "fl oz" :
                return amount2 = cpAmount * 8.115;
                break;
            case "pt" :
                return amount2 = cpAmount * .507;
                break;
            case "qt" :
                return amount2 = cpAmount * .254;
                break;
            case "gal" :
                return amount2 = cpAmount * .063;
                break;
            default :
                return amount2 = cpAmount;
        }
    }

    function convertFromPt (ptAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tsp" :
                return amount2 = ptAmount * 96;
                break;
            case "tbsp" :
                return amount2 = ptAmount * 32;
                break;
            case "cp" :
                return amount2 = ptAmount * 1.972;
                break;
            case "fl oz" :
                return amount2 = ptAmount * 16;
                break;
            case "qt" :
                return amount2 = ptAmount * .5;
                break;
            case "gal" :
                return amount2 = ptAmount * .125;
                break;
            default :
                return amount2 = ptAmount;
        }
    }

    function convertFromQt (qtAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tsp" :
                return amount2 = qtAmount * 192;
                break;
            case "tbsp" :
                return amount2 = qtAmount * 64;
                break;
            case "cp" :
                return amount2 = qtAmount * 3.943;
                break;
            case "pt" :
                return amount2 = qtAmount * 2;
                break;
            case "fl oz" :
                return amount2 = qtAmount * 32;
                break;
            case "gal" :
                return amount2 = qtAmount * .25;
                break;
            default :
                return amount2 = qtAmount;
        }
    }

    function convertFromGal (galAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tsp" :
                return amount2 = galAmount * 768;
                break;
            case "tbsp" :
                return amount2 = galAmount * 256;
                break;
            case "cp" :
                return amount2 = galAmount * 15.773;
                break;
            case "pt" :
                return amount2 = galAmount * 8;
                break;
            case "qt" :
                return amount2 = galAmount * 4;
                break;
            case "fl oz" :
                return amount2 = galAmount * 128;
                break;
            default :
                return amount2 = galAmount;
        }
    }

    //Call user input
    userInput();

    //Switch to determine which conversion function to call based on user's starting unit
    switch (unit1) {
        case "tsp" :
            convertFromTsp (amount1, unit2);
            break;
        case "tbsp" :
            convertFromTbsp (amount1, unit2);
            break;
        case "fl oz" :
            convertFromFlOz (amount1, unit2);
            break;
        case "cp" :
            convertFromCp (amount1, unit2);
            break;
        case "pt" :
            convertFromPt(amount1, unit2);
            break;
        case "qt" :
            convertFromQt(amount1, unit2);
            break;
        case "gal" :
            convertFromGal(amount1, unit2);
            break;
        default :
            console.log("Error. Reload and try again.")
    }

    //Display results of conversion
    console.log(amount1 + " " + unit1 + " = " + amount2 + " " + unit2);


})();
