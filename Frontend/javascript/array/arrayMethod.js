Length Method
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
let size=fruit.length
console.log(size)

let array=[]
console.log(array.length)
array.length=5
console.log(array.length)

To String Method 
let array=[1,2,3,4,5]
let sum = 0
for(let i = 0 ; i<array.length; i++){
    sum += array[i]
}
console.log(sum)


let second=array.toString()

let sum = 0
for(let i = 0 ; i<array.length; i++){
    sum += second[i]
}
console.log(sum)

At Method

let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
let variable=fruit.at(2)
console.log(variable)

Join Method
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]

let variable=fruit.join()
console.log(variable)


let variables=fruit.join(" ") 
console.log(variables)

Pop Method
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
fruit.pop()
console.log(fruit)

Push Method
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
fruit.push("Pineapple")
console.log(fruit)

Shift Method
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
fruit.shift()
let variable=fruit.shift()
console.log(variable)
console.log(fruit)

Unshift Method
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
fruit.unshift("Pineapple")
console.log(fruit)

Suprize Task
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
fruit[4] = "Guava"
console.log(fruit)


let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
fruit[5] = "Pineapple"
console.log(fruit)


fruit[fruit.length] = "Nayan"
console.log(fruit)

Delet Method
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
delete fruit[2]
console.log(fruit)


Concination
let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
let vegetable=["Cabbage","Cauliflower","Potato","Tamoto","Lady Finger"]

let plant=fruit.concat(vegetable)
console.log(plant)