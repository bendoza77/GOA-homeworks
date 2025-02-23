// Task 1

class Car{
    constructor(model, brand, isWork, speed){
        this.model = model;
        this.brand = brand;
        this._isWork = isWork;
        this.speed = speed;
    }

    get findIfCarIsWorking(){
        if(this.isWork === true){
            return `Yes the ${this,brand} is working`
        } else{
            return `No the ${this.brand} is not working`
        }
    }

    increaseSpeed(){
        return ++this.speed
    };

}

firstCar = new Car(model="bugati", brand="cheron", findIfCarIsWorking=true, speed=150);
secondCar = new Car(model="mustang", brand="ford",  findIfCarIsWorking=false, speed=120);
thirdCar = new Car(model="lamborginy", model="enco", findIfCarIsWorking=true, speed=100);
fourthCar = new Car(model="bmw", model="gtr2", findIfCarIsWorking=false, speed=110);

console.log(firstCar.model);
console.log(firstCar.brand);
console.log(firstCar.findIfCarIsWorking)
firstCar.increaseSpeed()
firstCar.increaseSpeed()
firstCar.increaseSpeed()
firstCar.increaseSpeed()
console.log(firstCar.speed);



console.log(secondCar.model)
console.log(secondCar.brand)
secondCar.increaseSpeed()
secondCar.increaseSpeed()
secondCar.increaseSpeed()

console.log(secondCar.speed)
console.log(secondCar.findIfCarIsWorking)


console.log(thirdCar.model)
console.log(thirdCar.brand)
thirdCar.increaseSpeed()
thirdCar.increaseSpeed()
thirdCar.increaseSpeed()
thirdCar.increaseSpeed()

console.log(thirdCar.speed);
console.log(thirdCar.findIfCarIsWorking)


console.log(fourthCar.model);
console.log(fourthCar.brand);
fourthCar.increaseSpeed()
fourthCar.increaseSpeed()
fourthCar.increaseSpeed()
fourthCar.increaseSpeed()

console.log(fourthCar.speed)
console.log(fourthCar.findIfCarIsWorking)



// Task 2


class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get peronAge(){
        return this._age
    }
    
    get personName(){
        return this._name
    }
}


firstPerson = new Person(name="Gabriel", age=15);

console.log(firstPerson.peronAge);
console.log(firstPerson.personName);