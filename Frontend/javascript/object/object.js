const carDetails={
    carName:"BMW",
    colour:"Blue",
    price:2000000,
    isSold:true,
    cc:1500
}
const name=carDetails.carName
console.log(name)
const person=new Object()
person.firstName="Rama"
person.lastName="Agrawal"
person.age=44
person.eyeColour="Blue"
person.isMarried=true
console.log(person.firstName)
console.log(person["age"])

const bikeDetail={
    bikeName:"Duggati",
    colour:"Blue",
    price:200000,
    isSold:true
    cc:220,
}
const areoplaneDetail={
    aeroplaneName:"Indigo",
    colour:"Blue",
    price:20000000,
    isSold:true
    cc:500,
}
const tvDetails={
    tvName:"Life's Good",
    colour:"Blue",
    price:200000,
    isSold:true
    cc:"HD",
}
const mobileDetails={
    mobileName:"Xiamoi",
    colour:"Blue",
    price:200000,
    isSold:true
    cc:"HD",
}
const tabDetails={
    tabName:"Xiamoi",
    colour:"Blue",
    price:200000,
    isSold:true
    cc:"HD",
}
const purifierDetails={
    purifierName:"RO",
    colour:"Blue",
    price:200000,
    isSold:true
    cc:"Purified Water",
}
const airconditionerDetails={
    airconditionerDetails:"Life's Good",
    colour:"Blue",
    price:200000,
    isSold:true
    cc:"Pure Air",
}
const calculatorDetails={
    calculatorName:"Casio",
    colour:"Blue",
    price:200000,
    isSold:true,
    cc:"Pure Claculation"
}
const lightDetails={
    lightName:"TubeLight",
    colour:"Blue",
    price:200000,
    isSold:true,
    cc:250
}
const speakerDetails={
    speakerName:"JBL",
    colour:"Blue",
    price:200000,
    isSold:true,
    cc:450
}


const airconditionerDetails={
    airconditionerDetails:"Life's Good",
    colour:"Blue",
    price:200000,
    isSold:true,
    cc:"Pure Air"
}
airconditionerDetails.weight=1
console.log(airconditionerDetails.weight)
delete airconditionerDetails.cc
console.log(airconditionerDetails.cc)
let userInput=Number(prompt("Enter any digit between 1 to 10 :- "))
airconditionerDetails.discount=(userInput/100)*airconditionerDetails.price
console.log(`You got the discount of RS.${airconditionerDetails.discount}`)


let object=prompt("Enter the name of object:- ")
let objectProperty=prompt("Enter the model of your object:- ")
let objectProperty2=prompt("Enter the colour of your object:- ")
let objectProperty3=prompt("Enter the price of your object:- ")
let objectProperty4=prompt("Enter the power of your object:- ")
const objectDetails={
}
objectDetails.Name=object
objectDetails.Model=objectProperty
objectDetails.Colour=objectProperty2
objectDetails.Price=objectProperty3
objectDetails.Power=objectProperty4
console.log(`The name of your object is ${objectDetails.Name}`)
console.log(`The model of your object is ${objectDetails.Model}`)
console.log(`The colour of your object is ${objectDetails.Colour}`)
console.log(`The price of your object is ${objectDetails.Price}`)
console.log(`The power of your object is ${objectDetails.Power}`)