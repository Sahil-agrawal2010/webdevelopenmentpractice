// let add = (a,b) => {
//     console.log(a+b)
// }
// add(5,2)

// let greet=(name)=>{
//     console.log(`Good Morning!`+name)
// }
// name=prompt("Enter the name :- ")
// greet(name)

// let arrow=(a,b) =>{
//     console.log(`The area of rectanglr is ${a*b}`)
// }
// let a=prompt("Enter the length to calculate its area :- ")
// let b=prompt("Enter the breadth to calculate its area :- ")
// arrow(a,b)

// // Write a programme to calculate area of circle

// let arrow=(a)=>{
//     const pi=3.1415
//    return area=pi*(a*a)
// }
// let a= prompt("Enter the radious of cicle [in cm] :- ")
// arrow(a)
// console.log(`The area of circle is ${area} cm^2`)

// // Write a programme to calcualte acceelration

// let arrow=(v,u,t) =>{
//     return as=(v-u)/t
// }
// let u=prompt(`Enter the initail velocity :- `)
// let v=prompt(`Enter the fianl velocity :- `)
// let t=prompt(`Enter the time velocity [in seconds] :- `)
// arrow(v,u,t)
// console.log(`The acceleration produced is ${as} m/s^2`)

// // Write a programme if the number id divisible by both 5 and 11

// let arrow=(a) =>{
//     if(a%5==0 && a%11==0){
//         console.log(`${a} is divided by both 5 and 11!`)
//     }
//     else{
//         console.log(`${a} is not divided by both 5 and 11!`)

//     }
// }
// let a=Number(prompt(`Enter any number to check weather it is divided by 5 and 11 or not :- `))
// arrow(a)

// // Write a programme to calculate distance,return speed if speed is 30 or less

// let arrow=(u,t,a) =>{
//     return s=u*t+(1/2)*a*t*t
// }
// let arrow2=(s,t) =>{
//     return sp=s/t
// }
//     let arrow3=(sp) => {
//     if(sp<30){
//         console.log(`The speed is less than 30!`)
//     }
//     else{
//         console.log(`The speed is more than 30!`)

//     }
// }
// let u=prompt("Enter the initial velocity to calculate distance :- ")
// let t=prompt("Enter the time to calculate distance :- ")
// let a=prompt("Enter the acceleration to calculate distance :- ")
// arrow(u,t,a)
// console.log(`The distance travelled is ${s}m.`)
// arrow2(s,t)
// console.log(`The speed is ${sp} m/s.`)
// arrow3(sp)

// // write a programme to calcualte volume of a cuboid

// let arrow=(l,b,h) =>{
//     return area=l*b*h
// }
// let l=Number(prompt(`Enter the length [in cm]:- `))
// let b=Number(prompt(`Enter the breadth [in cm]:- `))
// let h=Number(prompt(`Enter the height [in cm]:- `))
// arrow(l,b,h)
// console.log(`The area of ${l}cm,${b}cm and ${h}cm is ${area}cm^3`)

// // Write a programme to calculate from celcius to fahrenheit

// let arrow=(c) =>{
//     return f=(c*9/5)+32
// }
// let c=Number(prompt(`Enter the celsius to be converted in to fahrenheit[in degrees] :- `))
// arrow(c)
// console.log(`${c} degree celcius when converted in to fahrenheit is ${f}.`)

// // Write a programme to calculate from fahrenheit to celcius

// let arrow = f =>{
//     return c=(f-32)*5/9
// }
// let f=Number(prompt(`Enter the fahrenheit which you wnat to convert in to celsius [in degree] :-`))
// arrow(f)
// console.log(`${f} degree fahrenheit when converted in to celcius is ${c}.`)

// let arrow=(a) => {
//     if (a%2==0){
//         console.log(`${a} is a even number!`)
//     }
//     else if (a%2==1){
//         console.log(`${a} is a odd number!`)
//     }
// }
// let a=Number(prompt(`Enter any number to check weather it is even or odd :- `))
// arrow(a)

// let arrow = a =>{
//     if (a>0){
//         console.log(`The number is positive!`)
//     }
//        else if (a<0){
//         console.log(`The number is negative!`)
//     }
//         if (a==0){
//         console.log(`The number is zero!`)
//     }
// }
// let a = Number(prompt(`Enter any number to check weather the number is positive negative or zero :- `))
// arrow(a)

