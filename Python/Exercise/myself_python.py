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





# sum=0
# for i in range(1,101):
#     sum+=i
# print(sum)





# scores = [78, 85, 92, 78, 60, 85, 90, 72, 60, 88,98]
# highest=scores[0]
# lowest=scores[0]
# total=0
# above_average=[]
# for i in scores:
#     total+=i
#     if i>highest:
#         highest=i
#     if i<lowest:
#         lowest=i
# average=total/len(scores)
# print(f"The highest marks is {highest}")
# print(f"The lowest marks is {lowest}")
# print(f"The average marks is {average}")
# set1=set(scores)
# print(f"The unique scores is {set1}")
# for i in scores:
#     if i>average:
#         above_average.append(i)
# print(f"The scores above average is {above_average}")






set1=[10,20,30,40,50,60]
print(set1)