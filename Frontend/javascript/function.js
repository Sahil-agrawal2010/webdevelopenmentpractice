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