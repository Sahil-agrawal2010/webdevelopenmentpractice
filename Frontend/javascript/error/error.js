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