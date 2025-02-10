// Task 1


// We can use the for...of loop on strings, lists, and sets.

    // 1
const listOFNumber = [0,1,2,3,4,5,6,7,8,9];

for (const i of listOFNumber){
    if (i % 2 === 0){
        console.log(i);
    };
};

    // 2


const string = "hello world";
let res = "";


for(const i of string){
    res += i;
};

console.log(res);

    // 3

const setNumber = [0,1,2,3,4,5,6,7,8,9];

for(const i of setNumber){
    console.log(String(i));
};


// Task 2


// We can use the for...in loop on objects.

    // 1
const obj = {a:2, b:1, c:3};

for(const i in obj){
    console.log(i);
};

    // 2

const obj1 = {a:2, b:1, c:3};

for(const i in obj){
    console.log(obj[i]);
};


    // 3

const obj2 = {a:2, b:1, c:3};

for(const i in obj2){
    console.log(obj[i] + 1);
};


// Task 3


    // 1
const function1 = (x) => {
    return x + 1;
};

console.log(function1(10));

    // 2

const function2 = (x) => {
    return `my name is ${x}`;
};

console.log(function2("gabriel"));


// Task 4

const default1 = (num=10) => {
    return num ** 2
}

console.log(default1())


// Task 5

let objet = {
    name: "gabriel",
    height: 169,
    weight: 57,
    upHeight(){
        this.height += 20
    }
};


objet.upHeight()
console.log(objet.height)


// Task 6



let userName = "gabriel";
let age = 15;
let id = "012319391";

const user = {
    [userName]: "luka",
    [age]: "20",
    [`user ${id}`]: "10301031"
}

console.log(user.gabriel)


// Task 7


let object1 = {
    name: "gabriel",
    age: 15,
    height: 169
}

let object2 = {
    name: "gabriel",
    age: "20",
    height: 200
}

console.log(Object.assign({}, object1, object2))