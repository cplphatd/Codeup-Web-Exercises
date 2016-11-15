/**
 * Created by David on 11/15/16.
 */
"use strict";
(function () {

    // python example
    // write a function that generates a range of numbers as an array
    // ex
    // > range(1,5)
    //   [1, 2, 3, 4]
    // modify the function such that you can pass in a third parameter
    // for the step
    // ex
    // > range(2, 11, 2)
    //   [2, 4, 6, 8, 10]
    // can the third parameter be optional (default to 1)?
    // can you create a range in reverse order? i.e. `range(5,2)

    var rangeArray = [];
    var startValue;
    var endValue;
    var stepValue;

    function generateRange (start, stop, step) {
        var range;
        if (start < stop  && (stop - start) % step == 0) {
            for (var i = start; i <= stop; i += step) {
                rangeArray.push(i);
            }
        } else if (start > stop && (start - stop) % step == 0) {
            for (var i = start; i >= stop; i -= step) {
                rangeArray.push(i);
            }
        } else if (start == stop) {
            rangeArray.push(start);
        } else {
                alert("Please enter valid values.");
                location.reload();
        }
    }

    function getInput () {
        startValue = prompt("Please enter the starting value.");
        startValue = parseFloat(startValue);
        endValue = prompt("Please enter the ending value.");
        endValue = parseFloat(endValue);
        stepValue = prompt("Please enter the step value.");
        if (stepValue == undefined || stepValue == "") {
            stepValue = 1;
        }
        stepValue = parseFloat(stepValue);
    }

    getInput();
    generateRange(startValue, endValue, stepValue);
    console.log(rangeArray);
})();
