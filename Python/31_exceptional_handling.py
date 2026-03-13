Balance=5000
class more_withdrawl(Exception):
    pass
try:
    userInput=int(input("Enter your withdrawla amount :- "))
    if userInput>5000:
        raise more_withdrawl()
except more_withdrawl:
    print(f"Your balance is {Balance} your withdrawl is more than the balance please change the withdrawl amount.")
except ValueError:
    print(f"Please enter the string not the integer")
finally:
    print(f"Thank you for using ATM")