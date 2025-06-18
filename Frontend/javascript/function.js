function add(a,b){
    let sum = a+b
    console.log(sum)
}
add(10, 20)

function product(a){
    for(let i=1;i<=10;i++){
     s=a*i
     console.log(a+"X"+i+"="+s)
    }
}
let a=Number(prompt("Enter the Number to find the multiplication table :-"))
product(a)

function square(a){
    sq=a*a
    console.log(sq)
}
function cube(a){
    cube_=a*a*a
    return cube_
}

let a=Number(prompt("Enter any number to see square and cube :- "))
square(a)
// let cube_result = cube(a)
console.log(cube(a))


function add(a,b){
    ad=a+b
    return ad
}
function difference(a,b){
    diff=a-b
    return diff
}
function product(a,b){
    pro=a*b
    return pro
}
function divide(a,b){
    div=a/b
    return div
}
let a=Number(prompt("Enter the first number :- "))
let b=Number(prompt("Enter the second number :- "))
console.log()
console.log(`The sum of ${a} and ${b} is ${add(a,b)}.`)
console.log(`The difference of ${a} and ${b} is ${difference(a,b)}.`)
console.log(`The product of ${a} and ${b} is ${product(a,b)}.`)
console.log(`The division of ${a} and ${b} is ${divide(a,b)}.`)
// console.log("The sum of "+a+ " and " +b+ " is " +add(a,b)+ ".")
// console.log("The difference of " +a+ " and " +b+ " is " +difference(a,b)+ ".")
// console.log("The product of " +a+ " and " +b+ " is " +product(a,b)+".")
// console.log("The division of " +a+ " and " +b+ " is " +divide(a,b).toFixed(2)+".")

function grade(a){
    if(a>=90)
    console.log("A+")
}
else if(a>=80){
    console.log("A")
}
else if(a>=70){
    console.log("B+")
}
else if(a>=60){
    console.log("B")
}
else if(a>=50){
    console.log("C+")
}
else if(a>=40){
    console.log("C")
}
else{
    console.log("Fail")
}
let a = Number(prompt("Enter your marks :- "))
grade(a)


function simpleInterest(a,b,c){
    Si=(a*b*c)/100
    return Si
}
let a = Number(prompt("Enter the Principle  :- "))
let b = Number(prompt("Enter the Time :- "))
let c = Number(prompt("Enter the Rate :- "))
console.log()
console.log(`The simple interest is ${simpleInterest(a,b,c)}`)


function even(a){
eve=a%2==0
return eve
}
function odd(a){
    od=a%2==1
    return od
}
let a =Number(prompt("Enter any Number :- "))
console.log(`The entered number is ${even(a)}:-Even`)
console.log(`The entered number is ${odd(a)}:-Odd`)