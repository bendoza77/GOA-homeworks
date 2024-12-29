// Task 1

let array = ["html", "css", "javascirpt", "phyton"];

console.log(array);
// Task 4
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
// Task 5
console.log(array.slice(1));

// Task 2


let secondArray = new Array("html", "css", "javascript", "phyton");
console.log(secondArray);
// Task 4
console.log(secondArray[0]);
console.log(secondArray[1]);
console.log(secondArray[2]);
// Task 5
console.log(secondArray.slice(1,3));


// Task 3

let thirdArray = new Array("html", "css", 'javascript');

thirdArray[0] = "c++";
thirdArray[1] = "c";
thirdArray[2] = "c#";

console.log(thirdArray);

// Task 4
console.log(thirdArray[0]);
console.log(thirdArray[1]);
console.log(thirdArray[2]);
// Task 5
console.log(thirdArray.slice(1,2));


// Task 6

function random(number){

    return Math.floor(Math.random() * number);
}

console.log(random(50));


// Task 7

let number = 0;

const count = setInterval(function(){
    number += 1;
    console.log(number);

    if (number >= 30){
        clearInterval(count);
    }
}, 1000);


// Task 8

const date = new Date();

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
