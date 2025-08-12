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
    "1. What is the capital city of Nepal?",
    "2. Who is the first programmer of the world?",
    "3. What is the capital of France?",
    "4.  Who wrote the play Romeo and Juliet?",
    "5. What is the chemical symbol for water?",
    "6. How many continents are there on Earth?",
    "7. What planet is known as the Red Planet?",
    "8. Who was the first President of the United States?",
    "9. Who was the first President of the Nepal?",
    "10. What is the hardest natural substance on Earth?",
    "11. Who painted the Mona Lisa?",
    "12.  What is the largest ocean in the world?",
    "13. In what year did World War II end?",
    "14. Which animal is known as the King of the Jungle",
    "15. What is the boiling point of water at sea level in Celsius?",
    "16. What is the longest river in the world?",
    "17. Who invented the light bulb?",
    "18.  What is the largest planet in our solar system?",
    "19. What is the smallest prime number?",
    "20. What is the currency of Japan?"
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
    let p=1
    userInput=Number(prompt("Enter any number between 0 to 19 to play a quiz game (minimum:5 and maximum:19) :- "))
    for(let i=0;i<=userInput;i++){
        let ask=questions[i]
        let askk=prompt(ask +" :- ")
        console.log(askk)
            if(askk===answers[i]){
                console.log(`You got the correct answer and your point is ${p++}`)
                console.log()
            }
            else{
                console.log("Sorry!You wrote the wrong answer!")
            }
    }