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