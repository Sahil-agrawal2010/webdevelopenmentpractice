
let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa"]
for (let a of number){
    console.log(a)
}

iteration using method ok
let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa"]
number.forEach(function(a){
    console.log(a)
})

let number=[1,2,3,4,5,6,7,8,9,10]
number.forEach(a =>{
    console.log(a*a)
})

let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa"]
number.forEach((b,a) =>{
    console.log(b,a)
})

let number=[1,2,3,4,5,6,7,8,9,10]
let counter=0
let counter2=0
number.forEach(a =>{
    if (a%2==0){
        counter++
    }
    else if (a%2==1){
        counter2++
    }
    else{
        console.log(`Enter the correct value.`)
    }
})
console.log(counter)
console.log(counter2)

let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Avacado"]
counter=0
number.forEach(a =>{
    if(a[0]=='A'){
        counter++
    }
})
console.log(counter)

let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Avacado"]
number.forEach(a =>{
    console.log(a[1])
})

let number=[1,2,3,4,5,60,70,80,90,100]
counter=0
number.forEach(a =>{
    if(a%10==0){
        counter++
    }
})
console.log(counter)

let number=[60,70,80,90,10,99]
let rem=0
number.forEach(a =>{
    let rem=a%10 
    let num=a/10 >>0
    console.log(num+rem)
})

let number=[88,44,82,90,11,99,89]
let sum=0
number.forEach(a =>{
    let p=a%10
    sum=sum+p
})
    console.log(sum)

    Write a programme to print number where first digit is greater than second digit.

    let number=[45,75,89,90,18,99]
number.forEach(a =>{
    let rem=a%10 
    let num=a/10 >>0
if(num>rem){
    console.log(a)
}
})

    Write a programme to creat an array of words if the first and second letter is same than print it else don't print it.

    let number=["AAple","Bannana","Cherries","Date","Eggplant","Guawa","Avacado"]
number.forEach(a =>{
    if(a[0]==a[1]){
        console.log(a)
    }
})

    Write a programme to print sum if the sum is odd number.

       let number=[45,75,89,90,18,99]
number.forEach(a =>{
    let rem=a%10 
    let num=a/10 >>0
if(rem%2==1 && num%2==0){
    console.log(a)
}
})

    Write a programme to print if the first and second digit is even and odd respectively.

       let number=[45,75,89,90,18,99]
number.forEach(a =>{
    let rem=a%10 
    let num=a/10 >>0
    sum=rem+num
if(sum%2==1){
    console.log(a)
}
})

    Write a programme to print if the first and second digit match.

       let number=[44,75,88,99,18,11,15,14]
number.forEach(a =>{
    let rem=a%10 
    let num=a/10 >>0
if(rem==num){
    console.log(a)
}
})

    Write a programme to print from three(3) digit number print those where middle digit is greater than both first and last digit.
     let number=[456,751,887,994,184,113,159,142]
number.forEach(a =>{
    rem=a%10
    let num=a/10 >>0
    let num2=num%10
    let num3=num/10 >>0
 if(num2>rem && num2>num3){
     console.log (a)
 }
})


Map
let number=[2,4,6,8]
let num=number.map(a =>{
    return a*2
})
console.log(num)


let number=[1,2,3,4,5,6,7,8,9,10]
console.log(number)
let num=number.map(a =>{
    return a+""
})

console.log(num)


let number=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011]
let num=number.map(a =>{
    return 2025-a
})
console.log(num)


let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Avacado"]
let num=number.map(a =>{
    return [0]
})
console.log(num)


let number=["True","False","True","False","True","False","True","False","True","False","True","False"]
let num=number.map(a =>{
    if(a=="True"){
        return "Yes"
    }
    else{
        return "No"
    }
})
console.log(num)

Write a programme to repalce every number with even and odd with odd
Write a programme to convert Gender symbols to Full formas
Write a programme from a two (2) letter string array return match if both letter are same,no if not same
Write a programme to display true to thumb sign and if false to lose sign
Write a programme to display array with its index
Write a programme to return reverced string from two letter array
Write a programme return second character from two (2) character string array
Write a programme to display if the number ends with zero (0) print yes else no
Write a programme to display evalutation
