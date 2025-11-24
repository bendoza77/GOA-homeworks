// Task 2

process.stdout.write("hello world");


// Task 3

const events = require("events");

const joinEmmiter = new events.EventEmitter();

joinEmmiter.on("userJoined", (name) => {

    console.log("User enterd:")
    console.log(name);

})

joinEmmiter.on("message", (text) => {

    console.log("Message:");
    console.log(text);

})


joinEmmiter.emit("userJoined", "gabriel");
joinEmmiter.emit("message", "Hello gabriel welcome to our group :)");