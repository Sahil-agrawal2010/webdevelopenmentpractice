static method is used for accessing any values without creating object

class Calculate{
    static value = 0
    static cube(a){
        return a*a*a
    }
}
console.log(Calculate.value)
console.log(Calculate.cube(5))


class Haha{
    static count = 0
    constructor(){
        Haha.count ++
    }
    
    static getTotal(){
        console.log("The total number of users is : "+Haha.count)
    }
}

let obj1 = new Haha()
let obj2 = new Haha()
Haha.getTotal()             


Write a programme 1.Static method to validate phone number length
Rule: If phone number length is not 10, return "Invalid"
class number{
    static totalNumber(numberr){
        if(numberr.length===10){
            return "okkk good job"
        }
        else{
            return "Either your number is less than ten(10) or more than ten(10)!"
        }
    }
}
console.log(number.totalNumber("9852673915"))
console.log(number.totalNumber("98526739154"))


2. Static login checker without creating user
Task:
Create a class with a static method that takes username and password and returns success/fail.
class idddd{
    static user(userName,pass){
        if(userName==="admin" && pass===1234){
            return `Login sucessful!`
        }
        else{
            return `Login fail!`
        }
    }
}
console.log(idddd.user("Sahil","sahilag"))
console.log(idddd.user("admin",1234))


3. Static method to capitalize the first letter of a string
class student{
    static user(name){
        return name[0].toUpperCase()+name.slice(1)
    }
}
console.log(student.user("sahil"))


4. Generate Random 6-digit OTP using static 
class otp{
    static otps(){
        return Math.floor(Math.random()*1000000)
    }
}
console.log(otp.otps())


class user{
  static total(userr){
   switch(userr){
case "sahil":
console.log("PAssword guessed!")
break
case "agrawal":
console.log("PAssword guessed!")
break
default:
console.log("The entered value is incorrect!")
}
  }
}
user.total("agrawal")


const userInput=prompt("Enter to play okk :- ")
const chooser=("rock","paper","scissor")
const l=(Math.floor(Math.random()*4))
let arrow= l=>{
if(l===1){
    console.log("Computer:rock")
}
else if(l===2){
    console.log("Computer:paper")
}
else{
    console.log("Computer:scissor")
}
}
arrow(l)
let arrow2= (userInput,l)=>{
    if(userInput==="paper" && l==="paper"){
        console.log("Draw!")
    }
    else if(userInput==="paper" && l==="rock"){
        console.log("User won!")
    }
        else if(userInput==="paper" && l==="scissor"){
        console.log("Computer won!")
    }
        else if(userInput==="rock" && l==="rock"){
        console.log("Draw!")
    }
        else if(userInput==="rock" && l==="paper"){
        console.log("Computer Won!")
    }
        else if(userInput==="rock" && l==="scissor"){
        console.log("User won!")
    }
        else if(userInput==="scissor" && l==="scissor"){
        console.log("Draw!")
    }
        else if(userInput==="scissor" && l==="rock"){
        console.log("Computer won!")
    }
        else if(userInput==="scissor" && l==="paper"){
        console.log("User won!")
    }
    else{
        console.log("Unexpected error!")
    }
}
arrow2(userInput,l)

let c=0
let y=0
let arrow2= ()=>{
const userInput=prompt("Enter to play okk :- ")
const chooser=("rock","paper","scissor")
const l=(Math.floor(Math.random()*3))
if(l===1){
    console.log("Computer:rock")
}
if(l===2){
    console.log("Computer:paper")
}
if(l===0){
    console.log("Computer:scissor")
}
if(userInput===l){
        console.log("Draw!")
    }
if(userInput==="paper" && l===1){
        console.log("User won!")
        c++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)

    }
if(userInput==="paper" && l===0){
        console.log("Computer won!")
        y++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="rock" && l===2){
        console.log("Computer Won!")
        y++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="rock" && l===0){
        console.log("User won!")
        c++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="scissor" && l===1){
        console.log("Computer won!")
        y++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="scissor" && l===2){
        console.log("User won!")
        c++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="" && l===""){
        console.log("Unexpected error!")
    }
}
let playAgain=()=>{
    full=true
    while(full){
        console.log("")
            userInput2=prompt("Enter y if you want to play agin and no if you don't want to play again:- ")
            if(userInput2==="y"){
                console.log("")
                arrow2()
                console.log("")
            }
            if(userInput2==="no"){
                console.log("Thank you! visit again!")
                full=false
            }
    }
}
let final=()=>{
    arrow2()
    playAgain()
}
final()


