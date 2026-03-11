# import random
# numb=[random.randint(100,2000),random.randint(100,2000),random.randint(10,2000),random.randint(100,2000),random.randint(100,2000),random.randint(100,2000),random.randint(100,2000),random.randint(100,2000),random.randint(100,2000),random.randint(100,2000)]
# divisible=[i for i in numb if i%5==0 and i%10==0]
# nonedivisible=[j for j in numb if j%5!=0 and j%10!=0]
# print(divisible)
# print(nonedivisible)





# fruits=["Apple","Mango"]
# length=[len(i) for i in fruits ]
# print(length)




# name="Programming".upper()
# names=list(name)
# vowle=[i for i in names if i=="A" or i=="E" or i=="I" or i=="O" or i=="U"]
# print(vowle)




# numb=[10,-3,4,-6,7,-2]
# positive_zero=[i if i>=0 else 0 for i in numb]
# print(positive_zero)





# Remove empty srtings




empty=["Apple","","Ball","","Call","","Doctor"]
remove_empty=[i if len(i)>0 else None for i in empty]
print(f"{remove_empty}")





# First letter of each word




words=["Avacado","Ballon","Cat","Dark"]
first_letter=[i[0] for i in words]
print(first_letter)





# Celcious to farahnite




celcius=[100,37,80]
frahnite=[(i*(9/5)+32) for i in celcius]
print(frahnite)





# Square in tuple [(1,1)]





squares=[((i),(i*i)) for i in range(1,6)]
print(squares)



