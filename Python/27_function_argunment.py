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
# def add(a,b):
#     print(f"The sum is {a+b}")
# add(10,20)




# 4)Variable-Length Argunment:-
# The name of * is unpacking argunment.
# * menas args and ** means kwargs 
# def numb(*n):   # *n makes hte tuple and add data in it.
#     print(n)
# numb(10,20,30,40,50,60,70,80)




# def intro(*i):
#     print(f"THe name of the given data is {i[0]}.Age is {i[1]}")
# intro("Sahil Agrawal",15)




def intro(**i):
    print(f"The name of the given data is {i.get("Name")}.Age is {i.get("Age")}")
intro(Name="Sahil Agrawal",Age=15)