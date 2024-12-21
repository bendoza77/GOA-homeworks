# Task 2

# The difference between _prefix_ and __prefixs is that both are used to hide class attributes and methods, 
# but _prefix protects the attributes of the class, but __prefixs already make it private, which means that we 
# cannot call the class attribute outside the class.
#  __prefix is ​​used when hiding some data is necessary, important and mandatory.


# Task 3

    # level 1 data hiding example

class Car:

    def __init__(self,brand: str,model: str,color: str,year: int,is_working: bool):
        self.brand =  brand
        self.model = model
        self.color = color
        self.year = year
        self.__is_working = is_working

    def _is_car_works(self):
        return f"yes the {self.model} is working"
    

car = Car(brand="buggati", model="cherone", color="blue", year=2020, is_working=True)

print(car._is_car_works())


    # level 2 of data hideing

class Motocyrcle:

    def __init__(self,brand: str,model: str,color: str,year: int,is_working: bool):
        self.brand = brand
        self.model = model
        self.color = color
        self.year = year
        self.__is_working = is_working

    # def __is_moto_works(self):
    #     return f"no the {self.model} is not working"

    def is_moto_works(self):
       return f"no the {self.model} is not working"


    
motocyrcle = Motocyrcle(brand="BWM", model="R32", color="brown", year=2015, is_working=False)

print(motocyrcle.is_moto_works())


# Task 4

class Animal:

    def __init__(self,name):
        self.name = name

    def eat(self):
        return f"{self.name} is eating"
    
    def sleep(self):
        return f"{self.name} is eating"
    
class Prey(Animal):
    def eat_grass(self):
        return f"{self.name} eating grass"
    
class Predator(Animal):
    def hunt(self):
        return f"{self.name} is hunting"
    
class Rabbit(Prey):
    def hop(self):
        return f"{self.name} is hopping"
    
class Hawk(Predator):
    def kow(self):
        return f"{self.name} is kow"
    
rabbit = Rabbit(name="buba")
hawk = Hawk(name="white head")

print(rabbit.eat_grass())
print(hawk.hunt())
