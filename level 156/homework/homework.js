// Task 2

const sumNum = require("./homework1");

// A core or built-in module is a module that is built into node.js, which means we don't have to write it and can 
// directly import it, for example events, utils, fs, modules.


// Task 3

// A global module is a module that we don't have to write and is built-in, but we don't have to 
// import it either because a global module is written in the system in
//  general and not in one specific file, such as the console.log() function or process.


// Task 4

const { argv } = process;

console.log(parseInt(argv[2]) + parseInt(argv[3]) + parseInt(argv[4]));


// Task 5

console.log(process.memoryUsage());


// Task 6


console.log(sumNum(10, 10));