// let arrow=(a) =>{
//     let counter=0
//     for(let i=1;i<=a;i++){
//         if(a%i==0){
//             counter++
//     }
//     }
//     if(counter==2){
//         console.log(`It is a prime number.`)
//     }
//     else{
//         console.log("It's not a prime number")
//     }
// }
// let a = Number(prompt(`Enter any number to check weatheer the given number is prime or not :- `))
// arrow(a)

// Fibonacy like 0,1,1,2,3,5,8,13,21,34

// let arrow=(a,b) =>{
//     a=0
//     b=1
//     console.log(a)
//     console.log(b)
//     for (let i=1;i<=num-2;i++){
//         let sum=a+b
//         a=b
//         b=sum
//         console.log(sum)
//     }
// }
// let num=Number(prompt(`Enter nay numbet to see fibonnaci upto there :- `))
// arrow(num)
// If user input any number check if the number is prime or not till 100 and ask if you want to continue or not\

// let arrow = a =>{
//     if(a<2 || a>100){
//         console.log(`Wrong input !`)
//     }
//         let counter=0
//     for(i=1;i<=a;i++){
//         if(a%i==0){
//             counter++
//         }
//           }
//         if(counter==2){
//             console.log(`It is a prime number!`)
//         }
//         else{
//             console.log(`It is not a prime number!`)
//         }
// }
// let a = Number(prompt(`Enter any number to check weather it is a prime number or not till 100 :- `))
// arrow(a)
// while(a>100){
//     let c=prompt(`Do you want to continue [Enter answer in Y or N] :- `)
//     if(c==`Y`){
//         let a = Number(prompt(`Enter any number to check weather it is a prime number or not till 100 :- `))
//         arrow(a)
//     }
//     else if(c==`N`){
//         console.log(`Thanks for your Visit!Bye Bye!`)
//     }
//     else{
//         console.log(`Enter hte valid alphabet!`)
//     }
// }

// write a program to display marks of 5 subject and print total percentage

// let arrow=(a,b,c,d,e) => {
//     return percent=(a+b+c+d+e)/5
// }
// let a = Number(prompt(`Enter the marks of first subject [Till 100] :- `))
// let b = Number(prompt(`Enter the marks of second subject [Till 100] :- `))
// let c = Number(prompt(`Enter the marks of third subject [Till 100] :- `))
// let d = Number(prompt(`Enter the marks of fourth subject [Till 100] :- `))
// let e = Number(prompt(`Enter the marks of fifith subject [Till 100] :- `))
// arrow(a,b,c,d,e)
// console.log(`The percentage you have got is ${percent} %`)

// write a programme to reverse a number

// let remainder=0
// let arrow = a =>{
//     while(a>0){
//        let s = a%10
//        remainder=remainder*10+s 
//        a=(a/10) >> 0
//     }
//       return remainder
// }
// let a = Number(prompt(`Enter any number take out its reversed value :- `))
// console.log(arrow(a))

// write a programme if the number is between 50-500 print else dont print

// let arrow=(a) => {
//     if(a>50 && a<500){
//         console.log(`The number is between 50-500!`)
//     }
//     else{
//         console.log(`The number is not between 50-500!`)
//     }
// }
// let a = Number(prompt(`Enter any number between 50 to 500 :- `))
// arrow(a)

// write a programme to convert from hour in to minute

// let arrow=(a) => {
//     return mins=a*60
// }
// let a = Number(prompt(`Enter the hour which you want to convert in to minutes :- `))
// arrow(a)
// console.log(`${a} hour in to minute is ${mins} minutes!`)

// write a programme to diplay the last didit of a number

// let remainder=0
// let arrow = a =>{
//       console.log( s = a%10)
//        remainder = a%100
//       console.log(s=(remainder/10) >> 0)
// }
// let a = Number(prompt(`Enter any number take out its reversed value :- `))
// arrow(a)

// write a programme to swap 3 numbers

// let d=0
// let arrow=(a,b,c,d) =>{
//       d=a
//      console.log(a=b)
//     console.log(b=c)
//     console.log(c=d)
// }
// let a = Number(prompt(`Enter the first number :- `))
// let b = Number(prompt(`Enter the second number :- `))
// let c = Number(prompt(`Enter the third number :- `))
// arrow(a,b,c,d)

