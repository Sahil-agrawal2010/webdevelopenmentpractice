questions=[
        "WHAT IS THE CAPITAL OF FRANCE?",
    "WHO WROTE ROMEO AND JULIET?",
    "WHAT IS THE LARGEST PLANET IN OUR SOLAR SYSTEM?",
    "WHAT IS THE CHEMICAL SYMBOL FOR WATER?",
    "WHO PAINTED THE MONA LISA?",
    "WHAT IS THE FASTEST LAND ANIMAL?",
    "HOW MANY CONTINENTS ARE THERE?",
    "WHAT IS THE HARDEST NATURAL SUBSTANCE?",
    "WHO INVENTED THE TELEPHONE?",
    "WHAT IS THE SQUARE ROOT OF 64?"
]
answers=[
        "PARIS",
    "WILLIAM SHAKESPEARE",
    "JUPITER",
    "H2O",
    "LEONARDO DA VINCI",
    "CHEETAH",
    "SEVEN",
    "DIAMOND",
    "ALEXANDER GRAHAM BELL",
    "EIGHT"
]
userInput_ask_number=int(input("How many quiz questions do you want :- "))
userInput=input("Do you wnat negative marking :- ").upper()
counter=0
if userInput=="NO":
    for i in range(0,userInput_ask_number):
        print(questions[i])
        userInput_answer=input("Answer :- ").upper()
        if userInput_answer==answers[i]:
            print("Correct")
            counter=counter+1
        else:
            print("Incorrect")
    print(f"Score {counter}")
if userInput=="YES":
    for i in range(0,userInput_ask_number):
        print(questions[i])
        userInput_answer=input("Answer :- ").upper()
        if userInput_answer==answers[i]:
            print("Correct")
            counter=counter+1
        else:
            print("Incorrect")
            counter=counter-1
    print(f"Score {counter}")