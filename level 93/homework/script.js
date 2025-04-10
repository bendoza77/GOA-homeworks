// Ternaries

    // 1

const isStudent = true;
console.log(isStudent ? "You are student" : "Your are not a student");

    // 2

const age = 15;
console.log(age >= 18 ? "Your are adult" : "Your are kid");

    // 3

const speed = 50;
console.log(speed > 100 ? "You are fast" : "You are low");


// filter

    // 1

const array = [0,1,2,3,4,5,6,7,8,9];
console.log(array.filter(x => x % 2 === 1));

    // 2

const secondArray = [0,1,2,3,4,5,6,7,8,9];
console.log(secondArray.filter(x => x % 2 === 0));

    // 3

const thirdArray = [0,1,2,3,4,5,6,7,8,9];
console.log(thirdArray.filter(x => x % 2 === 0 && x > 5));


// map

    // 1

const arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.map(x => x * 2));

    // 2

const secondArr = [0,1,2,3,4,5,6,7,8,9];
console.log(secondArr.map(x => x + 2));

    // 3

const thirdArr = [0,1,2,3,4,5,6,7,8,9];
console.log(thirdArr.map(x => (x + 10) / 2));


// Nullish coalescing operator

    // 1

console.log(null || "hello world");

    // 2

console.log(250 * 12 || undefined);

    // 3

null || undefined || console.log("hello world")


// Promise

    // 1

const firstPromise = new Promise((resolve, reject) => {
    const age = 20;
    if(age >= 18){
        resolve("Your are adult");
    } else{
        reject("You are kid");
    }
})

firstPromise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

    // 2

function secondPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("yes");
        }, 1000);
    })
}

secondPromise().then((yes) => {
    console.log(yes);
}).catch((err) => {
    console.log(err);
})


    // 3

const thirdpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("no");
    }, 2000)
});

thirdpromise.then((yes) => {
    console.log(yes);
}).catch((err) => {
    console.log(err);
})


// async/await

    // 1

async function firstExample(){
    try{
        let result = await secondPromise();
        console.log(`${result}`);
    }
    catch(err){
        console.log(err);
        console.log("Error");
    }
}

firstExample();


    // 2

function promise(){
    return new Promise((resolve, reject) => {
        let galsses = 16;
        if(galsses > 0){
            resolve(`we only have ${galsses} glasses`);
        }else{
            reject("we dont have glasses");
        }
    })
}


async function secondExample(){
    try{
        let result = await promise();
        console.log(result)
    }
    catch(err){
        console.log(err);
        console.log("error");
    }
}

secondExample();

    // 3

function secondPromise(){
    return new Promise((resolve, reject) => {
        let galsses = 0;
        if(galsses > 0){
            resolve(`we only have ${galsses} glasses`);
        }else{
            reject("we dont have glasses");
        }
    })
};

async function thirdExample(){
    try{
        let result = await secondPromise();
        console.log(result);
    } 
    catch(err){
        console.log(err);
        console.log("Error");
    }
}
    