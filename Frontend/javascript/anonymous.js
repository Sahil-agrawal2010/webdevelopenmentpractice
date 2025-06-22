let myFunc = function (a,b){
    return a+b
}

function nextFunction(num1, num2){
    console.log(num1+num2)
}

nextFunction(myFunc(2,3), 10)

let a=Number(prompt("Enter first number :-"))
let b=Number(prompt("Enter second number :-"))
let myFunc=function(a,b){
    return a*b
}
myFunc(a,b)
console.log(`The product is ${myFunc(a,b)}`)

let myFunc=function(a,b){
    return a-b
}

function nextfunction(value){
    if(value<0){
        console.log("The result is negative!")
    }
    else if(value>0){
        console.log("The result is positive!")
    }
    else{
        console.log("The result is zero")
    }
}
let a=Number(prompt("Enter the first number :-"))
let b=Number(prompt("Enter the second number :-"))
nextfunction(myFunc(a,b))

// Creat an anonymous funtion that  returns  the square of a Number.Use it inside the main function to print the square of 5

let myFunc=function(a){
    return a*a
}
console.log(`The square of 5 is ${myFunc(5)}`)

// Write an anonymous function to return the same operator and make a calculator from that 

let myFunc=function(operator){
    return operator
}
function nextFunction(sign,a,b){
    if(sign=="+"){
        console.log(a+b)
    }
      else if (sign=="-"){
        console.log(a-b)
    }
      else if (sign=="*"){
        console.log(a*b)
    }
      else if (sign=="/"){
        console.log(a/b)
    }
    else{
        console.log("Enter the correct operator.Please!!")
    }
}
let operator=prompt("Enter any operator like + - * / :- ")
let a=Number(prompt("Enter the first number :- "))
let b=Number(prompt("Enter the second number :- "))
console.log(myFunc(operator))
nextFunction(operator,a,b)

// Write an anonymous function to creat a claculator and check weahter the value is positive or negative
let myFunc=function(operator,a,b){
    if(operator=="+"){
    console.log(`It's sum is ${a+b}`)
    }
     else if(operator=="-"){
    console.log(`It's difference is ${a+b}`)
     }
     else if(operator=="*"){
    console.log(`It's product is ${a+b}`)
     }
     else if(operator=="/"){
    console.log(`It's division is ${a+b}`)
     }
    else{
       console.log(`Enter the correct operator`) 
    }
}
function nextFunction(value){
    if(value>0){
        console.log(`The answer is positive.`)
    }
    else if(value<0){
        console.log(`The answer is negative.`)
    }
    else{
        console.log(`The answer is equal to zero.`)
    }
}
let operator=prompt("Enter the operator :- ")
let a=Number(prompt("Enter the first number :- "))
let b=Number(prompt("Enter the second number :- "))
// console.log(myFunc(operator,a,b))
console.log(nextFunction(myFunc(operator,a,b)))