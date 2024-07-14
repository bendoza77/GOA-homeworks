# Task 2

def sum1(num1,num2):
    return num1 + num2

first_number = int(input("Enter your first number: "))
second_number = int(input("Enter your second number: "))


print(sum1(first_number,second_number))


# Task 3

def mult1(num1,num2,num3):
    return num1 * num2 * num3

number_one = int(input("Enter your first number: "))
number_two = int(input("Enter your second number: "))
number_three = int(input("Enter your third number: "))

print(mult1(number_one, number_two, number_three))


# Task 4

def greeting(name,last_name):
    return f"hello {name} {last_name}"

print(greeting("gabriel", "jobava"))


# Task 5

def sum2(num1, num2):
    return num1 + num2

sum_of_number1 = int(input("Enter your first number: "))
sum_of_number2 = int(input("Enter your second number: "))

sum_of_number = sum2(sum_of_number1,sum_of_number2)

print(sum_of_number)


# Task 6

def mult2(num1,num2,num3):
    return num1 * num2 *  num3

mult_of_number1 = int(input("Enter your first number: "))
mult_of_number2 = int(input("Enter your second number: "))

mult_of_number = mult2(mult_of_number1,mult_of_number2)

print(mult_of_number)


# Task 7

def list_of_food(list):
    for i in list:
        print(i) 
    
list_of_food(["ხინკალი", "მწვადი", "ხორცი", "სალათი"])


# Task 8
def list_of_number(list1):
    for i in list1:
        print(i)

list_of_number([1,2,3,4,5,6,7,8,9,10])
