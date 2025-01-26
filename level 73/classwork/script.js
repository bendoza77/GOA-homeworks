// Task 1

// Hoisting is a mechanism that ensures that a function and a variable can be used in advance. 
// There are function hoisting and const hoisting. Function hoisting helps us call a function in advance, 
// that is, before it is created. This happens because the computer knows in advance that this function was 
// created using the hoisting mechanism. However, there is also const hoisting, which we cannot use in advance 
// because it will throw an error. Regarding const hoisting, 
// we are required to first declare the variable and then use the created variable.


// Task 2

// Bubbling and capturing are ways of spreading events in the HTML dom. For example, when we have two 
// elements and we click on the first element, we need to determine which event should occur first. For example, 
// in bubbling, the innermost element is triggered first, followed by the outermost element, 
// while in capturing, the outermost element is triggered first, followed by the innermost elements.


// Task 3

const next = document.getElementById("next");
const previus = document.getElementById("previus");
const img = document.getElementById("img");

let i = 0;

const images = ["./images/random-green-hd-wallpaper-preview.jpg", "./images/random-hd-wallpaper-preview.jpg", "./images/random-image.jpg", "./images/simple-background-abstract-slick.jpg"]

next.addEventListener("click", function(){
    i++;
    if(i > 3){
        i = 0;
    }
    img.src = images[i]
})

previus.addEventListener("click", function(){
    i--
    if(i < 0){
        i = 3
    }
    img.src = images[i]
})