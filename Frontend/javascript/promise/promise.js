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