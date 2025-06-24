let add = (a,b) => {
    console.log(a+b)
}
add(5,2)

let greet=(name)=>{
    console.log(`Good Morning!`+name)
}
name=prompt("Enter the name :- ")
greet(name)

let arrow=(a,b) =>{
    console.log(`The area of rectanglr is ${a*b}`)
}
let a=prompt("Enter the length to calculate its area :- ")
let b=prompt("Enter the breadth to calculate its area :- ")
arrow(a,b)

// Write a programme to calculate area of circle

let arrow=(a)=>{
    const pi=3.1415
   return area=pi*(a*a)
}
let a= prompt("Enter the radious of cicle [in cm] :- ")
arrow(a)
console.log(`The area of circle is ${area} cm^2`)

// Write a programme to calcualte acceelration

let arrow=(v,u,t) =>{
    return as=(v-u)/t
}
let u=prompt(`Enter the initail velocity :- `)
let v=prompt(`Enter the fianl velocity :- `)
let t=prompt(`Enter the time velocity [in seconds] :- `)
arrow(v,u,t)
console.log(`The acceleration produced is ${as} m/s^2`)

// Write a programme if the number id divisible by both 5 and 11

let arrow=(a) =>{
    if(a%5==0 && a%11==0){
        console.log(`${a} is divided by both 5 and 11!`)
    }
    else{
        console.log(`${a} is not divided by both 5 and 11!`)

    }
}
let a=Number(prompt(`Enter any number to check weather it is divided by 5 and 11 or not :- `))
arrow(a)

// Write a programme to calculate distance,return speed if speed is 30 or less

let arrow=(u,t,a) =>{
    return s=u*t+(1/2)*a*t*t
}
let arrow2=(s,t) =>{
    return sp=s/t
}
    let arrow3=(sp) => {
    if(sp<30){
        console.log(`The speed is less than 30!`)
    }
    else{
        console.log(`The speed is more than 30!`)

    }
}
let u=prompt("Enter the initial velocity to calculate distance :- ")
let t=prompt("Enter the time to calculate distance :- ")
let a=prompt("Enter the acceleration to calculate distance :- ")
arrow(u,t,a)
console.log(`The distance travelled is ${s}m.`)
arrow2(s,t)
console.log(`The speed is ${sp} m/s.`)
arrow3(sp)

// write a programme to calcualte volume of a cuboid

let arrow=(l,b,h) =>{
    return area=l*b*h
}
let l=Number(prompt(`Enter the length [in cm]:- `))
let b=Number(prompt(`Enter the breadth [in cm]:- `))
let h=Number(prompt(`Enter the height [in cm]:- `))
arrow(l,b,h)
console.log(`The area of ${l}cm,${b}cm and ${h}cm is ${area}cm^3`)

// Write a programme to calculate from celcius to fahrenheit

let arrow=(c) =>{
    return f=(c*9/5)+32
}
let c=Number(prompt(`Enter the celsius to be converted in to fahrenheit[in degrees] :- `))
arrow(c)
console.log(`${c} degree celcius when converted in to fahrenheit is ${f}.`)

// Write a programme to calculate from fahrenheit to celcius

let arrow = f =>{
    return c=(f-32)*5/9
}
let f=Number(prompt(`Enter the fahrenheit which you wnat to convert in to celsius [in degree] :-`))
arrow(f)
console.log(`${f} degree fahrenheit when converted in to celcius is ${c}.`)

let arrow=(a) => {
    if (a%2==0){
        console.log(`${a} is a even number!`)
    }
    else if (a%2==1){
        console.log(`${a} is a odd number!`)
    }
}
let a=Number(prompt(`Enter any number to check weather it is even or odd :- `))
arrow(a)

let arrow = a =>{
    if (a>0){
        console.log(`The number is positive!`)
    }
       else if (a<0){
        console.log(`The number is negative!`)
    }
        if (a==0){
        console.log(`The number is zero!`)
    }
}
let a = Number(prompt(`Enter any number to check weather the number is positive negative or zero :- `))
arrow(a)

let arrow=(a) =>{
    counter=0
    for(let i=1;i<=a;i++){
        if(a%i==0){
            counter++
    }
    }
    if(counter==2){
        console.log(`It is a prime number.`)
    }
    else{
        console.log("It's not a prime number")
    }
}
let a = Number(prompt(`Enter any number to check weatheer the given number is prime or not :- `))
arrow(a)