# Using this function should return the item from the list that was most frequently used.
def highest_rank(arr):
    
    # Here I created a number variable in which I create two elements, the number itself and their count, 
    # and sort by the last element using a lambda function.
    number = sorted([(i, arr.count(i)) for i in arr], key=lambda x: x[1])
    # Here I will create a variable length in which I will store the largest number of times an element can be 
    # repeated because there are numbers in the list that are repeated the same number of times. Therefore, all the elements that 
    # were repeated length times will be added to the list res
    length = number[-1][1]
    
    res = [i[0] for i in number if i[1] == length]
    
    # Then I returned the largest element from the list as usual using the max function.
    return max(res)

print(highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 12]))



# With this function, I had to return an element from a string that had more 1s than 0s in the binary system.
def more_zeros(s):
    
    # Here I created a variable res where I want to store all the elements that meet the criteria.
    res = []
    
    for i in s:
        # Here I passed the for loop to the given list and within the for loop I created a variable and left the binary 
        # system of the element to it, 
        # but first I converted it to ASCII so that I could convert it to binary later.
        string = bin(ord(i))[2:]
        
        # Then I wrote a condition for this variable that if the number of 1's was greater than the number 
        # of 0's then it would be added to the res variable.
        if string.count("0") > string.count("1"):
            res.append(i)
    
    # Here I created a new result variable in which I already store the elements that are not repeated.
    result = []
    

    # So I passed the for loop to the res list and wrote a condition for each element to be added only if the element 
    # was not in the result list, 
    # which allowed me to remove all duplicates from the list
    for i in res:
        if i not in result:
            result.append(i)
    
    # Here I returned the result as usual.
    return result

print(more_zeros("abcde"))



# With this function, I needed to return a percentage of the same size in a string at the same index.
def pos_average(s):
    

    # Here I split the given string to create substrings so that I could then examine each element, and I 
    # passed "," as an argument to the solit function because all the elements were separated by commas.
    s = s.split(",")
    # Then I used the lstrip method on all elements to remove all white space on the left.
    s = [i.lstrip() for i in s]
    

    # Here I have already created the res and result variables, to store the number of identical elements at the same index 
    # in the res variable and the total number of elements in the result variable.
    res = 0
    result = 0
    

    # Then I used a for loop to examine each element of all elements. For this, I needed three for loop statements 
    # to normally iterate through the list of strings and examine all elements. I needed the second for loop to examine 
    # all possible options whose iteration variable would be eight times ahead of the first for loop, so I wrote i + 1 in 
    # the range, and I needed the third for loop to examine each letter of the element. So I even passed the string through 
    # the for loop, but with the same string length so 
    # that I could examine both s[i] and s[j] strings at the same index.
    for i in range(len(s)):
        for j in range(i + 1, len(s)):
            for index in range(len(s[i])):
                # Here I even wrote a condition that if the element of string s[i] was similar to the element of string s[j] 
                # then 1 would be added to the res variable and in the 
                # unlikely case 1 would be added to the result variable.
                if s[i][index] == s[j][index]:
                    res += 1
                result += 1
    
    # Then I returned the normal percentage with this formula when I divided the number of elements in the entire string by the number of identical elements at the same index, and multiplied it by 100 so that it would be written as a percentage and the 
    # first element would not be 0, and then I rounded the answer to 10 decimal places.
    return round((res / result) * 100, 10)

print(pos_average("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"))

