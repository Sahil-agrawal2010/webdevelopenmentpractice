import random
print(random)
print(random.random())
print(random.randint(1,10)) #It is same as randrange but it an not jump numbers.
print(random.randrange(1,20,5)) #We can jump numbers over here like here it is 6 but output is 11.




option=["Rock","Paper","Scissor"]
random.shuffle(option)    #It is used to suffle the index.
option=random.choice(option)    #It is used to choose any one from the list.
print(option)