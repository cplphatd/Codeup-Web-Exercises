/**
 * Created by David on 11/15/16.
 */
"use strict";
(function () {

    // write a function `chunk` that splits an array into chunks
    // of 3
    // ex
    // > chunk([1,2,3,4,5,6,7])
    //   [[1,2,3], [4,5,6], [7]]
    // modify the function to take in a parameter for chunk size

    var myArray = [1, 2, 3, 4, 5, 6, 7];
    var chunkStorage = [];

    function chunk (array, chunkSize) {
        var removedChunk;
        var j = 0;
        var originalArrayLength = array.length;
        for(var i = 0; i < originalArrayLength; i += chunkSize) {
            removedChunk = array.splice(0, chunkSize);
            chunkStorage [j] = removedChunk;
            j += 1;
        }
    }

    chunk(myArray, 3);
    console.log(chunkStorage);

})();
