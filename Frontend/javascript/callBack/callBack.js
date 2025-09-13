function main(name, age, greet){
    console.log("My name is : "+name)
    console.log("My age is : "+age)
    greet()
}


function second(){
    console.log("Hello i am from second function.")
}

let name = prompt("Enter your name : ")
let age = prompt("Enter your age : ")

main(name, age, second)


function name(age,grade,callback){
    console.log(`My age is ${age}.I read in grade ${grade}.`)
    callback()
}
let myFunc= function() {
    console.log("I am the function without name.")
}
name("12","10",myFunc)


function name(age,grade,callback){
    console.log(`My age is ${age}.I read in grade ${grade}.`)
    callback()
}
name("12","10",function() {
    console.log("I am the function without name.")
})   
// the direct function is placed while writin gthe function output


let firsr_function=function(a,callback){
    callback(a)
}
let second_function=function(a){
    if(a%2===0){
        console.log("The number is a even number.")
    }
    else{
        console.log("The number you have entered is odd number.")
    }
}
let a=Number(prompt("Enter the number:- "))
firsr_function(a,second_function)


let first_function=function(a,s,m,d,numb,numb2,o){
    a(numb,numb2,o)
    s(numb,numb2,o)
    m(numb,numb2,o)
    d(numb,numb2,o)
}
let add=function(numb,numb2,o){
    if(o==="+"){
        console.log(`The addition is ${numb+numb2}`)
    }
}
let subtraction=function(numb,numb2,o){
    if(o==="-"){
        console.log(`The subtraction is ${numb-numb2}`)
    }
}
let multiply=function(numb,numb2,o){
    if(o==="*"){
        console.log(`The multiplication is ${numb*numb2}`)
    }
}
let divide=function(numb,numb2,o){
    if(o==="/"){
        console.log(`The division is ${numb/numb2}`)
    }
}
let numb=Number(prompt("Enter the first number :- "))
let numb2=Number(prompt("Enter the second number :- "))
let o=prompt("Enter the operator:- ")
first_function(add,subtraction,multiply,divide,numb,numb2,o)


let first_function=function(a,s,m,d,numb,numb2,o){
    a(numb,numb2,o)
    s(numb,numb2,o)
    m(numb,numb2,o)
    d(numb,numb2,o)
}
let numb=Number(prompt("Enter the first number :- "))
let numb2=Number(prompt("Enter the second number :- "))
let o=prompt("Enter the operator:- ")
first_function(function(numb,numb2,o){
    if(o==="+"){
        console.log(`The addition is ${numb+numb2}`)
    }},function(numb,numb2,o){
    if(o==="-"){
        console.log(`The subtraction is ${numb-numb2}`)
    }},function(numb,numb2,o){
    if(o==="*"){
        console.log(`The multiplication is ${numb*numb2}`)
    }},function(numb,numb2,o){
    if(o==="/"){
        console.log(`The division is ${numb/numb2}`)
    }},numb,numb2,o)

    
    let first_function=function(age){
    age(a)
}
let second_function=function(a){
    if(a>=18){
        console.log("You are eligible to vote.")
    }
    else{
        console.log("You are not eligible to vote.")
    }
}
let a=Number(prompt("Enter your age :- "))
first_function(second_function)


let first_function=function(a,age){
    age(a)
}
let second_function=function(a){
console.log(a.length)
}
let a=prompt("Enter your anything :- ")
first_function(a,second_function)