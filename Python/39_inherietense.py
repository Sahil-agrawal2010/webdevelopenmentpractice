# Inherietence is a key feature in OOP where a class can inherit method , properties of another class
# There are several types of inherietense like :-
# 1) Single level
# 2) Multi level
# 3) Multiple 
# 4) Hiarcahial




# Single Level :- 
# class Parent():
#     def parent_method(self):
#         print("This is a parent method")
        
        
        
# class Child(Parent):
#     def child_method(self):
#         print("This i a child method")
        
        
        
# obj=Child()
# obj.child_method()
# obj.parent_method()





# Multi level :- 



class Parent():
    def parent_method(self):
        print("This is a parent method")
        
        
        
class Child(Parent):
    def child_method(self):
        print("This is a child method")
        
        
class Children(Child):
    def children_method(self):
        print("This is a children mehod")
obj=Children()
obj.children_method()
obj.parent_method()
obj.child_method()




# Multiple :- 
class A():
    def a_mehod(self):
        print("I am from A")
class B():
    def b_mehod(self):
        print("I am from B")
class C():
    def c_mehod(self):
        print("I am from C")
class D(A,B,C):
    def d_mehod(self):
        print("I am from D")
        
        
obj=D()
obj.a_mehod()
obj.b_mehod()
obj.c_mehod()
obj.d_mehod()