#  Task 2


secret_number = 4

guess = int(input("guess your secret_number: "))

if guess == 4:
    print("its correct")
else:
    print("its incorrect")


# Task 3

sum1 = 0

for i in range(1, 100):
    sum1 += i
print(sum1)



# Task 4

sum1 = 0

for i in range (1,1000):
    if i > 500 and i < 600:
        pass
    else:
        sum1 += i
print(i)


# 5 
num1 = 1
num2 = 1
guess = int(input("guess number: "))

while num1 == num2:
    num1 = 10
    print(input("Try again: "))


#6 

num1 = 1
mult1 = 1

while num1 < 10:
    mult1 *= num1
    num1 +=1 
print(mult1)


# Task 7

num1  = int(input("Enter your number: "))

if num1 % 2 == 0:
    print("luwia")
else: 
    print("kentia")












#  Task 8


grade = int(input("Enter your grade: "))


if grade >= 90 and grade <= 100:
    print("Grade A")
elif grade >= 80 and grade <= 89:
    print("Grade B")
elif grade >=  70 and grade <= 79:
    print("Grade C")
elif grade >= 60 and grade <= 69:
    print("Grade E")
else:
    print("Grade F")





















