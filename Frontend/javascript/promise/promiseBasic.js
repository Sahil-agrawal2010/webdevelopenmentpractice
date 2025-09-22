let userInput = Number(prompt("Enter yoour age :- "))
let promisee = new Promise((resolve, reject) => {
    if (userInput >= 18) {
        resolve("You are able to vote!")
    } else {
        reject("Sorry!You are unable to vote.")
    }
})

promisee.then((message) => {
        console.log(message)
    }).catch((err)=>{
        console.log(err)
    })


    let promisee=new Promise((resolve,reject) =>{
    let userInput1=prompt("Enter the input:- ")
    if(!userInput1){
        reject("Sorry, please enter your username.")
    }else{
        setTimeout(()=>{
            resolve("Hello " + userInput1)
        }, 5000)
    }
})
promisee.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})


let promise=new Promise((resolve)=>{
let userInput=prompt("Enter your name :- ")
let userInput2=Number(prompt("Enter your age:- "))
resolve({userName : userInput, userAge : userInput2})
})
.then((object)=>{
    console.log(object.userName)
    return object
})
.then((object)=>{
    console.log(`Hi!Good Afternoon ${object.userName}.`)
    return object
})
.then((object)=>{
        console.log(`Hi!Good Afternoon ${object.userName}.Your age is ${object.userAge}.`)
})


let promise=new Promise((resolve)=>{
    let userInput="Sita"
    let userInput2="20"
    resolve({userName : userInput,userAge:userInput2})
})
.then((object)=>{
    console.log(object.userName)
    return object
})
.then((object)=>{
    console.log(object.userAge)
})


let promise=new Promise((resolve)=>{
    let userInput=Number(prompt("Enter any number:- "))
    if(userInput%2===0){
        resolve("Good You have chosen a very good and a positive number.")
    }
    else{
        throw("Not good You have chosen a ver bad and a negative number.")
    }
})
.then((value)=>{
    console.log(value)
})
.catch((value)=>{
    console.log(value)
})


let promise=new Promise((resolve)=>{
    let userInput=prompt("Enter your name :- ")
    let userInput2=Number(prompt("Enter your age :- "))
    resolve({userName:userInput,userAge:userInput2})
})
.then((object)=>{
        object.isAdult= object.userAge>=18
    return object
})
.then((object)=>{
    if((object.isAdult===true)){
        console.log(`${object.userName} is a adult.`)
    }
    else{
        console.log(`${object.userName} is a minor.`)
    }
})

Write a progemme to creat a promise that resolves with 100,throw an error if the number is exaactly onehundred catch it , return 50 ,than in the next .than,add 25 and lock the result

let promise=new Promise((resolve)=>{
    resolve(100)
})
.then((value)=>{
    if(value===100){
        let number=value-50
        console.log(number)
        console.log(number+25)
        throw("You have choosen number 100!")
    }
    return value
})
.catch((value)=>{
    console.log(value)
})

Promise.resolve(100).then(val=>{
    if(val === 100){
        throw new Error ("The number is exactly 100!")
    }
}).catch(err=>{
    console.log(err.message)
    return 50
}).then(a=>{
    console.log(a+25)
})

Write a programme to creat a promise that resolves with 10. First .than should return a new promise that doubles the number after two second. Second .than should triple the number after four second . Third .than should find the square , cube and square root of the that number.
let promise=new Promise((resolve)=>{
    userInput=10
    resolve(userInput)
})
.then((value)=>{
    setTimeout(()=>{
    console.log(userInput*2)
    },2000)
    return value
})
.then((value)=>{
    setTimeout(()=>{
        console.log(userInput*3)
    },4000)
    return value
})
.then((value)=>{
    console.log(userInput*userInput)
        console.log(userInput*userInput*userInput)
        console.log(Math.sqrt(userInput))
})