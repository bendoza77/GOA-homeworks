// Task 1

let array = ["html", "css", "javascript", "phyton", " c++"];

console.log(array.slice(3));
console.log(array.slice(-3,-1));
console.log(array.slice(1,3));

// Task 2

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const second = date.getSeconds();

console.log(`${year}/${month}/${day}/${hour}/${second}`);


// Task 3

function passwordGenerator(length){
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+=<>,.?/{}[]";
    let result = "";

    for(let i = 0; i < length; i ++){
       const index = Math.floor(Math.random() * length);
       result += letters[index];
    }

    return result
}

console.log(passwordGenerator(25));