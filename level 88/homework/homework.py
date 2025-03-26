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


# 9

# The purpose of this code is to add all the elements from the given string to a list that are repeated one 
# or more times and then remove the duplicates from that list and return the length of the list. So first I created 
# a new list named listn then I used a for loop to examine each element then I wrote a condition for each element 
# that if this element was repeated in lower case 2 or more times then it would be added to listn otherwise the computer 
# would not pay attention to it I used the pass keyword for this then from the given string all i and s were added to the 
# list using this condition then their duplicates were removed using the set() function and only i and s were left then the 
# length of this list was returned using the len() function. That is 2


# 10

# The purpose of this code is that until the length of the given number is equal to 1, then through 
# the x for loop, each element of the number would be multiplied by the value of the given variable that 
# was created in the while loop and the count variable would be added by 1. Therefore, first I created the 
# count variable and then I wrote a while loop whose condition was until the length of the given number is 
# equal to 1, then do the action written in it. This action includes: the x variable whose value is initially 
# 1 and then I converted the given number as a string. I used the str() function for this because it was throwing 
# an error, so I did the same for the while loop condition. After the for loop, I passed the given number x multiplied 
# by the element of the string. Here I used the int() variable to make it a number again. Then I passed the value of n 
# to the x variable and so on until the length of the n value was equal to one. At the same time, 
# the count variable was added to 1 after each while loop, so the count value returned was 2.


# 11

# The purpose of this code is to split the given string into words to produce a sentence. 
# For this, I created an empty string, then passed it through a for loop to examine each element. 
# And I wrote a condition for each element that if the element was in upper case (for this I used the 
# isupper() function which returns a boolean) then the empty string would be appended with a space and the 
# remaining elements would definitely be 
# appended (for this I used indentation) and then returned the result hakuna Matata


# 12

# The purpose of this code is that if an element from the English alphabet is not equal to the 
# element after it, then the next element is returned. So first we created a letter variable whose 
# value is all the lowercase and uppercase letters of the English alphabet. Then we used a for loop 
# to iterate over the length of the given list so that I had both an index and an element. Then for each 
# element I wrote a condition that if the next element of the given element in the letter variable was not equal 
# to the next element of the given element in the list, then the next element of the given element from the letter 
# variable was returned. In this, I used the find() function and the index [] method. With the find() function, I 
# found the index of the element and then added 1 to this 
# index to consider and return the next element, so it returned k as a result.


# 13

# The purpose of this code is to add "," elements after every third element, so first I created 
# an empty string and a count variable, then I wrote a condition that if the length of the given element 
# is less than or equal to three, then return the given number as a string, otherwise pass the for loop through 
# the reversed string as a string using the [::-1] method and the str() function, then on each pass through the for 
# loop, add 1 to count so that after every third number, we add an empty string "," element. For this, we wrote a condition 
# that if count is divided by 3 and the remainder is 0, then add "," to the empty string, and in the other case, the given
# number of elements. Then we created a result variable to which I passed the reversed string and wrote a condition for this 
# variable that if the first element is "," it will remove the first element and return the value of the result variable, 
# otherwise it will directly return the value of the result variable.


# 14

# The purpose of this code is to convert each element of the given two strings to a numeric value and return
# which one is greater. So I created a dictionary where "?" is 3 and "!" is 2. Because both strings consist of 
# only these characters. Then I created count1 and count2 variables to compare. After that I passed both of them 
# one by one to a for loop that assigns the numeric value of each character to the count variables. After that I 
# wrote three conditions using if/else conditions that if count1 is greater than count2 then return "Left" if it 
# is less than count2 then return "balance" and if right is equal 
# then return either "Right" or "Hakuna matata" where "Right" was returned

# 15


# The purpose of this code is to consider the directions (NORTH, SOUTH, WEST, EAST) so that if the next 
# element of a given list element is equal to the opposite direction of the element, then both are removed 
# from the list. So first I created a dictionary that stored the directions and their opposites, then I passed the 
# resulting list to a for loop so that I had both the index and the element. Then I wrote a condition for each element 
# that if the next element of the element was equal to the opposite direction of this element then both elements would 
# be deleted from the list (for this I used the del keyword) and then I returned the given list and passed this new list
#  to the function using the name which changes the value of the given parameter. After that everything happened again. 
# The dictionary was also recreated and the for loop was also re-run and after that if only one 
# element remained in the list in this case it returned "WEST" as a result.


# 16

# The purpose of this code is to concatenate the given string and change its style to title. 
# So I left the given parameter to a new value where the "#" element is added to the given string 
# parameter but in title case which capitalizes the long word except for is, of, a , an etc. words 
# (for this I used the title() function) then using the ".join() function I removed the white spaces and 
# wrote a condition for the new parameter that if its length was between 2 and 141 then the parameter 
# would be returned as a result and in other cases it would return False


# 17

# The purpose of this code is to replace the given string by replacing the 13th element of each element. 
# So I first created a lowercase English alphabet which I stored in the letter variable and then I created an 
# uppercase English alphabet which I stored in cap_letters. Then I passed the length of the given string so that 
# I had both an index and an element. And for each element I wrote a condition that if the element was in upper 
# case (for this I used the isupper() function) and the element was a letter (for this I used the isalphabet() function 
# which also returns a boolean value like the isupper() and islower() functions) then a new empty string would be added 
# to the thirteenth element next to the element (for this I used the find() function) in upper case. And if the element
# was a space then nothing was added to the empty string, and if the element was in lower case and was an alphabet then
# the thirteenth element following the element would be added to the empty string in lower case. 
# However, the answer of the code is "abc" because print("abc") is written below and the function is not called.


# Task 2

# Task2-ად გასაკეთებელი იყო codewars-ები