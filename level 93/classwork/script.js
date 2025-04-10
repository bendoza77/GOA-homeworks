// // Task 1

// const product = document.getElementById("product");

// const getProduct = async () => {
//     const response = await fetch("https://fakestoreapi.com/products/2");
//     const result = await response.json();

//     product.innerHTML = [`<h1>The title: ${result.title}</h1>`, `<p>Price: ${result.price}</p>`, `<p>Description: ${result.description}</p>`, `<img src="${result.image}" width="200px">`];

// }

// getProduct()

// // Task 2


// const wholeProduct = document.getElementById("wholeProduct");

// const getWholeProduct = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const result = await response.json();

//     for(const i of result){
//         wholeProduct.innerHTML += [`<h1>The title: ${i.title}</h1>`, `<p>Price: ${i.price}</p>`, `<p>Description: ${i.description}</p>`, `<img src="${i.image}" width="200px">`];
//     }
// }

// getWholeProduct()


// Task 2

    // arrow function

const firstExample = (number) => {
    let res = [];
    for(const i of number){
        res.push(i * 2);
    }

    return res;
}

console.log(firstExample([0,1,2,3,4,5,6,7,8,9]))

const secondExample = (string) => {
    let res = "";
    for(let i = 0; i<string.length; i++){
        if(i % 2 === 0){
            res += string[i];
        }
    }

    return res;
}

console.log(secondExample("hello world"));


const thirdExample = (arr) => {
    return arr.filter(x => x % 2 === 1);
}

console.log(thirdExample([0,1,2,3,4,5,6,7,8,9]));


// Template literals

    // 1
const myName = "gabriel";
console.log(`Hello my name is ${myName}`);

    // 2

const myLastName = "jobava";
console.log(`Hello my last name is ${myLastName}`);

    // 3

const myAge = 15;
console.log(`Hello i am ${myAge} years old`);


// Shorthand property names

    // 1
const model = "bugati";
const year = 2020;
const color = "blue";

const car = {
    model,
    year,
    color
}

console.log(car)

    // 2

const userName = "gabriel";
const lastName = "jobava";
const isStudent = true;

const secondObj = {
    userName,
    lastName,
    isStudent
}

console.log(secondObj);

    // 3

const weight = 250;
const height = 120;
const speed = "150mp/h";

const thirdObj = {
    weight,
    height,
    speed
}

console.log(thirdObj);


// parameter default

    // 1

function greet(name="gabriel"){
    return `Hello ${name}`;
}

console.log(greet);

    // 2

function plus(a, b=10){
    return a + b;
}

console.log(plus(90));

    // 3

function minus(a, b=50){
    return a - b;
}

console.log(minus(90));


// rest operator

    // 1

function odd(...arr){
    return arr.filter(x => x % 2 === 1);
}

console.log(odd(0,1,2,3,4,5,6,7,8,9));

    // 2

function even(...arr){
    return arr.filter(x => x % 2 === 0);
}

console.log(even(0,1,2,3,4,5,6,7,8,9));

    // 3

function mult(...arr){
    let mult1 = 1;
    for(const i of arr){
        mult1 *= i;
    }

    return mult1
}

console.log(mult(1,2,3,4,5,6,7,8,9));


// spread operator

    // 1

function onlyOdd(arr){
    return arr.filter(x => x % 2 === 1);
}

const number = [10,11,12,13,14,15,16,17,18,19,20];
console.log(onlyOdd([0,1,2,3,4,5,6,7,8,9,...number]));


    // 2

function onlyEven(arr){
    return arr.filter(x => x % 2 === 0);
}
const numbers = [10,11,12,13,14,15,16,17,18,19,20];
console.log(onlyEven([0,1,2,3,4,5,6,7,8,9, ...numbers]));


    // 3

function sumNumbers(...arr){
    let count = 0
    for(const i of arr){
        count += i;
    }

    return count;
}

console.log(sumNumbers(0,1,2,3,4,5,6,7,8,9,...number));