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


Promise.resolve({num : 7 , word:'banana'})
.then(value=>{
    value.num = value.num * value.num
    return value
}).then(value=>{
  return value.num+"-"+value.word
}).then(value=>{
    console.log(value.length)
})


Promise.resolve(["Ram","Sita","Hari","Rita"])
.then(value=>{
    let value1=value.filter(a=> a.startsWith("R"))
    return value1
})
.then(value1=>{
    return(value1.map(a=> a.toUpperCase()))
})
.then(value=>{
    console.log(value)
})


Promise.resolve({city:"Kathamndu",population:800000})
.then(value=>{
    if(value.population<1000000){
        throw ("Too Small!")
    }
    return value
})
.catch(value=>{
    console.log(value)
    return {city:"Pokhara",population:500000}
})
.then(value=>{
    value.country = "Nepal"
    return value
})
.then(value=>{
    console.log(value)
})



Promise.resolve("madam")
.then(value=>{
    let value2=value.split().reverse().join()
    return {value,value2}
})
.then((value)=>{
    console.log(value)
    return value.value===value.value2 ? "It's palamdrome.":"It is not a palamdrome."
})
.then(value=>{
    console.log(value)
})


// Q24. Error if Array Empty
// Create a Promise that resolves with [].
// First .then() → if array is empty, throw "No data!".
// Catch error → return [1, 2, 3].
// Next .then() → double each number.
// Log the result.

Promise.resolve([])
.then(value =>{
    if(value.length==0){
        throw("No Data!")
    }
    return value
})
.catch(error=>{
    console.log(error)
    return [1,2,3]
})
.then(value =>{
  console.log(value.map(a=> a*2))
})


// Q25. Word Count Chain
// Create a Promise that resolves with "I love learning JavaScript".
// First .then() → split into words.
// Second .then() → count number of words.
// Third .then() → log "Total words: X".

Promise.resolve("I love learning Javascript.")
.then(value=>{
  let value2 = value.split(" ")
    return value2
})
.then(value2=>{
    return value2.length
})
.then(value=>{
    console.log(`Total words : ${value}.`)
})

// Q1. User Grades Evaluation
// Write a promise that resolves with a student’s scores:
// { name: "Sita", scores: [80, 60, 90, 100] }
// In the first .then, calculate the average score.
// In the second .then, decide the grade (A, B, C) based on the average.
// In the third .then, return a message "Sita has scored Grade A with avg 82.5".
// Add a .catch if the scores array is empty.


let promisee=new Promise((resolve,reject)=>{
    let object={name: "Sita", scores: [95,96,88]}
    if (object.scores.length  === 0) reject("The score is empty.")
    else resolve(object)
})
.then(value=>{
    let total=0
      if((value.scores).length===0){
        return "The score is empty."
    }
    else{
        total=value.scores.reduce((a,b)=>{
           return a+b
        })
    value.avg = total/value.scores.length
    return value    
    }
})
.then(value=>{
      if((value.scores).length===0){
        return "The score is empty."
    }
    else{
        value.avg>=80?value.grade="A":value.avg>=50?value.grade="B":value.grade="C"
    return value
    }
})
.then(value=>{
    console.log(`${value.name} has scored Grade ${value.grade} with avg ${value.avg}.`)
    return value
})
.catch(value=>{
    console.log(value)
})


Promise.resolve(["Elephant","Dog","Cat","Giraffe","Lion"])
.then(value => value.filter(a=> a.length>3))
.then(value=>  value.map(data => data.toLowerCase()))
.then(value=>  value.sort())
.then(value=> console.log(value.join(",")))


let promisee=new Promise((resolve)=>{
    let random = Math.floor(Math.random()*40+10)
    console.log(random)
    resolve(random)
})
.then(value=> value*value)
.then(value=> Math.sqrt(value))
.then(value=> console.log(value.toString().includes("2") ? "Lucky Number" : 'Try again!'))


// Q3. Student Rank Finder
// A promise resolves with:
// [{ name: "Aayush", marks: 90 },
//  { name: "Sita", marks: 85 },
//  { name: "Gopal", marks: 92 },
//  { name: "Maya", marks: 70 }]
// 1st .then: Sort students by marks (highest → lowest).
// 2nd .then: Add a rank field (1st, 2nd, 3rd, …).
// 3rd .then: Map into strings like "Rank 1: Gopal (92)".
// 4th .then: Join into final leaderboard string.
Promise.resolve(
    [{ name: "Aayush", marks: 90 },
 { name: "Sita", marks: 85 },
 { name: "Gopal", marks: 92 },
 { name: "Maya", marks: 70 }
 ])
 .then(value=>{
     console.log(value.sort())
 })

// Q4. Async Delay Puzzle
// A promise resolves with "Start".
// 1st .then: After 1 second, add " → Step1".
// 2nd .then: After 2 seconds, add " → Step2".
// 3rd .then: After 3 seconds, add " → Step3".
// Final result should print with delays:
// Start → Step1 → Step2 → Step3.

Promise.resolve("Start")
.then(value=>{
    setTimeout(()=>{
       console.log ("→  Step1")
    },1000)
})
.then(value=>{
    setTimeout(()=>{
        console.log("→  Step2")
    },2000)
})
.then(value=>{
    setTimeout(()=>{
         console.log("→  Step3")
    },3000)
})


// Q5. Shopping Discount Challenge
// A promise resolves with:
    // [{ name: "Shoes", price: 2000 },
    //  { name: "Shirt", price: 1200 },
    //  { name: "Cap", price: 500 }]
// 1st .then: Add property discountPrice (20% off each item).
// 2nd .then: Filter items with discountPrice > 1000.
// 3rd .then: Extract only names.
// 4th .then: If no item left, throw error "No expensive items!".
// .catch: Handle the error.

Promise.resolve([{
            name: "Shoes",
            price: 2000
        },
        {
            name: "Shirt",
            price: 1200
        },
        {
            name: "Cap",
            price: 500
        },
          {
            name: "Guitar",
            price: 15000
        }
    ])
    .then(value => {
        let value1 = value.map(a => {
            a.discount = a.price - (a.price * 0.2)
            return a
        })
        return value
    })
    .then(value => {
        let newObject = value.filter(a => {
            return a.discount > 1000
        })
        return newObject
    })
    .then(value => {
        value.map(a=> console.log(a.name))
    })


// Q6. Hidden Message Game
// A promise resolves with the string "PROGRAMMING".
// 1st .then: Convert to lowercase.
// 2nd .then: Split into letters.
// 3rd .then: Keep only unique letters.
// 4th .then: Sort alphabetically.
// 5th .then: Join into a hidden message string.

Promise.resolve("Programming")
.then(value=>{
    return value.toLowerCase()
})
.then(value=>{
    return value.split("")
})
.then(value=>{
   return [...new Set(value)]
})
.then(value=>{
    return value.sort()
})
.then(value=>{
    console.log(value.join(""))
})



let value=[55,43,22,78,99,32,12,33]
    let sum=0
for(let i=0;i<value.length;i++){
    if(value[i]>sum){
        sum=value[i]
    }
    console.log(sum)
    }

    console.log("I am a good boy and i havea to do some task and also some projects")
    console.log("Nothing done today also will continue from day after tommorow i am out somewhwere so.")
    cons0ole.log("Cant do any thong today also oout somewhere in nepal only.")
