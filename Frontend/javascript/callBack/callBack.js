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