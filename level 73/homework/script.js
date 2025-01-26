// Task 3

    // bubbling
const container = document.getElementById("container");
const child = document.getElementById("child");

container.addEventListener("click", function(){
    console.log("container");
}, false)

child.addEventListener("click", function(){
    console.log("child")
}, true)



    // Capturing


const container1 = document.getElementById("container1");
const child1 = document.getElementById("child1");

container1.addEventListener("click", function(){
    console.log("container")
}, true)

child1.addEventListener("click", function(){
    console.log("child")
}, false)


// Task 4

const images = ["./images/daft-punk-random-access-memories-music-wallpaper-preview.jpg", "./images/daft-punk-rom-access-memories-wallpaper-preview.jpg", "./images/random-green-hd-wallpaper-preview.jpg", "./images/random-hd-wallpaper-preview.jpg", "./images/random-image.avif"]
const next = document.getElementById("next");
const previus = document.getElementById("previus");
const img = document.getElementById("img");
let i = 0;

next.addEventListener("click", function(){
    i++
    if(i > 4){
        i = 0
    }
    img.src = images[i]
})

previus.addEventListener("click", function(){
    i--
    if(i < 0){
        i = 4
    }
    img.src = images[i]
})

// Task 5

const images1 = ["./images/daft-punk-random-access-memories-music-wallpaper-preview.jpg", "./images/daft-punk-rom-access-memories-wallpaper-preview.jpg", "./images/random-green-hd-wallpaper-preview.jpg", "./images/random-hd-wallpaper-preview.jpg", "./images/random-image.avif", "./images/roll-the-dice-craps-board-game-points.jpg"]
let i1 = 0;
const next1 = document.getElementById("next1");
const previus1 = document.getElementById("previus1");
const img1 = document.getElementById("img1");

next1.addEventListener("click", function(){
    i++
    if(i > 5){
        i = 0
    }
    img1.src = images1[i]
})

previus1.addEventListener("click", function(){
    i--
    if(i < 0){
        i = 5
    }
    img1.src = images1[i]
})