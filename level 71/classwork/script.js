// Task 1

const cube = document.getElementById("cube");

let x = 0;
let y = 0;

const moveRigth = setInterval(function(){

    x++
    cube.style.left = `${x}px`

    if (x === 609){
        clearInterval(moveRigth)

        const moveBottom = setInterval(function(){
            y++
            cube.style.top = `${y}px`
            if (y === 609){
                clearInterval(moveBottom)

                const moveLeft = setInterval(function(){
                    x--
                    cube.style.left = `${x}px`

                    if(x === 8){
                        clearInterval(moveLeft)
                        const moveUp = setInterval(function(){
                            y--
                            cube.style.top = `${y}px`

                            if (y === 8){
                                clearInterval(moveUp)
                            }
                        }, 10)
                    }
                },10)
            }
        },10)
    }
}, 10)



// Task 2

const cube1 = document.getElementById("cube1");

let x1 = 0;
let y1 = 0;

const moveBootom = setInterval(function(){

    y1--
    cube1.style.bottom = `${y1}px`

    if(y1 === -715){
        clearInterval(moveBootom)

        const moveRighte = setInterval(function(){
            x1++
            cube1.style.left = `${x1}px`
            
            if(x1 === 609){
                clearInterval(moveRighte)
                const moveUpe = setInterval(function(){
                    y1++
                    cube1.style.bottom = `${y1}px`
                    if(y1 === -120){
                        clearInterval(moveUpe)
                        const moveLetfe = setInterval(function(){
                            x1--
                            cube1.style.left = `${x1}px`
                            if (x1 == 8){
                                clearInterval(moveLetfe)
                            }
                        },10)
                    }
                }, 10)
            }
        }, 10)
    }
   

},10)