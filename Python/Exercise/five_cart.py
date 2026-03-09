user_fruit=[]
user_price=[]
userInput=input("Enter the name of fruitt which you want to add in the cart [press q to quit] :- ")
while userInput!="q":
    userAsk=int(input("Enter the price of fruit :- "))
    user_fruit.append(userInput)
    user_price.append(userAsk)
    userInput=input("Enter the name of fruitt which you want to add in the cart [press q to quit] :- ")
if userInput=="q":
    print("--------------- Your Cart ---------------")
    for i in user_fruit:
        print(i , end="     ")
    print()
    for j in user_price:
        print(j , end="      ")
    print()
    print(f"THe total amount is {sum(user_price)}")