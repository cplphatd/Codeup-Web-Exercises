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
        } (unit2 != "tsp" && unit2 != "tbsp" && unit2 != "fl oz" && unit2 != "cp" && unit2 != "pt" && unit2 != "qt"
        && unit2 != "gal");
    }

    function convertFromTsp(tspAmount, convertToUnit) {
        switch (convertToUnit) {
            case "tbsp" :
                amount2 = tspAmount
        }
    }





})();
