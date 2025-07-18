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