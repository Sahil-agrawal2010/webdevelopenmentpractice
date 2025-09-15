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


let first_function=function(a,callback){
    callback(a)
}
let second_Function=function(a){
    if(a[0] === a[0].toUpperCase()){
        console.log("Capital.")
    }
    else{
        console.log("Not capital")
    }
}
let a=prompt("Enter any letter:- ")
first_function(a,second_Function)

Write a programme to concatinate different words given by the user using the exact same number of callback function as the user input
let first_function=function(user1,a,b,c,d){
    user1(a,b,c,d)
}
let second_function=function(a,b,c,d){
    console.log(a.concat(" ", b," ",c," ",d))
}
let a = prompt("Enter your first input :-")
let b = prompt("Enter your second input :-")
let c = prompt("Enter your third input :-")
let d = prompt("Enter your fourth input :-")
first_function(second_function,a,b,c,d)


let first_function=function(arrayy,callBack){
    console.log(arrayy)
    callBack(arrayy)
}
let second_function=function(array){
    for(let i=0;i<arrayy.length;i++){
        console.log(arrayy[i]*2)
    }
}
let arrayy=[2,4,6,8,10]
first_function(arrayy,second_function)


let first_function=function(numb1,numb2,callback){
        if(numb1>numb2){
    callback(numb1,numb2,"multiply")
    }
    else{
       callback(numb1,numb2,"add")
    }
}
let second_function=function(x,y,value){
    if(value==="multiply"){
        console.log(`The product is ${x*y}`)
    }
    else{
         console.log(`The sum is ${x+y}`)
    }
}
first_function(10,5,second_function)


let first_function=function(value,bring){
    bring(value)
}
let second_function=function(value){
    console.log(value.toUpperCase())
    console.log(value.split("").reverse().join(""))
    console.log(value.replace("back","front"))
}
first_function("callback",second_function)


let first_function=function(value,bring){
    console.log(bring(value))
}
let second_function=function(value){
    let result=value.map(function(value){
        return value*value*value
        
    })
    return result
}
first_function([1,2,3,4,5],second_function)


let first_function=function(arra,callback){
    callback(arra)
}
let second_function=function(num){
    num.map(function(a){
        let counter=0
        for(let i=0;i<=a;i++){
            if(a%i===0){
                counter++
            }
        }
            if(counter==2){
                console.log(`${a} is a prime number.`)
            }
            else{
                 console.log(`${a} is not a prime number.`)
            }
    })
}
first_function([10,13,15,17,21],second_function)


Write a programme to reverse four number        

let first_number=function(numb,callback){
    callback(numb)
}
let second_function=function(numb){
  numb.map(function(numb){
        let e=""
let first=Math.floor(numb/1000)
let b=Math.floor(numb/100)
let second=b%10
let c=Math.floor(numb%100)
let third=Math.floor(c/10)
let d=Math.floor(numb%100)
let fourth=d%10
e=`${fourth}${third}${second}${first}`
console.log(e)
    })
}
// let numb=Number(prompt("Enter any four digit number to see it's opposite :- "))
first_number([1234],second_function)