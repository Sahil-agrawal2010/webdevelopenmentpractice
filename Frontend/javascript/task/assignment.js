// Assignment operators in java script are used to assign values to any variables and combine assignment with other operations
// Some assignment operators of java script are:=,+=,-=,*=,/=,%=

// all sign
let sum=50
let sub=60
let product=70
let division=80
let modules=90
sum+=50
sub-=50
product*=4
division/=20
modules%=46
console.log("+ sign used "+sum)
console.log("- sig used "+sub)
console.log("* sign used "+product)
console.log("/ sign used "+division)
console.log("% sign used "+modules)

// multiply
let number=5
console.log("5X1="+number*1)
console.log("5X2="+number*2)
console.log("5X3="+number*3)
console.log("5X4="+number*4)
console.log("5X5="+number*5)
console.log("5X6="+number*6)
console.log("5X7="+number*7)
console.log("5X8="+number*8)
console.log("5X9="+number*9)
console.log("5X10="+number*10)

// let number=prompt("Enter the number:-")
// console.log(number+"X1="+number*1)
// console.log(number+"X2="+number*2)
// console.log(number+"X3="+number*3)
// console.log(number+"X4="+number*4)
// console.log(number+"X5="+number*5)
// console.log(number+"X6="+number*6)
// console.log(number+"X7="+number*7)
// console.log(number+"X8="+number*8)
// console.log(number+"X9="+number*9)
// console.log(number+"X10="+number*10)

// let num= Number(prompt("Enter the number :-"))
// if (num>0){
// console.log("The number is positive")
// } 

// let num= Number(prompt("Enter the number :-"))
// if (0>num){
// console.log("The number is negative")
// }

// let num= Number(prompt("Enter the number :-"))
// if (num==0){
// console.log("The number is exacately zero")
// }

// let num= Number(prompt("Enter the number :-"))
// if (num%2==1){
// console.log("The number is odd")
// }
// else{
// console.log("The number is even")
// }

// let num= Number(prompt("Enter the marks :-"))
// if (num>=80){
// console.log("Congo!Distinction")
// }
// else if (num>=70){
//     console.log("Congo!First division")
// }
// else if (num>=60){
//     console.log("Coongo!Second division")
// }
// else if (num>=50){
//     console.log("Congo!Third division")
// }
// else{
// console.log("Congo!Fail")
// }

// let num= Number(prompt("Enter the number which you want to check to be divisible by 7 and 13 :-"))
// if(num%7==0 && num%13==0){
//     console.log("The number is divisible by 7 and 13")
// }
// else{
//     console.log("The number is not divisible by 7 and 13")
// }

// let num= Number(prompt("Enter the number which you want to check to be divisible by 10 :-"))
// if(num%10==0){
//     console.log("The number is divisible by 10")
// }
// else{
//     console.log("The number is not divisible by 10")
// }

// let num=Number(prompt("Enter any number between one and seven to see their dates :-"))
// if(num==1){
// console.log("Today is Sunday!")
// }
// else if(num==2){
//     console.log("Today is Monday!")
// }
// else if(num==3){
//     console.log("Today is Tuesday!")
// }
// else if(num==4){
//     console.log("Today is Wednesday!")
// }
// else if(num==5){
//     console.log("Today is Thursday!")
// }
// else if(num==6){
//     console.log("Today is Friday!")
// }
// else if(num==7){
//     console.log("Today is Saturday!")
// }
// else{
//     console.log("You are not obeying my conditions!")
// }

// let num=Number(prompt("Enter your marks :-"))
// if (num>=90){
//     console.log("A+")
// }
// else if (num>=80){
//     console.log("A")
// }
// else if (num>=70){
//     console.log("B+")
// }
// else if (num>=60){
//     console.log("B")
// }
// else if (num>=50){
//     console.log("C+")
// }
// else if (num>=40){
//     console.log("C")
// }
// else{
//     console.log("You are fail!")
// }

// let num=Number(prompt("Enter the number which you want to check :- "))
// if(num>0){
//     if(num%2==0){
//         console.log("The number is positive and even")
//     }
//     else{
//         console.log("The number is positive and odd")
//     }
//     }
// else{
//     if(num%2==0){
//         console.log("The number is negative and even")
//     }
//     else{
//         console.log("The number is negative and odd")
//     }
// }

