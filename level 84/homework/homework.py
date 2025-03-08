# Task 2

def ten_to_two(n):

    res = []
    number = n

    while number >= 1:
        if number % 2 != 0:
            num = number
            while number % 2 != 0:
                 number -= 1
            result = num - number
            res.append(result)
            number = number // 2

        else:
            num = number
            result = num - number
            res.append(result)
            number = number // 2

    res.append(result)

    res = res[::-1]
    
    return "0" + "".join([str(i) for i in res])


print(ten_to_two(16))


# Task 3

def two_to_ten(n):

    res = []

    n = "".join([i for i in str(n)])[::-1]

    for i in range(len(n)):
        res.append(int(n[i]) * (2 ** i))

    return sum(res)

print(two_to_ten(1111110101))