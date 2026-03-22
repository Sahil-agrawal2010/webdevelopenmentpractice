# Constructor is a special type of member function that is called automatically when an object is created , they help in initilization.
# There are two types of constructor in general :- 
# 1) Default Constructor
# 2) Parameterrise Constructor



# class Default:
#     def __init__(self):
#         print("This is a default constructor")
        
        
        
        
# obj = Default()





# class Parameterise:
#     def __init__(self,name,age):
#         print("This is a parameterise constructor")
#         # self.name=name
#         # self.age=age
        
        
#     def display(self):
#         print(f"My name is {self.name} and i am {self.age} years old.")
        
        
        
# obj1=Parameterise("Sahil Agrawal",15)

# obj1.display()




import math
class Area:
    def __init__(self,l,b,r):
        self.length=l
        self.breadth=b
        self.radious=r
        
    def display_rectangle(self):
        print(f"The area of rectangle is {self.length*self.breadth}")
    def display_circle(self):
        print(f"The area of circle is {math.pi*self.radious*self.radious}")
        
        
        
        
obj=Area(5,2,7)
obj.display_rectangle()
obj.display_circle()