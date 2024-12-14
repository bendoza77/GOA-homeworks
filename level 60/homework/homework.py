# Task 4

class  Motorcycle:

    count = 0
     
    def __init__(self,brand: str,model: str,color: str,year: int, work):
        self.brand = brand
        self.model = model
        self.color = color
        self.year = year

        if work == True:
            Motorcycle.count += 1
            print(f"{self.model} working")
        else:
            print(f"{self.model} not Working")


moto1 = Motorcycle(brand="aprillia", model="Hero Xtreme 125R", color="green", year=2000, work=False)
moto2 = Motorcycle(brand="Ducati", model="Splendor", color="red", year=1980, work=True)
moto3 = Motorcycle(brand="Benelli", model="Royal Enfield Classic", color="black", year=1995, work=True)
moto4 = Motorcycle(brand="KTM", model="Hero Xtreme 125R", color="dark green", year=2001, work=False)
moto5 = Motorcycle(brand="BWM", model="Yamaha MT-15", color="dark red", year=2020, work=True)
moto6 = Motorcycle(brand="Kawasaki", model="Kawasaki Ninja", color="white", year=2005, work=False)
moto7 = Motorcycle(brand="Honda", model="Honda SP 125", color="brown", year=2004, work=True)
moto8 = Motorcycle(brand="Harley Davidson", model="TVS Raider 125", color="yellow", year=2016, work=True)


print(Motorcycle.count)


# Task 5

class Animal:

    def __init__(self, name: str,age: int):
        self.name = name
        self.age = age

class Eagl(Animal):
    def fly(self):
        print(f"{self.name} if fling")


class Bear(Animal):
    def run(self):
        print(f"{self.name} is runing")

class Fish(Animal):
    def swim(self):
        print(f"{self.name} is swiming")

eagl = Eagl(name="white head eagl", age=9)
bear = Bear(name="bobi", age=12)
fish = Fish(name="nemo", age=7)

eagl.fly()
bear.run()
fish.swim()