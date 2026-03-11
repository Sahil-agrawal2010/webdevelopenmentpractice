# Recursion is the method of repeting some task for a number of times untill the required output is calculated.
# Recursion functions are those type of function that keeps on calling itself.
# A recusive function should be able to call itself,have a prper stopping condition else it will run infinitely.



# def fact(n):
#     if n==0 or n==1:
#         return 1
#     else:
#         return n*fact(n-1)
# print(fact(5))




def fibo(u,a,b):
    if u==1:
        return exit()
    else:
        c=0
        c=a+b
        print(c)
        return fibo(u=u-1,a=b,b=c)
print(fibo(11,0,1))