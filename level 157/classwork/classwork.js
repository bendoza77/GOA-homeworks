const os = require("os");

// Task 1

console.log(process.argv.slice(2));


// Task 3

console.log(os.type());
console.log(os.arch());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.uptime());
console.log(os.networkInterfaces());