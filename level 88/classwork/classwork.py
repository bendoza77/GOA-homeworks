# Task 1

# 1

# In this code, our goal was to get the day of the week based on the number entered by the user. So first of 
# all, we created a dictionary that helps us get the day of the week based on the number and this way is better and 
# more practical than if/else condition. Then we wrote a condition using if/else condition that if the number entered 
# by the user was in the dictionary then the day of the week whose key was equal to the entered number was removed from 
# the dictionary and range(1,8) was used because the range() function returns all numbers up to a number, for example 
# here all numbers from 1 to 8 are returned, including 7 because there are 7 days in a week. Now if the entered number 
# did not satisfy the condition then 
# the code would output the text that the entered number is not in the numbers from 1 to 7.



# 2

# The purpose of this code is to remove duplicate elements from a list. For this, we created a new list 
# named listn whose value is an empty list. Then we passed the given list where the duplicate elements are 
# and we passed a for loop to examine each element. After that, we wrote a condition for each element that if 
# this element was not in the new list we created then it was kept in this list,
#  otherwise it was skipped if this element was already in the listn list.


# 3

# The purpose of this code is to return the next element of the given letter from the English alphabet. 
# So we created a variable whose value is the English alphabet. After that, we directly returned the next letter 
# of the given letter with the help of the find() function. The find() function helps us find the element we want 
# from a string or a list and returns its index. After finding the index of the given letter, I added 1 to it because 
# I wanted to return the next element of the 
# given letter from the English alphabet which I have stored in the variable


# 4

# The purpose of this code is to convert an element from a given string if it is upper case to lower case 
# and if it is lower case to upper case. So I used a for loop to go through each element of the given string and 
# for each element I wrote a condition that if this element is in upper case then the empty string I created would be 
# added to lower case and if the element is in lower case then it would be added to upper case and then we 
# returned the value of the variable which was initially an empty string


# 5

# The purpose of this code is to sort the given list by 2 using the index of each element in the list. 
# So I used list comparison for a shorter and easier way and passed the length of the given list through a 
# for loop to have both the index and the element. Then I used the ** operator to sort 
# and return 2 all possible values ​​using the indices of the elements in the list.


# 6

# The purpose of this code is to return the URL. Here the replace() function is used which has two 
# elements the first one indicates what I want to replace and the second one indicates what I want to 
# replace the first one with. So using this function I replaced all the elements present at the end of the 
# URL with an empty string and saved it in a new variable. After that I divided the variable into two using 
# the split() function split() function divides strings by the element which we indicate in this case the string 
# is divided by a dot which is why it is divided into two parts. The first part is the URL and the second is the 
# elements present after the URL. 
# The purpose of this code was to return the URL so using indexing I returned the first element


# 7

# The purpose of this code was that if any element from the given string was not a number or letter then 
# the code would stop and return False otherwise True. Therefore, a variable was created whose value was the 
# English alphabet and all numbers. Then I passed the given string through a for loop so that each element was 
# considered and wrote a condition that if the element was in the value of the variable then another variable is_valid 
# would be created whose value was True and as long as the element was in the value of the variable we created the value 
# of is_valid would be True and if the element was not in the value of the variable then the value of is_valid would be 
# False and the code would stop with the help of the break keyword and then I 
# returned the value of the is_valid variable as usual.


# 8

# The purpose of this code was that if the length of an element in a given string was greater 
# than or equal to 5, then that element would be reversed, and otherwise it would remain as it was. 
# I split the given string into parts and created a list using the split() function and created a new 
# list whose value is an empty list named listn. Then I used a for loop to go through the given list to 
# examine each element and wrote a condition that if the length of the element was greater than or equal 
# to 5, then it would be stored in the new list in reverse, which is done by the [::-1] method and the length 
# is checked by the len() function. Otherwise, it would be stored in the new list as it was in the enclosed string. 
# Then I converted the list to a string using the "".join() function and joined the elements together, and if they 
# were not duplicated, I added a join in the join clauses. Then I returned the result, 
# which separates the lists by the element you put in the join() function.


# Task2

# Task2-ად გასაკეთებელი იყო codewars-ები