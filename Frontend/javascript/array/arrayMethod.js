// Length Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// let size=fruit.length
// console.log(size)

// let array=[]
// console.log(array.length)
// array.length=5
// console.log(array.length)

// To String Method 
// let array=[1,2,3,4,5]
// let sum = 0
// for(let i = 0 ; i<array.length; i++){
//     sum += array[i]
// }
// console.log(sum)


// let second=array.toString()

// let sum = 0
// for(let i = 0 ; i<array.length; i++){
//     sum += second[i]
// }
// console.log(sum)

// At Method

// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// let variable=fruit.at(2)
// console.log(variable)

// Join Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]

// let variable=fruit.join()
// console.log(variable)


// let variables=fruit.join(" ") 
// console.log(variables)

// Pop Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// fruit.pop()
// console.log(fruit)

// Push Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// fruit.push("Pineapple")
// console.log(fruit)

// Shift Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// fruit.shift()
// let variable=fruit.shift()
// console.log(variable)
// console.log(fruit)

// Unshift Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// fruit.unshift("Pineapple")
// console.log(fruit)

// Suprize Task
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// fruit[4] = "Guava"
// console.log(fruit)


// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// fruit[5] = "Pineapple"
// console.log(fruit)


// fruit[fruit.length] = "Nayan"
// console.log(fruit)

// Delet Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// delete fruit[2]
// console.log(fruit)


// Concination
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// let vegetable=["Cabbage","Cauliflower","Potato","Tamoto","Lady Finger"]

// let plant=fruit.concat(vegetable)
// console.log(plant)

// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// let vegetable=["Cabbage","Cauliflower","Potato","Tamoto","Lady Finger"]
// let array=[1,2,3,4,5]
// let array2=[6,7,8,9,10]
// let plant=fruit.concat(vegetable,array,array2)
// console.log(plant)

// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// let second=fruit.concat("Pineapple","Guawa")
// fruit.push("Pineapple","Guawa")
// console.log(second)
// console.log(fruit)

// Note:-The difference between concat and push is concat gives output by making another array whereas push works on the same arrray and give us the output on same array 

// copyWithin Method
// let fruit=["Apple","Mango","Banana","Grapes","Watermelon"]
// console.log(fruit)
// fruit.copyWithin(0,2)
// console.log(fruit)


// let fruit=["Apple","Mango","Banana","Grapes","Watermelon","Pineapple","Guawa"]
// console.log(fruit)
// fruit.copyWithin(2,0,2)
// console.log(fruit)


// Falt Method
// let nums=[[1,2],[3,4],[5,6]]
// let num2=nums.flat()
// console.log(num2)

// flatMap Mehod
// let number=[1,2,3,4,5,6,7,8,9,10]
// let number2=number.flatMap(s=> [s, s*3])
// console.log(number2)


// let number=["Apple","Bannana"]
// let number2=number.flatMap(s=> [ s + " is a fruit!"])
// console.log(number2)


// splice Method
// let number=["Apple","Bannana","Cherries","Date","Eggplant"]
// number.splice(0,1)
// console.log(number)


// let number=["Apple","Bannana","Cherries","Date","Eggplant"]
// number.splice(3,0,"Figs")
// console.log(number)

// slice Method
// let number=["Apple","Bannana","Cherries","Date","Eggplant"]
// let array=number.slice(3)
// console.log(array)


// let number=["Apple","Bannana","Cherries","Date","Eggplant"]
// let array=number.slice(1,3)
// console.log(array)

// Array Scarching
// let number=["Apple","Bannana","Cherries","Date","Eggplant"]
// let position=number.indexOf("Cherries")
// console.log(position)


// let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Cherries"]
// let position=number.lastIndexOf("Cherries")
// console.log(position)


// let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Cherries","Hackberry","Cherries"]
// let position=number.lastIndexOf("Cherries",4)
// console.log(position)

// includes Method
// let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Cherries","Hackberry","Cherries"]
// let position=number.includes("Cherries")
// console.log(position)

// Find Method
// let number=[23, 45, 12, 56, 99, 100]
// let fruits = ["Apple", "Mango", "Banana", "Watermelon", "Berries"]
// let result=fruits.find(function(x){
//     return x.startsWith("Z")
// })
// console.log(result)

// Sotr method
// let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Cherries"]
// number.sort()
// console.log(number)

// Reverse Method
// let number=["Apple","Bannana","Cherries","Date","Eggplant","Guawa","Cherries"]
// number.reverse()
// console.log(number)

// let number=[1,2,3,4,5,6,7,8,9,10]
// number.reverse()
// console.log(number)

// Tasks Starts from here ok
// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let length=array.length
// console.log(length)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let variable=array.at(2)
// console.log(variable)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let variable=array.join(" ")
// console.log(variable)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// array.pop()
// console.log(array)

// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// array.push("Nissan GTR")
// console.log(array)

// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let variable=array.shift()
// console.log(array)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let variable=array.unshift("Nissan GTR")
// console.log(array)

// let array2=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// delete array2[2]
// console.log(array2)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let number=[100,101,102,103,104,105]
// let shose=["Nike","Addidas","Jordan","New Balance","Peak"]
// let total=array.concat(number,shose)
// console.log(total)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// array.copyWithin(2,0)
// console.log(array)


// let array=[["Lambo","Ferrari"],["Macklerane","Rolls Royals"],"Buggati"]
// let variable=array.flat()
// console.log(variable)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let variable=array.flatMap(s=> [s,s+" Is a Fantastic Car!"])
// console.log(variable)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// array.splice(0,2,"Nissan GTR")
// console.log(array)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let array2=array.slice(1,3)
// console.log(array2)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati"]
// let variable=array.indexOf("Buggati")
// console.log(variable)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati","Ferrari"]
// let variable=array.lastIndexOf("Ferrari",6)
// console.log(variable)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati","Ferrari"]
// let variable=array.includes("Rolls Royals")
// console.log(variable)


// let array=["Lambo","Ferrari","Macklerane","Rolls Royals","Buggati","Ferrari"]
// let variable=array.find(function(x){
//     return x.startsWith("M")
// })
// console.log(variable)