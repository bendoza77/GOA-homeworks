# Task 1

#map is a function that returns a new list, and if you write that you want all elements to be in uppercase, it will spread this to all elements

#filter is a function that filters a list




# Task 2

list1 = [[10,20,30], [5,10,15], [20,40,60]]

math = list(map(lambda list: sum(list) / len(list), list1))

print(math)


# Task 3

food = {
    "fish": True,
    "bread": True,
    "apple": False,
    "meat": True,
    "banana": False,
    "orange": False
}

food_filter = dict(filter(lambda item: item[1] == False, food.items()))

print(food_filter)