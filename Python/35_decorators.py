# Decorator is a function that extents the behaviour of another function without modifying the base funciton.
# We should pass the base function as an argunment to the decorator.
# It is a powerful and versatile tool that allows us to modify the behaviour of the function and extents its functionality without modifying the code written in that function.
# Decorator always returns a function.




def decorator_function(func):
    def inner_function():
        print("Before")
        func()
        print("After")
    return inner_function




@decorator_function
def hello():
    print("Hello World")
hello()