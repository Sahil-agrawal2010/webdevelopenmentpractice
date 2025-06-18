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