// Task 1

    // 1
const {calculator, filter} = require("./calculator.js");

console.log(calculator(10,10,"+"));

    // 2

// why we use module.exports

// module.exports is an old way to import one or more functions from one file into another file, 
// or anything we want to transfer from the first file to the second.

// why we use require() function

// The require function provides communication between js files. So, without the require function, 
// we cannot import (export) certain information from one file to another unless we specify the name of the file from 
// which we want to extract certain information using the require function.


// Task 2

console.log(filter([0,1,2,3,4,5,6,7,8,9]));