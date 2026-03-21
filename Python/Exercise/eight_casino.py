import random
emoji=["🍊","🍎","🍏","🍓"]
answer=[]
userInput=input("Do you want to play game :- ").upper()
balance=100
while userInput=="YES" and balance>0:
    userInput_amount=int(input("Enter your betting amount :- "))
    for i in range (0,3):
        number=random.randint(0,3)
        answer.append(emoji[number])
    print(answer)
    if answer[0]==answer[1]==answer[2]:
        print("Win")
        answer=[]
        balance=balance+userInput_amount
    else :
        print("Lost")
        balance=balance-userInput_amount
        answer=[]
        print(balance)
    userInput=input("Do you want to play the game :- ").upper()
if userInput=="NO":
    print(f"You quitted {balance} is the total amount left")