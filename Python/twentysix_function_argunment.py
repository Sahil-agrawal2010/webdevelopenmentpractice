# We can send data in argunment in many ways such as:- 
# 1) Default argunment :-
# def add(a=4,b=3):
#     return a+b
# print(add(5,6))



# 2)Key-Word Argunment :-
# def names(fname,mname="",lname="Agrawal"):
#     print(fname,mname,lname)
# names(fname="Sahil",lname="Gindal")
# names(mname="Kumar",fname="Sahil")




# 3) Required argunment :-
def add(a,b):
    print(f"The sum is {a+b}")
add(10,20)