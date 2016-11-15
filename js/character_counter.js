/**
 * Created by David on 11/15/16.
 */
"use strict";
(function () {

    // write a function that takes an array, and returns an object
    // whose keys are each value in the array, and whose values
    // are the number of occurrences of each key
    // ex
    // > getCount([6, 7, 4, 4])
    // {6: 1, 7: 1, 4: 2}

    var counts = {};
    var myArray = [6, 7, 4, 4];

    function countTheNumbers (arrayOfNumbers) {
        arrayOfNumbers.forEach(function (number) {
            counts[number] = counts[number] ? counts[number] + 1 : 1;  //creates key with name of array element then adds one for each occurrence
        })
    }

    countTheNumbers(myArray);
    console.log(counts);

})();
