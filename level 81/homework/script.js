// Task 2
    
    // 1

class Car{
    constructor(model, brand, color, year){
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = 150;
    }

    increaseSpeed(){
        return this.speed++
    }
}

const car = new Car(model="bugati", brand="cheron", color="blue", year=2020);

car.increaseSpeed()
car.increaseSpeed()
car.increaseSpeed()

console.log(car.speed);
console.log(car.model);
console.log(car.brand);
console.log(car.color);
console.log(car.year);



    // 2

class MotoCyrcle extends Car{
    constructor(model,brand,color,year){
        super(model, brand, color, year)
        this.speed = 200;
    }
}


const motoCyrcle = new MotoCyrcle(model="SUZUKI", model="Suzuki Hayabusa", color="brown", year=2014);

console.log(motoCyrcle.model);
console.log(motoCyrcle.brand);
console.log(motoCyrcle.color);
console.log(motoCyrcle.year);

motoCyrcle.increaseSpeed()
motoCyrcle.increaseSpeed()
motoCyrcle.increaseSpeed()
motoCyrcle.increaseSpeed()
motoCyrcle.increaseSpeed()
motoCyrcle.increaseSpeed()
motoCyrcle.increaseSpeed()

console.log(motoCyrcle.speed);


    // 3

class HeliCopter extends Car{
    constructor(model, brand, color, year){
        super(model,brand, color, year)
        this.speed = 500;
    }
}

const heliCopter = new HeliCopter(model="Sikorsky H-19", brand="Sikorsky Aircraft", color="white", year=2017);

heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()
heliCopter.increaseSpeed()

console.log(heliCopter.brand);
console.log(heliCopter.speed);
console.log(heliCopter.color)
console.log(heliCopter.year)



// Task 3

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        return `${this.name} is sleeping`
    }

    eat(){
        return `${this.name} is eating`
    }
}


class Predator extends Animal{
    constructor(name, age){
        super(name, age)
    }

    hunt(){
        return `${this.name} is hunting`
    }
}

class Harmless extends Animal{
    constructor(name, age){
        super(name, age);
    }

    eatGrass(){
        return `${this.name} eating grass`
    }
}


class Bear extends Predator{
    constructor(name, age){
        super(name, age)
    }
}

class Rabbit extends Harmless{
    constructor(name, age){
        super(name, age);
    }
}

class Fish extends Harmless{
    constructor(name, age){
        super(name, age);
    }

    swim(){
        return `${this.name} is swiming`
    }
}

const bear = new Bear(name="buba", age=25);
const rabbit = new Rabbit(name="lilu", age=8);
const fish = new Fish(name="kiko", age=5);


console.log(bear.sleep())
console.log(bear.eat())
console.log(bear.hunt())

console.log(rabbit.eat())
console.log(rabbit.sleep())
console.log(rabbit.eatGrass())


console.log(fish.swim())
console.log(fish.eat())
console.log(fish.sleep())
console.log(fish.eatGrass())



// Task 4

    // inheritance

// Inheritance is a way and method to relate one class to another class and pass the constructor and methods of the first 
// class to the second class using extensions and the super function.

    // super() function

// The super function is used to call the constructor and methods of the parent class. 
// When we write a super function in a child class, it inherits absolutely everything from its constructor 
// to all its methods from the parent class. 
// In other words, the super function reads and writes the information and methods of the parent class.



// Task 5

// Classes are a key part of object-oriented programming (OOP). We use classes to create unlimited objects, 
// to write safer and better-structured code. For example, when we write a class, it binds information and methods together, 
// and they are not used outside the class, which makes the code safer. The class construct improves the class structure and allows 
// us to create blueprints. We also use classes because after creating a class, we can use it as many times as we want. 
// We can also inherit the information and 
// methods of the first class to another class, which saves us from having to rewrite the code.