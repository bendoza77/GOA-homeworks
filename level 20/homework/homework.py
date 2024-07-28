# Task 2

int1 = 10
int2 = 20

print(int1 + int2)


# Task 3

str1 = "gabriel"
str2 = "jobava"

print(f"{str1} {str2}")

# Concatenation is the concatenation of strings When two strings are concatenated, concatenation occurs only on strings


# Task 4

int1 = 15
int2 = 20

print(int1/int2)

# Float was used because when we divide two numbers by each other, the program does not know the exact answer, that is, it does not know what it will be
# in advance, so it outputs the answer as a decimal, i.e. float

#this is implicit


# Task 5

num1 = 50
num2 = 60

print(num1 > num2 < num1 > num2 == num1 < num2 != num1 > num2 >= num1 <= num2)


# Task 6

number1 = 100
number2 = 200

print(number1 + number2 > number1 - number2)
print(number2 / number1 != number1 * number2)
print(number1 + number2 < number1 * number2)
print(number1- number2 != number2 - number1)
print(number1 + number2 == number2 + number1)
print(number1 - number2 <= number1 + number2)
print(number1 * number2 >= number1 + number2)


# Task 7

print(True and False) #False
print(True or False)  # True
print(True and True)  # True
print(False and False) # False
print(True or True)    # True 
print(False or False)  # False
print(not(True)) # False
print(not(False)) # True


# Task 8

print(14 > 10 and 10 != 10) # False
print(100 <= 200 or 100 >= 200) # True
print(not(20 != 30) and 20 == 20 ) # False
print(not(100 >= 100) or not(100 != 100)) # True


# Task 9

for i in range(1,10):
    print(i)


# Task 10

list_of_number = [1,2,3,4,5,6,7,8,9,10]
sum1 = 0

for i in list_of_number:
    sum1 += i

print(sum1)


# Task 11

str1 = "Hello World"

for i in str1:
    print(i)


# Task 12

num1 = 0

while num1 < 10:
    print(num1)
    num1 += 1




# Task 14

num1 = 1
sum1 = 0

while num1 <= 50:
    sum1 += num1
    num1 += 48
print(sum1)


# Task 15

def division(number):

    if number / 3:
        return "Your number is divisible by 3"
    elif number / 5:
        return "Your number is divisible by 5"
    else:
        return "Your number is divisible by both"
    
number = int(input("Enter number: "))
    
print(division(number))


#   Task 16

def past_arithmethick(list):
    sum1 = sum(list)
    division = sum1 / len(list)

    return division

print(past_arithmethick([1,3,4,5,2]))


#   Task 17 
def make_upper(string):
    result = ""
    for i in range(len(string)):
        if i % 2 == 0:
            result = result + string[i].upper()
        else:
            result = result + string[i]

            return result

print(make_upper("hello"))

#   Task 18

def mult(list_number):
    for i in list_number:
        return i ** 2

print(mult([3,12,5,2,6]))



# Task 19


str1 = "gabriel"

print(str1.upper())
print(str1.lower())
print(str1.capitalize())



list1 = ["html", "css", "javascript"]

print(len(list1))

str1 = "gabriel jobava"

print(len(str1))


str1 = "programming langauge"

print(str1.find("g"))

list1 = [1,2,3,4,5,6,7,8,9,10]

print(list1.index(10))


list1.append(11)
print(list1)

list1.insert(2,30)
print(list1)

list1.pop(9)
print(list1)

list1.remove(30)
print(list1)

# Task 13

num1 = 0

while num1 < 100:
    if num1 in range(50,60):
        pass
    else:
        print(num1)
        num1 += 1



