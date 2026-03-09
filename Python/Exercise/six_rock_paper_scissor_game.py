import random
userInput=input("Enter [Rock,Paper,Scissor] to play the game press [ q ] to quit :- ").capitalize()
computer=["Rock","Paper","Scissor"]
user_point=0
computer_point=0
while userInput!="Q":
    random.shuffle(computer)
    i=random.randint(0,2)
    print(computer[i])
    if(computer[i]=="Rock" and userInput=="Rock"):
        print("Draw!")
    elif(computer[i]=="Rock" and userInput=="Paper"):
        print("User Won!")
        user_point+=1
    elif(computer[i]=="Rock" and userInput=="Scissor"):
        print("Computer Won!")
        computer_point+=1
    elif(computer[i]=="Paper" and userInput=="Scissor"):
        print("User Won!")
        user_point+=1
    elif(computer[i]=="Paper" and userInput=="Paper"):
        print("Draw!")
    elif(computer[i]=="Paper" and userInput=="Rock"):
        print("Computer Won!")
        computer_point+=1
    elif(computer[i]=="Scissor" and userInput=="Rock"):
        print("User Won!")
        user_point+=1
    elif(computer[i]=="Scissor" and userInput=="Paper"):
        print("Computer Won!")
        computer_point+=1
    elif(computer[i]=="Scissor" and userInput=="Scissor"):
        print("Draw!")
    else:
        print("Wrong Input!")
    userInput=input("Enter [Rock,Paper,Scissor] to play the game press [ q ] to quit :- ").capitalize()
if userInput=="Q":
        print("Game Over!")
        print(f"The point of user is {user_point}")
        print(f"The point of computer is {computer_point}")