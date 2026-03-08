# Dictionary is the collection of key value pairs.
# It is odered and mutable.
# No dublicate value is allowed.



# dict1={
#     "Name":"Sahil Agrawal",
#     "Age":15,
#     "School":"Green field world school",
#     "is_Married":False
# }
# print(dict1)
# print(type(dict1))
# print(dict1["Name"])
# print(dict1.get("Name"))
# print(dict1.keys())
# print(dict1.values())






# for items in dict1.keys():
#     print(items)
    
    


# for key,value in dict1.items():
#     print(f"{key}:{value}", end=",\n")




# How can we update data in side dictionary
# dict1={
#     "Name":"Sahil Agrawal",
#     "Age":15,
#     "School":"Green field world school",
#     "is_Married":False
# }
# dict2={
#     "id":101,
#     "Hobby":"Everything"
# }
# dict1.update(dict2)
# dict1.update({
#     "Section":"A",
#     "Address":"Birtamode"
# })
# print(dict1)




# dict1={}
# dict2=dict()
# print(type(dict1))
# print(type(dict2))




# Some methods of dictionary
dict1={
    "Name":"Sahil Agrawal",
    "Age":15,
    "School":"Green field world school",
    "is_Married":False
}
# print(dict1.clear())
# del dict1 #To remove th dictionary completely.
# print(dict1)
# dict1.pop("Name") # Pop is used to remove the specific thing from the dictionary.
# print(dict1)
dict1.popitem() # Pop item is used to remove the last item automatiically
print(dict1)