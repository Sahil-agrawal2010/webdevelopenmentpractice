array is the collection of multiple datas.

let fruits = ["Apple", "Mango", "Pineapple"]
console.log(fruits)

let fruits = new Array ("Apple", "Mango", "Pineapple")
console.log(fruits[0])

away from the topic
class shose{
    constructor(brand,size,colour){
        this.brand=brand
        this.size=size
        this.colour=colour
    }
    shosedetails(){
        console.log(`${this.brand},${this.size},${this.colour}`)
    }
}
const myShose=new shose("Nike",40,"Green")
myShose.shosedetails()


let carName = []
for(let i = 0; i<=5; i++){
    userInput = prompt("Enter car names : ")
    carName[i] = userInput
}

for(let j = 0; j<=5; j++){
    console.log(carName[j])
}

let odd = []
let even = []
for(let i = 0; i<=4; i++){
    oddN = Number(prompt("Enter the odd number : "))
    evenN = Number(prompt("Enter the even number : "))
    odd[i] = oddN
    even[i] = evenN
    console.log()
}

for(let j = 0; j<=4; j++){
    console.log(`The sum of ${odd[j]} and ${even[j]} is ${odd[j]+even[j]}.`)
}

let name=[]
for(let i=0;i<=4;i++){
    let userInput=prompt(`Enter the names of students :- `)
    name[i]=userInput
}
for(let j=4;j>=0;j--){
    console.log(name[j])
}


let number=[]
for (let i=0;i<=9;i++){
    let userInput=Number( prompt( ` Enter any number to see :-  ` ) )
    number[i]=userInput
}
for (let j=0;j<=9;j++){
    if(number[j]>=50){
        console.log(number[j])
    }
}


let number=[]
for (let i=0;i<=9;i++){
    let userInput=Number(prompt(`Enter any number to see :- `))
    number[i]=userInput
}
let sum=0
for (let j=0;j<=9;j++){
    sum=number[j]+sum
}
console.log(`The sum of number is ${sum}`)

back sum of numbers 

let number=[]
let number2=[]
for (let i=0;i<=5;i++){
    let userInput=Number(prompt(`Enter the numbers you want to add :- `))
    let userInput2=Number(prompt(`Enter the number which you want to add :- `))
    number[i]=userInput
    number2[i]=userInput2
    console.log()
}
for (let j=5;j>=0;j--){
    console.log(`The sum of ${number[j]} and ${number2[j]} is ${number[j]+number2[j]}.`)
}


back greates of numbers

let number=[]
let number2=[]
for (let i=0;i<=5;i++){
    let userInput=Number(prompt(`Enter the numbers you want to see weather it is higher or not :- `))
    let userInput2=Number(prompt(`Enter the number which you want to see weather it is greater or not :- `))
    number[i]=userInput
    number2[i]=userInput2
    console.log()
}
for (let j=5;j>=0;j--){
    if(number[j]>number2[j]){
        console.log(`${number[j]} is higher!`)
    }
      else if(number2[j]>number[j]){
        console.log(`${number2[j]} is higher!`)
    }
    else{
        console.log(`All are equal!`)
    }
}


find greatest and smallest among 6 numbers 

let number=[]
for (let i=0;i<=5;i++){
    userInput=Number(prompt(`Enter any number which want to see greatest and smallest :- `))
    number[i]=userInput
}
let greatest=0
let smallest=100
for (let j=0;j<=5;j++){
    if(number[j]>greatest){
       greatest = number[j]
    }
    if(number[j]<smallest){
       smallest = number[j]
    }
}
console.log(greatest)
console.log(smallest)

let number=[]
let Counter=0
for (let i=0;i<=5;i++){
    let userInput=Number(prompt(`Enter any number to see :- `))
    number[i]=userInput
}
for (let j=0;j<=5;j++){
    if(number[j]>0){
        Counter++
    }
}
console.log(Counter)

let number=[]
for (let i=0;i<=9;i++){
    userInput=Number(prompt(`Enter any number to see :- `))
    number[i]=userInput
}
for (let j=0;j<=9;j=j+2){
                console.log(number[j])

}

let number=[]
for (let i=0;i<=9;i++){
    userInput=Number(prompt(`Enter any number to see :- `))
    number[i]=userInput
}
for (let j=11;j<=9;j=j+2){
                console.log(number[j])

}