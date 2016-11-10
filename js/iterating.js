(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["John", "Audrey", "Henry", "Valerie"];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log("Length of array: " + names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
    //for loop
    for (var i = 0; i < names.length; i += 1) {
        console.log(names[i]);
    }

    //Print each name of the array individually using forEach
    console.log("With for-each:");
    names.forEach(function (element, index, array) {
        console.log("Name " + (index + 1) + ": " + element);
    })
})();
