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










console.log("I am a good boy.")