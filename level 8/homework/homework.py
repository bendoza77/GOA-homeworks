# Task 2

print(10 != 20) # True
print(10 != 10) # False

print(30 >= 30) #True
print(20 <= 30) #True
print(20 >= 10) #True
print(20 <= 10) #False

# Task 3

print(100 > 50) #True
print(100 >= 100) #True
print(20 == 20) #True

print(100 < 50) #False
print(40 < 50) #True

print(20 != 20) #False
print(10 <= 5) #False
print(10 <= 10) #True
print(10 <= 20) #True

print(True and False) #False
print(True and True) #False
print(False and False ) #False

print(True or False) #True
print(False or False) #True
print(True or True) #True

print(10 < 20 and 20 == 20) #True
print(20 > 20 and 10 >= 5) #False
print(40 != 50 and 10 <= 10) #True

print(50==50 or 100 != -100) #True
print(True and False or False and False) 
print(10 >= 10 or 20 <= 50) #True
 
print(10 != 10 or 2==20) #False
print(True or False and True or True) #True

print(100 == 50 or 100!=100 ) #False
print(True or True and True and False) #False

print(True or False and False or False) #False
print(True and True or True and False) #False

print(0 <= 10 and 100 != 0) #True
print(0==0 or 10!=10) #True

print(0==0 and 10!=10) #False


#Task 4

#1) and operator
#2) or operator

#1) The rule of the and operator is that if we write
#True and False will bring out False, because if there are millions of written True, but one False is still a crowd, it will bring out False.


#2) The rule of the or operator is that if you write True or False, then it will be True, because here everything is the opposite, 
# if you write millions of False, but at least one True will be wild, it will be True.


#Task 5

num1 = int(input("Enter your first number: "))
num2 = int(input("Enter your second number: "))

print(num1 < num2 )
print(num1 > num2 )
print(num1 == num2 )
print(num1 >= num2 )
print(num1 <= num2 )
print(num1 != num2 )