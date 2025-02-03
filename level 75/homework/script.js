// Task 2

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(myForm.userName.value);
    console.log(myForm.lastName.value)
    console.log(myForm.email.value);
    console.log(myForm.password.value);
    document.getElementById("myForm").reset()
})


// Task 3


    // 1
let userName = "gabriel";
let validName = true;

if (userName.length <= 4){
    validName = false;
};

console.log(validName ? "your name is valid": "your name is too short");

    // 2

let lastName = "jobava";
let validLastName = true

if (lastName.length < 6){
    validLastName = false;
};

console.log(validLastName ? "your last name is valid": "your last name is too short");

    // 3

let age = 15;
let validAge = true;

if (age <= 10){
    validAge = false;
};

console.log(validAge ? "you are adult": "you are kid");


// Task 4

    // 1
let height = 150;
let validHeight = true;

if (height <= 120){
    validHeight = false;
};

validHeight && console.log("you can enter");

    // 2

let weight = 80;
let validWeight = true;

if(weight >= 100){
    validWeight = false;
};

validWeight && console.log("you can enter");

    // 3

let myAge = 20;
let validMyAge = true;

if(myAge < 18){
    validMyAge = false;
}

validMyAge && console.log("you can enter");

// Task 5

    // ternary operator

// The ternary operator works with true and false. The ternary operator has only this and the syntax that is 
// different between the if else condition. The variable whose value is boolean is written first because if the 
// value of this variable is true then it will write that message or perform that action that is written after writing this 
// variable. What is written after the question mark means that if the value of the variable is 
// not true then it will do this or in all other cases.

    // example
    // console.log(validAge ? "you are adult": "you are kid");

    // &&(and) operator

// The &&(and) operator is the same as the ternary operator or if else condition, but the difference between them is the 
// syntax. As for the &&(and) operator, in this case, there is a difference not only in the syntax but also in the style of 
// work. For example, in the first case, we write a variable whose value is bool as in the ternary operator, and if this variable 
// has a value of true, then it performs the action that is written after &&, otherwise it does nothing. For the && operator to work, 
// both must be true, but if at least one of them is false, the answer will still be false, and we write the variable first 
// because everything written after it always refers to true.

    // example
    // validMyAge && console.log("you can enter");


// Task 6

    // var a = 10 we can call this value beacuse is global value beauces its outside od function

function exampleOne(){
    var a = 10

    console.log(a)
}

exampleOne()
// console.log(a) Cant call value if its in function or in block


    // let a = 10 we cant call this beacuse its global value
function exampleTwo(){
    let a = 10;
    console.log(a);
}

exampleTwo()

// console.log(a) cant call this valu beacuse its inside of function


    // console.log(a) we can call it beacuse its global value

function exampleThree(){
    const a = 10;
    console.log(a)
}

exampleThree();

// console.log(a) we cant cal it beacuse it inside of function



// var a = 10  this is not call error
// var a = 10

// let c = 10  this wll call error beacuse when we create value by let keyword and their name is same its will call error
// let c = 10

// const b = 10 this will also call error
// const b = 10