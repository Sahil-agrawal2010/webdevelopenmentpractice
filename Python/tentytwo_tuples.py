# Tuples are used to store multiple values inside a small brackets/parenthisis ().
# It is odered and immutable.Dublicate data is allowed in it.
# It is fast.
# Tuples are made by more than one value.If there is only one value then teh type will be returened as string.
# We cannnot add anything at the last of tuples using method like append,add.



# tuple1=("Sahil","Rohan",22,21,False,True,None,"Sahil")
# print(tuple1)
# print(type(tuple1))




# tuple2=tuple()
# print(type(tuple2))




# Some methods in tuples :-
fruits=("Apple","Mango","Banana","Papaya","Apple")
print(fruits)
print(len(fruits))
print("Yes! apple is there in the tuple." if "Apple" in fruits else "No ! It is not there.")
print(fruits.index("Papaya"))
print(fruits.count("Apple"))
# Either we can add by doing this :- 
list1=list(fruits)
list1.append("Guava")
fruits2=tuple(list1)
print(fruits2)