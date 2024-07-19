# fisrt creart libary in phyton

import random 


# next creat fisrt function called guess_number_game wich is most important function for this game
# this is function where i nested evrithing without this function nothing hase happend.

def guess_number_game():
    print("Hello welcome the guess_number_game thancks for plaing this game have fun goo lukc.")
    print("i am thinking number between 1, 100")
    secret_numebr = random.randint(1,100)
    attempt = 0

# i creat while loop for ask you question and guess secret number thats wy i creat while loop if you
# input incorrect answer this code ask you again and again while you input correct answer.

    while True:
        guess = int(input("guess my number: "))
        attempt += 1

# next i creat if condition becouse when you input ansewr it ends here if your answer is higher than secret number
# on the terminla will output "your number is high" but if you input lower number than secret number on the terminal will output
# "your number is low" but if you input corerct ansewr in guess value you will win this game.

        if guess < secret_numebr:
            print("your number is low")
        elif guess > secret_numebr:
            print("your number is high")
        else:
            print(f"congratulation you are right you guees my number which is {secret_numebr} and you guess this number in  {attempt} attempt,  thancks for playng")
            break

# and here i craet second function beacouse this function where i nested code ask you if you wnat to play this game again,
# this function called play_again function is function wich ask you question, if you want to play there is play_again value which
# ask you quetion if you wnat to play again input "yes" and you can play this game again but if you input "no" game will end.

def play_again():
    play_again = str(input("wanna play again yes or no? "))

    if play_again == "yes":
        guess_number_game()
    elif play_again == "no":
        print("thancks for plaing this game")


    
    
            
# end i called guess_number_game function that work, if you dont call function dosnet work.
guess_number_game()
play_again()





