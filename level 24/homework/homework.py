# Task 1

def arithmetik(list1):
    return sum(list1) // len(list1)


print(arithmetik([1,2,3,4,5,6,7,8,9,10]))


# Task 2


def manual_abs(number):
    if number < 0:
        return -number
    else:
        return number
    

print(manual_abs(10))



# Task 3

def numbers(list1):

    unqiu_list = set(list1)

    return unqiu_list


print(numbers([1,2,3,4,5,1,4,2,3]))






