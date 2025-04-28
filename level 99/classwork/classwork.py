# isalnum function

def manual_isalnum(string):
    letter = "abcdefghijklmnopqrstuvwxyz0123456789"

    if all(i.lower() in letter for i in string):
        return True
    return False

print(manual_isalnum("gabriel2009"))


# manual_startswith function

def manual_startswith(string, el):

    length = len(el)
    string = string[:length]

    if string == el:
        return True
    return False

print(manual_startswith("hello world", "world"))        


# manual_endswith function

def manual_endswith(string, el):

    length = len(el)
    string = string[length:]
    string = "".join([i for i in string if i != " "])

    if string == el:
        return True
    return False

print(manual_endswith("hello world", "world"))


# manual_round function

def manual_round(number, decimal=0):
    
    string = str(number)

    if "." not in string:
        return int(string)
    else:
        if decimal == 0:
            second = string.split(".")[1]
            if len(second) == 1 and int(second) <= 5:
                return int(string.split(".")[0])
            elif len(second) == 1 and int(second) > 5:
                return int(string.split(".")[0]) + 1
            elif len(second) > 1 and int(second[0]) < 5:
                return int(string.split(".")[0])
            elif len(second) > 1 and int(second[0]) >= 5:
                return int(string.split(".")[0]) + 1
        else:
            second = string.split(".")[1]
            second = str(int(second[:decimal]) + 1)
            return float(string.split(".")[0] + "." + second)

print(manual_round(10.96528569435, 4))


