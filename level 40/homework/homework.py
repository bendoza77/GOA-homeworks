import math

# Task 1

# In the opposite variable, we have the directions and their opposites, which we need for the next comparison. With the for loop we pass a parameter to examine each element. if res: This part will check that res is not empty (it needs one direction to compare).
# res[-1] == opposite[i]: In this case, if the last direction in the res list is opposite to i, then we remove the last direction with res.pop(). if res: This part will check that res is not empty (it needs one direction to compare).
# res[-1] == opposite[i]: In this case, if the last direction in the res list is opposite to i, then we remove the last direction with res.pop().




# Task 2

# I created a variable called list1 which contains all uppercase and lowercase letters 
# and numbers 0-9. Then I checked if the text is empty, so I returned False
# Then with list comparison I passed the given parameter named password and extracted each 
# letter from the given text and gave this text as a value to the variable named text. And then, 
# with the abbreviated version of if and else, I wrote whether this text was similar to the answer of the given parameter, 
# if it was, it would write True or False.



# Task 3

list_of_number = [1,2,3,4,5,6,7,8,9,10]

mult_five = list(map(lambda x: x * 5, list_of_number))

print(mult_five)


# Task 4

string_list = [1,2,3,4,5,6,7,8,9,10]

int_to_str = list(map(lambda x: str(x), string_list))


print(int_to_str)


# Task 5

word_list = ['hello', 'goodbye', 'goodafternoon', 'gooevening']

add = list(map(lambda x: x + "!", word_list))

print(add)


# Task 6

number_list = [1,2,3,4,5,6,7,8,9,10]

square_root = list(map(lambda x: math.sqrt(x), number_list ))

print(square_root)


# Task 7

even_odd = [1,2,3,4,5,6,7,8,9,10]

boolean = list(map(lambda x: x % 2 == 0, even_odd))

print(boolean)