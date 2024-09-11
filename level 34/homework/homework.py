# Task 4

my_age = 15

try:
    print(my_age)
except NameError:
    print("Enter the valid number")
finally:
    print("this is my age")


my_name = "gabriel"

try:
    print(len(my_name))
except TypeError:
    print("Enter the valid type")
else:
    print("this is lenght of my name")


num1 = 15

if num1 > 20:
    raise ValueError
else:


# Task 5

    def num_sum(array):

        sum1 = [int(i) for i in array]

        return sum(sum1)


    print(num_sum([10, "10"]))