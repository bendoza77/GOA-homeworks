// Task 1

// A promise is a JavaScript object used to manage asynchronous operations. Its result can be positive or negative. 
// Its initial state is pending, and then it can be either successful or failed.

// Task 2

const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello world");
    }, 2000)
})


resolvePromise.then((result) => {
    console.log(result)
})


// Task 3

const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello world");  
    }, 2000);
})


rejectPromise.then((result) => {
    console.log(result)
})


// Task 4

const resolveOrRejectPromise = new Promise((resolve, reject) => {
    let age = 20
    setTimeout(() => {
        if(age < 18){
            reject("You cant enter to this site");
        } else{
            resolve("You cant enter to this site");
        }
    }, 2000)
})


resolveOrRejectPromise.then((saccseful) => {
    console.log(saccseful);
}).catch((failed) =>{
    console.log(failed);
})