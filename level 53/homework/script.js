// Task 2

function numberSum(numberOne, numberTwo){
    return numberOne + numberTwo
}

console.log(numberSum(10,10))

// Task 3

function concatenative(stringOne, stringTwo){
    return stringOne + stringTwo
}
console.log(concatenative("hello ", "world"))

// Task 4

const myImg = document.getElementById("myImg");
const myBtn = document.getElementById("myBtn");

function changeSize(){
    myImg.style.width = "550px"
}

myBtn.onclick = changeSize;

// Task 5

const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myButton");

function changeImage(){
    myImage.src = "./image/random.jpg"
}

myButton.onclick = changeImage;

