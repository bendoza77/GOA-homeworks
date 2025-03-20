// Task 1

const greet = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Hello, Promise!");
    }, 100);
});


greet.then((result) => {
    console.log(result);
});


// Task 2

const wrong = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 100);
});

wrong.catch((result) => {
    console.log(result);
});


// Task 3


const late = new Promise((resolve, reejct) => {
    setTimeout(() => {
        resolve("2 seconds have passed")
    }, 2000);
});

late.then((result) => {
    console.log(result);
})


// Task 4

const random = new Promise((resolve, reject) => {
    let boolList = [true, false];

    if (boolList[Math.floor(Math.random() * boolList.length)] == true){
        resolve("Success!");
    } else{
        reject("Failed!");
    }
})


random.then((yes) => {
    console.log(yes);
}).catch((no) => {
    console.log(no);
})

// Task 5

const number = Promise.resolve(2)

number.then((res) => {
    console.log(res)
    return res * 2
}).then((res) => {
    console.log(res);
    return res * 2
}).then((res) => {
    console.log(res);
    return res;
})

// Task 6

const time = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1000);
});


time.then((time) => {
    console.log(time)
})

