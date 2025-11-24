// Here I have imported the events module built in so that I can use it to create and invoke events
const events = require("events");


// Here I created two objects using the EventEmmitter() object, which is also built into the events module,
//  so that I can then listen to these objects and create my own events.
const registerEmitter = new events.EventEmitter();
const authorizationEmitter = new events.EventEmitter();

// This is the users list where all the users who will be registered are stored.
let users = [];

// Here I use the reitserEmmiter object to create an event on it called register and then pass it another argument
// arrow function which has a parameter userObj or user object and then using the push method I add all
// users that will register
registerEmitter.on("register", (userObj) => {

    users.push(userObj)

})


// Here I create a single event userList which is passed to an arrow function which returns a list of users
registerEmitter.on("userList", () => {

    console.log("Users: ");
    console.log(users);

})


// I create an authorization event on the authorizationEmitter object that is passed to an arrow function with two parameters email and password
// This event checks whether the information entered by the user is correct and if so, return Authorization successfully if
// If not, return User not found
authorizationEmitter.on("authorization", (email, password) => {

    for (const i of users) {
        if (i.email === email && i.password === password) {
            console.log("Authorization successfully")
            return;
        }
    }

    console.log("User not found");
})

// Here I will create two user objects to pass to the registerEmmiter object so that it can add these objects to the users list
const firstUser = {
    fullName: "gabriel jobava",
    age: "16",
    email: "gabriel@gmail.com",
    password: "gabriel123"
};

const secondUser = {
    fullName: "luka jobava",
    age: "17",
    email: "luka@gmail.com",
    password: "luka123"
}


// Here I am already calling registerEmmiter using the emit method three times, the first two adding the passed object to the users list
// and the third one just prints the users list
registerEmitter.emit("register", firstUser);
registerEmitter.emit("register", secondUser);
registerEmitter.emit("userList");


// Here I also call authorizationEmitter twice to check whether the information I entered is correct and matches the
//  information of the objects stored in the users list.
authorizationEmitter.emit("authorization", "gabriel@gmail.com", "gabriel123");
authorizationEmitter.emit("authorization", "gabriel@gmail.com", "gabriel1234");