userInput=int(input("Enter any number between one 1 to seven 7 :- "))
match userInput:
    case 1:
        print("Sunday")
    case 2:
        print("Monday")
    case 3:
        print("Tuesday")
    case 4:
        print("Wednesday")
    case 5:
        print("Thursday")
    case 6:
        print("Friday")
    case 7:
        print("Saturady")
    case _:
        print("Invalid Number")