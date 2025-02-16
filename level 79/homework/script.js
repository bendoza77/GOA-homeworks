// Task 2

let first = "hello";
let second = "world";

[first, second] = [second,first]

console.log(first)


// Task 3

    // 1

const restExample = (...string) => {
    let res = [];
    for(const i of string){
        if(i.length >= 5){
            res.push(i);
        }
    }

    return res;
}

console.log(restExample("hello", "world", "luka", "my", "name", "is", "gabriel"))


    // 2


const restExample1 = (...number) => {
    let res = [];

    for(const i of number){
        if(i % 2 === 0){
            res.push(i);
        }
    }
    
    return res
}

console.log(restExample1(0,1,2,3,4,5,6,7,8,9))


    // 3

const restExample2 = (...string) => {
    let res = [];
    for(const i of string){
        for(let j = 0; j<i.length; j++){
            if(j % 2 === 0){
                res.push(i[j]);
            }
            }
        }

    return res
}


console.log(restExample2("hello"))


// Task 4


    // 1

const spreadExample = (array) => {
    let res = [];

    for(const i of array){
        if(i.length >= 4){
            res.push(i);
        }
    }

    return res;
}

let newString = ["gabriel"];

console.log(spreadExample(["hello", "world", ...newString]))


    // 2

const spreadExample1 = (numbers) =>{
    let res = []

    for(const i of numbers){
        if(String(i).length > 1){
            res.push(i)
        }
    }

    return res;
}

console.log(spreadExample1([0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20, ...[21,22,23,24,25,26,27,28,29,30]]))


    // 3

const spreadExample2 = (arr) => {
    let res = [];
    for(const i of arr){
        if(typeof i === "string"){
            res.push(i);
        }
    }

    return res;

}


let listOfString = ["1", "2", "3", "4", "5", 6, 7, 8, 9];
console.log(spreadExample2(["hello", 1,2,3,"world", ...listOfString]));