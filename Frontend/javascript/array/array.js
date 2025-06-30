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