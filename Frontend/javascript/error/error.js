console.log(10/0)
console.log(a/0)

Handeling real world errors in java script or any other programming languages is known as error handling 
In java script we use try,catch,finally,throw to handel all types of errors
Example:- let's we are buliding a payment system,user enters a card number.if The number is invalid our application/app might crash so at that time we will catch errors show a message ,and continue running the application/app so this is what error handeling is made for.

Try:-This is the block where we try to run some Code.
Catch:- This is the block where errors are caught.
Finally:- This is the optional block which runs whatever happens.
Throw:- This is the block where we creat our manual errors and throw it.


userInput = 10
try{
    let result = userInpu / 0
}catch(error){
    console.log("userInpu is not defined, please define it or use userInput variable")
}finally{
    console.log("ekjgneijvnqeijvnerqjoiv")
}

try{
    let userInput = Number(prompt("Enter any number : "))
    // if(userInput === "" || typeof(userInput)==='string'){
    //     userInput.toFixed()
    // }
    // let real = Number(userInput)
    // if(isnan(real)){
    //     real.toFixed()
    // }
    if(typeof(userInput)=="number"){
        userInput.toFixed()
    }
    if(!isNan(userInput)){
        userInput.toFixed()
    }
    console.log("You have entered this number : "+userInput)
}catch(error){
    alert("Please enter a real number")
}


let database = ["Nayan", "Sita", "Gita", "Roshan", "Rahul"]
let name = prompt("Enter your user name : ")

try{
    if(!database.includes(name)){
        name.toFixed()
    }
    else{
        console.log("You are registered.")
    }
}catch(error){
    alert("You are not registered!")
}


let database = ["Nayan", "Sita", "Gita", "Roshan", "Rahul"]
let name = prompt("Enter your user name : ")

try{
    if(!database.includes(name)){
        throw "Sorry you are not registered."
    }
    else{
        console.log("You are registered.")
    }
}catch(error){
    alert(error)
}


age = parseInt(prompt("Enter your age : "))
try{
    if(age<18){
        throw "Sorry! You are too small to vote."
    }
    else{
        console.log("You can vote.")
    }
}catch(err){
    console.log(err)
}


let input=prompt("Enter your name here :- ")
try{
    if(input===""){
        throw "Please enter your name here!"
    }
}catch(error){
    console.log(error)
}


let input=[1,2,3,4,"sahil",5,6,7]
for(let i=0;i<=input.length-1;i++){
try{
    if(isNaN(input[i])){
        throw "Here is a string value!"
    }
    else{
        console.log(input[i])
    }
}catch(error){
    console.log(error)
}
}

    let numb1=Number(prompt("Enter the first number :- "))
    let numb2=Number(prompt("Enter the second number :- "))
let arrow= (numb1,numb2) =>{
    try{
        if(isNaN(numb1) || isNaN(numb2)){
            throw "Enter the number not a string! "
        }
        else if(numb2===0){
            throw "Enter second number more than zero."
        }
        else{
            return numb1/numb2
        }
    }catch(error){
        return error
    }
}
console.log(arrow(numb1,numb2))