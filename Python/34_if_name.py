# If __name__=="__main__" :- Is a very important pattern in python programming.
# A python programme uses the condition if __name__=="__main__" to only run the code inside the if statement when the programme is run directly by the python intepretter.
# The code inside the if statement is not executed when the files code is imported as a module.
# (If __name__) is a variable in a python.
# Python has a large number of special variable that begina nd end with double underscore(__). They are called as dunder(__).
# (__name__) is pronounced as dunder name.
print(__name__) # __main__ will be the output as we are in our main python file,not inside a certain modules.



import module_second as ms
print(ms.__name__)
# Now here we have imported module_second as ms.So whenever we print __name__ after importing certain module than we will get output as that particular module name.
# The main job of __name__ keyword is to record the name of the currently running module or script.