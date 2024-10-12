# alphabet_position takes a text and returns the positions of the letters of the Latin alphabet in it, given a space. 
# alp = "abcdefghijklmnopqrstuvwxyz"
# This variable contains all the lowercase letters of the Latin alphabet. [str(alp.find(i) + 1) for i in text.lower() if i in alp]
# text.lower() lowers the text to lowercase.
# for i in text.lower() loops through each letter.
# if i in alp makes sure that the letter is in the alphabet.
# alp.find(i) + 1 finds the index of the letter and increments it by 1, because indices start from 0, but we need from 1. 
# The end result is a set of letter positions