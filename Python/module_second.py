# Name="Sahil Agrawal"
# Age=15




# def area(l,b):
#     print(f"THe area of the given data is {l*b}")
    
# def circumference(radius):
#     print(f"The circumference of the circle is {2*3.1415*radius}")
    
# def add(a,b):
#     print(f"THe sum of the given data is {a+b}")
    
# def subtract(a,b):
#     return a-b


def calculator(a,b,operator):
    def addition(a,b):
        print(f"The sum of the data is {a+b}")
    
    def subtraction(a,b):
        print(f"THe subraction of data is {a-b}")
    
def product(a,b):
    print(f"THe product of the given data is {a*b}")
    
def division(a,b):
    print(f"The division of the given data is {a/b}")
if(operator=="+"):
    addition(a,b)
elif(operator=="-"):
    subraction(a,b)
elif(operator=="*"):
    product(a,b)
elif(operator=="/"):
    division(a,b)
else:
    print("Error!")