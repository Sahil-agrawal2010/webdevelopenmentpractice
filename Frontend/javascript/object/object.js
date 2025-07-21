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


const personDetails={
    personDetailsName:"Bhindi"
    personDetailsFavouriteColour:"Lavender"
    personDetailsToyPrice:"Unlimeted"
    personDetailsIsSold:true
    personDetailsFavouritePerson:"Sahil"
}


const person ={
    firstName : prompt("Enter your first name : "),
    
    lastName : "Pathak",
    id: 233199,
    user : prompt("Enter any thing please : "),
    fullName : function (){
        return `User has entered this : ${this.user}`
    }
}

console.log(person.fullName())


const personDetails={
    firstName:prompt("Enter your first name here :- "),
    secondName:prompt("Enter your second name here :- "),
    favouriteColour:prompt("Enter your favourite colour here :- "),
    favouritePerson:prompt("Enter your favourite person here :- "),
    favouriteNumber:prompt("Enter your favourite number here :- "),
    favouriteToys:prompt("Enter your favourite toy here :- "),
    favouriteGame:prompt("Enter your favourite game here :- "),
    personPrice:prompt("Enter your price here :- "),
    totaloutput: function (){
        return `The first name of user is ${this.firstName}.The second name of user is ${this.secondName}.The favourite colour of user is ${this.favouriteColour}.The favourite person of user is ${this.favouritePerson}.The favourite number of user is ${this.favouriteNumber}.The favourite toy of user is ${this.favouriteToys}.The favourite game of user is ${this.favouriteGame}.The price of user is ${this.personPrice}.`
    }
}
console.log(personDetails.totaloutput())


const personDetails={
    firstName:prompt("Enter your first name here :- "),
    secondName:prompt("Enter your second name here :- ")
}

personDetails.age = 22
console.log(personDetails.age)

personDetails.name = function (){
    return `${this.firstName} ${this.secondName}`.toUpperCase()
}
console.log(personDetails.name())


Write a programme to see if he it eligible to vote or not
const vote={
    voteFor:Number(prompt("Enter your age in digits :- "))
}
vote.checker=function (){
    if(vote.voteFor>=18){
        return `You are eligible to vote!`
    }
    else{
        return `You are not eligible to vote!`
    }
}
console.log(vote.checker())


Write a programme to ask user marks of five (5) subjects and see if he is pass or fail
const marks={
    marks1:Number(prompt("Enter the marks of Computer :- ")),
    marks2:Number(prompt("Enter the marks of English :- ")),
    marks3:Number(prompt("Enter the marks of Maths :- ")),
    marks4:Number(prompt("Enter the marks of Science :- ")),
    marks5:Number(prompt("Enter the marks of Social :-"))
}
marks.total=function (){
    if(marks.marks1+marks.marks2+marks.marks3+marks.marks4+marks.marks5>=40){
        return `You are pass Congo!`
    }
    else{
        return `Youu are fail Congo!`
    }
}
console.log(marks.total())


Write a programme to check if the number is prime number or not
const checker={
    prim:Number(prompt("Enter the number to see weather it is prime number or not :- "))
}
checker.counter=function (){
    let counter=0
    for(let i=1;i<=checker.prim;i++){
    if(checker.prim%i==0){
        counter++
    }
    if(counter==2){
        return `The number is a prim number!`
    }
    else{
        return `The number is not a prim number!`
    }
    }
}
console.log(checker.counter())
Write a programme to display fibonaccy series

const fibonacci = {
    number : parseInt(prompt("Enter how many fibonacci series do you want to generate ? : ")),
    result : function (){
        let a = 0, b=1, sum=0;
        for(let i = 1; i<=(this.number); i++){
            sum = a+b
            a = b
            b = sum
            console.log(sum)
        }
    }
}
fibonacci.result()