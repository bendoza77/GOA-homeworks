# Task 1

# The difference between an instance method and a classmethod is that the first parameter of an instance method is always self, 
# while the first parameter of a classmethod is always cls.


# Task 2

# The difference between an instance method and a static method is that in an instance method we write self as a parameter, 
# while in a static method we write whatever we want or don't want to write at all as a parameter. 
# Also, a static method is completely independent of the class.

# Task 3

# The difference between classmethod and staticmethod is that classmethod works with a class and we always 
# write cls as a parameter to it, while staticmethod, 
# unlike classmethod and inheritance method, works completely independently of the class.


# Task 4

    # when classmethod is used.
# The classmethod is used when a function needs access to a class and does not depend on the state of the object.

    # when staticmethod is used

# Static method is used when the method works independently of the class and performs only one specific function.

# Task 5

class Car:
    total_cars = 0

    def __init__(self, model):
        self.model = model
        Car.total_cars += 1

    @classmethod
    def get_total_cars(cls):
        print(f"Total cars: {cls.total_cars}")


car = Car("Ferrari")
car = Car("Ferrari")
car = Car("Ferrari")
car = Car("Ferrari")
car = Car("Ferrari")


car.get_total_cars()



# Taks 6

class Car:

    def __init__(self,model):
        self.model = model

    
    @staticmethod
    def valid(model):
        valid_models = ["ferrair", "mustang", "bugati", "BWM"]
        if model in valid_models:
            print("yes we have this model that you want")
        else:
            print("no we dont have that car")

Car.valid("mustang")