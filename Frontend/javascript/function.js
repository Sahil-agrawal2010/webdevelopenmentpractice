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