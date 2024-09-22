# Task 1

list1 = [0,1,2,3,4,5,6,7,8,9,10]

plus = list(map(lambda x: x + 1, list1))

print(plus)


# Task 2

def sport(*sport):
    return f"my favorite sport is {sport[7]}"

print(sport("baskteball", "tenis", "valiball", "box", "karate", "wrestling", "kinkcbox", "football"))


# Task 3

str1 = "hello my name is gabriel and i am lazy I'm too lazy to do everything steam"

text = str1.split()

filter_word = ["lazy", "steam"]

filter_str = list(filter(lambda x: x not in filter_word, text))

string = " ".join(filter_str)

print(string)


# Task 4

list1 = [1,2,3]
list2 = [4,5,6,]

sum1 = list(map(lambda x, y: x + y ** 2, list1, list2))

print(sum1)

def min(list1):

    return [sum(min(i)) for i in str(list1)]


print(min([19,12,5,2]))

