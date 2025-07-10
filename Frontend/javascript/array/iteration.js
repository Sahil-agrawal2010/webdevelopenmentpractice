
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