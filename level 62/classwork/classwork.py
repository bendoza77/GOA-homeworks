# Task 1

def example_of_args(*data_types):

    return f"This is {data_types[5]}"

print(example_of_args("integer", "string", "boolean", "float", "dictionary", "list", "tuples", "set"))

# Task 2

def example_of_kwargs(**kwargs):

    for key,value in kwargs.items():
        return f"{key}={value}"
    
print(example_of_kwargs(name="gabriel", lastname="jobava"))


# Task 3

    # 1
def parent(func):
    def child(name):
        my_name = func(name)
        capitalize = my_name.capitalize()

        return capitalize
    return child


@parent
def greed(name):
    return f"hello my name is gabriel {name}"

print(greed("gabriel"))

    # 2

    
def greed(name):
    return f"hello my name is gabriel {name}"

def parent(func):
    def child(name):
        my_name = func(name)
        capitalize = my_name.capitalize()

        return capitalize
    return child



@parent
def greed(name):
    return f"hello my name is gabriel {name}"
print(greed("gabriel"))


# Task 4

class Animal:

    def __init__(self,name):
        self.name = name

    def eat(self):
        return f"{self.name} is eating"
    
    def sleep(self):
        return f"{self.name} is sleeping"
    

class Predator(Animal):

    def hunt(self):
        return f"{self.name} is hunting"
    
class Grass_eater(Animal):
    def grass_eater(self):
        return f"{self.name} is eat grass"
    
class Rabit(Grass_eater):
    def hop(self):
        return f"{self.name} is hoping"
    
class Lion(Predator):
    def roar(self):
        return f"{self.name} roar"
    
rabit = Rabit(name="gogi")
lion = Lion(name="king")

print(rabit.hop())
print(lion.hunt())




# Task 5

class Car:

    def __init__(self,color,year,is_cracked):
        self.color = color
        self.year = year
        self._is_cracked = is_cracked

    def checked(self):
        return f"car is cracked"

car1 = Car(color="blue", year=2017, is_cracked=True)

print(car1.checked())



    


# Task 6

class Car:

    def __init__(self,color,year,is_cracked):
        self.color = color
        self.year = year
        self.__is_cracked = is_cracked

    def checked(self):
        return f"car is cracked"

car1 = Car(color="blue", year=2017, is_cracked=True)

print(car1.checked())


