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