# List in python are one of the most important datatypes, They are used to store multiple values . List are nothing but just an odered collection of data where each element are seperated by commas and are enclosed within a square bracket .




# List in python are mutable :- That is tehy can be chnaged later or tehy can be updated later . 




fruits=["Apple","Banana","Carrot","Dragon fruit","Mango","Strauberry","Avacado","Coconut","Papaya","Watermelon","Guava","Apple"]
# print(fruits[1])
# print(fruits[0:4])
# print(fruits[-3:-1])
# print(fruits[-1])
# for fruit in fruits:
#     print(fruit)
# for i in range(0,5):
#     print(fruits[i])
# fruits[0]="Sahil"
# print(fruits)
# print("Sahil" in fruits)






# Some methods in list
# fruits.append("Jack fruit") # Append add anything to the end of the list.
# print(fruits)
# fruits.remove("Avacado")
# print(fruits)
# fruits.insert(0,"Avacado")
# print(fruits)
# print(fruits)
# fruits.sort()
# print(fruits)
# print(fruits)
# fruits.reverse()
# print(fruits)
# print(fruits)
# fruits.clear()
# print(fruits)
# print(fruits.index("Avacado"))
# print(fruits.count("Apple"))





# userInput=input("Enter the name of fruits [Q/q to quit] :- ")
# user_fruits=[]
# while (userInput!='q'):
#     user_fruits.append(userInput)
#     print(user_fruits)
#     user_delete_ask=input("Do you want to delete anything? (Yes/No) :- ").upper()
#     if(user_delete_ask=="YES"):
#         userAsk=input("Enter the name of fruit which you want to delete :-")
#         while userAsk not in user_fruits:
#             print("Pleasse enter the fruit which is alredy added in the array!")
#             print(user_fruits)
#             userAsk=input("Enter the name of fruit which you want to delete :-")
#         user_fruits.remove(userAsk)
#         print(user_fruits)
#         userInput=input("Enter the name of fruits [Q/q to quit] :- ")
#     else:
#         userInput=input("Enter the name of fruits [Q/q to quit] :- ")
# if userInput=="Q" or userInput=="q":
#     print("You quitted")
    
    
    
    
# userAsk=int(input("Enter how many priority you want :- "))
# for i in range(userAsk):
#      userInput=input("Enter the to do list of priority [Hobby - Rank] :- ")
#      numb=userInput[-1]
#      if(numb>numb):
     
     
     
     
     
     
     

check=True
account=[]
total=0
account_withdraw=0
account_deposite=0
userInput=input("What do you want to do withdraw or deposite the money :- ").upper()
while(check):
    if userInput=="WITHDRAW":
        user_withdraw=int(input("Enter how many money do you want to withdraw :- "))
        account.append(-user_withdraw)
        for i in range(len(account)):
            total=total+int(account[i])
        if(total<0):
            print("Sorry ! Your account balance is already zero ( 0 ) so please add money first and only withdraw it or take the loan on your owen expense and risk ! ")
        print(account)
    if userInput=="DEPOSITE":
        user_deposite=int(input("Enter how many money do you want to deposite :- "))
        account.append(user_deposite)
        print(account)
    userInput=input("What do you want to do withdraw or deposite the money or press Q/q to quit:- ").upper()
    if(userInput=="Q" or userInput=="q"):
        print("Quitted!")
        check=False
        for i in range(len(account)):
            total=total+int(account[i])
        # if(total<0):
        #     print("Sorry ! Your account balance is already zero ( 0 ) so please add money first and only withdraw it or take the loan on your owen expense and risk ! ")
        #     check=False
            if account[i]>=0:
                account_deposite=account_deposite+account[i]
            else:
                account_withdraw=account_withdraw+account[i]
        print(f"Total account balance :- {total}")
        print(f"Total account withdraw :- {account_withdraw}")
        print(f"Total account deposite :- {account_deposite}")