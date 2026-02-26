# userInput=int(input("Enter your age please :- "))
# d=userInput*365
# m=userInput*12
# h=d*24
# mins=h*60
# s=mins*60
# print(f"You have lived {d} days {m} month {h} hour {mins} minutes {s} seconds.")




# p=int(input("Enter the principle :-"))
# r=int(input("Enter the rate :-"))
# t=int(input("Enter the time :-"))
# s=(p*r*t)/100
# print(s)




# import math
# userInput=int(input("Enter any number to get its aquare and cube :- "))
# s=math.pow(userInput,2)
# c=math.pow(userInput,3)
# print(f"The square of the number is {s}.The cube of the number is {c}.")








# userInput = input("Enter anything you like :- ")
# print(len(userInput))








# userInput = int(input("Enter any number accordint to your want and your requirnment :- "))
# counter=0
# for i in range(1,userInput+1):
#     if userInput%i==0 :
#         counter=counter+1
# if counter==2 :
#     print(f"The number {userInput} is a prime number!")
# elif counter!=2 : 
#     print(f"The number {userInput} is not a prime number!")
# else :
#     print(f"Error!")





sum=0
for i in range(1,101):
    sum+=i
print(sum)