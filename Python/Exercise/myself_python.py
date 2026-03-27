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






# set1=[10,20,30,40,50,60]
# print(set1)




# numb=[10,3,5,20,5839,43258,23498,835,931784,5798,4378,4,5902,583,569,12,10,30,5,5839,835,43258]
# for i in range(len(numb)):
#     if i%2==0:
#         print("Even")
#     else:
#         print("Odd")
# print(set(numb))



# try:
#     userInput=input("Enter anything you like to :- ")
# except ValueError:
#     print("Sorry error")
    
    
    
    

# import random
# userInput_user=int(input("Enter any number :- "))
# userInput=random.randint(1,500)
# print(userInput)
# while userInput_user!=userInput:
#     if userInput_user<userInput:
#         print("Too low!")
#     if userInput_user>userInput:
#         print("Too high!")
#     userInput_user=int(input("Enter any number :- "))
# if(userInput_user==userInput):
#     print("Correct!")






# import random
# chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|','\\',':',';','"',"'",'<','>',',','.','?','/']
# try:
#     userInput=int(input("Enter the length of password :- "))
# except ValueError:
#     print(f"Please enter an integer.")
# final_password=""
# for i in range(0,userInput):
#     password=random.randint(0,90)
#     final_password=final_password+chars[password]
# print(f"The password of length {userInput} equals to = is {final_password}")





# print("Python")





# userInput=int(input("Enter how amny prime number you want :- "))
# num=2
# while userInput>0:
#     counter=0
#     for i in range(1,num+1):
#         if num%i==0:
#             counter=counter+1
#     if counter==2:
#         print(num)
#         userInput=userInput-1
#         counter=0
#     num=num+1








# word="I am a good boy and a obedient boy".upper()
# counter=0
# for i in word:
#     if(i=="A" or i=="E" or i=="I" or i=="E" or i=="O" or i=="U"):
#         counter=counter+1
# print(f"Total word contained in the word / sentence is {counter}")





import random
quiz_questions = [
    {"question": "5 + 7", "answer": 12},
    {"question": "12 - 4", "answer": 8},
    {"question": "6 * 3", "answer": 18},
    {"question": "15 / 3", "answer": 5},
    {"question": "9 + 8", "answer": 17},
    {"question": "20 - 9", "answer": 11},
    {"question": "7 * 6", "answer": 42},
    {"question": "16 / 4", "answer": 4},
    {"question": "25 + 13", "answer": 38},
    {"question": "30 - 12", "answer": 18},
    {"question": "8 * 9", "answer": 72},
    {"question": "49 / 7", "answer": 7},
    {"question": "11 + 19", "answer": 30},
    {"question": "50 - 25", "answer": 25},
    {"question": "4 * 12", "answer": 48},
    {"question": "81 / 9", "answer": 9},
    {"question": "14 + 6", "answer": 20},
    {"question": "100 - 45", "answer": 55},
    {"question": "3 * 15", "answer": 45},
    {"question": "64 / 8", "answer": 8}
]
userInput=input("Do you wnat to play quiz question :- ").upper()
while userInput=="YES" :
    random_number=random.randint(0,len(quiz_questions)-1)
    print(f"{quiz_questions[random_number]["question"]}")
    userInput_answer=int(input("Answer :- "))
    if userInput_answer==quiz_questions[random_number]["answer"]:
        print(f"Correct")
    else:
        print(f"Wrong")
    userInput=input("Do you wnat to play quiz question :- ").upper()
if userInput=="NO":
    print("Ok!quitted")
    
    
    

# Over