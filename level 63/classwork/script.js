// Task 1

const car = {
    brand:"bugati",
    model:"cherone",
    color:"blue",
    year:"2020",
    chracked:false
}

const motocyrcle = {
    brand:"BMW",
    model:"R23",
    color:"brown",
    year:"1990",
    chracked:false
}

const animal = {
    name:"dogt",
    age:"10",
    isBite:"false",
    frednly:"true"
}


// Task 2

function Car(brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

firstCar = new Car("Ferrari", "Roma", 2020);
secondCar = new Car("Lamborghini", "Huracane", 2014);
thirdCar = new Car("Bugati", "Veyron", 2019);

console.log(firstCar.brand)
console.log(secondCar.brand)
console.log(thirdCar.brand)


// Task 3

function Person(name,lastNAME,age){
    this.name = name;
    this.age = age;
    this.lastNAME = lastNAME;
    this.study = function(){
        console.log(`${this.name} is studing`);
    }
}


firstPerson = new Person("gabriel", "jobava", 15);
secondPerson = new Person("luka", "jobava", 16);
thirdPerson = new Person("nika", "jobava", 18);

console.log(firstPerson.name)
console.log(secondPerson.name)
console.log(thirdPerson.name)
firstPerson.study()




// Task 4

function Animal(name,age,isBite){
    this.name = name;
    this.age = age;
    this.isBite = isBite;
    this.checke = function(){
        console.log(`${this.name} does not bite`);
    }
}

firstAnimal = new Animal("Dog", 9, false);
secondAnimal = new Animal("Cat", 7, true);
thirdAnimal = new Animal("Rabbit", 5, false);

console.log(firstAnimal.name)
console.log(secondAnimal.name)
console.log(thirdAnimal.name)
firstAnimal.checke()


// Task 5

// Constructor functions are used to create multiple objects and help us work with them.
