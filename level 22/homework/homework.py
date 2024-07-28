# Task 2

def manual_min(list1):

    minimum = list1[0]

    for i in list1:
        if i < minimum:
            minimum = i
    return minimum


print(manual_min([100,50,30,120]))


# Task 3

def manual_max(list1):
    maximum = list1[0]

    for i in list1:

        if maximum < i:

            maximum = i

    return maximum

print(manual_max([1,2,3,400,5,100]))



# Task 4

def manual_len(string):
    len_string = 0

    for i in string:
        len_string += 1

    return len_string

print(manual_len("gabriel"))



# Task 5

def manual_sum(list1):
    sum1 = 0

    for i in list1:
        sum1 += i

    return sum1

print(manual_sum([1,2,3,4,5,6,7,8,9,10]))




# Taks 7

def manual_find(string, find_element):
    for i in range(len(string)):
        if find_element == string[i]:
            return i

print(manual_find("gabriel", "b"))