// let arrow=a =>{
//     let remainder=0
//     let sum=0
//     for(let i=1;a==0;i++){
//     let b=a%10
//     remainder=remainder*10+b
//     a=a/10>>0
//     }
//     sum=sum+remainder
//     if(sum%a==0){
//     console.log("It is a harshad number!")
// }
// else{
//     console.log("It is not a harshad number!")
// }
// }

// let a=Number(prompt(`Enter the Number to see if it is a harshad number :- `))
// arrow(a)


// write a programme to find palandrum number
// let reaminder=0
// let arrow = a => {
//     while(a>0){
//         let b=a%10
//         reaminder=reaminder*10+b
//         a=(a/10)>>0
//     }
// }
// let a = Number (prompt ( `Enter any number to check weather it is a paladrum number or not :- ` ))
// arrow(a)
// if(a==reaminder){
//     console.log( `The number is a paladrum number!` )
// }
// else{
//     console.log( `The number is not a paladrum number` )
// }

// write a programme to find sum of all number of userinput

// let arrow= (a) =>{
//     console.log(a)
//     let sum=0
//     for(let i=1;a!=0;i++){
//         let b=a%10
//         sum=(sum+b) | 0
//         a=(a/10) 
//     }
//     console.log(sum) 
// }
// let a = Number ( prompt ( ` Enter any number to see its sum :- ` ) )
// arrow(a)

// write a programme to find biggest number and smallest number


// let smallest= (a) =>{
//     let small = 10
//     for(let i=1;a!=0;i++){
//         let b=a%10
//         if(b<=small){
//             small = b >>0
//         }
//         a=(a/10) >> 0
//     }
//     console.log(small)
// }
// let a = Number ( prompt ( `Enter any number to see its sum :- ` ) )
// smallest(a)


// let greatest= (a) =>{
//     let great = 0
//     for(let i=1;a!=0;i++){
//         let b=a%10
//         if(b>=great){
//             great = b >>0
//         }
//         a=(a/10) 
//     }
//     console.log(great) 
// }
// let a = Number ( prompt ( ` Enter any number to see its sum :- ` ) )
// greatest(a)

// let arrow = (a,b,c) => {
//     if(a>b && a>c){
//         console.log(`${a} is greatest number!`)
//     }
//      else if(b>c && b>a){
//         console.log(`${b} is greatest number!`)
//     }
//          else if(c>a && c>b){
//         console.log(`${c} is greatest number!`)
//     }
// }
// let arrow2 = (a,b,c) =>{
//         if(a<b && a<c){
//         console.log(`${a} is smallest number!`)
//     }
//      else if(b<c && b<a){
//         console.log(`${b} is smallest number!`)
//     }
//          else if(c<a && c<b){
//         console.log(`${c} is smallest number!`)
//     }
// }
// let a = Number ( prompt ( ` Enter a number to see its smallest and greatest :-  ` ) )
// let b = Number ( prompt ( ` Enter a number to see its smallest and greatest :-  ` ) )
// let c = Number ( prompt ( ` Enter a number to see its smallest and greatest :-  ` ) )
// arrow(a,b,c)
// arrow2(a,b,c)



// function cheaker(a){
//     if(a>0){
//         console.log(`The number is positive!`)
//     }
//     else if(a<0){
//         console.log(`The number is negative!`)
//     }
//     else{
//         console.log(`The number is zero!`)
//     }
// }
// let arrow = a =>{
//     if (a%2==0){
//         console.log(`The number is even!`)
//     }
// else if (a%2==1){
//     console.log(`The number is odd!`)
// }
// else {
//     console.log(`The number is not valid!`)
// }
// }
// let myFunction=function(a){
//     if ( a%3==0 ){
//         console.log(`The number is exactely divisible by Three(3)!`)
//     }
//     else if ( a%3!=0 ){
//         console.log(`The number is not exactely divisible by Three(3)`)
//     }
//         else {
//             console.log(`Enter the valid number!`)
//         }
// }
//         let a = Number ( prompt ( ` Enter any number to check weather it is Positive,Negative and Zero , To check weather it is odd or even and To check weather the number is exactely divisible by Three(3) or not :- ` ) )
//      cheaker(a)
//     arrow(a)
//     myFunction(a)