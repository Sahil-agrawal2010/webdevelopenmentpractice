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