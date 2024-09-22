# Task 1

tuple_list = [(3,1), (4,2), (5,3)]

sorted_list = sorted(tuple_list, key=lambda x: x[1])

print(sorted_list)


# Task 2

list1 = [1,2,3,4,5,6,7,8,9,10]

sq = list(map(lambda x: x ** 2, list1))

print(sq)


# Task 3

string_list = ["hello", "my", "name", "is", "gabriel", "jobava", "bye"]

filter_string = list(filter(lambda x: len(x) > 4, string_list))

print(filter_string)


# Task 4

upper_list = ["hello", "my", "name", "is", "gabriel"]

upper_string = list(map(lambda x: x.upper(), upper_list))

print(upper_string)


# Task 5

    # if we want to filter word that only start with a

name_list = ["Ana", "Luka", "Data", "Ali"]


name_filter = list(filter(lambda x: x[0] == "a", name_list))

print(name_filter)


    # if we want to filter word that only start with a, A


name_list1 = ["Ana", "Luka", "Data", "ali"]

name_filter1 = [i for i in name_list1 if i.startswith("a") or i.startswith("A")]

print(name_filter1)



# Task 6

list_number = [1,2,3,4,5,6,7,8,9,10]

plus_5 = list(map(lambda x: x + 5, list_number))

print(plus_5)

# ask 7

list_word1 = ["gabriel", "jobava", "hello", "name", "world"]

plus_start = list(map(lambda x: f"-start{x[0]}", list_word1))

print(plus_start)


# Task 8

even_number_list = [1,2,3,4,5,6,7,8,9,10]

even_number_filter = list(filter(lambda x: x % 2 == 0, even_number_list))

print(even_number_filter)

# Task 9

negative_number_list = [-2,-1,0,1,2,3,4,5,6,7,8,9,10]

negative_number_list_filter = list(filter(lambda x: x > 0, negative_number_list))

print(negative_number_list_filter)

