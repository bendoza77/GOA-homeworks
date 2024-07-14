# Task 1

    # 1

def greetings(name):
    print(f"hello {name}")

greetings("gabriel")


    # 2

def greetings(name):
    print(f"hello {name}")

name = str(input("Enter your name: "))

greetings(name)


# Task 2

    #1

def sum1(num1,num2,num3):
    print(num1 + num2 + num3)

sum1(1,2,3)

    # 2

def sum1(num1,num2,num3):
    print(num1 + num2 + num3)

first_number = int(input("Enter your first number: "))
second_number = int(input("Enter your second number: "))
third_number = int(input("Enter your third number: "))

sum1(first_number, second_number, third_number)


# Task 3

def written_off(num1,num2):
    for i in range(num1,num2):
        print(i)

first_number = int(input("Enter your first number: "))
second_number = int(input("Enter your second number: "))

written_off(first_number, second_number)


# Task 4

def about_me(name,age,academy):
    print(f"my name is {name} and i am {age} years old and i am study in {academy}")

about_me("gabriel",14,"Goa_Oriented_Academy")



# Task 5

def mult_number(num1,num2,num3):
    return num1 * num2 * num3

first_number = int(input("Enter your first number: "))
second_number = int(input("Enter your second number: "))
third_number = int(input("Enter your third number: "))

mult1 = mult_number(first_number,second_number,third_number)

print(mult1)


# Task 6

def discount(age):
    if age >= 18:
        return "you dont have discount"
    else:
        return "you have discount"
    
age = int(input("Enter you age: "))

print(discount(age))



# Task 7

def my_list(list1):
    for i in list1:
        return i
    
print(my_list[1,2,3,4,5,6,7,8,9,10])
