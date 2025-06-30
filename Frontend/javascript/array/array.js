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
