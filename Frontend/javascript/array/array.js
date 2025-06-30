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