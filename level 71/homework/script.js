// Task 1

// in this line of code  html element and js file beacuse i want to get animation for thi html element.
const cube = document.getElementById("cube");


// This three are values of x and y for move this elemnt (left and rigt) and (up and down).
let x = 0;
let y = 0;
// This is direction value that helps me to change direction and move cube.
let direction = "down"


// in this line of code i left behinde function setInterval to moveCube value beacuse i want that code must be do action every 1msecond.
const moveCube = setInterval(function(){
    // every linese of code when cube touch wall of container code must change direction.
    if (direction === "down"){
        y++
        if (y === 608){ // i equal y beacuse cube with and height is 100 and contaiener with and height is 700 so when i calculate when cube
                        // should touch container wall this number was 608 so while x not equal to 608 cube must keep moving
            direction = "right"
        }
    } else if(direction === "right"){
        x++
        cube.style.left = `${x}px`
        if(x === 608){
            direction = "up"
        }
    } else if(direction === "up"){
        y--
        if(y === 8){
            direction = "left"
        }
    } else if (direction === "left"){
        x--
        cube.style.left = `${x}px`
        if (x === 8){
            clearInterval(moveCube)
        }
    }

    cube.style.top = `${y}px`

}, 10)



// Task 2

const childCube = document.getElementById("childCube");

let x1 = 0;
let y1 = 0;


document.addEventListener("keydown", function(e){

    if(e.key === "s" || e.key === "S"){
        y1 -= 10;
        if(y1 > -716){
            childCube.style.bottom = `${y1}px`
        }
    } else if(e.key === "D" || e.key === "d"){
        x1 += 10
        if (x1 < 616){
            childCube.style.left = `${x1}px`
        }
    } else if(e.key === "a" || e.key === "A"){
        x1 -= 10
        if (x1 > 6){
            childCube.style.left = `${x1}px`
        }
    } else if(e.key === "w" || e.key === "W"){
        y1 += 10
        if(y1 < -100){
            childCube.style.bottom = `${y1}px`
        }
    }
})