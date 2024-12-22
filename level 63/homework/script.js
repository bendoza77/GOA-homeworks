// Task 3

// The this keyword refers to the object that is currently running and is accessible in the constructor or class.

// Task 4

    // costructore of compiuter

function Compiuter(model,color,year,isWorking){
    this.model = model;
    this.color = color;
    this.year = year;
    this.isWorking = isWorking;
    this.checkedCompiuter = function(){
        console.log(`${this.model} is working.`)
    }
}

compiuter = new Compiuter("Apple iMac M4", "white", 2024, true);

console.log(compiuter.model);
console.log(compiuter.color);
console.log(compiuter.year);
console.log(compiuter.isWorking);
compiuter.checkedCompiuter();

    // costructore of keyboard

function Keyboard(model,color,year,isWorking){
    this.model = model;
    this.color = color;
    this.year = year;
    this.isWorking = isWorking;
    this.checkedKeyboard = function(){
        console.log(`${this.model} is working and have good and smooth sounda and its used for work also for gaming.`);
    }
}

keyboard = new Keyboard("Keychron Q5 Max [Q1 Max, Q2 Max, etc.]", "orange and white", 2024, true);

console.log(keyboard.model);
console.log(keyboard.color);
console.log(keyboard.year);
console.log(keyboard.isWorking);
keyboard.checkedKeyboard();


    // constructore of bus

function Bus(color,year,height,width,isWorking){
    this.color = color;
    this.year = year;
    this.height = height;
    this.width = width;
    this.isWorking = isWorking;
    this.go = function(){
        console.log("bus is going");
    }
}

bus = new Bus("yellow", "2018", "40m", "150m", true);

console.log(bus.color);
console.log(bus.year);
console.log(bus.height);
console.log(bus.width);
console.log(bus.isWorking);
bus.go();


