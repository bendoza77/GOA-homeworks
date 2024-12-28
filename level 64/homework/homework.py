# Task 3

# Instance method, classmethod and staticmethod are both very useful in classes. 
# Instance method is a regular method whose first parameter must always be self otherwise 
# it will not be an instance method. Instance method is used to access objects and create them. I
# nstance method allows you to control the class object. classmethod is a method whose first parameter 
# must always be cls This is the difference between instance method and classmethod. classmethod is used when 
# we want the method to work with the class and at the class level. As for staticmethod, this is a method which 
# is completely independent of the class and works independently, we can write the parameters we want to it or we 
# can not write them at all. staticmethod is used when we want the method to work 
# independently of the class and perform a specific function.

# Task 4

class Relocatable:

    count_the_relocatable  = 0

    count_car = 0

    count_motocyrcle = 0
    def __init__(self,model: str,brand: str,color: str,year: int,is_working: bool, hit: bool, what_is_it: str):
        self.model = model
        self.brand = brand
        self.color = color
        self.year = year
        self.isworking = is_working
        self.__hit = hit
        self.what_is_it = what_is_it.lower()
        Relocatable.count_the_relocatable += 1

        if what_is_it == "car":
            Relocatable.count_car += 1
        if what_is_it == "motocyrcle":
            Relocatable.count_motocyrcle += 1

    def go(self):
        return f"{self.model} is going"
    
    def stop(self):
        return f"{self.model} stoped"
    
    @classmethod
    def count_relocatable(cls):
        return f"Total Relocatable is {cls.count_the_relocatable} Total car is {cls.count_car} Total motocyrcle is {cls.count_motocyrcle}."
    
class Car(Relocatable):
    def pip(self):
        return f"{self.model} was piping"
    

    @staticmethod
    def cheke_valid_car_models(model):
        valid_model = ["ferrari", "lamborghiny", "buggati", "mustang", "rolls roice", "BMW"]

        if model in valid_model:
            return f"Yes the {model} that you want we have."
        else:
            return f"No the {model} thta you want we dont have."
    

class Motocyrcle(Relocatable):
    def lifting_wheel(self):
        return f"{self.model} A piece of wheel lifted."
    
    def cheke_valid_motocyrcle_models(model):
        valid_model = ["BWM", "Kawasaki", "Ducati", "Suzuki", "Indian", "Royal Enfield"]

        if model in valid_model:
            return f"Yes the {model} that you want we have."
        else:
            return f"No the {model} thta you want we dont have."
    
first_car = Car(model="cherone", brand="buggati", color="blue", year=2020, is_working=True, hit=True, what_is_it="car")
first_car = Car(model="cherone", brand="buggati", color="blue", year=2020, is_working=True, hit=True, what_is_it="car")
first_car = Car(model="cherone", brand="buggati", color="blue", year=2020, is_working=True, hit=True, what_is_it="car")
first_car = Car(model="cherone", brand="buggati", color="blue", year=2020, is_working=True, hit=True, what_is_it="car")
first_car = Car(model="cherone", brand="buggati", color="blue", year=2020, is_working=True, hit=True, what_is_it="car")
first_car = Car(model="cherone", brand="buggati", color="blue", year=2020, is_working=True, hit=True, what_is_it="car")
first_moto = Motocyrcle(model="R36", brand="ducati", color="green", year=1990, is_working=True, hit=False, what_is_it="motocyrcle")
first_moto = Motocyrcle(model="R36", brand="ducati", color="green", year=1990, is_working=True, hit=False, what_is_it="motocyrcle")
first_moto = Motocyrcle(model="R36", brand="ducati", color="green", year=1990, is_working=True, hit=False, what_is_it="motocyrcle")
first_moto = Motocyrcle(model="R36", brand="ducati", color="green", year=1990, is_working=True, hit=False, what_is_it="motocyrcle")
first_moto = Motocyrcle(model="R36", brand="ducati", color="green", year=1990, is_working=True, hit=False, what_is_it="motocyrcle")
first_moto = Motocyrcle(model="R36", brand="ducati", color="green", year=1990, is_working=True, hit=False, what_is_it="motocyrcle")
first_moto = Motocyrcle(model="R36", brand="ducati", color="green", year=1990, is_working=True, hit=False, what_is_it="motocyrcle")



print(Relocatable.count_relocatable())
print(Car.cheke_valid_car_models("buggati"))
print(first_car.pip())
print(first_moto.lifting_wheel())