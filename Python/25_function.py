# Functions in python are a block of code.Used tyo perform specific task whenever it is called.
# Function is defined using a keyword def.
# There are two types of function in python:
# 1) Built-In-Function
# 2) User-Defined-Function






# def first_function():
#     print("Hello!World!")
# first_function()




# def function_second():
#     pass
# function_second()





# def area(l,b):
#     return(l*b)
# Areas=area(10,20)
# print(f"The areas is {Areas}")





first_name=input("Enter the first name :- ")
last_name=input("Ente the second name :- ")
def name(first_name,last_name):
    return (first_name.upper()+" "+last_name.upper())
Names=name(first_name,last_name)
print(Names)