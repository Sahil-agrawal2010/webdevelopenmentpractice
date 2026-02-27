# # for i in range(10):
# #     a=5*(i+1)
# #     print(f"5 X {i+1} = {a}")
    
    
    
    

# for i in reversed(range(100,501,100)):
#     print(f"{i}")





# for i in range(10):
#     if i==6:
#         continue
#     print(f"{i}")
    
    
    
    
    
    
    
# userInput=input("Enter any work you like to :-").upper()
# for i in range(len(userInput)):
#     if (userInput[i]=="A") or (userInput[i]=="E") or (userInput[i]=="I") or (userInput[i]=="O") or (userInput[i]=="U"):
#         print(userInput[i])
        
        
        
        
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
    
    
    
# for i in range(1,101):
#     counter=0
#     for j in range(1,i+1):
#         if(i%j==0):
#             counter+=1
#     if(counter==2):
#         print(i)
        
        
        
# hash="*"        
# for i in range(1,11,2):
#     print(hash)
#     hash=hash+"**"
    
    
    
    
    
    
    
# hash = "*"
# for i in range(5):
#     for j in range(1,i+1):
#         hash+="**"
#     print(hash)




# hash = "*"
# for i in range(5):
#     print(hash)
#     hash+="**"
#     if(i==2):
#         hash="***"
        
        
        
        
        
userInput=int(input("Enter the number of rows :- "))
userInput2=int(input("Enter the number of coloumns :- "))
userInput3=input("Enter the sumbol to use :-")
for i in range(userInput):
    star=""
    for j in range(userInput2):
        star+=userInput3
    print(star)