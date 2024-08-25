# Task 1

    # 1

brends = {
    "car": "buggati",
    "car1": "tesla",
    "car2": "ferrari"
}

for i, value in brends.items():
    print(f"Key: {i}, Value: {value}")



    # 2

for i in brends:
    print(f"Key: {i}, Value: {brends[i]}")




# Task 2

class Car:
    
    def __init__(self, brand, model, year, price):
        self.brand = brand
        self.model = model
        self.year = year
        self.price = price


    def __str__(self):
        return f"{self.brand}, {self.model}, {self.year}, ${self.price}"



cars = {
    "car1": Car("Ferrari", "Enzo Ferrari", "2019", "200000"),
    "car2": Car("Tesla", "Cyberpunk", "2020", "150000"),
    "car3": Car("Buggati", "Cheron", "2022", "5000000")
}

def show_car():
    print("we have some many great car:")
    for i,value in cars.items():
        print(f"{i}, {value}")

    print("pleas choose a car:")

    choose = input()


    if choose in cars:
        car = cars[choose]
        print(f"you choose {car}")
    else:
        print("Car not found")


show_car()