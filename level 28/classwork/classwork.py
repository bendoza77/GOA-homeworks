# The List Of Food

def food(list1, add, remove=False):

    for _ in list1:
        if add not in list1:
            list1.append(add)
        elif remove in list1:
            list1.remove(remove)

    return list1

print(food(["oil", "water", "fish", "bread"], "soda", "oil"))
