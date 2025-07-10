
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
    Write a programme to creat an array of words if the first and second letter is same than print it else don't print it.
    Write a programme to print sum if the sum is odd number.
    Write a programme to print if the first and second digit is even and odd respectively.
    Write a programme to print if the first and second digit match.
    Write a programme to print from three(3) digit number print those where middle digit is greater than both first and last digit.