// let useramount=Number(prompt("Enrter the amount to see the discount :- "))
// if(useramount<=10000){
//     discount1=useramount*(2/100)
//     console.log("Your total amount is "+useramount)
//     console.log("Your discount amount is "+discount1)
//     let total1=useramount-discount1
//     console.log("Your total amont after discount is "+total1)
// }
// else if(useramount<=50000){
//     discount1=10000*(2/100)
//     remainingamount1=useramount-10000
//     discount2=remainingamount1*(10/100)
//     let totaldiscount1=discount1+discount2
//      console.log("Your total amount is "+useramount)
//     console.log("Your discount amount is "+totaldiscount1)
//      let total1=useramount-totaldiscount1
//     console.log("Your total amont after discount is "+total1)
// }
// else{
//       discount1=10000*(2/100)
//      discount2=50000*(10/100)
//     let remainingamount4=60000
//     let remaingamount8=useramount-remainingamount4
//     discountamount4=remaingamount8*(15/100)
//     let totaladiscount2=discount1+discount2+discountamount4
//      console.log("Your total amount is "+useramount)
//     console.log("Your discount amount is "+totaladiscount2)
//      let total2=useramount-totaladiscount2
//     console.log("Your total amont after discount is "+total2)
// }

// let time=Number(prompt("Enter the  time :- "))
// if( time!=0 && time<=12){
//     console.log("Good Morning!")
// }
// else if(time>=13 && time<=18){
//     console.log("Good Afernoon!")
// }
// else if(time>=19 && time<=23){
//     console.log("Good Night!")
// }
// else{
//     console.log("Please enter valid time! "+time+" is not a valid time.")
// }

// let weigt=Number(prompt("Enter the weight :- "))
// let height=Number(prompt("Enter your height (in meter) :- "))
// BMI=weigt/(height*height)
// console.log("Your BMI is : "+BMI.toFixed(5))
// if(BMI<=18.9){
//     console.log("You are very underweight!")
// }
// else if(BMI>=19 && BMI<=24.9){
//     console.log("Your are a normal human!")
// }
// else if(BMI>=25 && BMI<=29.9){
//     console.log("Your are very overweight!")
// }
// else if(BMI>=30 && BMI<=34.9){
//     console.log("Your are having obesity case 1!")
// }
// else if(BMI>=35 && BMI<=39.9){
//     console.log("Your are having obesity case 2!")
// }
// else{
//     console.log("You will die soon byee!")
// }

// let userInput = prompt("Enter any character : ")
// if(userInput == 'a' || userInput == 'e' || userInput == 'i' || userInput == 'o' || userInput == 'u' || userInput == 'A' || userInput == 'E' || userInput == 'I' || userInput == 'O' || userInput == 'U'){
//     console.log(userInput + " is Vowel.")
// }else{
//     console.log(userInput + " is Consonant.")
// }

// let year=Number(prompt("Enter the year! :-"))
// if (year%4==0){
//     console.log("It's a leap year!")
// }
// else{
//     console.log("It's not a leap year")
// }

// let a=Number(prompt("Enter the first number:- "))
// let b=Number(prompt("Enter the second number:- "))
// let c=prompt("Enter the operator such as(+,-,*,/):- ")
// if(c=="+"){
//     let ans=a+b
//     let d=prompt("The answe is:- "+ans)
// }
// else if(c=="-"){
//     let ans=a-b
//     let d=prompt("The answe is:- "+ans)
// }
// else if(c=="*"){
//     let ans=a*b
//     let d=prompt("The answe is:- "+ans)
// }
// else if(c=="/"){
//     let ans=a/b
//     let d=prompt("The answe is:- "+ans.toFixed(2))
// }
// else{
//     prompt("follow the rules!")
// }

// userChoice = prompt("Enter your choice among [Rock, Paper, Scissor : ] : ")
// compChoice = "Rock"
// if (userChoice == compChoice){
//     console.log("Draw Points!")
// }else if(userChoice == "Paper" && compChoice == "Rock"){
//     console.log("You won!")
// }else if(userChoice == "Scissor" && compChoice == "Rock"){
//     console.log("Computer won!")
// }else{
//     console.log("Sorry! Enter valid input.")
// }

// let a=Number(prompt("Enter the first angle:- "))
// let b=Number(prompt("Enter the second angle:- "))
// let c=Number(prompt("Enter the third angle:- "))
// let sum=a+b+c
// if(sum==180){
//     console.log("It's a perfect triangle!")
// }
// else{
//     console.log("It's not a perfect triangle")
// }

// let a=Number(prompt("Enter the temperature of your place:- "))
// if(a<=15){
//     console.log("It's very much cold!")
// }
// else if(a>=16 && a<=30){
//     console.log("It's normal!")
// }
// else {
//     console.log("It's very much hot!")
// }

// swap
// let a=5
// let b=8
// let c=0
// c=a
// a=b
// b=a
// console.log(a)
// console.log(b)

// let d=5
// let e=8
// let c=10
// let a=0
// a=d
// e=c
// c=a
// d=e
// console.log(e)
// console.log(c)
// console.log(d)