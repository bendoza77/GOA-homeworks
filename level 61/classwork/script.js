// Task 1

const div = document.getElementById("div");
const age = 18
let question = Number(prompt("Enter your age."))

if(question < age){
    div.textContent = "Your are kid";
} else{
    div.textContent = "Your are adult";
}

// Task 2

const answer = 20;
const myDiv = document.getElementById("myDiv");

while(true){
    let question1 = Number(prompt("guess secret number"))

    if(question1 === answer){
        myDiv.textContent = "That is correct";
        break;
    }
}

// Task 3

for(let i = 1; i < 100; i++){
    console.log(i);
}

// Task 4

for(let i = 40; i < 60; i = i + 2){
    console.log(i);
}

// Task 5

for(let i = 50; i > 25; i--){
    console.log(i);
}

// Task 6

listOfFruit = ["appel", "banana", "watermelon", "strawberry", "blueberry"];

for(let i = 0; i < listOfFruit.length; i++){
    console.log(listOfFruit[i]);
}