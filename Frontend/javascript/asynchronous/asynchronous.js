    Synchronous is the default in javascript.Our code runs line by line one after the other.If one line is taking time rest waits so this is the Synchronous code behavior in javascript.

    In Asynchronous way our code doesnot wait for slower task like API calls , timers , filereading.
    It transfers those task and continues with the rest of the code.Once the task is done , it notifies back using cllbacks,promisis or async/await

console.log("I am Very Fast")
console.log("I am just fast")
setTimeout(()=>{
    console.log("I am slow!")
},5000)


let counter=0
let interval = setInterval(()=>{
    console.log(counter)
    counter++
    if(counter===5){
        clearInterval(interval)
    }
},5000)


let first_function=function(age,callback){
    callback(age)
    counter=0
   let interval = setInterval(()=>{
       console.log(counter)
       counter++
       if(counter==(age+1)){
           console.log("The countation till your age is done!")
           clearInterval(interval)
       }
   },1000)
}
let second_function=function(age){
    setTimeout(()=>{
        console.log(`Your age is ${age}!`)
    },15000)
}
first_function(12,second_function)


   
setInterval(()=>{
    let date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
console.log(`${hour}:${minute}:${second}`)
},1000)


let userInput=Number(prompt("Enter any number :- "))
    let counter=0
let interval = setInterval(()=>{
    counter++
    console.log(counter)
    if(counter==userInput){
        clearInterval(interval)
        console.log("Boom.")
    }
},1000)


let userInput=Number(prompt("Enter any number :- "))
    let counter=userInput
let interval = setInterval(()=>{
    counter--
    console.log(counter)
    if(counter==1){
        clearInterval(interval)
        console.log("Boom.")
    }
},1000)


let counter=0
let interval=setInterval(()=>{
    counter++
    console.log("Still Waiting.")
    if(counter==10){
        clearInterval(interval)
        console.log("Task Completed.")
    }
},1000)


function timer(){
let interval=setInterval(()=>{
    console.log("Still Waiting.")
},1000)
setTimeout(()=>{
    console.log("Task Completed")
    clearInterval(interval)
},11000)
}
timer()


function onof(){
       let onof1=true
   let interval= setInterval(()=>{
        console.log(onof1?"ON":"OFF")
        onof1=!onof1
    },1000)
    setTimeout(()=>{
        console.log("Stopped Blinking!")
        clearInterval(interval)
    },10000)
}
onof()