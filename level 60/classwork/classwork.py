# Task 1

class Car:

    def __init__(self, brand: str, model: str, color: str, year: int):
        self.brand = brand
        self.model = model
        self.color = color
        self.year = year

    def go(self):
        print(f"{self.model} is going")

    def stop(self):
        print(f"{self.model} stoped")

first_car = Car(brand="ferrari", model="Ferrari SF90 Stradale", color="red", year=1990)
second_car = Car(brand="bugati", model="cheron", color="blue", year=2020)
third_car = Car(brand="lamborghini", model="aventador", color="white", year=2021)

print(first_car.brand)
print(first_car.model)
print(first_car.color)
print(first_car.year)
print(first_car.go())
print(first_car.stop())

print(second_car.brand)
print(second_car.model)
print(second_car.color)
print(second_car.year)
print(second_car.go())
print(second_car.stop())


print(third_car.brand)
print(third_car.model)
print(third_car.color)
print(third_car.year)
print(third_car.go())
print(third_car.stop())


# Task 2

class Person:

    count = 0

    def __init__(self, name: str, lastname: str, age: int):
        self.name = name
        self.lastname = lastname
        self.age = age
        Person.count += 1

    def eat(self):
        print(f"{self.name} eating food")

    def study(self):
        print(f"{self.name} styding")

first_person = Person(name="gabriel", lastname="jobava", age=15)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)
second_person = Person(name="luka", lastname="jobava", age=16)

print(first_person.name)
print(first_person.lastname)
print(first_person.age)
print(first_person.eat())
print(first_person.study())
print(Person.count)



# Task 3

#  A dunder method is a method that is written with two underscores, for example __init__.

# Task 4

# Instance variables are variables defined by each object of a class that store data that is specific to that particular object.

# Task 5

# Class variables are variables that are defined at the class level and do not change across specific objects.


# Task 6

# A blueprint is an outline used to depict specific plans, structures,