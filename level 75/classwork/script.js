// Task 1

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(myForm.userName.value);
    console.log(myForm.email.value);
    console.log(myForm.password.value);
    document.getElementById("myForm").reset()
})

// Task 2

// ES6 is a new version of JavaScript whose full name is ECMAScript. 
// Before this version was released, it was called the previous version 
// ES5 which was created in 2015. Before the new version was released, 
// there was only one variable var in JavaScript, so all variables were 
// written with the var keyword, and this version made it easier for developers to create websites. 
// But when the new version (ES6) was released, a lot of things were added, for example: let and const 
// keywords, which simplified the creation of variables, so the var keyword is no longer used. Also, many 
// new cool functions were added, such as map, set, startWith, endWith, 
// find, etc. ES6 has been around for 10 years.

// Task 3

// Scope is one of the important rules in JavaScript, for example when a variable is inside a 
// function or block we cannot call it outside the block or function, except within the function or block. 
// Whereas a variable which is created outside a function or block we can call it 
// anywhere such a variable is called a global variable.

// Task 4

    // 1
let myName = "gabriel";

console.log(`my name is ${myName}`);

    // 2
let lastName = "jobava";

console.log(`my last name is ${lastName}`);

    // 3
let myAge = 15;

console.log(`i ame ${myAge} years old`);

// Task 5

    // 1
let age = 10;
let areYouAdult = false;

if(age < 18){
    areYouAdult = true;
}

console.log(areYouAdult ? "you are adult" : "your are kid");


    // 2

let minHeight = 150;
let yourHeight  = true

if (minHeight < 180){
    yourHeight = false
}

console.log(yourHeight ? "you cant enter": "you can enter");

    // 3

let car = true;
let isCarCrashed = false

if (car === true){
    isCarCrashed = true
}

console.log(isCarCrashed ? "your car is chrashed": "your car is safe");


// Task 6


    // 1
let age1 = 20;
let validAge = true;

if (age1 < 18){
    validAge = false
}

validAge && console.log("your are adult");

    // 2

let minHeight1 = 160;
let validheight = true;

if (minHeight < 150){
    validheight = false;
}

validheight && console.log("Your can enter");

let weight = 80;
let validWeight = true;

if (weight < 50){
    validWeight = false
}

validWeight && console.log("you can enter");