// Task 1

    // list destructuring

    // 1

const listNumber = [0,1,2,3,4,5,6,7,8,9];

const [one, two, three, four, five, six,  seven, eight, nine] = listNumber;

console.log(seven);


    // 2


const listString = ["gabriel", "luka", "nika", "dato", "gio"];

const [firstName, secondName, thirdName, fourthName, fivthName] = listString;

console.log(fivthName);


    // 3


const listOfAges = [20,30,40,50,60,70];

const [luka, nika, dato, gio, beqa, gabriel] = listOfAges;

console.log(nika);



    // object destructuring

    // 1

const object = {name: "gabriel", lastName: "jobava", age: 15};

const {name: myName, lastName: myLastName, age: myAge} = object;

console.log(myName);


    // 2


const object1 = {firstCar: "ferrari", secondCar: "bugati"};

const {firstCar: first, secondCar: second} = object1;

console.log(first)



    // 3

const object2 = {firstMotCyrcle: "bmw", secondMotoCyrcle: "ninja"};

const {firstMotCyrcle: firstModel, secondMotoCyrcle: seconModel} = object2;

console.log(firstModel);



// Task 2

const restOperator = (...numbers) =>{
    let count = 0;
    for(const i of numbers){
        if(i % 2 === 0){
            count ++
        }
    }

    return count
}

console.log(restOperator(0,1,2,3,4,5,6,7,8,9))


// Task 3

const spreadOpertor = (arr) =>{
    let count = 0

    for(const i of arr){
        if(i % 2 === 1){
            count += i
        }
    }

    return count
}

let newArg = [11,12,13,14,15,16,18,19,20];

console.log(spreadOpertor([0,1,2,3,4,5,6,7,8,9, ...newArg]));



// Task 4

    // rest operator

// The rest operator is similar in writing style and is similar to the spread operator. But the rest operator, 
// unlike the spread operator, is written as a parameter and there must be three dots after it, otherwise it will not work. 
// When we use the rest operator as a function parameter, we are not limited by the number of arguments and we can write as many 
// as we want, but if we do not write it as a list, it will not throw an error because there is only one parameter, but the rest 
// operator perceives the 
// arguments as a list and normally performs the actions that are written in the function.


    // spread operator

// The spread operator is written in the same style as the rest operator. But the spread operator, 
// unlike the rest operator, is written as an argument and also, as in the case of the rest operator, 
// three dots are written behind it. In other cases, it will not work. For example, when we have a parameter 
// given as a list and we write another element as an argument outside the list, the value of which is, for example, 
// another list, it will not throw an error because the parameter is one and the argument is two. But if the variable that 
// is newly added and no action is written on it in the function, if it has three dots written next to it, then this means that 
// it is a spread operator and 
// this list value will be added to the list on which the actions are written.