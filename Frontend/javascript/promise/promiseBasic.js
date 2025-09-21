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