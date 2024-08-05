def is_isogram(string):
    #your code 

    
    if string == "":
        return True
    
    for i in string:
        if i == string[i]:
            return False
        else:
            return True
        
print(is_isogram("Dermatoglyphics"))