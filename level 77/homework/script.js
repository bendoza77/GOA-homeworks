// Task 2

    // 1

    // The for..of loop can handle the many data types such as: string, list, set, tuple.

let res = "";
const string = "gabriel";

for(const i of string){
    if(string.indexOf(i) % 2 === 0){
        res += i
    }
};

console.log(res)


    // 2

let countOdd = 0;
let countEven = 0;


const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for(const i of numbers){
    if(Number(i) % 2 === 1){
        countOdd ++
    } else{
        countEven ++
    }
};

console.log({odd: countOdd, even:countEven});

    // 3

const numberSet = new Set([0,1,2,3,4,5,6,7,8,9,9]);

let count = 0;

for(const i of numberSet){
    count ++;
};

console.log(`The length of set is ${count}`);


// Task 3

    // 1

const obj = {a:1, b:2, c:3};

let dict = {};

for(const i in obj){
    dict[i] = 0;
};



for(const [key,value] of Object.entries(obj)){
    dict[key] = value + 1;
};

console.log(dict);

    // 2

const obj1 = {name1: "gabriel", name2: "luka", name3: "nika"};

let result = {}

for(const i in obj1){
    result[i] = i.length;
};

console.log(result);


    // 3

const obj2 = {"hello": 5, "world": 5, "name": 4};

let lenght = [];

for(const i in obj2){;
    for(const j of Object.values(obj2)){
        if(j >= 5){
            lenght.push(i);
        };
    };
};

lenght = new Set(lenght);

console.log(Array.from(lenght));


// Task 4

    // 1

const arrowFunction1 = (array) =>{
    let = res =[];
    for(const i of array){
        res.push(i.length);
    };

    return res;
};

console.log(arrowFunction1(["hello", "world", "name", "last name"]));



    // 2

const arrowFunction2 = (arry) =>{

    let res = [];

    for(const i of arry){
        res.push("hello " + i);
    };

    return res;
}

console.log(arrowFunction2(["gabriel", "luka", "nika", "gio", "dato"]));


    // 3

const arrowFuntion3 = (dict) => {
    let res = {};
    
    for(const [key, value] of Object.entries(dict)){
        res[key] = value.length;
    };

    return res;
}

console.log(arrowFuntion3({first: "gabriel", second: "luka", third: "nika"}));


// Task 5

    // 1

const car = {
    speed: 100,
    weight: 170,
    upSpeed(){
        this.speed += 10;
    }
};

car.upSpeed();
car.upSpeed();
car.upSpeed();
car.upSpeed();

console.log(car.speed);


    // 2

const motocyrcle = {
    speed: 150,
    weigth: 80,
    upWeight(){
        this.weigth += 5;
    }
}

motocyrcle.upWeight();
motocyrcle.upWeight();
motocyrcle.upWeight();

console.log(motocyrcle.weigth);


    // 3

const helicopter = {
    speed: 720,
    weigth: 500,
    height: 350,
    upSpeed(){
        this.speed += 150;
    }
}

helicopter.upSpeed()
helicopter.upSpeed()
helicopter.upSpeed()
helicopter.upSpeed()
helicopter.upSpeed()

console.log(helicopter.speed);


// Task 6

    // 1


let userName = "name";
let number = "592076515";
let id = "01952003032";

const name1 = {
    [userName]: "nika",
    [`user_${id}`]: number
}

console.log(name1.user_01952003032);
console.log(name1.name);


    // 2

let weight = "weight";
let myHeight = "height";
let age = "age";


const name2 = {
    [weight]: "57",
    [myHeight]: "169",
    [age]: "15"
}

console.log(name2.weight);
console.log(name2.height);
console.log(name2.age);

    // 3

let speed = 170;

const name3 = {
    [`mySpeed_${speed}`]: 200
}

console.log(name3.mySpeed_170)


// Task 7

    // 1


const first = {
    name: "gabriel",
    lastName: "jobava",
    age: 15
}

const second = {
    name: "luka",
    lastName: "jobava",
    age: 16
}

console.log(Object.assign({}, first, second))

    
    // 2

console.log(Object.assign({}, second, first))


    // 3

console.log(Object.assign({hieght: 169}, first, second));