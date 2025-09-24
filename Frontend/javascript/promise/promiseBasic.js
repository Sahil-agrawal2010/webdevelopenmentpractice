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
    userInput=9
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
        console.log(Math.floor(Math.sqrt(userInput)))
})


let promise=new Promise((resolve)=>{
    resolve("a")
})
.then(value=>{
return Promise.resolve(value+"b")
})
.then(value2=>{
    console.log(value2+"c")
})


let promise=new Promise((resolve)=>{
    let userInput=prompt("Hi user!Pleaase Enter Your Name :- ")
    let userInput2=Number(prompt("Enter your marks :- "))
    resolve({
        userName:userInput,
        userMarks:userInput2
    })
})
.then(value=>{
    // value.isPass=value.userMarks>=40
    // return value
    value.isPass = value.userMarks>=40? "Pass": "Fail"
    return value
})
.then(value=>{
    console.log(value.userName + " has " + value.isPass + "ed.")
})


let promise=new Promise((resolve)=>{
    resolve("Start")
})
.then(value=>{
    throw("Stop")
})
.catch(value=>{
    console.log(value)
    return "Recovered"
})
.then(value=>{
    console.log(value)
})


// Start with a Promise that resolves with 2.
// First .then() multiply by 2.
// Second .then() add 5 after 0.5 sec (use another Promise).
// If result > 8, throw error "Too big!".
// Catch error, return 1.
// Multiply by 10 in final .then() and log result.
let promise=new Promise((resolve)=>{
    resolve(2)
})
.then(value=>{
    let value1=value*2
    return value1
})
.then(value1=>{
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(value1+5)
    },500)
})
})
    .then(value=>{
        if(value>8){
        throw("Too big!")
    }
})
.catch(erro=>{
    console.log(erro)
    return 1
})
.then(value=>{
    console.log(value*10)
})


// // Create a Promise that resolves with "javascript".
// First .then() → convert to uppercase.
// Second .then() → take first 4 letters.
// Third .then() → add " is fun".
// Log the final string.
Promise.resolve("javascript")
.then(value=>{
   let value1 = value.toUpperCase()
    return value1
})
.then(value1=>{
    let value2 = value1.slice(0,4)
    return value2
})
.then(value2=>{
    console.log(value2+" is fun.")
})


// Create a Promise that resolves with { name: "Aarav", score: 35 }.
// If score < 40, throw "Failed".
// Catch it and set score to 50.
// Add status: "Pass" and log the object.


Promise.resolve({name : "Arav", Score:35}).then((obj)=>{
    if (obj.Score<40) throw ("Failed")
    return obj
}).catch((err, obj)=> {
    console.log(err)
    return ({name: "Arav", Score: 50})
}).then((obj)=>{
    obj.status = obj.Score>=40? "Pass":"Failed"
    console.log(obj)
})



Promise.resolve([1,2,3,4,5])
.then((obj)=>{
        let num = obj.map((o)=>{
            return o*2
        })
    return num
    })
    .then((obj)=>{
        let num=obj.filter(o=> {
           return o>5
        })
        return num
    }).then(obj => console.log(obj))


    "




// Q14. Reverse + Join Chain
// Create a Promise that resolves with "hello world".
// First .then() → split into array of words.
// Second .then() → reverse the array.
// Third .then() → join with " - ".
// Log the result.

// ["hello","world"]      
// ["world","hello"]     
// "world - hello"


Promise.resolve("hello,world")
.then(value=> {
 let value1 = value.split(",")
 console.log(value1)
    return value1
}).then(value1=>{
    console.log(value1.reverse())
    return value1
}).then(value2=>{
    console.log(value2.join(" - "))
})

// Q15. Async Array Chain (with setTimeout)
// Create a Promise that resolves with [2, 4, 6].
// First .then() → return new Promise that adds 1 to each element after 1 second.
// Second .then() → log the new array.
// Output : [3, 5, 7]


Promise.resolve([2,4,6])
.then(value=>{
    return new Promise((resolve)=>{
        console.log(value)
    setTimeout(()=>{
            resolve(value = value.map(n=> n+1))
        }, 3000)
    })
    })
.then(value=>{
    console.log(value)
})