class toPlay{
    static user(){
let c=0
let y=0
let arrow2= ()=>{
const userInput=prompt("Enter to play okk :- ")
const chooser=("rock","paper","scissor")
const l=(Math.floor(Math.random()*3))
if(l===1){
    console.log("Computer:rock")
}
if(l===2){
    console.log("Computer:paper")
}
if(l===0){
    console.log("Computer:scissor")
}
if(userInput===l){
        console.log("Draw!")
    }
if(userInput==="paper" && l===1){
        console.log("User won!")
        c++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)

    }
if(userInput==="paper" && l===0){
        console.log("Computer won!")
        y++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="rock" && l===2){
        console.log("Computer Won!")
        y++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="rock" && l===0){
        console.log("User won!")
        c++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="scissor" && l===1){
        console.log("Computer won!")
        y++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="scissor" && l===2){
        console.log("User won!")
        c++
            console.log(`The score of user is ${c} and the score of computer is ${y}!`)
    }
if(userInput==="" && l===""){
        console.log("Unexpected error!")
    }
}
let playAgain=()=>{
 let   full=true
    while(full){
        console.log("")
           let userInput2=prompt("Enter y if you want to play agin and no if you don't want to play again:- ")
            if(userInput2==="y"){
                console.log("")
                arrow2()
                console.log("")
            }
            if(userInput2==="no"){
                console.log("Thank you! visit again!")
                full=false
            }
    }
}
let final=()=>{
    arrow2()
    playAgain()
}
final()
}
}
toPlay.user()\


  
  arrow = () => {
      let numb = true
      let randomm = Math.floor(Math.random() * 100)
      console.log(randomm)
      while (numb){
      let userInput = prompt("Enter any number my computer has also choosen one number :- ")
      if(userInput == randomm){
              console.log("Wow!You gussed the number correct!")
              numb=false
          }
          if (userInput > randomm) {
              console.log("Guess a bit low!")
          }
          if (userInput < randomm) {
              console.log("Guess a bit high!")
          }
      }
  }
  arrow()

  
  let questions = [
      "•What is the capital city of Nepal?",
      "•Who is the first programmer of the world?",
      "•What is the capital of France?",
      "•Who wrote the play Romeo and Juliet?",
      "•What is the chemical symbol for water?",
      "•How many continents are there on Earth?",
      "•What planet is known as the Red Planet?",
      "•Who was the first President of the United States?",
      "•Who was the first President of the Nepal?",
      "•What is the hardest natural substance on Earth?",
      "•Who painted the Mona Lisa?",
      "•What is the largest ocean in the world?",
      "•In what year did World War II end?",
      "•Which animal is known as the King of the Jungle",
      "•What is the boiling point of water at sea level in Celsius?",
      "•What is the longest river in the world?",
      "•Who invented the light bulb?",
      "•What is the largest planet in our solar system?",
      "•What is the smallest prime number?",
      "•What is the currency of Japan?"
  ]
  let answers = [
      "Kathmandu",
      "Ada Lovelace",
      "Paris",
      "William Shakespeare",
      " H2O",
      "7",
      "Mars",
      "George Washington",
      "Ram baran yadav",
      "Diamond",
      "Leonardo da vintchie",
      "Pacaffic ocean",
      "1945",
      "Lion",
      "100",
      "Nile river",
      "Thomas elva edition",
      "Jupiter",
      "2",
      "Yen"
  ]
  let p = 1
  userInput = Number(prompt("Enter any number between 0 to 19 to play a quiz game (minimum:5 and maximum:19) :- "))
  for (let i = 0; i <= userInput; i++) {
      randomm = Math.floor(Math.random() * 20)
      let ask = questions[randomm]
      let askk = prompt(ask + " :- ")
      console.log(askk)
      if (askk === answers[randomm]) {
          console.log(`You got the correct answer and your point is ${p++}`)
          console.log()
      } else {
          console.log("Sorry!You wrote the wrong answer!")
      }
  }

  
  console.log("Hellow User!Welcome to our new bank")
let money=0
let arrow=()=>{
    console.log("")
let userInput=prompt("What do you want to do in our bank deposite money if yes then type (deposite),withdraw money if yes then type(withdraw) or do you want to check your balance if yes then type (balance) :- ")
if(userInput=="deposite"){
   let ask=Number(prompt("Enter the amount of money which you want to deposite:- "))
   money=money+ask
   console.log(`Your bank balance is ${money}`)
}
if(userInput=="withdraw"){
    let ask2=Number(prompt("Enter the amount of money which you want to withdaw :- "))
    if(ask2>=money){
    console.log("Sorry user you have insufficient amount in your account!")
}
    if(money>ask2){
    money=money-ask2
    console.log(`Your bank balance is ${money}`)
    }
} 
if(userInput=="balance"){
    console.log(money)
}
}
let arrow2=()=>{
    let desire=true
        while(desire){
    let userInput2=prompt("Do you want to again continue the process press Y to continue and press N to end :- ")
    if(userInput2==="Y"){
  console.log("")
        arrow()
    }
    if(userInput2==="N"){
        desire=false
    }
    }
}
let arrow3=()=>{
arrow()
arrow2()
}
arrow3()


let array1=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "/", "?"]
let userInput=prompt("Enter the text to make it encrupt :- ")
let array2=["F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", 
  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
  "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", 
  "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", 
  "+", "[", "]", "{", "}", "|", ";", ":",",", ".", "<", ">", "/", "?", "A", "B", "C", "D", "E"]
  console.log(array1.length)
  console.log(array2.length)

  Write a programme to creat Mood predictor user will input mood and give output of its mood through emoji
  Write a programme to creat a Food oder simulator to ask user what do you want to eat before it display the menu and ask him how much meal do you want to eat and ask user if he wants to eat more than ask him else print bill
  Write a programme to make an compactiblietiy programme of name and print emoji accordingly to its percentage
  Write a programme to creat a password cracker to ask user password and print if you craked it
  Write a programme to creat a library simulator to display its liburary book and ask him if he wants to buy more else see its bill