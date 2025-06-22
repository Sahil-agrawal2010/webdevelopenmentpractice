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